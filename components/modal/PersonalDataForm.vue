<template>
    <div id="modal-container" fluid @click="closeModal">
        <section id="modal" class="container">
            <div id="form-header" class="d-flex flex-row justify-content-around align-items-center">
                <img src="/icons/left-arrow.svg" class="icon" @click="closeModalX">
                <h2 id="form-headline" class="text-white">Informe seus dados pessoais</h2>
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
                    </div>
                    <div class="d-flex flex-column col-12">
                        <label for="cpf-cnpj">CPF/CNPJ <span class="required-signal">*</span></label>
                        <input
                            id="cpf-cnpj"
                            v-model="customerData.registrationNumber"
                            type="text"
                            name="cpf-cnpj"
                            placeholder="Digite seu CPF ou CNPJ"
                            maxlength="18"
                            required>
                    </div>
                    <div class="d-flex flex-column col-12">
                        <label for="phone">Telefone <span class="required-signal">*</span></label>
                        <input
                            id="phone"
                            v-model="customerData.phone"
                            type="tel"
                            name="phone"
                            maxlength="13"
                            placeholder="Digite seu número do WhatsApp"
                            required>
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
            }
        };
    },
    watch: {
        'customerData.registrationNumber': function (newVal, oldVal) {
            if (newVal !== oldVal) {
                this.formatCpfCnpj();
            }
        },
        'customerData.phone': function (newVal) {
            if (newVal) {
                this.formatPhone();
            }
        }
    },
    methods: {
        closeModal ({ target, currentTarget}) {
            if(target === currentTarget) {
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
            this.$emit('nextStep');
        },
        formatCpfCnpj () {
            let value = this.customerData.registrationNumber;
            value = value.replace(/\D/g, ''); // Remove tudo o que não é dígito

            if (value.length <= 11) {
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            } else {
                value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
            }

            this.customerData.registrationNumber = value;
        },
        formatPhone () {
            let value = this.customerData.phone;
            value = value.replace(/\D/g, ''); // Remove tudo o que não é dígito

            if (value.length === 11) { // Formato com 9 dígitos (celular)
                value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
            } else if (value.length === 10) { // Formato com 8 dígitos (fixo)
                value = value.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
            }

            this.customerData.phone = value;
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

#modal {
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

#form-header h2 {
  font-size: 24px;
  padding-top: 10px;
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
</style>
