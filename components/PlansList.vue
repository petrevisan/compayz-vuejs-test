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
// import allPlans from '@/json/available-plans.json';
export default {
    name: 'PlansList',
    data () {
        return {
            availablePlans: [
                {
                    'id': 1,
                    'seqno': 10,
                    'name': 'Plano 4D'
                },
                {
                    'id': 2,
                    'seqno': 20,
                    'name': 'Plano 5D'
                },
                {
                    'id': 3,
                    'seqno': 30,
                    'name': 'Plano 6D'
                },
                {
                    'id': 4,
                    'seqno': 40,
                    'name': 'Plano 7D'
                },
                {
                    'id': 5,
                    'seqno': 50,
                    'name': 'SPACE'
                }
            ],
            showPlanContent: {},
        };
    },
    mounted () {
        // this.getAvailablePlans();
        this.setPlan(1);

    },
    methods: {
        /* getAvailablePlans () {
            this.availablePlans = this.allPlans.data.activePlans;
        }, */
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
