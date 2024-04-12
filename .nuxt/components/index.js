export { default as PlanDetails } from '../../components/PlanDetails.vue'
export { default as PlansList } from '../../components/PlansList.vue'
export { default as PreCheckout } from '../../components/PreCheckout.vue'
export { default as ModalAddressForm } from '../../components/modal/AddressForm.vue'
export { default as ModalCreditCardForm } from '../../components/modal/CreditCardForm.vue'
export { default as ModalPersonalDataForm } from '../../components/modal/PersonalDataForm.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
