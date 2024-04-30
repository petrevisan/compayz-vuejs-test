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
import allPlans from '@/static/plans/available-plans.json';
export default {
    name: 'PlansList',
    data () {
        return {
            availablePlans: [],
            showPlanContent: {},
        };
    },
    created () {
        this.getAvailablePlans();
        this.setPlan(1);

    },
    methods: {
        getAvailablePlans () {
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
            case 3:
                this.$emit('planUnavailable');
                break;
            case 4:
                this.$emit('planUnavailable');
                break;
            case 5:
                this.$emit('planUnavailable');
                break;
            default:
                this.$emit('getPlan4d');
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
    display: block;
    margin-inline: auto;
  }
}

</style>
