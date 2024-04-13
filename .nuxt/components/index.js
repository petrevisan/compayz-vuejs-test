export const PlanDetails = () => import('../../components/PlanDetails.vue' /* webpackChunkName: "components/plan-details" */).then(c => wrapFunctional(c.default || c))
export const PlansList = () => import('../../components/PlansList.vue' /* webpackChunkName: "components/plans-list" */).then(c => wrapFunctional(c.default || c))
export const PreCheckout = () => import('../../components/PreCheckout.vue' /* webpackChunkName: "components/pre-checkout" */).then(c => wrapFunctional(c.default || c))
export const ModalAddressForm = () => import('../../components/modal/AddressForm.vue' /* webpackChunkName: "components/modal-address-form" */).then(c => wrapFunctional(c.default || c))
export const ModalCreditCardForm = () => import('../../components/modal/CreditCardForm.vue' /* webpackChunkName: "components/modal-credit-card-form" */).then(c => wrapFunctional(c.default || c))
export const ModalPersonalDataForm = () => import('../../components/modal/PersonalDataForm.vue' /* webpackChunkName: "components/modal-personal-data-form" */).then(c => wrapFunctional(c.default || c))

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
