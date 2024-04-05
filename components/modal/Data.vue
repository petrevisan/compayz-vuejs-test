<template>
  <b-container fluid id="modal-container" @click="modal">
    <div id="form-wrapper">
      <div id="form-header" class="d-flex flex-row justify-content-between">
        <h2 id="form-headline" class="text-white">Informe seus dados pessoais</h2>
        <span class="text-light">X</span>
      </div>
      <div id="form-content" class="d-flex flex-column">
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name" placeholder="Coloque seu nome completo" v-model="customerData.name" required>

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" placeholder="Digite um e-mail válido" v-model="customerData.mail" required>

        <label for="cpf_cnpj">CPF/CNPJ:</label>
        <input type="text" id="cpf_cnpj" name="cpf_cnpj" placeholder="Digite seu CPF ou CNPJ" v-model="customerData.identifier" required>

        <label for="phone">Telefone:</label>
        <input type="tel" id="phone" name="phone" placeholder="Digite seu número do WhatsApp" v-model="customerData.phone" required>

        <b-button id="next-button" type="submit" variant="primary" class="mx-auto d-block">Próximo</b-button>
      </div>
    </div>

  </b-container>
</template>
<script>
export default {
  name: "PersonalData",
  data() {
    return {
      customerData: {
        name: "",
        mail: "",
        identifier: "",
        phone: "",
      }
    }
  },
  methods: {
    modal(event) {
      console.log(event)
    }
  }
}
</script>

<style>
#modal-container {
  position: fixed;
  width: 100%;
  height: 100%;
  position: relative;
  background: #22252F;
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
</style>
