/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.header {\n  background-color: rgb(179, 68, 87);\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 4rem;\n  width: 100%;\n}\n.header button {\n  justify-self: end;\n  outline: none;\n  background-color: rgb(179, 68, 87);\n  border: none;\n}\n.header svg {\n  height: 1.5rem;\n}\n.header svg path {\n  fill: white;\n}\n\n.content {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  width: 100%;\n}\n.content .sidePanel {\n  background-color: rgb(240, 186, 195);\n  height: 88vh;\n  display: grid;\n  grid-template-rows: 3fr 1fr 6fr 1fr;\n  color: rgb(22, 4, 22);\n}\n.content .sidePanel .topPanel {\n  display: flex;\n  flex-direction: column;\n}\n.content .sidePanel .topPanel > * {\n  display: flex;\n  cursor: pointer;\n  padding-top: 14px;\n}\n.content .sidePanel .bottomPanel {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.content .sidePanel .bottomPanel > * {\n  padding-top: 20px;\n}\n.content .sidePanel button {\n  background-color: rgb(240, 186, 195);\n  outline: none;\n  border: none;\n  cursor: pointer;\n  font-family: \"Lora\", Georgia, serif;\n  color: rgb(22, 4, 22);\n  font-size: 1rem;\n}\n.content .sidePanel button svg.feather.feather-plus-square {\n  height: 100%;\n}\n.content .sidePanel button .tooltip {\n  opacity: 0;\n  position: absolute;\n  z-index: 999999999999;\n  font-family: \"Lora\", Georgia, serif;\n  font-size: 0.8rem;\n  text-align: center;\n  color: rgb(22, 4, 22);\n  background-color: rgb(179, 68, 87);\n  padding: 5px 0;\n  border-radius: 6px;\n  width: 120px;\n}\n.content .sidePanel button .tooltip:hover {\n  opacity: 1;\n}\n\n.popup {\n  margin: auto;\n  position: absolute;\n  filter: none;\n  top: 100px;\n  z-index: 10;\n  width: 100%;\n  height: 300px;\n  font-family: \"Lora\", Georgia, serif;\n}\n.popup form {\n  width: 70%;\n  height: 100%;\n  background-color: rgb(240, 186, 195);\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 12px;\n  box-shadow: 0 0 16px 8px rgb(179, 68, 87);\n  display: grid;\n  grid-template-rows: 1fr 4fr 2fr 1fr;\n}\n.popup form textarea {\n  background-color: rgb(243, 229, 231);\n  outline: none;\n  color: rgb(22, 4, 22);\n  border: none;\n  resize: none;\n  font-family: \"Lora\", Georgia, serif;\n  font-size: 1rem;\n  padding: 10px;\n  overflow: hidden;\n}\n.popup form textarea textarea:focus {\n  font-size: 1.2rem;\n}\n.popup form .controls {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  align-items: center;\n  padding: 0 10px;\n}\n.popup form .controls #duedate,\n.popup form .controls #duetime,\n.popup form .controls #priority,\n.popup form .controls label,\n.popup form .controls option {\n  font-family: \"Lora\", Georgia, serif;\n  color: rgb(22, 4, 22);\n  font-size: 0.8rem;\n}\n.popup form .buttonBox {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  padding-bottom: 10px;\n}\n.popup form .buttonBox button {\n  width: 50%;\n  outline: none;\n  border: 1px solid rgb(240, 186, 195);\n  border-radius: 16px;\n  font-family: \"Lora\", Georgia, serif;\n  color: white;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  cursor: pointer;\n}\n.popup form .buttonBox #submit {\n  background-color: rgb(179, 68, 87);\n  color: white;\n  justify-self: flex-end;\n  margin-right: 5px;\n}\n.popup form .buttonBox #cancel {\n  background-color: rgb(129, 111, 114);\n  justify-self: flex-start;\n  margin-left: 5px;\n}\n\n.todoListItem {\n  border-bottom: 1px solid rgb(179, 68, 87);\n  border-radius: 16px;\n  width: 90%;\n  padding: 5px;\n  margin: 5px auto;\n  display: flex;\n  box-shadow: 0 0 8px rgb(179, 68, 87);\n  height: 2rem;\n  align-items: center;\n  justify-content: space-evenly;\n  color: rgb(22, 4, 22);\n}\n.todoListItem #todoListButton {\n  background-color: rgb(240, 186, 195);\n  font-family: \"Lora\", Georgia, serif;\n  padding: 3px 16px;\n  border-radius: 16px;\n  color: rgb(22, 4, 22);\n  border: none;\n  outline: none;\n}\n.todoListItem svg {\n  height: 90%;\n  cursor: pointer;\n}\n\nbody {\n  font-family: \"Lora\", Georgia, serif;\n}/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css","webpack://./src/scssfiles/_header.scss","webpack://./src/scssfiles/_variables.scss","webpack://./src/scssfiles/_content.scss","webpack://./src/scssfiles/_popup.scss","webpack://./src/scssfiles/_todolistitem.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;ACEF;;ACLA;EACE,kCCDQ;EDER,YCDU;EDEV,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;ADQF;ACPE;EACE,iBAAA;EACA,aAAA;EACA,kCCXM;EDYN,YAAA;ADSJ;ACPE;EACE,cAAA;ADSJ;ACPI;EACE,WCjBM;AF0BZ;;AG3BA;EACE,aAAA;EACA,8BAAA;EACA,WAAA;AH8BF;AG5BE;EACE,oCDHQ;ECIR,YAAA;EACA,aAAA;EACA,mCAAA;EACA,qBDRO;AFsCX;AG7BI;EACE,aAAA;EACA,sBAAA;AH+BN;AG9BM;EACE,aAAA;EACA,eAAA;EACA,iBAAA;AHgCR;AG7BI;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;AH+BN;AG9BM;EACE,iBAAA;AHgCR;AG7BI;EACE,oCD1BM;EC2BN,aAAA;EACA,YAAA;EACA,eAAA;EACA,mCD1BE;EC2BF,qBDhCK;ECiCL,eAAA;AH+BN;AG9BM;EACE,YAAA;AHgCR;AG9BM;EACE,UAAA;EACA,kBAAA;EACA,qBAAA;EACA,mCDpCA;ECqCA,iBAAA;EACA,kBAAA;EACA,qBD5CG;EC6CH,kCD/CE;ECgDF,cAAA;EACA,kBAAA;EACA,YAAA;AHgCR;AG9BM;EACE,UAAA;AHgCR;;AIrFA;EACE,YAAA;EACA,kBAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,aAAA;EACA,mCFDM;AFyFR;AIvFE;EACE,UAAA;EACA,YAAA;EACA,oCFTQ;EEUR,iBAAA;EACA,kBAAA;EACA,mBAAA;EACA,yCAAA;EACA,aAAA;EACA,mCAAA;AJyFJ;AIxFI;EACE,oCFfW;EEgBX,aAAA;EACA,qBFpBK;EEqBL,YAAA;EACA,YAAA;EACA,mCFlBE;EEmBF,eAAA;EACA,aAAA;EACA,gBAAA;AJ0FN;AIzFM;EACE,iBAAA;AJ2FR;AIxFI;EACE,aAAA;EACA,sCAAA;EACA,mBAAA;EACA,eAAA;AJ0FN;AIzFM;;;;;EAKE,mCFpCA;EEqCA,qBF1CG;EE2CH,iBAAA;AJ2FR;AIxFI;EACE,aAAA;EACA,8BAAA;EACA,oBAAA;AJ0FN;AIzFM;EACE,UAAA;EACA,aAAA;EACA,oCAAA;EACA,mBAAA;EACA,mCFlDA;EEmDA,YFzDI;EE0DJ,gBAAA;EACA,mBAAA;EACA,eAAA;AJ2FR;AIzFM;EACE,kCFhEE;EEiEF,YFhEI;EEiEJ,sBAAA;EACA,iBAAA;AJ2FR;AIzFM;EACE,oCFlEC;EEmED,wBAAA;EACA,gBAAA;AJ2FR;;AKnKA;EACE,yCAAA;EACA,mBAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;EACA,oCAAA;EACA,YAAA;EACA,mBAAA;EACA,6BAAA;EACA,qBHTS;AF+KX;AKrKE;EACE,oCHVQ;EGWR,mCHPI;EGQJ,iBAAA;EACA,mBAAA;EACA,qBHfO;EGgBP,YAAA;EACA,aAAA;ALuKJ;AKrKE;EACE,WAAA;EACA,eAAA;ALuKJ;;ADjLA;EACE,mCGPM;AF2LR,CAAA,oCAAA","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/buttonfunctions.js":
/*!****************************************!*\
  !*** ./src/modules/buttonfunctions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buttonFunctions)
/* harmony export */ });
/* harmony import */ var _rendertodolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rendertodolist */ "./src/modules/rendertodolist.js");
/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todolist */ "./src/modules/todolist.js");
/* harmony import */ var _formvalidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formvalidation */ "./src/modules/formvalidation.js");
/* harmony import */ var _todolistdelete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todolistdelete */ "./src/modules/todolistdelete.js");





