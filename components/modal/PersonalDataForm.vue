<template>
    <div id="modal-container" fluid @click="closeModal">
        <section id="personal-modal" class="container col-10">
            <div id="form-header" class="d-flex flex-row justify-content-around align-items-center">
                <img src="/icons/left-arrow.svg" class="icon" @click="closeModalX">
                <h2 id="" class="text-center modal-title">Informe seus dados pessoais</h2>
                <img src="/icons/close-icon.svg" class="icon" @click="closeModalX">
            </div>
            <div id="" class="form-wrapper">
                <form class="d-block mx-auto">
                    <div class="d-flex flex-column col-12">
                        <label for="name">Nome <span class="required-signal">*</span></label>
                        <input
                            id="name"
                            v-model="customerData.name"
                            type="text"
                            name="name"
                            placeholder="Coloque seu nome completo"
                            required>
                        <span v-if="submitted && !$v.customerData.name.required" class="error-message">O nome é obrigatório.</span>
                    </div>

                    <div class="d-flex flex-column col-12">
                        <label for="email">E-mail <span class="required-signal">*</span></label>
                        <input
                            id="email"
                            v-model="customerData.mail"
                            type="email"
                            name="email"
                            placeholder="Digite um e-mail válido"
                            required>
                        <span v-if="submitted && !$v.customerData.mail.required" class="error-message">E-mail é obrigatório!</span>
                        <span v-if="submitted && !$v.customerData.mail.email" class="error-message">E-mail inválido!</span>

                    </div>
                    <div class="d-flex flex-column col-12">
                        <label for="cpf-cnpj">CPF/CNPJ <span class="required-signal">*</span></label>
                        <input
                            id="cpf-cnpj"
                            v-model="customerData.registrationNumber"
                            v-mask="maskCpfCnpj"
                            type="text"
                            name="cpf-cnpj"
                            placeholder="Digite seu CPF ou CNPJ"
                            required>
                        <span v-if="submitted && !$v.customerData.registrationNumber.required" class="error-message">CPF ou CNPJ é obrigatório.</span>
                        <span v-if="submitted && !$v.customerData.registrationNumber.isCpfCnpjValid" class="error-message">CPF ou CNPJ é obrigatório.</span>

                    </div>
                    <div class="d-flex flex-column col-12">
                        <label for="phone">Telefone <span class="required-signal">*</span></label>
                        <input
                            id="phone"
                            v-model="customerData.phone"
                            v-mask="'(##) #####-####'"
                            type="tel"
                            name="phone"
                            placeholder="Digite seu número do WhatsApp"
                            required>
                        <span v-if="submitted && !$v.customerData.phone.required" class="error-message">O telefone é obrigatório.</span>
                        <span v-if="submitted && !$v.customerData.phone.isPhoneValid" class="error-message">Formato de telefone inválido.</span>
                    </div>
                </form>
            </div>
            <div class="button-wrapper">
                <b-button
                    id="go-to-address"
                    type="submit"
                    variant="primary"
                    class="modal-submit"
                    @click="setPersonalInfo(); nextStep()">Próximo</b-button>
            </div>
        </section>
    </div>
</template>
<script>
import { email, required, helpers } from 'vuelidate/lib/validators';

export default {
    name: 'PersonalData',
    data () {
        return {
            customerData: {
                name: '',
                mail: '',
                registrationNumber: '',
                phone: '',
            },
            inputValidation: {
                error: false,
                errorMessage: '',
            },
            submitted: false,
        };
    },
    validations: {
        customerData: {
            name: {required},
            mail: {required, email},
            registrationNumber: {
                required,
                isCpfCnpjValid: helpers.regex('isCpfCnpjValid', /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/)
            },
            phone: {required, isPhoneValid: helpers.regex('isPhoneValid', /^\(\d{2}\) \d{5}-\d{4}$/)},
        }
    },
    watch: {
        'customerData.registrationNumber': function (newVal) {
            this.updateCpfCnpj();
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
        setPersonalInfo () {
            this.$store.commit('setPersonalInfo', {
                name: this.customerData.name,
                mail: this.customerData.mail,
                identifier: this.customerData.registrationNumber,
                phone: this.customerData.phone,
            });
        },
        nextStep () {
            this.submitted = true;
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            this.$emit('nextStep');
        },
        updateCpfCnpj () {
            const cleanValue = this.customerData.registrationNumber.replace(/\D+/g, '');
            const length = cleanValue.length;
            if (length <= 11) {
                this.maskCpfCnpj = '###.###.###-##';
            } else {
                this.maskCpfCnpj = '##.###.###/####-##';
            }
        }
    }
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    transform: translate(-50%, -50%) translateY(-30px);
  }
  to {
    transform: translate(-50%, -50%) translateY(0);
  }
}

#modal-container::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
}

#personal-modal {
  max-width: 600px;
  background: #2B2E3B;
  padding: 0;
  border-radius: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: fadeIn .5s forwards;
}

#form-header {
  padding-block: 20px;
  border-bottom: 1px solid #ffffff20;
}

.form-wrapper {
  padding-block: 20px 40px;
}

.button-wrapper {
  border-top: 1px solid #ffffff20
}

#go-to-address {
  width: 78%;
  margin-block: 20px;
}

@media(max-width:768px) {
  #personal-modal {
    max-width: 90vw;
    padding-inline: 20px;
  }
}
</style>
