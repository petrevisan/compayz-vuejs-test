<template>
    <div class="modal-outside" @click="closeModal">
        <div id="address-modal" class="container">
            <div class="header-wrapper d-flex flex-row justify-content-around align-items-center">
                <img src="icons/left-arrow.svg" class="icon" @click="getPreviousForm">
                <h2>Informe seu endereço</h2>
                <img src="icons/close-icon.svg" class="icon" @click="closeModalX" >
            </div>
            <div class="form-wrapper">
                <form class="d-block mx-auto col-11">
                    <div class="d-flex flex-column col-12">
                        <label for="cep">CEP <span class="required-signal">*</span></label>
                        <input
                            id="cep"
                            v-model.lazy="customerAddress.cep"
                            type="text"
                            name="cep"
                            placeholder="00000-000"
                            maxlength="8"
                            required
                            @blur="getCepData(customerAddress.cep)" >
                    </div>
                    <div class="d-flex flex-column col-12">
                        <label for="street">Rua <span class="required-signal">*</span></label>
                        <input
                            id="street"
                            v-model="customerAddress.street"
                            type="text"
                            name="street"
                            placeholder="Rua"
                            required >
                    </div>
                    <div class="d-flex flex-column col-12">
                        <label for="street">Rua <span class="required-signal">*</span></label>
                        <input
                            id="street"
                            v-model="customerAddress.street"
                            type="text"
                            name="street"
                            placeholder="Rua"
                            required >
                    </div>
                    <div class="d-flex flex-column col-12">
                        <label for="street">Rua <span class="required-signal">*</span></label>
                        <input
                            id="street"
                            v-model="customerAddress.street"
                            type="text"
                            name="street"
                            placeholder="Rua"
                            required >
                    </div>
                    <div class="d-flex flex-column col-12">
                        <label for="house-number">Número <span class="required-signal">*</span></label>
                        <input
                            id="house-number"
                            v-model="customerAddress.houseNumber"
                            type="text"
                            name="house-number"
                            placeholder="Nº"
                            required >
                    </div>
                    <div class="d-flex flex-column col-4">
                        <label for="neighborhood">Bairro <span class="required-signal">*</span></label>
                        <input
                            id="neighborhood"
                            v-model="customerAddress.neighborhood"
                            type="text"
                            name="neighborhood"
                            placeholder="Bairro"
                            required >
                    </div>
                    <div class="d-flex flex-column col-4">
                        <label for="city">Cidade <span class="required-signal">*</span></label>
                        <input
                            id="city"
                            v-model="customerAddress.city"
                            type="text"
                            name="city"
                            placeholder="Cidade"
                            required>
                    </div>
                    <div class="d-flex flex-column col-4">
                        <label for="state">Estado <span class="required-signal">*</span></label>
                        <input
                            id="state"
                            v-model="customerAddress.state"
                            type="text"
                            name="state"
                            placeholder="Estado"
                            required>
                    </div>

                    <div class="d-flex flex-column col-12">
                        <label for="complement">Complemento</label>
                        <input id="complement" type="text" name="complement" placeholder="Coloque um complemento (opcional)">
                    </div>
                </form>
                <b-button
                    id="next-button"
                    type="submit"
                    variant="primary"
                    class="modal-submit "
                    @click="nextStep" >Próximo</b-button>

            </div>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'AddressModal',
    data () {
        return {
            customerAddress: {
                cep: '',
                street: '',
                houseNumber: '',
                neighborhood: '',
                city: '',
                state: '',
            },
            viaCepReturn: {}
        };
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
        nextStep () {
            this.$emit('addressFilledIn');
        }
    }
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    transform: translateX(30px);
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

.header-wrapper {
  border-bottom: 1px solid #ffffff20;
  padding-block: 20px;
}

.header-wrapper h2 {
  font-size: 24px;
  padding-top: 10px;
}


#next-button {
  width: 95%;
  margin-top: 20px;
}
</style>
