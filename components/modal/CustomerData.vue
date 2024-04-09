<template>
    <b-container id="modal-container" fluid @click="closeModal">
        <div id="form-wrapper">
            <div id="form-header" class="d-flex flex-row justify-content-between">
                <img src="/icons/left-arrow.svg" class="icon" @click="closeModalX">
                <h2 id="form-headline" class="text-white">Informe seus dados pessoais</h2>
                <img src="/icons/close-icon.svg" class="icon" @click="closeModalX">
            </div>
            <div id="form-content" class="d-flex flex-column">
                <label for="name">Nome:</label>
                <input
                    id="name"
                    v-model="customerData.name"
                    type="text"
                    name="name"
                    placeholder="Coloque seu nome completo"
                    required>

                <label for="email">E-mail:</label>
                <input
                    id="email"
                    v-model="customerData.mail"
                    type="email"
                    name="email"
                    placeholder="Digite um e-mail válido"
                    required>

                <label for="cpf_cnpj">CPF/CNPJ:</label>
                <input
                    id="cpf_cnpj"
                    v-model="customerData.identifier"
                    type="text"
                    name="cpf_cnpj"
                    placeholder="Digite seu CPF ou CNPJ"
                    required>

                <label for="phone">Telefone:</label>
                <input
                    id="phone"
                    v-model="customerData.phone"
                    type="tel"
                    name="phone"
                    placeholder="Digite seu número do WhatsApp"
                    required>

                <b-button
                    id="next-button"
                    type="submit"
                    variant="primary"
                    class="mx-auto d-block"
                    @click="nextStep">Próximo</b-button>
            </div>
        </div>
    </b-container>
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
            }
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
            this.$emit('nextStep' );
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

#modal-container {
  position: fixed;
  width: 100%;
  height: 100%;
  position: relative;
  background: #22252F;
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

#form-wrapper {
  width: 40%;
  max-width: 600px;
  background: #2B2E3B;
  border-radius: 12px;
  padding-block: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: fadeIn .5s forwards;
}

#form-header {
  padding-inline: 30px;
  border-bottom: 1px solid #ffffff20;
}

#form-headline {
  font-size: 24px;
}

#form-content {
  padding-inline: 10%;
}

#next-button {
  width: 100%;
  margin-top: 20px;
}

.icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
