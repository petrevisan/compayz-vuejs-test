<template>
    <div id="wrapper">
        <b-container id="plans-wrapper" fluid>
            <b-row class="my-3">
                <b-col cols="12" class="d-flex justify-content-between">
                    <b-button
                        v-for="plan in availablePlans"
                        id="planButton"
                        :key="plan.id"
                        variant="outline-primary"
                        @click="showPlanContent(plan.id)">
                        {{ plan.name }}
                    </b-button>
                </b-col>
            </b-row >
            <b-row class="px-3">
                <b-col id="" cols="8">
                    <div class="plan-included d-flex flex-column">
                        <h2 class="text-white">O {{ planName }} irá incluir</h2>
                        <div class="d-flex flex-row justify-content-between">
                            <span class="text-white">MemberZ</span>
                            <span class="text-white">1</span>
                        </div>
                    </div>

                    <div class="plan-included d-flex flex-column">
                        <span class="text-white font">Domínios</span>
                        <div class="d-flex flex-row justify-content-between">
                            <span class="text-white">Adicionar pacotes avulsos</span>
                            <div class="d-flex flex-column align-items-md-center">
                                <span class="text-white">{{ domainsSelected }}</span>
                                <input v-model="domainsSelected" type="range" min="3" max="70" >
                            </div>
                        </div>
                    </div>
                </b-col>
                <b-col cols="4">
                    <div id="plan-price">
                        <div id="your-choice">
                            <h2 class="text-white px-3 font">Sua escolha</h2>
                        </div>
                        <div id="chosen-plan" class="d-flex flex-row justify-content-between px-3">
                            <div class="d-flex flex-column">
                                <span class="text-white">Plano 4D</span>
                                <span class="text-white">+ {{domainsSelected}} domínio(s)</span>
                            </div>
                            <div class="d-flex flex-column">
                                <span class="text-white">{{ priceFormatter }}</span>
                                <span class="text-white">QUalquer preço</span>
                            </div>
                        </div>
                        <div id="total-price" class="d-flex flex-row justify-content-between px-3">
                            <span class="text-white">TOTAL</span>
                            <span class="text-white">{{ totalPrice }}</span>
                        </div>
                        <b-button id="sign-button" variant="primary" class="mx-auto d-block" @click="signPlan">Assinar Plano</b-button>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <PersonalDataForm v-if="isPlanSelected" @closeModal="isPlanSelected = false" @nextStep="nextStep"></PersonalDataForm>
        <AddressForm v-if="isDataFilledIn" @closeModal="isDataFilledIn = false" @addressFilledIn="openCardModal" @getPreviousForm="getBackAddresToData"></AddressForm>
        <CreditCardForm v-if="isCardFilledIn" :total-price="totalPrice" @closeModal="isCardFilledIn = false" @getBackPreviousForm="getBackCardToAddress"></CreditCardForm>
    </div>
</template>

<script>
import PersonalDataForm from '@/components/modal/PersonalDataForm.vue';
import AddressForm from '@/components/modal/AddressForm.vue';
import CreditCardForm from '@/components/modal/CreditCardForm.vue';
export default {
    name: 'IndexPage',
    components: {
        PersonalDataForm,
        AddressForm,
        CreditCardForm,
    },
    data () {
        return {
            availablePlans: {},
            domainsSelected: 3,
            isPlanSelected: false,
            isDataFilledIn: false,
            isCardFilledIn: false,
            planName: '',
            basePlanValue: 0,
            basePlanDomains: 3,
        };
    },
    computed: {
        priceFormatter () {
            return this.basePlanValue.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
        },
        totalPrice () {
            const price = this.basePlanValue + (this.domainsSelected * 2);
            return price.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
        },
    },
    created () {
        this.getAvailablePlans();
        this.getPlan4dData();
    },
    methods: {
        async getAvailablePlans () {
            const allPlans = await this.$axios.$get('/plans/available-plans.json');
            this.availablePlans = allPlans.data.activePlans;
        },
        signPlan () {
            this.isPlanSelected = true;
        },
        getBackAddresToData () {
            this.isPlanSelected = true;
            this.isDataFilledIn = false;
            this.isCardFilledIn = false;
        },
        getBackCardToAddress () {
            this.isPlanSelected = false;
            this.isDataFilledIn = true;
            this.isCardFilledIn = false;
        },
        showPlanContent (id) {
            switch (id) {
            case 1:
                this.getPlan4dData();
                break;
            case 2:
                this.getPlan5dData();
                break;
            default:
                console.log('0');
            }
        },
        async getPlan4dData () {
            const plano4d = await this.$axios.$get('/plans/plans_details/plan1.json');
            this.planName = plano4d.data.planInfo.name;
            this.basePlanValue = plano4d.data.planInfo.planBaseAmt;
        },
        async getPlan5dData () {
            const plano5d = await this.$axios.$get('/plans/plans_details/plan2.json');
            this.planName = plano5d.data.planInfo.name;
            this.basePlanValue = plano5d.data.planInfo.planBaseAmt;
        },
        nextStep () {
            this.isPlanSelected = false;
            this.isDataFilledIn = true;
        },
        openCardModal () {
            this.isPlanSelected = false;
            this.isDataFilledIn = false;
            this.isCardFilledIn = true;
        }
    }
};
</script>

<style scoped>
#wrapper {
  background: #22252F;
  min-height: 100vh;
  width: 100vw;
  padding-block: 80px;
}

#plans-wrapper {
  background: #2B2E3B;
  min-height: 100px;
  width: 90vw;
  border-radius: 12px;
  padding: 60px 20px;
}

#planButton {
  width: calc(100% / 5.5);
  background: transparent;
  border: 1px solid #fff;
  border-radius: 12px;
  color: #fff;
  padding: 12px 20px;
  margin-inline: 10px;
}

.plan-included {
  border: 1px solid #ffffff20;
  border-radius: 12px;
  padding: 10px;
}

#plan-price {
  background: #373c4b;
  border-radius: 12px;
  padding-block: 10px;
}

#chosen-plan {
  padding-block: 25px 50px;
  border-bottom: 1px solid #ffffff20;
  border-top: 1px solid #ffffff20;
}

#total-price {
  background: #777777;
  margin: 10px;
  padding-block: 8px;
}

#sign-button {
  width: 97%;
  font-weight: bold;
  margin-top: 15px;
}

.font {
  font-size: 22px;
  font-weight: bold;
}
</style>