function buttonFunctions() {
  (0,_formvalidation__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const title = document.querySelector("#popupTitle").value;
  const description = document.querySelector("#popupDescription").value;
  const dueDate = document.querySelector("#duedate").value;
  const dueTime = document.querySelector("#duetime").value;
  const priority = document.querySelector("#priority").value;

  const todoList = (0,_todolist__WEBPACK_IMPORTED_MODULE_1__["default"])();
  todoList.addTodo(title, description, dueDate, dueTime, priority);

  (0,_rendertodolist__WEBPACK_IMPORTED_MODULE_0__["default"])();

  const todoListPriority = document.querySelector(".todoListPriority");

  if (priority === "Low") {
    // set different svg colors for all priority levels
    todoListPriority.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>';
  } else if (priority === "Medium") {
    todoListPriority.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>';
  } else {
    todoListPriority.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>';
  }

  const todoListTitle = document.querySelector(".todoListTitle");
  todoListTitle.textContent = title;

  const todoListButton = document.querySelector("#todoListButton");
  todoListButton.textContent = "DETAILS";

  const todoListDueDate = document.querySelector(".todoListDueDate");
  todoListDueDate.textContent = dueDate;

  const todoListDueTime = document.querySelector(".todoListDueTime");
  todoListDueTime.textContent = dueTime;

  const todoListEdit = document.querySelector(".todoListEdit");
  todoListEdit.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>';

  const todoListDelete = document.querySelector(".todoListDelete");
  todoListDelete.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>';
  todoListDelete.addEventListener("click", _todolistdelete__WEBPACK_IMPORTED_MODULE_3__["default"]);
}


/***/ }),

/***/ "./src/modules/container.js":
/*!**********************************!*\
  !*** ./src/modules/container.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mainContainer)
/* harmony export */ });
function mainContainer() {
  const container = document.querySelector(".container");

  const content = document.createElement("div");
  content.classList.add("content");
  container.appendChild(content);

  const sidePanel = document.createElement("div");
  sidePanel.classList.add("sidePanel");
  content.appendChild(sidePanel);

  const mainPanel = document.createElement("div");
  mainPanel.classList.add("mainPanel");
  content.appendChild(mainPanel);
}


/***/ }),

/***/ "./src/modules/factoryfunctions.js":
/*!*****************************************!*\
  !*** ./src/modules/factoryfunctions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formActions)
/* harmony export */ });
/* harmony import */ var _buttonfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonfunctions */ "./src/modules/buttonfunctions.js");


function formActions() {
  const popupForm = document.querySelector("#popupForm"); // call eventlistener to form so that preventdefault works
  popupForm.addEventListener(
    "submit", // click method only validated first item in form, not all items
    (event) => {
      event.preventDefault();
      (0,_buttonfunctions__WEBPACK_IMPORTED_MODULE_0__["default"])();
      const content = document.querySelector(".content");
      const popup = document.querySelector(".popup");
      content.style.filter = "none";
      content.style.webkitFilter = "none";
      popup.style.display = "none";
    },
    true
  );
}


/***/ }),

/***/ "./src/modules/formvalidation.js":
/*!***************************************!*\
  !*** ./src/modules/formvalidation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ enableSubmit)
/* harmony export */ });
/* eslint-disable no-plusplus */
function enableSubmit() {
  const popupForm = document.querySelector("#popupForm");
  const requiredFields = popupForm.querySelectorAll("[required]");
  let allFilled = true;
  const submitButton = document.querySelector("#submit");
  if (allFilled) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "");
  }
  requiredFields.forEach((field) => {
    if (!field.value) {
      allFilled = false;
    }
  });
}

/* document.getElementById("submit").addEventListener("click", () => {
  console.log("You entered:", document.querySelector("#popupTitle").value);
}); */


/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taskPopUp)
/* harmony export */ });
/* harmony import */ var _factoryfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factoryfunctions */ "./src/modules/factoryfunctions.js");
/* harmony import */ var _formvalidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formvalidation */ "./src/modules/formvalidation.js");



function taskPopUp() {
  const container = document.querySelector(".container");

  const content = document.querySelector(".content");
  content.style.filter = "blur(20px)";
  content.style.webkitFilter = "blur(20px)";

  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.style.filter = "none";
  container.appendChild(popup);

  const popupForm = document.createElement("form");
  popup.setAttribute("id", "popupForm");
  popup.setAttribute("name", "popupForm");
  popup.appendChild(popupForm);

  const popupTitle = document.createElement("textarea");
  popupTitle.setAttribute("id", "popupTitle");
  popupTitle.addEventListener("input", _formvalidation__WEBPACK_IMPORTED_MODULE_1__["default"]);
  popupTitle.setAttribute("maxlength", "50");
  popupTitle.setAttribute("placeholder", "Title");
  popupTitle.setAttribute("name", "Title");
  popupTitle.setAttribute("required", "");
  popupForm.appendChild(popupTitle);

  const popupDescription = document.createElement("textarea");
  popupDescription.setAttribute("id", "popupDescription");
  popupDescription.setAttribute("maxlength", "140");
  popupDescription.setAttribute("placeholder", "Description");
  popupForm.appendChild(popupDescription);

  const controls = document.createElement("div");
  controls.classList.add("controls");
  popupForm.appendChild(controls);

  const dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "duedate");
  dateLabel.textContent = "Due Date";
  controls.appendChild(dateLabel);

  const datePicker = document.createElement("input");
  datePicker.setAttribute("type", "date");
  datePicker.setAttribute("id", "duedate");
  datePicker.addEventListener("input", _formvalidation__WEBPACK_IMPORTED_MODULE_1__["default"]);
  datePicker.setAttribute("name", "duedate");
  datePicker.setAttribute("placeholder", "Today");
  datePicker.required = true;
  controls.appendChild(datePicker);

  const timeLabel = document.createElement("label");
  timeLabel.setAttribute("for", "time");
  timeLabel.textContent = "Time";
  controls.appendChild(timeLabel);

  const timePicker = document.createElement("input");
  timePicker.setAttribute("type", "time");
  timePicker.setAttribute("id", "duetime");
  timePicker.addEventListener("input", _formvalidation__WEBPACK_IMPORTED_MODULE_1__["default"]);
  timePicker.setAttribute("name", "duetime");
  timePicker.setAttribute("placeholder", "now");
  timePicker.setAttribute("required", "");
  controls.appendChild(timePicker);

  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.textContent = "Priority Level";
  controls.appendChild(priorityLabel);

  const priorityPicker = document.createElement("select");
  priorityPicker.setAttribute("id", "priority");
  priorityPicker.setAttribute("change", _formvalidation__WEBPACK_IMPORTED_MODULE_1__["default"]);
  priorityPicker.setAttribute("name", "priority");
  priorityPicker.required = true;
  // priorityPicker.setAttribute("onchange", "updatePriority(this.value)");
  // priorityPicker.setAttribute("onfocus", "(this.type='select')");
  controls.appendChild(priorityPicker);

  const optionPlaceholder = document.createElement("option");
  optionPlaceholder.setAttribute("value", "");
  optionPlaceholder.setAttribute("disabled", "");
  optionPlaceholder.setAttribute("selected", "");
  optionPlaceholder.textContent = "Select";
  priorityPicker.appendChild(optionPlaceholder);

  const option1 = document.createElement("option");
  option1.classList.add("low");
  option1.setAttribute("value", "Low");
  option1.textContent = "Low";
  option1.style.color = "green";
  priorityPicker.appendChild(option1);

  const option2 = document.createElement("option");
  option2.classList.add("medium");
  option2.setAttribute("value", "Medium");
  option2.textContent = "Medium";
  option2.style.color = "orange";
  priorityPicker.appendChild(option2);

  const option3 = document.createElement("option");
  option3.classList.add("high");
  option3.setAttribute("value", "High");
  option3.textContent = "High";
  option3.style.color = "red";
  priorityPicker.appendChild(option3);

  const buttonBox = document.createElement("div");
  buttonBox.classList.add("buttonBox");
  popupForm.appendChild(buttonBox);

  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.setAttribute("id", "submit");
  button.textContent = "Submit";
  button.addEventListener("click", () => {
    (0,_factoryfunctions__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
  buttonBox.appendChild(button);

  const cancelButton = document.createElement("button");
  cancelButton.setAttribute("type", "button");
  cancelButton.setAttribute("id", "cancel");
  cancelButton.textContent = "Cancel";
  buttonBox.appendChild(cancelButton);

  function cancelForm() {
    cancelButton.addEventListener("click", () => {
      content.style.filter = "none";
      content.style.webkitFilter = "none";
      popup.style.display = "none";
    });
  }
  cancelForm();
}


/***/ }),

