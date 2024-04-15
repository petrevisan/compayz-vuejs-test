<template>
    <div>
        <div class="plan-included d-flex flex-column mb-3 mb-md-0 py-4">
            <h2 class="pb-3 pl-lg-3">O {{ planName }} irá incluir</h2>
            <div class="d-flex flex-row">
                <span class="col-6 col-lg-9 minor-fonts">MemberZ</span>
                <span class="col-6 col-lg-3 text-center minor-fonts">1</span>
            </div>
        </div>
        <div class="plan-included d-flex flex-row p-3">
            <div class="d-flex flex-column justify-content-center col-6 col-lg-9 p-0 pt-lg-4">
                <span class="text-left font pt-3">Domínios</span>
                <span class="text-left col-12 p-0 minor-fonts">Adicionar pacotes avulsos</span>
            </div>
            <div class="d-flex flex-column justify-content-end align-items-center col-6 col-lg-3">
                <span class="text-center minor-fonts">3</span>
                <span v-if="extraDomains > 1" class="text-center minor-fonts">+ {{ extraDomains }} inclusos</span>
                <input
                    v-model="extraDomains"
                    type="range"
                    min="0"
                    max="70"
                    @change="setExtraDomains">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PlanDetails',
    props: {
        planName: String,
    },
    data () {
        return {
            extraDomains: 0,
        };
    },
    methods: {
        setExtraDomains () {
            const settedDomains = this.extraDomains;
            this.$emit('setExtraDomains', settedDomains);
        }
    }
};
</script>
<style scoped>

.plan-included {
  border: 1px solid #ffffff20;
  border-radius: 12px;
  padding: 10px;
}

.font {
  font-size: 24px;
  font-weight: bold;
}

h2 {
  font-size: 32px;
  font-weight: bold;
}

.minor-fonts {
  font-size: 18px;
}
@media(max-width:768px) {
  h2 {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }

  .font {
    font-size: 18px;
  }

  .minor-fonts {
    font-size: 15px;
  }
}
</style>
