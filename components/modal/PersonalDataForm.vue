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
                        <label for="name">Nome:</label>
                        <input
                            id="name"
                            v-model="customerData.name"
                            type="text"
                            name="name"
                            placeholder="Coloque seu nome completo"
                            required>
                    </div>

                    <div class="d-flex flex-column col-12">
                        <label for="email">E-mail:</label>
                        <input
                            id="email"
                            v-model="customerData.mail"
                            type="email"
                            name="email"
                            placeholder="Digite um e-mail válido"
                            required>
                    </div>
                    <div class="d-flex flex-column col-12">
                        <label for="cpf_cnpj">CPF/CNPJ:</label>
                        <input
                            id="cpf_cnpj"
                            v-model="customerData.identifier"
                            type="text"
                            name="cpf_cnpj"
                            placeholder="Digite seu CPF ou CNPJ"
                            required>
                    </div>
                    <div class="d-flex flex-column col-12">
                        <label for="phone">Telefone:</label>
                        <input
                            id="phone"
                            v-model="customerData.phone"
                            type="tel"
                            name="phone"
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
                    @click="nextStep">Próximo</b-button>
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
                identifier: '',
                phone: '',
            },
        };
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
        updateCostumerData () {
            this.$store.commit('registerCustomer', {
                name: this.customerData.name,
                mail: this.customerData.mail,
                identifier: this.customerData.identifier,
                phone: this.customerData.phone,
            });
        },
        nextStep () {
            this.$emit('nextStep');
        },
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