/***/ "./src/modules/rendertodolist.js":
/*!***************************************!*\
  !*** ./src/modules/rendertodolist.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderTodoList)
/* harmony export */ });
function renderTodoList() {
  const mainPanel = document.querySelector(".mainPanel");

  const listTodos = document.createElement("ul");
  listTodos.classList.add("listTodos");
  mainPanel.appendChild(listTodos);

  const todoListItem = document.createElement("li");
  todoListItem.classList.add("todoListItem");
  listTodos.appendChild(todoListItem);

  const todoListPriority = document.createElement("svg");
  todoListPriority.classList.add("todoListPriority");
  todoListItem.appendChild(todoListPriority);

  const todoListTitle = document.createElement("div");
  todoListTitle.classList.add("todoListTitle");
  todoListItem.appendChild(todoListTitle);

  const todoListButton = document.createElement("button");
  todoListButton.setAttribute("id", "todoListButton");
  todoListButton.setAttribute("type", "button");
  todoListItem.appendChild(todoListButton);

  const todoListDueDate = document.createElement("div");
  todoListDueDate.classList.add("todoListDueDate");
  todoListItem.appendChild(todoListDueDate);

  const todoListDueTime = document.createElement("div");
  todoListDueTime.classList.add("todoListDueTime");
  todoListItem.appendChild(todoListDueTime);

  const todoListEdit = document.createElement("svg");
  todoListEdit.classList.add("todoListEdit");
  todoListItem.appendChild(todoListEdit);

  const todoListDelete = document.createElement("svg");
  todoListDelete.classList.add("todoListDelete");
  todoListItem.appendChild(todoListDelete);
}


/***/ }),

/***/ "./src/modules/sidepanel.js":
/*!**********************************!*\
  !*** ./src/modules/sidepanel.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sidePanelFunction)
/* harmony export */ });
function sidePanelFunction() {
  const sidePanel = document.querySelector(".sidePanel");

  const topPanel = document.createElement("div");
  topPanel.classList.add("topPanel");
  sidePanel.appendChild(topPanel);

  const inbox = document.createElement("button");
  inbox.setAttribute("id", "inbox");
  inbox.setAttribute("type", "button");
  const icon1 = document.createElement("div");
  icon1.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>';
  inbox.appendChild(icon1);
  const text1 = document.createElement("h3");
  text1.textContent = "Inbox";
  inbox.appendChild(text1);
  topPanel.appendChild(inbox);

  const today = document.createElement("button");
  today.setAttribute("id", "today");
  today.setAttribute("type", "button");
  const icon2 = document.createElement("div");
  icon2.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>';
  today.appendChild(icon2);
  const text2 = document.createElement("h3");
  text2.textContent = "Today";
  today.appendChild(text2);
  topPanel.appendChild(today);

  const upcoming = document.createElement("button");
  upcoming.setAttribute("id", "upcoming");
  upcoming.setAttribute("type", "button");
  const icon3 = document.createElement("div");
  icon3.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>';
  upcoming.appendChild(icon3);
  const text3 = document.createElement("h3");
  text3.textContent = "Upcoming";
  upcoming.appendChild(text3);
  topPanel.appendChild(upcoming);

  const addButton = document.createElement("button");
  addButton.setAttribute("id", "addButton");
  addButton.setAttribute("type", "button");
  addButton.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>';
  sidePanel.appendChild(addButton);

  const tooltip1 = document.createElement("span");
  tooltip1.classList.add("tooltip");
  tooltip1.textContent = "Add To Do Item";
  addButton.appendChild(tooltip1);

  const bottomPanel = document.createElement("div");
  bottomPanel.classList.add("bottomPanel");
  sidePanel.appendChild(bottomPanel);

  const projects = document.createElement("div");
  projects.setAttribute("id", "projects");
  bottomPanel.appendChild(projects);
  const projectsTitle = document.createElement("h2");
  projectsTitle.textContent = "Projects";
  projects.appendChild(projectsTitle);

  const personal = document.createElement("button");
  personal.setAttribute("id", "personal");
  personal.setAttribute("type", "button");
  const text4 = document.createElement("h3");
  text4.textContent = "Personal";
  personal.appendChild(text4);
  bottomPanel.appendChild(personal);

  const work = document.createElement("button");
  work.setAttribute("id", "work");
  work.setAttribute("type", "button");
  const text5 = document.createElement("h3");
  text5.textContent = "Work";
  work.appendChild(text5);
  bottomPanel.appendChild(work);

  const addProject = document.createElement("button");
  addProject.setAttribute("id", "addProject");
  addProject.setAttribute("type", "button");
  addProject.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>';
  sidePanel.appendChild(addProject);

  const tooltip2 = document.createElement("span");
  tooltip2.classList.add("tooltip");
  tooltip2.textContent = "Add Projects";
  addProject.appendChild(tooltip2);
}


/***/ }),

/***/ "./src/modules/startpage.js":
/*!**********************************!*\
  !*** ./src/modules/startpage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startPage)
/* harmony export */ });
function startPage() {
  const { body } = document;

  const container = document.createElement("div");
  container.classList.add("container");
  body.appendChild(container);

  const header = document.createElement("div");
  header.classList.add("header");
  container.appendChild(header);

  const title = document.createElement("h1");
  title.textContent = "To-Do List";
  header.appendChild(title);

  const lightModeToggle = document.createElement("button");
  lightModeToggle.setAttribute("id", "lightModeToggle");
  lightModeToggle.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z" /></svg>';
  header.appendChild(lightModeToggle);
}


/***/ }),

/***/ "./src/modules/todolist.js":
/*!*********************************!*\
  !*** ./src/modules/todolist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-plusplus */
function todoitems(title, descriprion, dueDate, dueTime, priority) {
  return { title, descriprion, dueDate, dueTime, priority };
}

const createTodoList = () => {
  const todos = [];

  const addTodo = (title, descriprion, dueDate, dueTime, priority) => {
    const newTodo = todoitems(title, descriprion, dueDate, dueTime, priority);
    todos.push(newTodo);
  };

  /* const removeTodo = (index) => {
        todos.splice(index, 1);
        renderTodoList();
      }; */

  /* const toggleTodoCompletion = (index) => {
        todos[index].toggleCompletion();
        renderTodoList();
      }; */

  return {
    todos,
    addTodo /* removeTodo, toggleTodoCompletion */,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodoList);


/***/ }),

/***/ "./src/modules/todolistdelete.js":
/*!***************************************!*\
  !*** ./src/modules/todolistdelete.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoListDeleteButton)
/* harmony export */ });
/* eslint-disable no-plusplus */
function todoListDeleteButton() {
  /* const todoListDeleteButton =
    document.getElementsByClassName("todoListDelete");
  let i;
  for (i = 0; i < todoListDeleteButton.length; i++) {
    todoListDeleteButton[i].addEventListener("click", (e) => { */
  // console.log(e.target.innerHTML);
  const div = this.parentNode;
  div.style.display = "none";
  // });
  // }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_startpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/startpage */ "./src/modules/startpage.js");
/* harmony import */ var _modules_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/container */ "./src/modules/container.js");
/* harmony import */ var _modules_sidepanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sidepanel */ "./src/modules/sidepanel.js");
/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popup */ "./src/modules/popup.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");








