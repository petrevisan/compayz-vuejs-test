exports.ids = [1];
exports.modules = {

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("753ac536", content, true, context)
};

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressForm_vue_vue_type_style_index_0_id_33cf4c38_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressForm_vue_vue_type_style_index_0_id_33cf4c38_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressForm_vue_vue_type_style_index_0_id_33cf4c38_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressForm_vue_vue_type_style_index_0_id_33cf4c38_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressForm_vue_vue_type_style_index_0_id_33cf4c38_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@keyframes fadeIn-33cf4c38{0%{transform:translateX(100px)}to{transform:translateX(0)}}#address-modal[data-v-33cf4c38]{background:#2b2e3b;border-radius:12px;left:50%;max-width:600px;padding:0;position:absolute;top:50%;transform:translate(-50%,-50%)}.modal-outside[data-v-33cf4c38]:before{background:rgba(0,0,0,.5);content:\"\";height:100%;left:0;position:fixed;top:0;width:100%}.form-wrapper[data-v-33cf4c38]{animation:fadeIn-33cf4c38 .7s forwards;padding-bottom:40px;padding-top:20px}.header-wrapper[data-v-33cf4c38]{border-bottom:1px solid hsla(0,0%,100%,.125);padding-bottom:20px;padding-top:20px}.header-wrapper h2[data-v-33cf4c38]{font-size:24px;padding-top:10px}.button-wrapper[data-v-33cf4c38]{border-top:1px solid hsla(0,0%,100%,.125);padding-bottom:20px;padding-top:20px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/modal/AddressForm.vue?vue&type=template&id=33cf4c38&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "modal-outside",
    on: {
      "click": _vm.closeModal
    }
  }, [_vm._ssrNode("<section id=\"address-modal\" class=\"container\" data-v-33cf4c38>", "</section>", [_vm._ssrNode("<div class=\"header-wrapper d-flex flex-row justify-content-around align-items-center\" data-v-33cf4c38><img src=\"icons/left-arrow.svg\" class=\"icon\" data-v-33cf4c38> <h2 data-v-33cf4c38>Informe seu endereço</h2> <img src=\"icons/close-icon.svg\" class=\"icon\" data-v-33cf4c38></div> "), _vm._ssrNode("<div class=\"form-wrapper\" data-v-33cf4c38>", "</div>", [_vm._ssrNode("<form class=\"d-block mx-auto\" data-v-33cf4c38>", "</form>", [_vm._ssrNode("<div class=\"d-flex flex-column col-12\" data-v-33cf4c38>", "</div>", [_vm._ssrNode("<label for=\"cep\" data-v-33cf4c38>CEP <span class=\"required-signal\" data-v-33cf4c38>*</span></label> "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.customerAddress.cep,
      expression: "customerAddress.cep"
    }, {
      name: "mask",
      rawName: "v-mask",
      value: '#####-###',
      expression: "'#####-###'"
    }],
    attrs: {
      "id": "cep",
      "type": "text",
      "name": "cep",
      "placeholder": "00000-000",
      "required": ""
    },
    domProps: {
      "value": _vm.customerAddress.cep
    },
    on: {
      "blur": function ($event) {
        return _vm.getCepData(_vm.customerAddress.cep);
      },
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.customerAddress, "cep", $event.target.value);
      }
    }
  }, []), _vm._ssrNode(" " + (_vm.submitted && !_vm.$v.customerAddress.addressNumber.cep ? "<span class=\"error-message\" data-v-33cf4c38>O CEP é obrigatório.</span>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"d-flex flex-row col-12\" data-v-33cf4c38><div class=\"d-flex flex-column col-8 pl-0\" data-v-33cf4c38><label for=\"street\" data-v-33cf4c38>Rua <span class=\"required-signal\" data-v-33cf4c38>*</span></label> <input id=\"street\" type=\"text\" name=\"street\" placeholder=\"Rua\" required=\"required\"" + _vm._ssrAttr("value", _vm.customerAddress.street) + " data-v-33cf4c38> " + (_vm.submitted && !_vm.$v.customerAddress.street.required ? "<span class=\"error-message\" data-v-33cf4c38>O nome da rua é obrigatório.</span>" : "<!---->") + "</div> <div class=\"d-flex flex-column col-4 pr-0\" data-v-33cf4c38><label for=\"address-number\" data-v-33cf4c38>Número <span class=\"required-signal\" data-v-33cf4c38>*</span></label> <input id=\"address-number\" type=\"text\" name=\"address-number\" placeholder=\"Nº\" required=\"required\"" + _vm._ssrAttr("value", _vm.customerAddress.addressNumber) + " data-v-33cf4c38> " + (_vm.submitted && !_vm.$v.customerAddress.addressNumber.required ? "<span class=\"error-message\" data-v-33cf4c38>O número é obrigatório.</span>" : "<!---->") + "</div></div> <div class=\"d-flex flex-row col-12\" data-v-33cf4c38><div class=\"d-flex flex-column col-4 pl-0\" data-v-33cf4c38><label for=\"neighborhood\" data-v-33cf4c38>Bairro <span class=\"required-signal\" data-v-33cf4c38>*</span></label> <input id=\"neighborhood\" type=\"text\" name=\"neighborhood\" placeholder=\"Bairro\" required=\"required\"" + _vm._ssrAttr("value", _vm.customerAddress.neighborhood) + " data-v-33cf4c38> " + (_vm.submitted && !_vm.$v.customerAddress.neighborhood.required ? "<span class=\"error-message\" data-v-33cf4c38>O bairro é obrigatório.</span>" : "<!---->") + "</div> <div class=\"d-flex flex-column col-4 px-1\" data-v-33cf4c38><label for=\"street\" data-v-33cf4c38>Cidade <span class=\"required-signal\" data-v-33cf4c38>*</span></label> <input id=\"city\" type=\"text\" name=\"city\" placeholder=\"Cidade\" required=\"required\"" + _vm._ssrAttr("value", _vm.customerAddress.city) + " data-v-33cf4c38> " + (_vm.submitted && !_vm.$v.customerAddress.city.required ? "<span class=\"error-message\" data-v-33cf4c38>A cidade é obrigatório.</span>" : "<!---->") + "</div> <div class=\"d-flex flex-column col-4 pr-0\" data-v-33cf4c38><label for=\"street\" data-v-33cf4c38>Estado <span class=\"required-signal\" data-v-33cf4c38>*</span></label> <input id=\"state\" type=\"text\" name=\"state\" placeholder=\"Estado\" required=\"required\"" + _vm._ssrAttr("value", _vm.customerAddress.state) + " data-v-33cf4c38> " + (_vm.submitted && !_vm.$v.customerAddress.state.required ? "<span class=\"error-message\" data-v-33cf4c38>O estado é obrigatório.</span>" : "<!---->") + "</div></div> <div class=\"d-flex flex-column col-12\" data-v-33cf4c38><label for=\"complement\" data-v-33cf4c38>Complemento</label> <input id=\"complement\" type=\"text\" name=\"complement\" placeholder=\"Coloque um complemento (opcional)\" data-v-33cf4c38></div>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"button-wrapper\" data-v-33cf4c38>", "</div>", [_c('b-button', {
    staticClass: "modal-submit",
    attrs: {
      "type": "submit",
      "variant": "primary"
    },
    on: {
      "click": function ($event) {
        _vm.personalDataFilledIn();
        _vm.setAddressData();
      }
    }
  }, [_vm._v("Próximo")])], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/modal/AddressForm.vue?vue&type=template&id=33cf4c38&scoped=true

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/modal/AddressForm.vue?vue&type=script&lang=js

/* harmony default export */ var AddressFormvue_type_script_lang_js = ({
  name: 'AddressModal',
  data() {
    return {
      customerAddress: {
        cep: '',
        street: '',
        addressNumber: '',
        neighborhood: '',
        city: '',
        state: ''
      },
      viaCepReturn: {},
      submitted: false
    };
  },
  validations: {
    customerAddress: {
      cep: {
        required: validators_["required"],
        isCepValid: validators_["helpers"].regex('isCepValid', /^\d{5}-?\d{3}$/)
      },
      street: {
        required: validators_["required"]
      },
      addressNumber: {
        required: validators_["required"]
      },
      neighborhood: {
        required: validators_["required"]
      },
      city: {
        required: validators_["required"]
      },
      state: {
        required: validators_["required"]
      }
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
    closeModalX() {
      this.$emit('closeModal');
    },
    getPreviousForm() {
      this.$emit('getPreviousForm');
    },
    async getCepData(cep) {
      try {
        const viacepReturn = await this.$axios.$get(`https://viacep.com.br/ws/${cep}/json/`);
        this.customerAddress.street = viacepReturn.logradouro;
        this.customerAddress.neighborhood = viacepReturn.bairro;
        this.customerAddress.city = viacepReturn.localidade;
        this.customerAddress.state = viacepReturn.uf;
      } catch {
        console.error('Erro');
      }
    },
    personalDataFilledIn() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.$emit('addressFilledIn');
    },
    setAddressData() {
      this.$store.commit('setAddress', {
        cep: this.customerAddress.cep,
        street: this.customerAddress.street,
        addressNumber: this.customerAddress.cep,
        neighborhood: this.customerAddress.cep,
        city: this.customerAddress.cep,
        state: this.customerAddress.state
      });
    }
  }
});
// CONCATENATED MODULE: ./components/modal/AddressForm.vue?vue&type=script&lang=js
 /* harmony default export */ var modal_AddressFormvue_type_script_lang_js = (AddressFormvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/modal/AddressForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(46)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modal_AddressFormvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "33cf4c38",
  "1fc48dbc"
  
)

/* harmony default export */ var AddressForm = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=modal-address-form.js.map