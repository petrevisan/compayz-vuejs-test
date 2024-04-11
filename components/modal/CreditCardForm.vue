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
                        <img src="/images/card.webp" class="img-fluid pb-3">
                        <label for="card-number">Número do cartão <span class="required-signal">*</span></label>
                        <input
                            id="card-number"
                            v-model.lazy="cardNumber"
                            type="text"
                            name="card-number"
                            placeholder="Digite o número do seu cartão (frente do cartão)"
                            required>
                    </div>

                    <div class="d-flex flex-column col-12">
                        <label for="card-owner">Titular do cartão <span class="required-signal">*</span></label>
                        <input
                            id="card-owner"
                            v-model.lazy="cardOwner"
                            type="text"
                            name="card-owner"
                            placeholder="Nome (igual ao cartão)"
                            required>
                    </div>

                    <div class="d-flex flex-column col-12">
                        <label for="card-registration-number">CPF/CNPJ do titular do cartão <span class="required-signal">*</span></label>
                        <input
                            id="card-registration-number"
                            v-model.lazy="cardRegistrationNumber"
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
                                v-model.lazy="expirationDate"
                                type="text"
                                name="expiration-date"
                                placeholder="MM/AAAA"
                                required>
                        </div>
                        <div class="col-5">
                            <label for="cvv">CVV <span class="required-signal">*</span></label>
                            <input
                                id="cvv"
                                v-model.lazy="securityCode"
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
export default {
    name: 'Card',
    props: {
        totalPrice: '',
    },
    data () {
        return {
            cardNumber: '',
            cardOwner: '',
            cardRegistrationNumber: '',
            expirationDate: '',
            securityCode: ''
        };
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
        }
    }
};
</script>

<style scoped>
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
}

#button-wrapper {
  padding-block: 20px;
}

.next-step-button {
  width: 78%;
  font-weight: bold;
}
</style>

