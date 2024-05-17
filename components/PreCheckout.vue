<template>
    <div>
        <div id="plan-price">
            <div id="your-choice">
                <h2 class="text-white p-3 font text-center text-lg-left">Sua escolha</h2>
            </div>
            <div id="chosen-plan" class="d-flex flex-row justify-content-between px-3">
                <div class="d-flex flex-column">
                    <span class="text-white">{{ planName }}</span>
                    <span v-if="extraDomains > 0" class="text-white">+ {{ extraDomains }} domínio(s)</span>
                </div>
                <div class="d-flex flex-column">
                    <span class="text-white">{{ priceFormatterToBrl }}</span>
                    <span v-if="extraDomains > 0" class="text-white">{{ extraDomainsCost }}</span>
                </div>
            </div>
            <div id="total-price" class="d-flex flex-row justify-content-between px-3">
                <span class="text-white">TOTAL</span>
                <span class="text-white">{{ totalPrice }}</span>
            </div>
            <b-button id="sign-button" variant="primary" class="mx-auto d-block" @click="openDataModal">Assinar Plano</b-button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PreCheckout',
    props: {
        planName: {
            type: String,
            required: true,
        },
        planPrice: {
            type: Number,
            required: true
        },
        extraDomains: {
            type: Number
        },
    },
    data () {
        return {

        };
    },
    computed: {
        priceFormatterToBrl () {
            return this.planPrice.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
        },
        extraDomainsCost () {
            const domainsPrice = this.extraDomains * 5;
            return domainsPrice.toLocaleString(('pt-BR'), {style: 'currency', currency: 'BRL'});
        },
        totalPrice () {
            const totalPrice = this.planPrice + (this.extraDomains * 5);
            return totalPrice.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        }
    },
    methods: {
        openDataModal () {
            this.$emit('openDataModal');
        }
    }
};
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
  border-radius: 5px;
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

@media(max-width:1024px) {
  #sign-button {
    width: 90%;
  }
}
</style>