(0,_modules_startpage__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_container__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_sidepanel__WEBPACK_IMPORTED_MODULE_2__["default"])();

function buttonPopup() {
  const addTaskButton = document.querySelector("#addButton");
  addTaskButton.addEventListener("click", () => {
    (0,_modules_popup__WEBPACK_IMPORTED_MODULE_3__["default"])();
  });
}
buttonPopup();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsdURBQVk7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHVEQUFZO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsdURBQVk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFXO0FBQ2YsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hJZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkNlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3RmU7QUFDZixVQUFVLE9BQU87O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzdCOUI7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGNBQWMsaUNBQWlDO0FBQy9DLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7Ozs7OztVQ1pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTRDOztBQUVJO0FBQ0k7QUFDWjs7QUFFbkI7O0FBRXJCLDhEQUFTO0FBQ1QsOERBQWE7QUFDYiw4REFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQVM7QUFDYixHQUFHO0FBQ0g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9idXR0b25mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2ZhY3RvcnlmdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZm9ybXZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVydG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc2lkZXBhbmVsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0YXJ0cGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvbGlzdGRlbGV0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb3JhOml0YWwsd2dodEAwLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzksIDY4LCA4Nyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5oZWFkZXIgYnV0dG9uIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzksIDY4LCA4Nyk7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5oZWFkZXIgc3ZnIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG4uaGVhZGVyIHN2ZyBwYXRoIHtcXG4gIGZpbGw6IHdoaXRlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jb250ZW50IC5zaWRlUGFuZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTg2LCAxOTUpO1xcbiAgaGVpZ2h0OiA4OHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDFmciA2ZnIgMWZyO1xcbiAgY29sb3I6IHJnYigyMiwgNCwgMjIpO1xcbn1cXG4uY29udGVudCAuc2lkZVBhbmVsIC50b3BQYW5lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmNvbnRlbnQgLnNpZGVQYW5lbCAudG9wUGFuZWwgPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMTRweDtcXG59XFxuLmNvbnRlbnQgLnNpZGVQYW5lbCAuYm90dG9tUGFuZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLmNvbnRlbnQgLnNpZGVQYW5lbCAuYm90dG9tUGFuZWwgPiAqIHtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG4uY29udGVudCAuc2lkZVBhbmVsIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxODYsIDE5NSk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgR2VvcmdpYSwgc2VyaWY7XFxuICBjb2xvcjogcmdiKDIyLCA0LCAyMik7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5jb250ZW50IC5zaWRlUGFuZWwgYnV0dG9uIHN2Zy5mZWF0aGVyLmZlYXRoZXItcGx1cy1zcXVhcmUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uY29udGVudCAuc2lkZVBhbmVsIGJ1dHRvbiAudG9vbHRpcCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTk5OTk5OTk5OTk5O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgR2VvcmdpYSwgc2VyaWY7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2IoMjIsIDQsIDIyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzksIDY4LCA4Nyk7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHdpZHRoOiAxMjBweDtcXG59XFxuLmNvbnRlbnQgLnNpZGVQYW5lbCBidXR0b24gLnRvb2x0aXA6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnBvcHVwIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZpbHRlcjogbm9uZTtcXG4gIHRvcDogMTAwcHg7XFxuICB6LWluZGV4OiAxMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIEdlb3JnaWEsIHNlcmlmO1xcbn1cXG4ucG9wdXAgZm9ybSB7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTg2LCAxOTUpO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDE2cHggOHB4IHJnYigxNzksIDY4LCA4Nyk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyIDJmciAxZnI7XFxufVxcbi5wb3B1cCBmb3JtIHRleHRhcmVhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDIyOSwgMjMxKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogcmdiKDIyLCA0LCAyMik7XFxuICBib3JkZXI6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBHZW9yZ2lhLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ucG9wdXAgZm9ybSB0ZXh0YXJlYSB0ZXh0YXJlYTpmb2N1cyB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuLnBvcHVwIGZvcm0gLmNvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcbi5wb3B1cCBmb3JtIC5jb250cm9scyAjZHVlZGF0ZSxcXG4ucG9wdXAgZm9ybSAuY29udHJvbHMgI2R1ZXRpbWUsXFxuLnBvcHVwIGZvcm0gLmNvbnRyb2xzICNwcmlvcml0eSxcXG4ucG9wdXAgZm9ybSAuY29udHJvbHMgbGFiZWwsXFxuLnBvcHVwIGZvcm0gLmNvbnRyb2xzIG9wdGlvbiB7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBHZW9yZ2lhLCBzZXJpZjtcXG4gIGNvbG9yOiByZ2IoMjIsIDQsIDIyKTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG4ucG9wdXAgZm9ybSAuYnV0dG9uQm94IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLnBvcHVwIGZvcm0gLmJ1dHRvbkJveCBidXR0b24ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjQwLCAxODYsIDE5NSk7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgR2VvcmdpYSwgc2VyaWY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnBvcHVwIGZvcm0gLmJ1dHRvbkJveCAjc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzksIDY4LCA4Nyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5wb3B1cCBmb3JtIC5idXR0b25Cb3ggI2NhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI5LCAxMTEsIDExNCk7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4udG9kb0xpc3RJdGVtIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTc5LCA2OCwgODcpO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW46IDVweCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiKDE3OSwgNjgsIDg3KTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGNvbG9yOiByZ2IoMjIsIDQsIDIyKTtcXG59XFxuLnRvZG9MaXN0SXRlbSAjdG9kb0xpc3RCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTg2LCAxOTUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgR2VvcmdpYSwgc2VyaWY7XFxuICBwYWRkaW5nOiAzcHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBjb2xvcjogcmdiKDIyLCA0LCAyMik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4udG9kb0xpc3RJdGVtIHN2ZyB7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBHZW9yZ2lhLCBzZXJpZjtcXG59LyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzc2ZpbGVzL19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3NmaWxlcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzZmlsZXMvX2NvbnRlbnQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3NmaWxlcy9fcG9wdXAuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3NmaWxlcy9fdG9kb2xpc3RpdGVtLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDRUY7O0FDTEE7RUFDRSxrQ0NEUTtFREVSLFlDRFU7RURFVixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FEUUY7QUNQRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQ1hNO0VEWU4sWUFBQTtBRFNKO0FDUEU7RUFDRSxjQUFBO0FEU0o7QUNQSTtFQUNFLFdDakJNO0FGMEJaOztBRzNCQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUg4QkY7QUc1QkU7RUFDRSxvQ0RIUTtFQ0lSLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkRSTztBRnNDWDtBRzdCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBSCtCTjtBRzlCTTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUhnQ1I7QUc3Qkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBSCtCTjtBRzlCTTtFQUNFLGlCQUFBO0FIZ0NSO0FHN0JJO0VBQ0Usb0NEMUJNO0VDMkJOLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1DRDFCRTtFQzJCRixxQkRoQ0s7RUNpQ0wsZUFBQTtBSCtCTjtBRzlCTTtFQUNFLFlBQUE7QUhnQ1I7QUc5Qk07RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1DRHBDQTtFQ3FDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJENUNHO0VDNkNILGtDRC9DRTtFQ2dERixjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FIZ0NSO0FHOUJNO0VBQ0UsVUFBQTtBSGdDUjs7QUlyRkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1DRkRNO0FGeUZSO0FJdkZFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0ZUUTtFRVVSLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0FKeUZKO0FJeEZJO0VBQ0Usb0NGZlc7RUVnQlgsYUFBQTtFQUNBLHFCRnBCSztFRXFCTCxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1DRmxCRTtFRW1CRixlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FKMEZOO0FJekZNO0VBQ0UsaUJBQUE7QUoyRlI7QUl4Rkk7RUFDRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUowRk47QUl6Rk07Ozs7O0VBS0UsbUNGcENBO0VFcUNBLHFCRjFDRztFRTJDSCxpQkFBQTtBSjJGUjtBSXhGSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FKMEZOO0FJekZNO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUNGbERBO0VFbURBLFlGekRJO0VFMERKLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FKMkZSO0FJekZNO0VBQ0Usa0NGaEVFO0VFaUVGLFlGaEVJO0VFaUVKLHNCQUFBO0VBQ0EsaUJBQUE7QUoyRlI7QUl6Rk07RUFDRSxvQ0ZsRUM7RUVtRUQsd0JBQUE7RUFDQSxnQkFBQTtBSjJGUjs7QUtuS0E7RUFDRSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJIVFM7QUYrS1g7QUtyS0U7RUFDRSxvQ0hWUTtFR1dSLG1DSFBJO0VHUUosaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCSGZPO0VHZ0JQLFlBQUE7RUFDQSxhQUFBO0FMdUtKO0FLcktFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUx1S0o7O0FEakxBO0VBQ0UsbUNHUE07QUYyTFIsQ0FBQSxvQ0FBQVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCByZW5kZXJUb2RvTGlzdCBmcm9tIFwiLi9yZW5kZXJ0b2RvbGlzdFwiO1xuaW1wb3J0IGNyZWF0ZVRvZG9MaXN0IGZyb20gXCIuL3RvZG9saXN0XCI7XG5pbXBvcnQgZW5hYmxlU3VibWl0IGZyb20gXCIuL2Zvcm12YWxpZGF0aW9uXCI7XG5pbXBvcnQgdG9kb0xpc3REZWxldGVCdXR0b24gZnJvbSBcIi4vdG9kb2xpc3RkZWxldGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnV0dG9uRnVuY3Rpb25zKCkge1xuICBlbmFibGVTdWJtaXQoKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwVGl0bGVcIikudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cERlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVkYXRlXCIpLnZhbHVlO1xuICBjb25zdCBkdWVUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWV0aW1lXCIpLnZhbHVlO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIikudmFsdWU7XG5cbiAgY29uc3QgdG9kb0xpc3QgPSBjcmVhdGVUb2RvTGlzdCgpO1xuICB0b2RvTGlzdC5hZGRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgZHVlVGltZSwgcHJpb3JpdHkpO1xuXG4gIHJlbmRlclRvZG9MaXN0KCk7XG5cbiAgY29uc3QgdG9kb0xpc3RQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0xpc3RQcmlvcml0eVwiKTtcblxuICBpZiAocHJpb3JpdHkgPT09IFwiTG93XCIpIHtcbiAgICAvLyBzZXQgZGlmZmVyZW50IHN2ZyBjb2xvcnMgZm9yIGFsbCBwcmlvcml0eSBsZXZlbHNcbiAgICB0b2RvTGlzdFByaW9yaXR5LmlubmVySFRNTCA9XG4gICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiIzAwRkYwMFwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1zcXVhcmVcIj48cmVjdCB4PVwiM1wiIHk9XCIzXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgcng9XCIyXCIgcnk9XCIyXCI+PC9yZWN0Pjwvc3ZnPic7XG4gIH0gZWxzZSBpZiAocHJpb3JpdHkgPT09IFwiTWVkaXVtXCIpIHtcbiAgICB0b2RvTGlzdFByaW9yaXR5LmlubmVySFRNTCA9XG4gICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI0ZGQTUwMFwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1zcXVhcmVcIj48cmVjdCB4PVwiM1wiIHk9XCIzXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgcng9XCIyXCIgcnk9XCIyXCI+PC9yZWN0Pjwvc3ZnPic7XG4gIH0gZWxzZSB7XG4gICAgdG9kb0xpc3RQcmlvcml0eS5pbm5lckhUTUwgPVxuICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNGRjAwMDBcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItc3F1YXJlXCI+PHJlY3QgeD1cIjNcIiB5PVwiM1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHJ4PVwiMlwiIHJ5PVwiMlwiPjwvcmVjdD48L3N2Zz4nO1xuICB9XG5cbiAgY29uc3QgdG9kb0xpc3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0xpc3RUaXRsZVwiKTtcbiAgdG9kb0xpc3RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gIGNvbnN0IHRvZG9MaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvTGlzdEJ1dHRvblwiKTtcbiAgdG9kb0xpc3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkRFVEFJTFNcIjtcblxuICBjb25zdCB0b2RvTGlzdER1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9MaXN0RHVlRGF0ZVwiKTtcbiAgdG9kb0xpc3REdWVEYXRlLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcblxuICBjb25zdCB0b2RvTGlzdER1ZVRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9MaXN0RHVlVGltZVwiKTtcbiAgdG9kb0xpc3REdWVUaW1lLnRleHRDb250ZW50ID0gZHVlVGltZTtcblxuICBjb25zdCB0b2RvTGlzdEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9MaXN0RWRpdFwiKTtcbiAgdG9kb0xpc3RFZGl0LmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1lZGl0XCI+PHBhdGggZD1cIk0xMSA0SDRhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJ2LTdcIj48L3BhdGg+PHBhdGggZD1cIk0xOC41IDIuNWEyLjEyMSAyLjEyMSAwIDAgMSAzIDNMMTIgMTVsLTQgMSAxLTQgOS41LTkuNXpcIj48L3BhdGg+PC9zdmc+JztcblxuICBjb25zdCB0b2RvTGlzdERlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0xpc3REZWxldGVcIik7XG4gIHRvZG9MaXN0RGVsZXRlLmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci10cmFzaC0yXCI+PHBvbHlsaW5lIHBvaW50cz1cIjMgNiA1IDYgMjEgNlwiPjwvcG9seWxpbmU+PHBhdGggZD1cIk0xOSA2djE0YTIgMiAwIDAgMS0yIDJIN2EyIDIgMCAwIDEtMi0yVjZtMyAwVjRhMiAyIDAgMCAxIDItMmg0YTIgMiAwIDAgMSAyIDJ2MlwiPjwvcGF0aD48bGluZSB4MT1cIjEwXCIgeTE9XCIxMVwiIHgyPVwiMTBcIiB5Mj1cIjE3XCI+PC9saW5lPjxsaW5lIHgxPVwiMTRcIiB5MT1cIjExXCIgeDI9XCIxNFwiIHkyPVwiMTdcIj48L2xpbmU+PC9zdmc+JztcbiAgdG9kb0xpc3REZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZG9MaXN0RGVsZXRlQnV0dG9uKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW5Db250YWluZXIoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgY29uc3Qgc2lkZVBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2lkZVBhbmVsLmNsYXNzTGlzdC5hZGQoXCJzaWRlUGFuZWxcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZVBhbmVsKTtcblxuICBjb25zdCBtYWluUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluUGFuZWwuY2xhc3NMaXN0LmFkZChcIm1haW5QYW5lbFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluUGFuZWwpO1xufVxuIiwiaW1wb3J0IGJ1dHRvbkZ1bmN0aW9ucyBmcm9tIFwiLi9idXR0b25mdW5jdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybUFjdGlvbnMoKSB7XG4gIGNvbnN0IHBvcHVwRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXBGb3JtXCIpOyAvLyBjYWxsIGV2ZW50bGlzdGVuZXIgdG8gZm9ybSBzbyB0aGF0IHByZXZlbnRkZWZhdWx0IHdvcmtzXG4gIHBvcHVwRm9ybS5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwic3VibWl0XCIsIC8vIGNsaWNrIG1ldGhvZCBvbmx5IHZhbGlkYXRlZCBmaXJzdCBpdGVtIGluIGZvcm0sIG5vdCBhbGwgaXRlbXNcbiAgICAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBidXR0b25GdW5jdGlvbnMoKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIik7XG4gICAgICBjb250ZW50LnN0eWxlLmZpbHRlciA9IFwibm9uZVwiO1xuICAgICAgY29udGVudC5zdHlsZS53ZWJraXRGaWx0ZXIgPSBcIm5vbmVcIjtcbiAgICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9LFxuICAgIHRydWVcbiAgKTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmFibGVTdWJtaXQoKSB7XG4gIGNvbnN0IHBvcHVwRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXBGb3JtXCIpO1xuICBjb25zdCByZXF1aXJlZEZpZWxkcyA9IHBvcHVwRm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiW3JlcXVpcmVkXVwiKTtcbiAgbGV0IGFsbEZpbGxlZCA9IHRydWU7XG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpO1xuICBpZiAoYWxsRmlsbGVkKSB7XG4gICAgc3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICB9IGVsc2Uge1xuICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgfVxuICByZXF1aXJlZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGlmICghZmllbGQudmFsdWUpIHtcbiAgICAgIGFsbEZpbGxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiWW91IGVudGVyZWQ6XCIsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXBUaXRsZVwiKS52YWx1ZSk7XG59KTsgKi9cbiIsImltcG9ydCBmb3JtQWN0aW9ucyBmcm9tIFwiLi9mYWN0b3J5ZnVuY3Rpb25zXCI7XG5pbXBvcnQgZW5hYmxlU3VibWl0IGZyb20gXCIuL2Zvcm12YWxpZGF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tQb3BVcCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgY29udGVudC5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMjBweClcIjtcbiAgY29udGVudC5zdHlsZS53ZWJraXRGaWx0ZXIgPSBcImJsdXIoMjBweClcIjtcblxuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cFwiKTtcbiAgcG9wdXAuc3R5bGUuZmlsdGVyID0gXCJub25lXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwb3B1cCk7XG5cbiAgY29uc3QgcG9wdXBGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIHBvcHVwLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicG9wdXBGb3JtXCIpO1xuICBwb3B1cC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicG9wdXBGb3JtXCIpO1xuICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cEZvcm0pO1xuXG4gIGNvbnN0IHBvcHVwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHBvcHVwVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwb3B1cFRpdGxlXCIpO1xuICBwb3B1cFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlbmFibGVTdWJtaXQpO1xuICBwb3B1cFRpdGxlLnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjUwXCIpO1xuICBwb3B1cFRpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGVcIik7XG4gIHBvcHVwVGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIlRpdGxlXCIpO1xuICBwb3B1cFRpdGxlLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICBwb3B1cEZvcm0uYXBwZW5kQ2hpbGQocG9wdXBUaXRsZSk7XG5cbiAgY29uc3QgcG9wdXBEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgcG9wdXBEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBvcHVwRGVzY3JpcHRpb25cIik7XG4gIHBvcHVwRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMTQwXCIpO1xuICBwb3B1cERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGVzY3JpcHRpb25cIik7XG4gIHBvcHVwRm9ybS5hcHBlbmRDaGlsZChwb3B1cERlc2NyaXB0aW9uKTtcblxuICBjb25zdCBjb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoXCJjb250cm9sc1wiKTtcbiAgcG9wdXBGb3JtLmFwcGVuZENoaWxkKGNvbnRyb2xzKTtcblxuICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkdWVkYXRlXCIpO1xuICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG4gIGNvbnRyb2xzLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG5cbiAgY29uc3QgZGF0ZVBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGF0ZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgZGF0ZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZWRhdGVcIik7XG4gIGRhdGVQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGVuYWJsZVN1Ym1pdCk7XG4gIGRhdGVQaWNrZXIuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZWRhdGVcIik7XG4gIGRhdGVQaWNrZXIuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUb2RheVwiKTtcbiAgZGF0ZVBpY2tlci5yZXF1aXJlZCA9IHRydWU7XG4gIGNvbnRyb2xzLmFwcGVuZENoaWxkKGRhdGVQaWNrZXIpO1xuXG4gIGNvbnN0IHRpbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgdGltZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpbWVcIik7XG4gIHRpbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGltZVwiO1xuICBjb250cm9scy5hcHBlbmRDaGlsZCh0aW1lTGFiZWwpO1xuXG4gIGNvbnN0IHRpbWVQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpbWVQaWNrZXIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRpbWVcIik7XG4gIHRpbWVQaWNrZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWV0aW1lXCIpO1xuICB0aW1lUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlbmFibGVTdWJtaXQpO1xuICB0aW1lUGlja2VyLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkdWV0aW1lXCIpO1xuICB0aW1lUGlja2VyLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwibm93XCIpO1xuICB0aW1lUGlja2VyLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICBjb250cm9scy5hcHBlbmRDaGlsZCh0aW1lUGlja2VyKTtcblxuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5XCIpO1xuICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eSBMZXZlbFwiO1xuICBjb250cm9scy5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuICBjb25zdCBwcmlvcml0eVBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByaW9yaXR5UGlja2VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlcIik7XG4gIHByaW9yaXR5UGlja2VyLnNldEF0dHJpYnV0ZShcImNoYW5nZVwiLCBlbmFibGVTdWJtaXQpO1xuICBwcmlvcml0eVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gIHByaW9yaXR5UGlja2VyLnJlcXVpcmVkID0gdHJ1ZTtcbiAgLy8gcHJpb3JpdHlQaWNrZXIuc2V0QXR0cmlidXRlKFwib25jaGFuZ2VcIiwgXCJ1cGRhdGVQcmlvcml0eSh0aGlzLnZhbHVlKVwiKTtcbiAgLy8gcHJpb3JpdHlQaWNrZXIuc2V0QXR0cmlidXRlKFwib25mb2N1c1wiLCBcIih0aGlzLnR5cGU9J3NlbGVjdCcpXCIpO1xuICBjb250cm9scy5hcHBlbmRDaGlsZChwcmlvcml0eVBpY2tlcik7XG5cbiAgY29uc3Qgb3B0aW9uUGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb25QbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlwiKTtcbiAgb3B0aW9uUGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gIG9wdGlvblBsYWNlaG9sZGVyLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwiXCIpO1xuICBvcHRpb25QbGFjZWhvbGRlci50ZXh0Q29udGVudCA9IFwiU2VsZWN0XCI7XG4gIHByaW9yaXR5UGlja2VyLmFwcGVuZENoaWxkKG9wdGlvblBsYWNlaG9sZGVyKTtcblxuICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uMS5jbGFzc0xpc3QuYWRkKFwibG93XCIpO1xuICBvcHRpb24xLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTG93XCIpO1xuICBvcHRpb24xLnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgb3B0aW9uMS5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIjtcbiAgcHJpb3JpdHlQaWNrZXIuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG5cbiAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbjIuY2xhc3NMaXN0LmFkZChcIm1lZGl1bVwiKTtcbiAgb3B0aW9uMi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIk1lZGl1bVwiKTtcbiAgb3B0aW9uMi50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gIG9wdGlvbjIuc3R5bGUuY29sb3IgPSBcIm9yYW5nZVwiO1xuICBwcmlvcml0eVBpY2tlci5hcHBlbmRDaGlsZChvcHRpb24yKTtcblxuICBjb25zdCBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uMy5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKTtcbiAgb3B0aW9uMy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkhpZ2hcIik7XG4gIG9wdGlvbjMudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgb3B0aW9uMy5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gIHByaW9yaXR5UGlja2VyLmFwcGVuZENoaWxkKG9wdGlvbjMpO1xuXG4gIGNvbnN0IGJ1dHRvbkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbkJveC5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uQm94XCIpO1xuICBwb3B1cEZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uQm94KTtcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0XCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBmb3JtQWN0aW9ucygpO1xuICB9KTtcbiAgYnV0dG9uQm94LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbmNlbFwiKTtcbiAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgYnV0dG9uQm94LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgZnVuY3Rpb24gY2FuY2VsRm9ybSgpIHtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnRlbnQuc3R5bGUuZmlsdGVyID0gXCJub25lXCI7XG4gICAgICBjb250ZW50LnN0eWxlLndlYmtpdEZpbHRlciA9IFwibm9uZVwiO1xuICAgICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xuICB9XG4gIGNhbmNlbEZvcm0oKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclRvZG9MaXN0KCkge1xuICBjb25zdCBtYWluUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5QYW5lbFwiKTtcblxuICBjb25zdCBsaXN0VG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGxpc3RUb2Rvcy5jbGFzc0xpc3QuYWRkKFwibGlzdFRvZG9zXCIpO1xuICBtYWluUGFuZWwuYXBwZW5kQ2hpbGQobGlzdFRvZG9zKTtcblxuICBjb25zdCB0b2RvTGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRvZG9MaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwidG9kb0xpc3RJdGVtXCIpO1xuICBsaXN0VG9kb3MuYXBwZW5kQ2hpbGQodG9kb0xpc3RJdGVtKTtcblxuICBjb25zdCB0b2RvTGlzdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN2Z1wiKTtcbiAgdG9kb0xpc3RQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9kb0xpc3RQcmlvcml0eVwiKTtcbiAgdG9kb0xpc3RJdGVtLmFwcGVuZENoaWxkKHRvZG9MaXN0UHJpb3JpdHkpO1xuXG4gIGNvbnN0IHRvZG9MaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvTGlzdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvTGlzdFRpdGxlXCIpO1xuICB0b2RvTGlzdEl0ZW0uYXBwZW5kQ2hpbGQodG9kb0xpc3RUaXRsZSk7XG5cbiAgY29uc3QgdG9kb0xpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0b2RvTGlzdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9MaXN0QnV0dG9uXCIpO1xuICB0b2RvTGlzdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICB0b2RvTGlzdEl0ZW0uYXBwZW5kQ2hpbGQodG9kb0xpc3RCdXR0b24pO1xuXG4gIGNvbnN0IHRvZG9MaXN0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9MaXN0RHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kb0xpc3REdWVEYXRlXCIpO1xuICB0b2RvTGlzdEl0ZW0uYXBwZW5kQ2hpbGQodG9kb0xpc3REdWVEYXRlKTtcblxuICBjb25zdCB0b2RvTGlzdER1ZVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvTGlzdER1ZVRpbWUuY2xhc3NMaXN0LmFkZChcInRvZG9MaXN0RHVlVGltZVwiKTtcbiAgdG9kb0xpc3RJdGVtLmFwcGVuZENoaWxkKHRvZG9MaXN0RHVlVGltZSk7XG5cbiAgY29uc3QgdG9kb0xpc3RFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN2Z1wiKTtcbiAgdG9kb0xpc3RFZGl0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvTGlzdEVkaXRcIik7XG4gIHRvZG9MaXN0SXRlbS5hcHBlbmRDaGlsZCh0b2RvTGlzdEVkaXQpO1xuXG4gIGNvbnN0IHRvZG9MaXN0RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN2Z1wiKTtcbiAgdG9kb0xpc3REZWxldGUuY2xhc3NMaXN0LmFkZChcInRvZG9MaXN0RGVsZXRlXCIpO1xuICB0b2RvTGlzdEl0ZW0uYXBwZW5kQ2hpbGQodG9kb0xpc3REZWxldGUpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lkZVBhbmVsRnVuY3Rpb24oKSB7XG4gIGNvbnN0IHNpZGVQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZVBhbmVsXCIpO1xuXG4gIGNvbnN0IHRvcFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9wUGFuZWwuY2xhc3NMaXN0LmFkZChcInRvcFBhbmVsXCIpO1xuICBzaWRlUGFuZWwuYXBwZW5kQ2hpbGQodG9wUGFuZWwpO1xuXG4gIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaW5ib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbmJveFwiKTtcbiAgaW5ib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgY29uc3QgaWNvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpY29uMS5pbm5lckhUTUwgPVxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItaW5ib3hcIj48cG9seWxpbmUgcG9pbnRzPVwiMjIgMTIgMTYgMTIgMTQgMTUgMTAgMTUgOCAxMiAyIDEyXCI+PC9wb2x5bGluZT48cGF0aCBkPVwiTTUuNDUgNS4xMUwyIDEydjZhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0ydi02bC0zLjQ1LTYuODlBMiAyIDAgMCAwIDE2Ljc2IDRINy4yNGEyIDIgMCAwIDAtMS43OSAxLjExelwiPjwvcGF0aD48L3N2Zz4nO1xuICBpbmJveC5hcHBlbmRDaGlsZChpY29uMSk7XG4gIGNvbnN0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0ZXh0MS50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcbiAgaW5ib3guYXBwZW5kQ2hpbGQodGV4dDEpO1xuICB0b3BQYW5lbC5hcHBlbmRDaGlsZChpbmJveCk7XG5cbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0b2RheS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZGF5XCIpO1xuICB0b2RheS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBjb25zdCBpY29uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGljb24yLmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jYWxlbmRhclwiPjxyZWN0IHg9XCIzXCIgeT1cIjRcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiByeD1cIjJcIiByeT1cIjJcIj48L3JlY3Q+PGxpbmUgeDE9XCIxNlwiIHkxPVwiMlwiIHgyPVwiMTZcIiB5Mj1cIjZcIj48L2xpbmU+PGxpbmUgeDE9XCI4XCIgeTE9XCIyXCIgeDI9XCI4XCIgeTI9XCI2XCI+PC9saW5lPjxsaW5lIHgxPVwiM1wiIHkxPVwiMTBcIiB4Mj1cIjIxXCIgeTI9XCIxMFwiPjwvbGluZT48L3N2Zz4nO1xuICB0b2RheS5hcHBlbmRDaGlsZChpY29uMik7XG4gIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0ZXh0Mi50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgdG9kYXkuYXBwZW5kQ2hpbGQodGV4dDIpO1xuICB0b3BQYW5lbC5hcHBlbmRDaGlsZCh0b2RheSk7XG5cbiAgY29uc3QgdXBjb21pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB1cGNvbWluZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInVwY29taW5nXCIpO1xuICB1cGNvbWluZy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBjb25zdCBpY29uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGljb24zLmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1saXN0XCI+PGxpbmUgeDE9XCI4XCIgeTE9XCI2XCIgeDI9XCIyMVwiIHkyPVwiNlwiPjwvbGluZT48bGluZSB4MT1cIjhcIiB5MT1cIjEyXCIgeDI9XCIyMVwiIHkyPVwiMTJcIj48L2xpbmU+PGxpbmUgeDE9XCI4XCIgeTE9XCIxOFwiIHgyPVwiMjFcIiB5Mj1cIjE4XCI+PC9saW5lPjxsaW5lIHgxPVwiM1wiIHkxPVwiNlwiIHgyPVwiMy4wMVwiIHkyPVwiNlwiPjwvbGluZT48bGluZSB4MT1cIjNcIiB5MT1cIjEyXCIgeDI9XCIzLjAxXCIgeTI9XCIxMlwiPjwvbGluZT48bGluZSB4MT1cIjNcIiB5MT1cIjE4XCIgeDI9XCIzLjAxXCIgeTI9XCIxOFwiPjwvbGluZT48L3N2Zz4nO1xuICB1cGNvbWluZy5hcHBlbmRDaGlsZChpY29uMyk7XG4gIGNvbnN0IHRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0ZXh0My50ZXh0Q29udGVudCA9IFwiVXBjb21pbmdcIjtcbiAgdXBjb21pbmcuYXBwZW5kQ2hpbGQodGV4dDMpO1xuICB0b3BQYW5lbC5hcHBlbmRDaGlsZCh1cGNvbWluZyk7XG5cbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkQnV0dG9uXCIpO1xuICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYWRkQnV0dG9uLmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1wbHVzLXNxdWFyZVwiPjxyZWN0IHg9XCIzXCIgeT1cIjNcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiByeD1cIjJcIiByeT1cIjJcIj48L3JlY3Q+PGxpbmUgeDE9XCIxMlwiIHkxPVwiOFwiIHgyPVwiMTJcIiB5Mj1cIjE2XCI+PC9saW5lPjxsaW5lIHgxPVwiOFwiIHkxPVwiMTJcIiB4Mj1cIjE2XCIgeTI9XCIxMlwiPjwvbGluZT48L3N2Zz4nO1xuICBzaWRlUGFuZWwuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcblxuICBjb25zdCB0b29sdGlwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0b29sdGlwMS5jbGFzc0xpc3QuYWRkKFwidG9vbHRpcFwiKTtcbiAgdG9vbHRpcDEudGV4dENvbnRlbnQgPSBcIkFkZCBUbyBEbyBJdGVtXCI7XG4gIGFkZEJ1dHRvbi5hcHBlbmRDaGlsZCh0b29sdGlwMSk7XG5cbiAgY29uc3QgYm90dG9tUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib3R0b21QYW5lbC5jbGFzc0xpc3QuYWRkKFwiYm90dG9tUGFuZWxcIik7XG4gIHNpZGVQYW5lbC5hcHBlbmRDaGlsZChib3R0b21QYW5lbCk7XG5cbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0cy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzXCIpO1xuICBib3R0b21QYW5lbC5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG4gIGNvbnN0IHByb2plY3RzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHByb2plY3RzVGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RzVGl0bGUpO1xuXG4gIGNvbnN0IHBlcnNvbmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcGVyc29uYWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwZXJzb25hbFwiKTtcbiAgcGVyc29uYWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgY29uc3QgdGV4dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRleHQ0LnRleHRDb250ZW50ID0gXCJQZXJzb25hbFwiO1xuICBwZXJzb25hbC5hcHBlbmRDaGlsZCh0ZXh0NCk7XG4gIGJvdHRvbVBhbmVsLmFwcGVuZENoaWxkKHBlcnNvbmFsKTtcblxuICBjb25zdCB3b3JrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgd29yay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndvcmtcIik7XG4gIHdvcmsuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgY29uc3QgdGV4dDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRleHQ1LnRleHRDb250ZW50ID0gXCJXb3JrXCI7XG4gIHdvcmsuYXBwZW5kQ2hpbGQodGV4dDUpO1xuICBib3R0b21QYW5lbC5hcHBlbmRDaGlsZCh3b3JrKTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZFByb2plY3RcIik7XG4gIGFkZFByb2plY3Quc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYWRkUHJvamVjdC5pbm5lckhUTUwgPVxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItcGx1cy1zcXVhcmVcIj48cmVjdCB4PVwiM1wiIHk9XCIzXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgcng9XCIyXCIgcnk9XCIyXCI+PC9yZWN0PjxsaW5lIHgxPVwiMTJcIiB5MT1cIjhcIiB4Mj1cIjEyXCIgeTI9XCIxNlwiPjwvbGluZT48bGluZSB4MT1cIjhcIiB5MT1cIjEyXCIgeDI9XCIxNlwiIHkyPVwiMTJcIj48L2xpbmU+PC9zdmc+JztcbiAgc2lkZVBhbmVsLmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuXG4gIGNvbnN0IHRvb2x0aXAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRvb2x0aXAyLmNsYXNzTGlzdC5hZGQoXCJ0b29sdGlwXCIpO1xuICB0b29sdGlwMi50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RzXCI7XG4gIGFkZFByb2plY3QuYXBwZW5kQ2hpbGQodG9vbHRpcDIpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRQYWdlKCkge1xuICBjb25zdCB7IGJvZHkgfSA9IGRvY3VtZW50O1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVG8tRG8gTGlzdFwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IGxpZ2h0TW9kZVRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxpZ2h0TW9kZVRvZ2dsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpZ2h0TW9kZVRvZ2dsZVwiKTtcbiAgbGlnaHRNb2RlVG9nZ2xlLmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTcuNSwyQzUuNzEsMy4xNSA0LjUsNS4xOCA0LjUsNy41QzQuNSw5LjgyIDUuNzEsMTEuODUgNy41MywxM0M0LjQ2LDEzIDIsMTAuNTQgMiw3LjVBNS41LDUuNSAwIDAsMSA3LjUsMk0xOS4wNywzLjVMMjAuNSw0LjkzTDQuOTMsMjAuNUwzLjUsMTkuMDdMMTkuMDcsMy41TTEyLjg5LDUuOTNMMTEuNDEsNUw5Ljk3LDZMMTAuMzksNC4zTDksMy4yNEwxMC43NSwzLjEyTDExLjMzLDEuNDdMMTIsMy4xTDEzLjczLDMuMTNMMTIuMzgsNC4yNkwxMi44OSw1LjkzTTkuNTksOS41NEw4LjQzLDguODFMNy4zMSw5LjU5TDcuNjUsOC4yN0w2LjU2LDcuNDRMNy45Miw3LjM1TDguMzcsNi4wNkw4Ljg4LDcuMzNMMTAuMjQsNy4zNkw5LjE5LDguMjNMOS41OSw5LjU0TTE5LDEzLjVBNS41LDUuNSAwIDAsMSAxMy41LDE5QzEyLjI4LDE5IDExLjE1LDE4LjYgMTAuMjQsMTcuOTNMMTcuOTMsMTAuMjRDMTguNiwxMS4xNSAxOSwxMi4yOCAxOSwxMy41TTE0LjYsMjAuMDhMMTcuMzcsMTguOTNMMTcuMTMsMjIuMjhMMTQuNiwyMC4wOE0xOC45MywxNy4zOEwyMC4wOCwxNC42MUwyMi4yOCwxNy4xNUwxOC45MywxNy4zOE0yMC4wOCwxMi40MkwxOC45NCw5LjY0TDIyLjI4LDkuODhMMjAuMDgsMTIuNDJNOS42MywxOC45M0wxMi40LDIwLjA4TDkuODcsMjIuMjdMOS42MywxOC45M1pcIiAvPjwvc3ZnPic7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChsaWdodE1vZGVUb2dnbGUpO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmZ1bmN0aW9uIHRvZG9pdGVtcyh0aXRsZSwgZGVzY3JpcHJpb24sIGR1ZURhdGUsIGR1ZVRpbWUsIHByaW9yaXR5KSB7XG4gIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwcmlvbiwgZHVlRGF0ZSwgZHVlVGltZSwgcHJpb3JpdHkgfTtcbn1cblxuY29uc3QgY3JlYXRlVG9kb0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG9zID0gW107XG5cbiAgY29uc3QgYWRkVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHJpb24sIGR1ZURhdGUsIGR1ZVRpbWUsIHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgbmV3VG9kbyA9IHRvZG9pdGVtcyh0aXRsZSwgZGVzY3JpcHJpb24sIGR1ZURhdGUsIGR1ZVRpbWUsIHByaW9yaXR5KTtcbiAgICB0b2Rvcy5wdXNoKG5ld1RvZG8pO1xuICB9O1xuXG4gIC8qIGNvbnN0IHJlbW92ZVRvZG8gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgdG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmVuZGVyVG9kb0xpc3QoKTtcbiAgICAgIH07ICovXG5cbiAgLyogY29uc3QgdG9nZ2xlVG9kb0NvbXBsZXRpb24gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgdG9kb3NbaW5kZXhdLnRvZ2dsZUNvbXBsZXRpb24oKTtcbiAgICAgICAgcmVuZGVyVG9kb0xpc3QoKTtcbiAgICAgIH07ICovXG5cbiAgcmV0dXJuIHtcbiAgICB0b2RvcyxcbiAgICBhZGRUb2RvIC8qIHJlbW92ZVRvZG8sIHRvZ2dsZVRvZG9Db21wbGV0aW9uICovLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9kb0xpc3Q7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb0xpc3REZWxldGVCdXR0b24oKSB7XG4gIC8qIGNvbnN0IHRvZG9MaXN0RGVsZXRlQnV0dG9uID1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9kb0xpc3REZWxldGVcIik7XG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgdG9kb0xpc3REZWxldGVCdXR0b24ubGVuZ3RoOyBpKyspIHtcbiAgICB0b2RvTGlzdERlbGV0ZUJ1dHRvbltpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgKi9cbiAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuaW5uZXJIVE1MKTtcbiAgY29uc3QgZGl2ID0gdGhpcy5wYXJlbnROb2RlO1xuICBkaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAvLyB9KTtcbiAgLy8gfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHN0YXJ0UGFnZSBmcm9tIFwiLi9tb2R1bGVzL3N0YXJ0cGFnZVwiO1xuXG5pbXBvcnQgbWFpbkNvbnRhaW5lciBmcm9tIFwiLi9tb2R1bGVzL2NvbnRhaW5lclwiO1xuaW1wb3J0IHNpZGVQYW5lbEZ1bmN0aW9uIGZyb20gXCIuL21vZHVsZXMvc2lkZXBhbmVsXCI7XG5pbXBvcnQgdGFza1BvcFVwIGZyb20gXCIuL21vZHVsZXMvcG9wdXBcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuc3RhcnRQYWdlKCk7XG5tYWluQ29udGFpbmVyKCk7XG5zaWRlUGFuZWxGdW5jdGlvbigpO1xuXG5mdW5jdGlvbiBidXR0b25Qb3B1cCgpIHtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkQnV0dG9uXCIpO1xuICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza1BvcFVwKCk7XG4gIH0pO1xufVxuYnV0dG9uUG9wdXAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==