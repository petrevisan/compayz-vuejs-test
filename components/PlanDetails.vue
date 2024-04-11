<template>
    <div>
        <div class="plan-included d-flex flex-column">
            <h2 class="text-white">O {{ planName }} irá incluir</h2>
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
                    <span class="text-white">+ {{ extraDomainsSelected }} inclusos</span>
                    <input v-model="extraDomainsSelected" type="range" min="0" max="70">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PlanDetails',
    props: {
        extraDomainsSelected: {},
        planName: {}
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
  font-size: 22px;
  font-weight: bold;
}
</style>
