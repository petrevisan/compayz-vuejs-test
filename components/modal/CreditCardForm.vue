<template>
    <div class="modal-outside" @click="closeModal">
        <section id="modal" class="container">
            <div id="header-wrapper" class="d-flex flex-row justify-content-around align-items-center">
                <img src="/icons/left-arrow.svg" class="icon" @click="getPreviousForm">
                <h2 class="text-white">Informe seus dados do cartão</h2>
                <img src="/icons/close-icon.svg" class="icon" @click="closeModal">
            </div>
            <div class="form-wrapper">
                <form class="d-block mx-auto">
                    <div class="d-flex flex-column col-12">
                        <vue-paycard
                            :value-fields="{
                                cardName: cardOwner,
                                cardNumber: cardNumber,
                                cardMonth: '',
                                cardYear: '',
                                cardCvv: securityCode,
                            }"
                            background-image="/images/pay-card-background.jpg"
                        />
                        <label for="card-number">Número do cartão <span class="required-signal">*</span></label>
                        <input
                            id="card-number"
                            v-model="cardNumber"
                            v-mask="'#### #### #### ####'"
                            type="text"
                            name="card-number"
                            placeholder="Digite o número do seu cartão (frente do cartão)"
                            required>
                    </div>

                    <div class="d-flex flex-column col-12">
                        <label for="card-owner">Titular do cartão <span class="required-signal">*</span></label>
                        <input
                            id="card-owner"
                            v-model="cardOwner"
                            type="text"
                            name="card-owner"
                            placeholder="Nome (igual ao cartão)"
                            required>
                    </div>

                    <div class="d-flex flex-column col-12">
                        <label for="card-registration-number">CPF/CNPJ do titular do cartão <span class="required-signal">*</span></label>
                        <input
                            id="card-registration-number"
                            v-model="cardRegistrationNumber"
                            v-mask="maskCpfCnpj"
                            type="text"
                            name="card-registration-number"
                            placeholder="Digite o CPF ou CNPJ do titular do cartão"
                            required>
                    </div>

                    <div class="d-flex flex-row">
                        <div class="col-7">
                            <label for="expiration-date">Validade <span class="required-signal">*</span></label>
                            <input
                                id="expiration-date"
                                v-model="expirationDate"
                                v-mask="'##/####'"
                                type="text"
                                name="expiration-date"
                                placeholder="MM/AAAA"
                                required>
                        </div>
                        <div class="col-5">
                            <label for="cvv">CVV <span class="required-signal">*</span></label>
                            <input
                                id="cvv"
                                v-model="securityCode"
                                v-mask="'###'"
                                type="text"
                                name="cvv"
                                placeholder="CVV"
                                required>
                        </div>
                    </div>
                </form>
            </div>
            <div id="button-wrapper">
                <b-button variant="primary" class="next-step-button modal-submit" @click="setPaymentInfo">Assinar Plano ({{ totalPrice }})</b-button>
            </div>
        </section>
    </div>
</template>

<script>
import { helpers, required } from 'vuelidate/lib/validators';

export default {
    name: 'CreditCardForm',
    props: {
        totalPrice: String,
    },
    data () {
        return {
            cardNumber: '',
            cardOwner: '',
            cardRegistrationNumber: '',
            expirationDate: '',
            securityCode: '',
        };
    },
    validations: {
        cardNumber: { required },
        cardOwner: { required },
        cardRegistrationNumber: { required, isCpfCnpjValid: helpers.regex('isCpfCnpjValid', /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/)
        },
        expirationDate: { required },
        securityCode: { required }
    },
    watch: {
        'cardRegistrationNumber': function (newVal) {
            this.updateCpfCnpj();
        }
    },
    methods: {
        closeModal ({target, currentTarget}) {
            if(target === currentTarget) {
                this.$emit('closeModal');
            }
        },
        getPreviousForm (){
            this.$emit('getBackPreviousForm');
        },
        setPaymentInfo () {
            this.$store.commit('setPayment', {
                cardNumber: this.cardNumber,
                cardOwner: this.cardOwner,
                cardRegistrationNumber: this.cardRegistrationNumber,
                expirationDate: this.expirationDate,
                securityCode: this.securityCode,
            });
        },
        updateCpfCnpj () {
            const cleanValue = this.cardRegistrationNumber.replace(/\D+/g, '');
            const length = cleanValue.length;
            if (length <= 11) {
                this.maskCpfCnpj = '###.###.###-##';
            } else {
                this.maskCpfCnpj = '##.###.###/####-##';
            }
        },
        /* formatCpfCnpj (value) {
            value = value.replace(/\D/g, ''); // Remove tudo o que não é dígito

            if (value.length <= 11) {
                // Formatação para CPF
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            } else {
                // Formatação para CNPJ
                value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
            }

            return value;
        } */
    }
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

#modal {
  max-width: 600px;
  background: #2B2E3B;
  border-radius: 12px;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal-outside::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
}

#header-wrapper {
  border-bottom: 1px solid #ffffff20;
  padding-block: 20px;
}

#header-wrapper h2 {
  font-size: 24px;
  padding-top: 10px;
}

.form-wrapper {
  padding-block: 30px 40px;
  border-bottom: 1px solid #ffffff20;
  animation: .7s fadeIn forwards;
}

#button-wrapper {
  padding-block: 20px;
}

.next-step-button {
  width: 78%;
  font-weight: bold;
}
</style>

