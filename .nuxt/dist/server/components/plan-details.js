exports.ids = [4];
exports.modules = {

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("30ee6666", content, true, context)
};

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanDetails_vue_vue_type_style_index_0_id_9e9ba880_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanDetails_vue_vue_type_style_index_0_id_9e9ba880_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanDetails_vue_vue_type_style_index_0_id_9e9ba880_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanDetails_vue_vue_type_style_index_0_id_9e9ba880_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_PlanDetails_vue_vue_type_style_index_0_id_9e9ba880_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".plan-included[data-v-9e9ba880]{border:1px solid hsla(0,0%,100%,.125);border-radius:12px;padding:10px}.font[data-v-9e9ba880]{font-size:22px;font-weight:700}@media(max-width:768px){h2[data-v-9e9ba880]{font-size:24px;font-weight:700;text-align:center}.font[data-v-9e9ba880]{font-size:18px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/PlanDetails.vue?vue&type=template&id=9e9ba880&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"plan-included d-flex flex-column mb-3 mb-md-0 py-4\" data-v-9e9ba880><h2 class=\"pb-3 pl-lg-2\" data-v-9e9ba880>" + _vm._ssrEscape("O " + _vm._s(_vm.planName) + " irá incluir") + "</h2> <div class=\"d-flex flex-row\" data-v-9e9ba880><span class=\"col-6 col-lg-9\" data-v-9e9ba880>MemberZ</span> <span class=\"col-6 col-lg-3 text-center\" data-v-9e9ba880>1</span></div></div> <div class=\"plan-included d-flex flex-row p-3\" data-v-9e9ba880><div class=\"d-flex flex-column justify-content-center col-6 col-lg-9\" data-v-9e9ba880><span class=\"text-left font\" data-v-9e9ba880>Domínios</span> <span class=\"text-left col-6 p-0\" data-v-9e9ba880>Adicionar pacotes avulsos</span></div> <div class=\"d-flex flex-column justify-content-end align-items-center col-6 col-lg-3\" data-v-9e9ba880><span class=\"text-center\" data-v-9e9ba880>3</span> " + (_vm.extraDomains > 1 ? "<span class=\"text-center\" data-v-9e9ba880>" + _vm._ssrEscape("+ " + _vm._s(_vm.extraDomains) + " inclusos") + "</span>" : "<!---->") + " <input type=\"range\" min=\"0\" max=\"70\"" + _vm._ssrAttr("value", _vm.extraDomains) + " data-v-9e9ba880></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PlanDetails.vue?vue&type=template&id=9e9ba880&scoped=true

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/PlanDetails.vue?vue&type=script&lang=js
/* harmony default export */ var PlanDetailsvue_type_script_lang_js = ({
  name: 'PlanDetails',
  props: {
    planName: String
  },
  data() {
    return {
      extraDomains: 0
    };
  },
  methods: {
    setExtraDomains() {
      const settedDomains = this.extraDomains;
      this.$emit('setExtraDomains', settedDomains);
    }
  }
});
// CONCATENATED MODULE: ./components/PlanDetails.vue?vue&type=script&lang=js
 /* harmony default export */ var components_PlanDetailsvue_type_script_lang_js = (PlanDetailsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PlanDetails.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PlanDetailsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9e9ba880",
  "213551f6"
  
)

/* harmony default export */ var PlanDetails = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=plan-details.js.map