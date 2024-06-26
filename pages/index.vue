<template>
    <div id="page-wrapper">
        <div id="content-wrapper" class="container-fluid d-flex flex-column">
            <div>
                <PlansList @getPlan4d="getPlan4dData" @getPlan5d="getPlan5dData" @planUnavailable="showUnavailableAlert"/>
            </div>
            <div class="d-flex flex-column flex-lg-row">
                <div class="col-12 col-lg-8">
                    <PlanDetails :plan-name="planName" @setExtraDomains="getDomainsNumber"/>
                </div>
                <div class="col-12 col-lg-4">
                    <PreCheckout
                        :plan-name="planName"
                        :plan-price="basePlanValue"
                        :extra-domains="extraDomainsSelected"
                        @openDataModal="handleModal(1)"
                    />
                </div>
            </div>
        </div>
        <AlertBox v-if="planUnavailable" bg-color="red" text="Plano indisponível no momento." ></AlertBox>
        <PersonalDataForm v-if="isPlanSelected" @closeModal="handleModal(0)" @openNextModal="handleModal(2)"></PersonalDataForm>
        <AddressForm v-if="isDataFilledIn" @closeModal="handleModal(0)" @addressFilledIn="handleModal(3)" @getPrevModal="handleModal(1)"></AddressForm>
        <CreditCardForm v-if="isCardFilledIn" :total-price="valueToBRL" @closeModal="handleModal(0)" @getPrevModal="handleModal(2)"></CreditCardForm>
    </div>
</template>

<script>
import plano4d from 'static/json/plan1.json';
import plano5d from 'static/json/plan2.json';
import PlansList from '@/components/PlansList.vue';
import PlanDetails from '@/components/PlanDetails.vue';
import PersonalDataForm from '@/components/modal/PersonalDataForm.vue';
import AddressForm from '@/components/modal/AddressForm.vue';
import CreditCardForm from '@/components/modal/CreditCardForm.vue';
import PreCheckout from '@/components/PreCheckout.vue';
import AlertBox from '@/components/AlertBox.vue';
export default {
    name: 'IndexPage',
    components: {
        PreCheckout,
        PlanDetails,
        PlansList,
        PersonalDataForm,
        AddressForm,
        CreditCardForm,
        AlertBox,
    },
    data () {
        return {
            extraDomainsSelected: 0,
            isPlanSelected: false,
            isDataFilledIn: false,
            isCardFilledIn: false,
            planName: '',
            basePlanValue: 0,
            planUnavailable: false,
        };
    },
    computed: {
        valueToBRL () {
            const price = this.basePlanValue + (this.extraDomainsSelected * 5);
            return price.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
        },
    },
    methods: {
        getPlan4dData () {
            this.planName = plano4d.data.planInfo.name;
            this.basePlanValue = plano4d.data.planInfo.planBaseAmt;
        },
        getPlan5dData () {
            this.planName = plano5d.data.planInfo.name;
            this.basePlanValue = plano5d.data.planInfo.planBaseAmt;
        },
        getDomainsNumber (settedDomains) {
            this.extraDomainsSelected = settedDomains;
        },
        showUnavailableAlert () {
            this.planUnavailable = true;
            setTimeout(() => {
                this.planUnavailable = false;
            }, 2500);
        },
        handleModal (modalStage) {
            switch(modalStage) {
            case 0:
                this.isPlanSelected = false;
                this.isDataFilledIn = false;
                this.isCardFilledIn = false;
                break;
            case 1:
                this.isPlanSelected = true;
                this.isDataFilledIn = false;
                this.isCardFilledIn = false;
                break;
            case 2:
                this.isPlanSelected = false;
                this.isDataFilledIn = true;
                this.isCardFilledIn = false;
                break;
            case 3:
                this.isPlanSelected = false;
                this.isDataFilledIn = false;
                this.isCardFilledIn = true;
                break;
            default:
                this.isPlanSelected = false;
                this.isDataFilledIn = false;
                this.isCardFilledIn = false;
            }
        }
    }
};
</script>

<style scoped>
#page-wrapper {
  background: #22252F;
  min-height: 100vh;
  width: 100vw;
  padding-block: 80px;
}

#content-wrapper {
  background: #2B2E3B;
  width: 90vw;
  gap: 50px;
  border-radius: 12px;
  padding: 60px 20px;
}
</style>
