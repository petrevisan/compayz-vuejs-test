<template>
  <div id="plan-price">
    <div id="your-choice">
      <h2 class="text-white px-3 font">Sua escolha</h2>
    </div>
    <div id="chosen-plan" class="d-flex flex-row justify-content-between px-3">
      <div class="d-flex flex-column">
        <span class="text-white">{{ planName }}</span>
        <span v-if="extraDomainsSelected > 0" class="text-white">+ {{extraDomainsSelected}} domínio(s)</span>
      </div>
      <div class="d-flex flex-column">
        <span class="text-white">{{ priceFormatter }}</span>
        <span v-if="extraDomainsSelected > 0" class="text-white">{{ extraDomainsPrice }}</span>
      </div>
    </div>
    <div id="total-price" class="d-flex flex-row justify-content-between px-3">
      <span class="text-white">TOTAL</span>
      <span class="text-white">{{ totalPrice }}</span>
    </div>
    <b-button id="sign-button" variant="primary" class="mx-auto d-block" @click="signPlan">Assinar Plano</b-button>
  </div>
</template>
<script>
export default {
  name: 'PreCheckout',
  props: {
    extraDomainsPrice: {},
    extraDomainsSelected: {},
    planName: {},
    priceFormatter: {},
    signPlan: {},
    totalPrice: {}
  }
}
</script>
<style scoped>

#plan-price {
  background: #373c4b;
  border-radius: 12px;
  padding-block: 10px;
}

#chosen-plan {
  padding-block: 25px 50px;
  border-bottom: 1px solid #ffffff20;
  border-top: 1px solid #ffffff20;
}

#total-price {
  background: #777777;
  margin: 10px;
  padding-block: 8px;
}

#sign-button {
  width: 97%;
  font-weight: bold;
  margin-top: 15px;
}

.font {
  font-size: 22px;
  font-weight: bold;
}
</style>