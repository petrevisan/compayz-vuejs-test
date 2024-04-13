exports.ids = [6];
exports.modules = {

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("55a92870", content, true, context)
};

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_PreCheckout_vue_vue_type_style_index_0_id_293ee7a8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_PreCheckout_vue_vue_type_style_index_0_id_293ee7a8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_PreCheckout_vue_vue_type_style_index_0_id_293ee7a8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_PreCheckout_vue_vue_type_style_index_0_id_293ee7a8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_PreCheckout_vue_vue_type_style_index_0_id_293ee7a8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#plan-price[data-v-293ee7a8]{background:#373c4b;border-radius:12px;padding-bottom:10px;padding-top:10px}#chosen-plan[data-v-293ee7a8]{border-bottom:1px solid hsla(0,0%,100%,.125);border-top:1px solid hsla(0,0%,100%,.125);padding-bottom:50px;padding-top:25px}#total-price[data-v-293ee7a8]{background:#777;border-radius:5px;margin:10px;padding-bottom:8px;padding-top:8px}#sign-button[data-v-293ee7a8]{font-weight:700;margin-top:15px;width:97%}.font[data-v-293ee7a8]{font-size:22px;font-weight:700}@media(max-width:1024px){#sign-button[data-v-293ee7a8]{width:90%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/PreCheckout.vue?vue&type=template&id=293ee7a8&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div id=\"plan-price\" data-v-293ee7a8>", "</div>", [_vm._ssrNode("<div id=\"your-choice\" data-v-293ee7a8><h2 class=\"text-white p-3 font text-center text-lg-left\" data-v-293ee7a8>Sua escolha</h2></div> <div id=\"chosen-plan\" class=\"d-flex flex-row justify-content-between px-3\" data-v-293ee7a8><div class=\"d-flex flex-column\" data-v-293ee7a8><span class=\"text-white\" data-v-293ee7a8>" + _vm._ssrEscape(_vm._s(_vm.planName)) + "</span> " + (_vm.extraDomains > 0 ? "<span class=\"text-white\" data-v-293ee7a8>" + _vm._ssrEscape("+ " + _vm._s(_vm.extraDomains) + " domínio(s)") + "</span>" : "<!---->") + "</div> <div class=\"d-flex flex-column\" data-v-293ee7a8><span class=\"text-white\" data-v-293ee7a8>" + _vm._ssrEscape(_vm._s(_vm.priceFormatterToBrl)) + "</span> " + (_vm.extraDomains > 0 ? "<span class=\"text-white\" data-v-293ee7a8>" + _vm._ssrEscape(_vm._s(_vm.extraDomainsCost)) + "</span>" : "<!---->") + "</div></div> <div id=\"total-price\" class=\"d-flex flex-row justify-content-between px-3\" data-v-293ee7a8><span class=\"text-white\" data-v-293ee7a8>TOTAL</span> <span class=\"text-white\" data-v-293ee7a8>" + _vm._ssrEscape(_vm._s(_vm.totalPrice)) + "</span></div> "), _c('b-button', {
    staticClass: "mx-auto d-block",
    attrs: {
      "id": "sign-button",
      "variant": "primary"
    },
    on: {
      "click": _vm.openDataModal
    }
  }, [_vm._v("Assinar Plano")])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PreCheckout.vue?vue&type=template&id=293ee7a8&scoped=true

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/PreCheckout.vue?vue&type=script&lang=js
/* harmony default export */ var PreCheckoutvue_type_script_lang_js = ({
  name: 'PreCheckout',
  props: {
    extraDomainsSelected: Number,
    planName: String,
    planPrice: Number,
    extraDomains: Number
  },
  data() {
    return {};
  },
  computed: {
    priceFormatterToBrl() {
      return this.planPrice.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
    },
    extraDomainsCost() {
      const domainsPrice = this.extraDomains * 5;
      return domainsPrice.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
    },
    totalPrice() {
      const totalPrice = this.planPrice + this.extraDomains * 5;
      return totalPrice.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
    }
  },
  methods: {
    openDataModal() {
      this.$emit('openDataModal');
    }
  }
});
// CONCATENATED MODULE: ./components/PreCheckout.vue?vue&type=script&lang=js
 /* harmony default export */ var components_PreCheckoutvue_type_script_lang_js = (PreCheckoutvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PreCheckout.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(50)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PreCheckoutvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "293ee7a8",
  "1d060135"
  
)

/* harmony default export */ var PreCheckout = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=pre-checkout.js.map