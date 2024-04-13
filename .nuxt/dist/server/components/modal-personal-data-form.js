exports.ids = [3];
exports.modules = {

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3387eab0", content, true, context)
};

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalDataForm_vue_vue_type_style_index_0_id_276c4c08_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalDataForm_vue_vue_type_style_index_0_id_276c4c08_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalDataForm_vue_vue_type_style_index_0_id_276c4c08_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalDataForm_vue_vue_type_style_index_0_id_276c4c08_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalDataForm_vue_vue_type_style_index_0_id_276c4c08_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@keyframes fadeIn-276c4c08{0%{transform:translate(-50%,-50%) translateY(-30px)}to{transform:translate(-50%,-50%) translateY(0)}}#modal-container[data-v-276c4c08]:before{background:rgba(0,0,0,.5);content:\"\";height:100%;left:0;position:fixed;top:0;width:100%}#modal[data-v-276c4c08]{animation:fadeIn-276c4c08 .5s forwards;background:#2b2e3b;border-radius:12px;left:50%;max-width:600px;padding:0;position:absolute;top:50%;transform:translate(-50%,-50%)}#form-header[data-v-276c4c08]{border-bottom:1px solid hsla(0,0%,100%,.125);padding-bottom:20px;padding-top:20px}#form-header h2[data-v-276c4c08]{font-size:24px;padding-top:10px}.form-wrapper[data-v-276c4c08]{padding-bottom:40px;padding-top:20px}.button-wrapper[data-v-276c4c08]{border-top:1px solid hsla(0,0%,100%,.125)}#go-to-address[data-v-276c4c08]{margin-bottom:20px;margin-top:20px;width:78%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/modal/PersonalDataForm.vue?vue&type=template&id=276c4c08&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "modal-container",
      "fluid": ""
    },
    on: {
      "click": _vm.closeModal
    }
  }, [_vm._ssrNode("<section id=\"modal\" class=\"container col-10\" data-v-276c4c08>", "</section>", [_vm._ssrNode("<div id=\"form-header\" class=\"d-flex flex-row justify-content-around align-items-center\" data-v-276c4c08><img src=\"/icons/left-arrow.svg\" class=\"icon\" data-v-276c4c08> <h2 id=\"form-headline\" class=\"text-white\" data-v-276c4c08>Informe seus dados pessoais</h2> <img src=\"/icons/close-icon.svg\" class=\"icon\" data-v-276c4c08></div> "), _vm._ssrNode("<div id class=\"form-wrapper\" data-v-276c4c08>", "</div>", [_vm._ssrNode("<form class=\"d-block mx-auto\" data-v-276c4c08>", "</form>", [_vm._ssrNode("<div class=\"d-flex flex-column col-12\" data-v-276c4c08><label for=\"name\" data-v-276c4c08>Nome <span class=\"required-signal\" data-v-276c4c08>*</span></label> <input id=\"name\" type=\"text\" name=\"name\" placeholder=\"Coloque seu nome completo\" required=\"required\"" + _vm._ssrAttr("value", _vm.customerData.name) + " data-v-276c4c08> " + (_vm.submitted && !_vm.$v.customerData.name.required ? "<span class=\"error-message\" data-v-276c4c08>O nome é obrigatório.</span>" : "<!---->") + "</div> <div class=\"d-flex flex-column col-12\" data-v-276c4c08><label for=\"email\" data-v-276c4c08>E-mail <span class=\"required-signal\" data-v-276c4c08>*</span></label> <input id=\"email\" type=\"email\" name=\"email\" placeholder=\"Digite um e-mail válido\" required=\"required\"" + _vm._ssrAttr("value", _vm.customerData.mail) + " data-v-276c4c08> " + (_vm.submitted && !_vm.$v.customerData.mail.required ? "<span class=\"error-message\" data-v-276c4c08>E-mail é obrigatório!</span>" : "<!---->") + " " + (_vm.submitted && !_vm.$v.customerData.mail.email ? "<span class=\"error-message\" data-v-276c4c08>E-mail inválido!</span>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"d-flex flex-column col-12\" data-v-276c4c08>", "</div>", [_vm._ssrNode("<label for=\"cpf-cnpj\" data-v-276c4c08>CPF/CNPJ <span class=\"required-signal\" data-v-276c4c08>*</span></label> "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.customerData.registrationNumber,
      expression: "customerData.registrationNumber"
    }, {
      name: "mask",
      rawName: "v-mask",
      value: _vm.maskCpfCnpj,
      expression: "maskCpfCnpj"
    }],
    attrs: {
      "id": "cpf-cnpj",
      "type": "text",
      "name": "cpf-cnpj",
      "placeholder": "Digite seu CPF ou CNPJ",
      "required": ""
    },
    domProps: {
      "value": _vm.customerData.registrationNumber
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.customerData, "registrationNumber", $event.target.value);
      }
    }
  }, []), _vm._ssrNode(" " + (_vm.submitted && !_vm.$v.customerData.registrationNumber.required ? "<span class=\"error-message\" data-v-276c4c08>CPF ou CNPJ é obrigatório.</span>" : "<!---->") + " " + (_vm.submitted && !_vm.$v.customerData.registrationNumber.isCpfCnpjValid ? "<span class=\"error-message\" data-v-276c4c08>CPF ou CNPJ é obrigatório.</span>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"d-flex flex-column col-12\" data-v-276c4c08>", "</div>", [_vm._ssrNode("<label for=\"phone\" data-v-276c4c08>Telefone <span class=\"required-signal\" data-v-276c4c08>*</span></label> "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.customerData.phone,
      expression: "customerData.phone"
    }, {
      name: "mask",
      rawName: "v-mask",
      value: '(##) #####-####',
      expression: "'(##) #####-####'"
    }],
    attrs: {
      "id": "phone",
      "type": "tel",
      "name": "phone",
      "placeholder": "Digite seu número do WhatsApp",
      "required": ""
    },
    domProps: {
      "value": _vm.customerData.phone
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.customerData, "phone", $event.target.value);
      }
    }
  }, []), _vm._ssrNode(" " + (_vm.submitted && !_vm.$v.customerData.phone.required ? "<span class=\"error-message\" data-v-276c4c08>O telefone é obrigatório.</span>" : "<!---->") + " " + (_vm.submitted && !_vm.$v.customerData.phone.isPhoneValid ? "<span class=\"error-message\" data-v-276c4c08>Formato de telefone inválido.</span>" : "<!---->"))], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"button-wrapper\" data-v-276c4c08>", "</div>", [_c('b-button', {
    staticClass: "modal-submit",
    attrs: {
      "id": "go-to-address",
      "type": "submit",
      "variant": "primary"
    },
    on: {
      "click": function ($event) {
        _vm.setPersonalInfo();
        _vm.nextStep();
      }
    }
  }, [_vm._v("Próximo")])], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/modal/PersonalDataForm.vue?vue&type=template&id=276c4c08&scoped=true

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/modal/PersonalDataForm.vue?vue&type=script&lang=js

/* harmony default export */ var PersonalDataFormvue_type_script_lang_js = ({
  name: 'PersonalData',
  data() {
    return {
      customerData: {
        name: '',
        mail: '',
        registrationNumber: '',
        phone: ''
      },
      inputValidation: {
        error: false,
        errorMessage: ''
      },
      submitted: false
    };
  },
  validations: {
    customerData: {
      name: {
        required: validators_["required"]
      },
      mail: {
        required: validators_["required"],
        email: validators_["email"]
      },
      registrationNumber: {
        required: validators_["required"],
        isCpfCnpjValid: validators_["helpers"].regex('isCpfCnpjValid', /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/)
      },
      phone: {
        required: validators_["required"],
        isPhoneValid: validators_["helpers"].regex('isPhoneValid', /^\(\d{2}\) \d{5}-\d{4}$/)
      }
    }
  },
  watch: {
    'customerData.registrationNumber': function (newVal) {
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
    closeModalX() {
      this.$emit('closeModal');
    },
    setPersonalInfo() {
      this.$store.commit('setPersonalInfo', {
        name: this.customerData.name,
        mail: this.customerData.mail,
        identifier: this.customerData.registrationNumber,
        phone: this.customerData.phone
      });
    },
    nextStep() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.$emit('nextStep');
    },
    updateCpfCnpj() {
      const cleanValue = this.customerData.registrationNumber.replace(/\D+/g, '');
      const length = cleanValue.length;
      if (length <= 11) {
        this.maskCpfCnpj = '###.###.###-##';
      } else {
        this.maskCpfCnpj = '##.###.###/####-##';
      }
    }
  }
});
// CONCATENATED MODULE: ./components/modal/PersonalDataForm.vue?vue&type=script&lang=js
 /* harmony default export */ var modal_PersonalDataFormvue_type_script_lang_js = (PersonalDataFormvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/modal/PersonalDataForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(44)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modal_PersonalDataFormvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "276c4c08",
  "10329dd8"
  
)

/* harmony default export */ var PersonalDataForm = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=modal-personal-data-form.js.map