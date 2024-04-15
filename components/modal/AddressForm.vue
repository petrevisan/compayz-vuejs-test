<template>
    <div class="modal-outside" @click="closeModal">
        <section id="address-modal" class="container">
            <div class="header-wrapper d-flex flex-row justify-content-around align-items-center">
                <img src="icons/left-arrow.svg" class="icon" @click="getPreviousForm">
                <h2 class="modal-title">Informe seu endereço</h2>
                <img src="icons/close-icon.svg" class="icon" @click="closeModalX" >
            </div>
            <div class="form-wrapper">
                <form class="d-block mx-auto">
                    <div class="d-flex flex-column col-12">
                        <label for="cep">CEP <span class="required-signal">*</span></label>
                        <input
                            id="cep"
                            v-model="customerAddress.cep"
                            v-mask="'#####-###'"
                            type="text"
                            name="cep"
                            placeholder="00000-000"
                            required
                            @blur="getCepData(customerAddress.cep)" >
                        <span v-if="submitted && !$v.customerAddress.addressNumber.cep" class="error-message">O CEP é obrigatório.</span>

                    </div>
                    <div class="d-flex flex-row col-12">
                        <div class="d-flex flex-column col-8 pl-0">
                            <label for="street">Rua <span class="required-signal">*</span></label>
                            <input
                                id="street"
                                v-model="customerAddress.street"
                                type="text"
                                name="street"
                                placeholder="Rua"
                                required >
                            <span v-if="submitted && !$v.customerAddress.street.required" class="error-message">O nome da rua é obrigatório.</span>

                        </div>
                        <div class="d-flex flex-column col-4 pr-0">
                            <label for="address-number">Número <span class="required-signal">*</span></label>
                            <input
                                id="address-number"
                                v-model="customerAddress.addressNumber"
                                type="text"
                                name="address-number"
                                placeholder="Nº"
                                required >
                            <span v-if="submitted && !$v.customerAddress.addressNumber.required" class="error-message">O número é obrigatório.</span>

                        </div>
                    </div>

                    <div class="d-flex flex-row col-12">
                        <div class="d-flex flex-column col-4 pl-0">
                            <label for="neighborhood">Bairro <span class="required-signal">*</span></label>
                            <input
                                id="neighborhood"
                                v-model="customerAddress.neighborhood"
                                type="text"
                                name="neighborhood"
                                placeholder="Bairro"
                                required >
                            <span v-if="submitted && !$v.customerAddress.neighborhood.required" class="error-message">O bairro é obrigatório.</span>
                        </div>
                        <div class="d-flex flex-column col-4 px-1">
                            <label for="street">Cidade <span class="required-signal">*</span></label>
                            <input
                                id="city"
                                v-model="customerAddress.city"
                                type="text"
                                name="city"
                                placeholder="Cidade"
                                required >
                            <span v-if="submitted && !$v.customerAddress.city.required" class="error-message">A cidade é obrigatório.</span>

                        </div>
                        <div class="d-flex flex-column col-4 pr-0">
                            <label for="street">Estado <span class="required-signal">*</span></label>
                            <input
                                id="state"
                                v-model="customerAddress.state"
                                type="text"
                                name="state"
                                placeholder="Estado"
                                required >
                            <span v-if="submitted && !$v.customerAddress.state.required" class="error-message">O estado é obrigatório.</span>

                        </div>
                    </div>

                    <div class="d-flex flex-column col-12">
                        <label for="complement">Complemento</label>
                        <input id="complement" type="text" name="complement" placeholder="Coloque um complemento (opcional)">
                    </div>
                </form>
            </div>
            <div class="button-wrapper">
                <b-button
                    type="submit"
                    variant="primary"
                    class="modal-submit"
                    @click="personalDataFilledIn(); setAddressData()">Próximo</b-button>
            </div>
        </section>
    </div>
</template>

<script>
import { required, helpers } from 'vuelidate/lib/validators';

export default {
    name: 'AddressModal',
    data () {
        return {
            customerAddress: {
                cep: '',
                street: '',
                addressNumber: '',
                neighborhood: '',
                city: '',
                state: '',
            },
            viaCepReturn: {},
            submitted: false
        };
    },
    validations: {
        customerAddress: {
            cep: { required, isCepValid: helpers.regex('isCepValid', /^\d{5}-?\d{3}$/) },
            street: { required },
            addressNumber: { required },
            neighborhood: { required },
            city: { required },
            state: { required },
        }
    },
    methods: {
        closeModal ({target, currentTarget}) {
            if (target === currentTarget) {
                this.$emit('closeModal');
            }
        },
        closeModalX () {
            this.$emit('closeModal');
        },
        getPreviousForm () {
            this.$emit('getPreviousForm');
        },
        async getCepData (cep) {
            try {
                const viacepReturn = await this.$axios.$get(`https://viacep.com.br/ws/${cep}/json/`);
                this.customerAddress.street = viacepReturn.logradouro;
                this.customerAddress.neighborhood = viacepReturn.bairro;
                this.customerAddress.city = viacepReturn.localidade;
                this.customerAddress.state = viacepReturn.uf;
            }
            catch {
                console.error('Erro');
            }
        },
        personalDataFilledIn () {
            this.submitted = true;
            this.$v.$touch();
            if(this.$v.$invalid) {
                return;
            }
            this.$emit('addressFilledIn');
        },
        setAddressData () {
            this.$store.commit('setAddress', {
                cep: this.customerAddress.cep,
                street: this.customerAddress.street,
                addressNumber: this.customerAddress.cep,
                neighborhood: this.customerAddress.cep,
                city: this.customerAddress.cep,
                state: this.customerAddress.state,
            });
        }
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

#address-modal {
  background: #2B2E3B;
  border-radius: 12px;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
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

.form-wrapper {
  padding-block: 20px 40px;
  animation: .7s fadeIn forwards;
}

.header-wrapper {
  border-bottom: 1px solid #ffffff20;
  padding-block: 20px;
}

.header-wrapper h2 {
  font-size: 24px;
  padding-top: 10px;
}

.button-wrapper {
  border-top: 1px solid #ffffff20;
  padding-block: 20px;
}

@media(max-width:768px) {
  #address-modal {
    max-width: 90vw;
  }

  .form-wrapper {
    padding-inline: 20px;
  }

  .modal-title {
    font-size: 20px !important;
  }
}

</style>
