<template>
  <div id="wrapper">
    <b-container fluid id="plans-wrapper">
      <b-row class="my-3">
        <b-col cols="12" class="d-flex justify-content-between">
          <b-button id="planButton" variant="outline-primary" v-for="plan in availablePlans" :key="plan.id">
            {{ plan.name }}
          </b-button>
        </b-col>
      </b-row>

      <b-row class="px-3">
        <b-col cols="8" id="">
          <div class="plan-included d-flex flex-column">
            <h2 class="text-white">O plano 4D irá incluir</h2>
            <div class="d-flex flex-row justify-content-between">
              <span class="text-white">MemberZ</span>
              <span class="text-white">1</span>
            </div>
          </div>

          <div class="plan-included d-flex flex-column">
            <span class="text-white font">Domínios</span>
            <div class="d-flex flex-row justify-content-between">
              <span class="text-white">Adicionar pacotes avulsos</span>
              <div class="d-flex flex-column align-items-md-center">
                <span class="text-white">{{ domainsSelected }}</span>
                <input type="range" min="3" max="70" v-model="domainsSelected" />
              </div>
            </div>
          </div>
        </b-col>
        <b-col cols="4">
          <div id="plan-price">
            <div id="your-choice">
              <h2 class="text-white px-3 font">Sua escolha</h2>
            </div>
            <div id="plan-selected" class="d-flex flex-row justify-content-between px-3">
              <span class="text-white">Plano 4D</span>
              <span class="text-white">R$ 100,99</span>
            </div>
            <div id="total-price" class="d-flex flex-row justify-content-between px-3">
              <span class="text-white">TOTAL</span>
              <span class="text-white">R$ 100,99</span>
            </div>
            <b-button variant="primary" id="sign-button" class="mx-auto d-block" @click="selectPlan">Assinar Plano</b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <Data v-if="isPlanSelected" @closeModal="isPlanSelected = false"></Data>
  </div>
</template>

<script>
import Data from "@/components/modal/Data.vue";
export default {
  name: 'IndexPage',
  components: {
    Data
  },
  data() {
    return {
      availablePlans: {},
      domainsSelected: 3,
      isPlanSelected: false
    }
  },
  created() {
    this.getAvailablePlans()
  },
  methods: {
    async getAvailablePlans() {
      const allPlans = await this.$axios.$get('/plans/available-plans.json');
      this.availablePlans = allPlans.data.activePlans;
    },
    selectPlan() {
      this.isPlanSelected = true;
    },
  }
}
</script>

<style scoped>
#wrapper {
  background: #22252F;
  min-height: 100vh;
  width: 100vw;
  padding-block: 80px;
}

#plans-wrapper {
  background: #2B2E3B;
  min-height: 100px;
  width: 90vw;
  border-radius: 12px;
  padding: 60px 20px;
}

#planButton {
  width: calc(100% / 5.5);
  background: transparent;
  border: 1px solid #fff;
  border-radius: 12px;
  color: #fff;
  padding: 12px 20px;
  margin-inline: 10px;
}

.plan-included {
  border: 1px solid #ffffff20;
  border-radius: 12px;
  padding: 10px;
}

#plan-price {
  background: #373c4b;
  border-radius: 12px;
  padding-block: 10px;
}

#plan-selected {
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
