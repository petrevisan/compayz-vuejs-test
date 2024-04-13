<template>
    <div class="col-12 d-flex flex-column flex-md-row">
        <b-button
            v-for="plan in availablePlans"
            id="planButton"
            :key="plan.id"
            variant="outline-primary"
            @click="setPlan(plan.id)">
            {{ plan.name }}
        </b-button>
    </div>
</template>
<script>
export default {
    name: 'PlansList',
    data () {
        return {
            availablePlans: '',
            showPlanContent: {},
        };
    },
    created () {
        this.getAvailablePlans();
        this.setPlan(1);

    },
    methods: {
        async getAvailablePlans () {
            const allPlans = await this.$axios.$get('/plans/available-plans.json');
            this.availablePlans = allPlans.data.activePlans;
        },
        setPlan (planId) {
            switch(planId) {
            case 1:
                this.$emit('getPlan4d');
                break;
            case 2:
                this.$emit('getPlan5d');
                break;
            default:
                console.log('plano diverso');
            }
        }
    }
};
</script>
<style scoped>

#planButton {
  width: 20%;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 12px;
  color: #fff;
  padding: 12px 20px;
  margin-inline: 10px;
}

@media(max-width:768px) {
  #planButton {
    width: 100%;
    margin-block: 10px;
  }
}

</style>
