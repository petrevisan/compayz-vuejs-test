<template>
    <div class="col-12 d-flex flex-column flex-md-row">
        <b-button
            v-for="plan in availablePlans"
            :key="plan.id"
            class="planButton"
            variant="outline-primary"
            @click="setPlan(plan.id)">
            {{ plan.name }}
        </b-button>
        <h2 v-if="plansUnavailable">Planos indisponíveis no momento, tente mais tarde.</h2>
    </div>
</template>
<script>
// import allPlans from '@/json/available-plans.json';
export default {
    name: 'PlansList',
    data () {
        return {
            availablePlans: [],
            plansUnavailable: false
        };
    },
    created () {
        this.getPlans();
    },
    mounted () {
        this.setPlan(1);
    },
    methods: {
        async getPlans () {
            try {
                const plans = await this.$axios.get('json/available-plans.json');
                this.availablePlans = plans.data.data.activePlans;
                console.log(plans);
            } catch (error) {
                this.plansUnavailable = true;
                console.error(error);
            }
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
                this.$emit('planUnavailable');
            }
        }
    }
};
</script>
<style scoped>

.planButton {
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
    display: block;
    margin-inline: auto;
  }
}

</style>
