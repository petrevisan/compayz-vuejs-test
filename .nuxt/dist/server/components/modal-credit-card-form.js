exports.ids = [2];
exports.modules = {

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3749abe8", content, true, context)
};

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_CreditCardForm_vue_vue_type_style_index_0_id_899b5ec2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_CreditCardForm_vue_vue_type_style_index_0_id_899b5ec2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_CreditCardForm_vue_vue_type_style_index_0_id_899b5ec2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_CreditCardForm_vue_vue_type_style_index_0_id_899b5ec2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_CreditCardForm_vue_vue_type_style_index_0_id_899b5ec2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@keyframes fadeIn-899b5ec2{0%{transform:translateX(100px)}to{transform:translateX(0)}}#modal[data-v-899b5ec2]{background:#2b2e3b;border-radius:12px;left:50%;max-width:600px;padding:0;position:absolute;top:50%;transform:translate(-50%,-50%)}.modal-outside[data-v-899b5ec2]:before{background:rgba(0,0,0,.5);content:\"\";height:100%;left:0;position:fixed;top:0;width:100%}#header-wrapper[data-v-899b5ec2]{border-bottom:1px solid hsla(0,0%,100%,.125);padding-bottom:20px;padding-top:20px}#header-wrapper h2[data-v-899b5ec2]{font-size:24px;padding-top:10px}.form-wrapper[data-v-899b5ec2]{animation:fadeIn-899b5ec2 .7s forwards;border-bottom:1px solid hsla(0,0%,100%,.125);padding-bottom:40px;padding-top:30px}#button-wrapper[data-v-899b5ec2]{padding-bottom:20px;padding-top:20px}.next-step-button[data-v-899b5ec2]{font-weight:700;width:78%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/modal/CreditCardForm.vue?vue&type=template&id=899b5ec2&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "modal-outside",
    on: {
      "click": _vm.closeModal
    }
  }, [_vm._ssrNode("<section id=\"modal\" class=\"container\" data-v-899b5ec2>", "</section>", [_vm._ssrNode("<div id=\"header-wrapper\" class=\"d-flex flex-row justify-content-around align-items-center\" data-v-899b5ec2><img src=\"/icons/left-arrow.svg\" class=\"icon\" data-v-899b5ec2> <h2 class=\"text-white\" data-v-899b5ec2>Informe seus dados do cartão</h2> <img src=\"/icons/close-icon.svg\" class=\"icon\" data-v-899b5ec2></div> "), _vm._ssrNode("<div class=\"form-wrapper\" data-v-899b5ec2>", "</div>", [_vm._ssrNode("<form class=\"d-block mx-auto\" data-v-899b5ec2>", "</form>", [_vm._ssrNode("<div class=\"d-flex flex-column col-12\" data-v-899b5ec2>", "</div>", [_c('vue-paycard', {
    attrs: {
      "value-fields": {
        cardName: _vm.cardOwner,
        cardNumber: _vm.cardNumber,
        cardMonth: '',
        cardYear: '',
        cardCvv: _vm.securityCode
      },
      "background-image": "/images/pay-card-background.jpg"
    }
  }), _vm._ssrNode(" <label for=\"card-number\" data-v-899b5ec2>Número do cartão <span class=\"required-signal\" data-v-899b5ec2>*</span></label> "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cardNumber,
      expression: "cardNumber"
    }, {
      name: "mask",
      rawName: "v-mask",
      value: '#### #### #### ####',
      expression: "'#### #### #### ####'"
    }],
    attrs: {
      "id": "card-number",
      "type": "text",
      "name": "card-number",
      "placeholder": "Digite o número do seu cartão (frente do cartão)",
      "required": ""
    },
    domProps: {
      "value": _vm.cardNumber
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.cardNumber = $event.target.value;
      }
    }
  }, []), _vm._ssrNode(" " + (_vm.submitted && !_vm.$v.cardNumber.required ? "<span class=\"error-message\" data-v-899b5ec2>O número do cartão é obrigatório.</span>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"d-flex flex-column col-12\" data-v-899b5ec2><label for=\"card-owner\" data-v-899b5ec2>Titular do cartão <span class=\"required-signal\" data-v-899b5ec2>*</span></label> <input id=\"card-owner\" type=\"text\" name=\"card-owner\" placeholder=\"Nome (igual ao cartão)\" required=\"required\"" + _vm._ssrAttr("value", _vm.cardOwner) + " data-v-899b5ec2> " + (_vm.submitted && !_vm.$v.cardOwner.required ? "<span class=\"error-message\" data-v-899b5ec2>O nome do titular é obrigatório.</span>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"d-flex flex-column col-12\" data-v-899b5ec2>", "</div>", [_vm._ssrNode("<label for=\"card-registration-number\" data-v-899b5ec2>CPF/CNPJ do titular do cartão <span class=\"required-signal\" data-v-899b5ec2>*</span></label> "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cardRegistrationNumber,
      expression: "cardRegistrationNumber"
    }, {
      name: "mask",
      rawName: "v-mask",
      value: _vm.maskCpfCnpj,
      expression: "maskCpfCnpj"
    }],
    attrs: {
      "id": "card-registration-number",
      "type": "text",
      "name": "card-registration-number",
      "placeholder": "Digite o CPF ou CNPJ do titular do cartão",
      "required": ""
    },
    domProps: {
      "value": _vm.cardRegistrationNumber
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.cardRegistrationNumber = $event.target.value;
      }
    }
  }, []), _vm._ssrNode(" " + (_vm.submitted && !_vm.$v.cardRegistrationNumber.required ? "<span class=\"error-message\" data-v-899b5ec2>CPF ou CNPJ é obrigatório.</span>" : "<!---->") + " " + (_vm.submitted && !_vm.$v.cardRegistrationNumber.isCpfCnpjValid ? "<span class=\"error-message\" data-v-899b5ec2>CPF ou CNPJ é obrigatório.</span>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"d-flex flex-row\" data-v-899b5ec2>", "</div>", [_vm._ssrNode("<div class=\"col-7\" data-v-899b5ec2>", "</div>", [_vm._ssrNode("<label for=\"expiration-date\" data-v-899b5ec2>Validade <span class=\"required-signal\" data-v-899b5ec2>*</span></label> "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.expirationDate,
      expression: "expirationDate"
    }, {
      name: "mask",
      rawName: "v-mask",
      value: '##/####',
      expression: "'##/####'"
    }],
    attrs: {
      "id": "expiration-date",
      "type": "text",
      "name": "expiration-date",
      "placeholder": "MM/AAAA",
      "required": ""
    },
    domProps: {
      "value": _vm.expirationDate
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.expirationDate = $event.target.value;
      }
    }
  }, []), _vm._ssrNode(" " + (_vm.submitted && !_vm.$v.expirationDate.required ? "<span class=\"error-message\" data-v-899b5ec2>A validade é obrigatória.</span>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-5\" data-v-899b5ec2>", "</div>", [_vm._ssrNode("<label for=\"cvv\" data-v-899b5ec2>CVV <span class=\"required-signal\" data-v-899b5ec2>*</span></label> "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.securityCode,
      expression: "securityCode"
    }, {
      name: "mask",
      rawName: "v-mask",
      value: '###',
      expression: "'###'"
    }],
    attrs: {
      "id": "cvv",
      "type": "text",
      "name": "cvv",
      "placeholder": "CVV",
      "required": ""
    },
    domProps: {
      "value": _vm.securityCode
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.securityCode = $event.target.value;
      }
    }
  }, []), _vm._ssrNode(" " + (_vm.submitted && !_vm.$v.securityCode.required ? "<span class=\"error-message\" data-v-899b5ec2>O código de segurança é obrigatório.</span>" : "<!---->"))], 2)], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"button-wrapper\" data-v-899b5ec2>", "</div>", [_c('b-button', {
    staticClass: "next-step-button modal-submit",
    attrs: {
      "variant": "primary"
    },
    on: {
      "click": _vm.validateCardData
    }
  }, [_vm._v("Assinar Plano (" + _vm._s(_vm.totalPrice) + ")")])], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/modal/CreditCardForm.vue?vue&type=template&id=899b5ec2&scoped=true

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/modal/CreditCardForm.vue?vue&type=script&lang=js

/* harmony default export */ var CreditCardFormvue_type_script_lang_js = ({
  name: 'CreditCardForm',
  props: {
    totalPrice: String
  },
  data() {
    return {
      cardNumber: '',
      cardOwner: '',
      cardRegistrationNumber: '',
      expirationDate: '',
      securityCode: '',
      submitted: false
    };
  },
  validations: {
    cardNumber: {
      required: validators_["required"]
    },
    cardOwner: {
      required: validators_["required"]
    },
    cardRegistrationNumber: {
      required: validators_["required"],
      isCpfCnpjValid: validators_["helpers"].regex('isCpfCnpjValid', /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/)
    },
    expirationDate: {
      required: validators_["required"]
    },
    securityCode: {
      required: validators_["required"]
    }
  },
  watch: {
    'cardRegistrationNumber': function (newVal) {
      this.updateCpfCnpj();
    }
  },
  methods: {
    closeModal({
      target,
      currentTarget
    }) {
      if (target === currentTarget) {
        this.$emit('closeModal');
      }
    },
    getPreviousForm() {
      this.$emit('getBackPreviousForm');
    },
    setPaymentInfo() {
      this.$store.commit('setPayment', {
        cardNumber: this.cardNumber,
        cardOwner: this.cardOwner,
        cardRegistrationNumber: this.cardRegistrationNumber,
        expirationDate: this.expirationDate,
        securityCode: this.securityCode
      });
    },
    validateCardData() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.setPaymentInfo();
    },
    updateCpfCnpj() {
      const cleanValue = this.cardRegistrationNumber.replace(/\D+/g, '');
      const length = cleanValue.length;
      if (length <= 11) {
        this.maskCpfCnpj = '###.###.###-##';
      } else {
        this.maskCpfCnpj = '##.###.###/####-##';
      }
    }
  }
});
// CONCATENATED MODULE: ./components/modal/CreditCardForm.vue?vue&type=script&lang=js
 /* harmony default export */ var modal_CreditCardFormvue_type_script_lang_js = (CreditCardFormvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/modal/CreditCardForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(48)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modal_CreditCardFormvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "899b5ec2",
  "eac18d9a"
  
)

/* harmony default export */ var CreditCardForm = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=modal-credit-card-form.js.map