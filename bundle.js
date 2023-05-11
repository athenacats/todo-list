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
/* harmony import */ var _todolistactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todolistactions */ "./src/modules/todolistactions.js");





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
  todoListDelete.addEventListener("click", _todolistactions__WEBPACK_IMPORTED_MODULE_3__["default"]);
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

/***/ "./src/modules/todolistactions.js":
/*!****************************************!*\
  !*** ./src/modules/todolistactions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoListActions)
/* harmony export */ });
/* eslint-disable no-plusplus */
function todoListActions() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsdURBQVk7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHVEQUFZO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsdURBQVk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFXO0FBQ2YsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hJZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkNlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3RmU7QUFDZixVQUFVLE9BQU87O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzdCOUI7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGNBQWMsaUNBQWlDO0FBQy9DLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7Ozs7OztVQ1pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTRDOztBQUVJO0FBQ0k7QUFDWjs7QUFFbkI7O0FBRXJCLDhEQUFTO0FBQ1QsOERBQWE7QUFDYiw4REFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQVM7QUFDYixHQUFHO0FBQ0g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9idXR0b25mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2ZhY3RvcnlmdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZm9ybXZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVydG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc2lkZXBhbmVsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0YXJ0cGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvbGlzdGFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9yYTppdGFsLHdnaHRAMCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc5LCA2OCwgODcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uaGVhZGVyIGJ1dHRvbiB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc5LCA2OCwgODcpO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4uaGVhZGVyIHN2ZyB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuLmhlYWRlciBzdmcgcGF0aCB7XFxuICBmaWxsOiB3aGl0ZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uY29udGVudCAuc2lkZVBhbmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE4NiwgMTk1KTtcXG4gIGhlaWdodDogODh2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnIgNmZyIDFmcjtcXG4gIGNvbG9yOiByZ2IoMjIsIDQsIDIyKTtcXG59XFxuLmNvbnRlbnQgLnNpZGVQYW5lbCAudG9wUGFuZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5jb250ZW50IC5zaWRlUGFuZWwgLnRvcFBhbmVsID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZy10b3A6IDE0cHg7XFxufVxcbi5jb250ZW50IC5zaWRlUGFuZWwgLmJvdHRvbVBhbmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5jb250ZW50IC5zaWRlUGFuZWwgLmJvdHRvbVBhbmVsID4gKiB7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuLmNvbnRlbnQgLnNpZGVQYW5lbCBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTg2LCAxOTUpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIEdlb3JnaWEsIHNlcmlmO1xcbiAgY29sb3I6IHJnYigyMiwgNCwgMjIpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uY29udGVudCAuc2lkZVBhbmVsIGJ1dHRvbiBzdmcuZmVhdGhlci5mZWF0aGVyLXBsdXMtc3F1YXJlIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmNvbnRlbnQgLnNpZGVQYW5lbCBidXR0b24gLnRvb2x0aXAge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk5OTk5OTk5OTk5OTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIEdlb3JnaWEsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiKDIyLCA0LCAyMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc5LCA2OCwgODcpO1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB3aWR0aDogMTIwcHg7XFxufVxcbi5jb250ZW50IC5zaWRlUGFuZWwgYnV0dG9uIC50b29sdGlwOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wb3B1cCB7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmaWx0ZXI6IG5vbmU7XFxuICB0b3A6IDEwMHB4O1xcbiAgei1pbmRleDogMTA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBHZW9yZ2lhLCBzZXJpZjtcXG59XFxuLnBvcHVwIGZvcm0ge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE4NiwgMTk1KTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxNnB4IDhweCByZ2IoMTc5LCA2OCwgODcpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmciAyZnIgMWZyO1xcbn1cXG4ucG9wdXAgZm9ybSB0ZXh0YXJlYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyMjksIDIzMSk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6IHJnYigyMiwgNCwgMjIpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcmVzaXplOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgR2VvcmdpYSwgc2VyaWY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnBvcHVwIGZvcm0gdGV4dGFyZWEgdGV4dGFyZWE6Zm9jdXMge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbi5wb3B1cCBmb3JtIC5jb250cm9scyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG4ucG9wdXAgZm9ybSAuY29udHJvbHMgI2R1ZWRhdGUsXFxuLnBvcHVwIGZvcm0gLmNvbnRyb2xzICNkdWV0aW1lLFxcbi5wb3B1cCBmb3JtIC5jb250cm9scyAjcHJpb3JpdHksXFxuLnBvcHVwIGZvcm0gLmNvbnRyb2xzIGxhYmVsLFxcbi5wb3B1cCBmb3JtIC5jb250cm9scyBvcHRpb24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgR2VvcmdpYSwgc2VyaWY7XFxuICBjb2xvcjogcmdiKDIyLCA0LCAyMik7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuLnBvcHVwIGZvcm0gLmJ1dHRvbkJveCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi5wb3B1cCBmb3JtIC5idXR0b25Cb3ggYnV0dG9uIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0MCwgMTg2LCAxOTUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIEdlb3JnaWEsIHNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wb3B1cCBmb3JtIC5idXR0b25Cb3ggI3N1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc5LCA2OCwgODcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4ucG9wdXAgZm9ybSAuYnV0dG9uQm94ICNjYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOSwgMTExLCAxMTQpO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLnRvZG9MaXN0SXRlbSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE3OSwgNjgsIDg3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICB3aWR0aDogOTAlO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luOiA1cHggYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYigxNzksIDY4LCA4Nyk7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBjb2xvcjogcmdiKDIyLCA0LCAyMik7XFxufVxcbi50b2RvTGlzdEl0ZW0gI3RvZG9MaXN0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE4NiwgMTk1KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIEdlb3JnaWEsIHNlcmlmO1xcbiAgcGFkZGluZzogM3B4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgY29sb3I6IHJnYigyMiwgNCwgMjIpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLnRvZG9MaXN0SXRlbSBzdmcge1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgR2VvcmdpYSwgc2VyaWY7XFxufS8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3NmaWxlcy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzZmlsZXMvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzc2ZpbGVzL19jb250ZW50LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzZmlsZXMvX3BvcHVwLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzZmlsZXMvX3RvZG9saXN0aXRlbS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0VGOztBQ0xBO0VBQ0Usa0NDRFE7RURFUixZQ0RVO0VERVYsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRFFGO0FDUEU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0NYTTtFRFlOLFlBQUE7QURTSjtBQ1BFO0VBQ0UsY0FBQTtBRFNKO0FDUEk7RUFDRSxXQ2pCTTtBRjBCWjs7QUczQkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FIOEJGO0FHNUJFO0VBQ0Usb0NESFE7RUNJUixZQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0VBQ0EscUJEUk87QUZzQ1g7QUc3Qkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUgrQk47QUc5Qk07RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FIZ0NSO0FHN0JJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUgrQk47QUc5Qk07RUFDRSxpQkFBQTtBSGdDUjtBRzdCSTtFQUNFLG9DRDFCTTtFQzJCTixhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQ0QxQkU7RUMyQkYscUJEaENLO0VDaUNMLGVBQUE7QUgrQk47QUc5Qk07RUFDRSxZQUFBO0FIZ0NSO0FHOUJNO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0RwQ0E7RUNxQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCRDVDRztFQzZDSCxrQ0QvQ0U7RUNnREYsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBSGdDUjtBRzlCTTtFQUNFLFVBQUE7QUhnQ1I7O0FJckZBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQ0ZETTtBRnlGUjtBSXZGRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0NGVFE7RUVVUixpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQ0FBQTtBSnlGSjtBSXhGSTtFQUNFLG9DRmZXO0VFZ0JYLGFBQUE7RUFDQSxxQkZwQks7RUVxQkwsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQ0ZsQkU7RUVtQkYsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBSjBGTjtBSXpGTTtFQUNFLGlCQUFBO0FKMkZSO0FJeEZJO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FKMEZOO0FJekZNOzs7OztFQUtFLG1DRnBDQTtFRXFDQSxxQkYxQ0c7RUUyQ0gsaUJBQUE7QUoyRlI7QUl4Rkk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBSjBGTjtBSXpGTTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLG1DRmxEQTtFRW1EQSxZRnpESTtFRTBESixnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBSjJGUjtBSXpGTTtFQUNFLGtDRmhFRTtFRWlFRixZRmhFSTtFRWlFSixzQkFBQTtFQUNBLGlCQUFBO0FKMkZSO0FJekZNO0VBQ0Usb0NGbEVDO0VFbUVELHdCQUFBO0VBQ0EsZ0JBQUE7QUoyRlI7O0FLbktBO0VBQ0UseUNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCSFRTO0FGK0tYO0FLcktFO0VBQ0Usb0NIVlE7RUdXUixtQ0hQSTtFR1FKLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkhmTztFR2dCUCxZQUFBO0VBQ0EsYUFBQTtBTHVLSjtBS3JLRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FMdUtKOztBRGpMQTtFQUNFLG1DR1BNO0FGMkxSLENBQUEsb0NBQUFcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcmVuZGVyVG9kb0xpc3QgZnJvbSBcIi4vcmVuZGVydG9kb2xpc3RcIjtcbmltcG9ydCBjcmVhdGVUb2RvTGlzdCBmcm9tIFwiLi90b2RvbGlzdFwiO1xuaW1wb3J0IGVuYWJsZVN1Ym1pdCBmcm9tIFwiLi9mb3JtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHRvZG9MaXN0QWN0aW9ucyBmcm9tIFwiLi90b2RvbGlzdGFjdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnV0dG9uRnVuY3Rpb25zKCkge1xuICBlbmFibGVTdWJtaXQoKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwVGl0bGVcIikudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cERlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVkYXRlXCIpLnZhbHVlO1xuICBjb25zdCBkdWVUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWV0aW1lXCIpLnZhbHVlO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIikudmFsdWU7XG5cbiAgY29uc3QgdG9kb0xpc3QgPSBjcmVhdGVUb2RvTGlzdCgpO1xuICB0b2RvTGlzdC5hZGRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgZHVlVGltZSwgcHJpb3JpdHkpO1xuXG4gIHJlbmRlclRvZG9MaXN0KCk7XG5cbiAgY29uc3QgdG9kb0xpc3RQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0xpc3RQcmlvcml0eVwiKTtcblxuICBpZiAocHJpb3JpdHkgPT09IFwiTG93XCIpIHtcbiAgICAvLyBzZXQgZGlmZmVyZW50IHN2ZyBjb2xvcnMgZm9yIGFsbCBwcmlvcml0eSBsZXZlbHNcbiAgICB0b2RvTGlzdFByaW9yaXR5LmlubmVySFRNTCA9XG4gICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiIzAwRkYwMFwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1zcXVhcmVcIj48cmVjdCB4PVwiM1wiIHk9XCIzXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgcng9XCIyXCIgcnk9XCIyXCI+PC9yZWN0Pjwvc3ZnPic7XG4gIH0gZWxzZSBpZiAocHJpb3JpdHkgPT09IFwiTWVkaXVtXCIpIHtcbiAgICB0b2RvTGlzdFByaW9yaXR5LmlubmVySFRNTCA9XG4gICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI0ZGQTUwMFwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1zcXVhcmVcIj48cmVjdCB4PVwiM1wiIHk9XCIzXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgcng9XCIyXCIgcnk9XCIyXCI+PC9yZWN0Pjwvc3ZnPic7XG4gIH0gZWxzZSB7XG4gICAgdG9kb0xpc3RQcmlvcml0eS5pbm5lckhUTUwgPVxuICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNGRjAwMDBcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItc3F1YXJlXCI+PHJlY3QgeD1cIjNcIiB5PVwiM1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHJ4PVwiMlwiIHJ5PVwiMlwiPjwvcmVjdD48L3N2Zz4nO1xuICB9XG5cbiAgY29uc3QgdG9kb0xpc3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0xpc3RUaXRsZVwiKTtcbiAgdG9kb0xpc3RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gIGNvbnN0IHRvZG9MaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvTGlzdEJ1dHRvblwiKTtcbiAgdG9kb0xpc3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkRFVEFJTFNcIjtcblxuICBjb25zdCB0b2RvTGlzdER1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9MaXN0RHVlRGF0ZVwiKTtcbiAgdG9kb0xpc3REdWVEYXRlLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcblxuICBjb25zdCB0b2RvTGlzdER1ZVRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9MaXN0RHVlVGltZVwiKTtcbiAgdG9kb0xpc3REdWVUaW1lLnRleHRDb250ZW50ID0gZHVlVGltZTtcblxuICBjb25zdCB0b2RvTGlzdEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9MaXN0RWRpdFwiKTtcbiAgdG9kb0xpc3RFZGl0LmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1lZGl0XCI+PHBhdGggZD1cIk0xMSA0SDRhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJ2LTdcIj48L3BhdGg+PHBhdGggZD1cIk0xOC41IDIuNWEyLjEyMSAyLjEyMSAwIDAgMSAzIDNMMTIgMTVsLTQgMSAxLTQgOS41LTkuNXpcIj48L3BhdGg+PC9zdmc+JztcblxuICBjb25zdCB0b2RvTGlzdERlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0xpc3REZWxldGVcIik7XG4gIHRvZG9MaXN0RGVsZXRlLmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci10cmFzaC0yXCI+PHBvbHlsaW5lIHBvaW50cz1cIjMgNiA1IDYgMjEgNlwiPjwvcG9seWxpbmU+PHBhdGggZD1cIk0xOSA2djE0YTIgMiAwIDAgMS0yIDJIN2EyIDIgMCAwIDEtMi0yVjZtMyAwVjRhMiAyIDAgMCAxIDItMmg0YTIgMiAwIDAgMSAyIDJ2MlwiPjwvcGF0aD48bGluZSB4MT1cIjEwXCIgeTE9XCIxMVwiIHgyPVwiMTBcIiB5Mj1cIjE3XCI+PC9saW5lPjxsaW5lIHgxPVwiMTRcIiB5MT1cIjExXCIgeDI9XCIxNFwiIHkyPVwiMTdcIj48L2xpbmU+PC9zdmc+JztcbiAgdG9kb0xpc3REZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZG9MaXN0QWN0aW9ucyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluQ29udGFpbmVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gIGNvbnN0IHNpZGVQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGVQYW5lbC5jbGFzc0xpc3QuYWRkKFwic2lkZVBhbmVsXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGVQYW5lbCk7XG5cbiAgY29uc3QgbWFpblBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpblBhbmVsLmNsYXNzTGlzdC5hZGQoXCJtYWluUGFuZWxcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpblBhbmVsKTtcbn1cbiIsImltcG9ydCBidXR0b25GdW5jdGlvbnMgZnJvbSBcIi4vYnV0dG9uZnVuY3Rpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1BY3Rpb25zKCkge1xuICBjb25zdCBwb3B1cEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwRm9ybVwiKTsgLy8gY2FsbCBldmVudGxpc3RlbmVyIHRvIGZvcm0gc28gdGhhdCBwcmV2ZW50ZGVmYXVsdCB3b3Jrc1xuICBwb3B1cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcInN1Ym1pdFwiLCAvLyBjbGljayBtZXRob2Qgb25seSB2YWxpZGF0ZWQgZmlyc3QgaXRlbSBpbiBmb3JtLCBub3QgYWxsIGl0ZW1zXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYnV0dG9uRnVuY3Rpb25zKCk7XG4gICAgfSxcbiAgICB0cnVlXG4gICk7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5hYmxlU3VibWl0KCkge1xuICBjb25zdCBwb3B1cEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwRm9ybVwiKTtcbiAgY29uc3QgcmVxdWlyZWRGaWVsZHMgPSBwb3B1cEZvcm0ucXVlcnlTZWxlY3RvckFsbChcIltyZXF1aXJlZF1cIik7XG4gIGxldCBhbGxGaWxsZWQgPSB0cnVlO1xuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFwiKTtcbiAgaWYgKGFsbEZpbGxlZCkge1xuICAgIHN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgfSBlbHNlIHtcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gIH1cbiAgcmVxdWlyZWRGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpZiAoIWZpZWxkLnZhbHVlKSB7XG4gICAgICBhbGxGaWxsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIllvdSBlbnRlcmVkOlwiLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwVGl0bGVcIikudmFsdWUpO1xufSk7ICovXG4iLCJpbXBvcnQgZm9ybUFjdGlvbnMgZnJvbSBcIi4vZmFjdG9yeWZ1bmN0aW9uc1wiO1xuaW1wb3J0IGVuYWJsZVN1Ym1pdCBmcm9tIFwiLi9mb3JtdmFsaWRhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrUG9wVXAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gIGNvbnRlbnQuc3R5bGUuZmlsdGVyID0gXCJibHVyKDIwcHgpXCI7XG4gIGNvbnRlbnQuc3R5bGUud2Via2l0RmlsdGVyID0gXCJibHVyKDIwcHgpXCI7XG5cbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwicG9wdXBcIik7XG4gIHBvcHVwLnN0eWxlLmZpbHRlciA9IFwibm9uZVwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocG9wdXApO1xuXG4gIGNvbnN0IHBvcHVwRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBwb3B1cC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBvcHVwRm9ybVwiKTtcbiAgcG9wdXAuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInBvcHVwRm9ybVwiKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBGb3JtKTtcblxuICBjb25zdCBwb3B1cFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBwb3B1cFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicG9wdXBUaXRsZVwiKTtcbiAgcG9wdXBUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZW5hYmxlU3VibWl0KTtcbiAgcG9wdXBUaXRsZS5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCI1MFwiKTtcbiAgcG9wdXBUaXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRpdGxlXCIpO1xuICBwb3B1cFRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJUaXRsZVwiKTtcbiAgcG9wdXBUaXRsZS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgcG9wdXBGb3JtLmFwcGVuZENoaWxkKHBvcHVwVGl0bGUpO1xuXG4gIGNvbnN0IHBvcHVwRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHBvcHVwRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwb3B1cERlc2NyaXB0aW9uXCIpO1xuICBwb3B1cERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjE0MFwiKTtcbiAgcG9wdXBEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuICBwb3B1cEZvcm0uYXBwZW5kQ2hpbGQocG9wdXBEZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgY29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250cm9scy5jbGFzc0xpc3QuYWRkKFwiY29udHJvbHNcIik7XG4gIHBvcHVwRm9ybS5hcHBlbmRDaGlsZChjb250cm9scyk7XG5cbiAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlZGF0ZVwiKTtcbiAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuICBjb250cm9scy5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuXG4gIGNvbnN0IGRhdGVQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRhdGVQaWNrZXIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIGRhdGVQaWNrZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVkYXRlXCIpO1xuICBkYXRlUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlbmFibGVTdWJtaXQpO1xuICBkYXRlUGlja2VyLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkdWVkYXRlXCIpO1xuICBkYXRlUGlja2VyLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVG9kYXlcIik7XG4gIGRhdGVQaWNrZXIucmVxdWlyZWQgPSB0cnVlO1xuICBjb250cm9scy5hcHBlbmRDaGlsZChkYXRlUGlja2VyKTtcblxuICBjb25zdCB0aW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRpbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aW1lXCIpO1xuICB0aW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpbWVcIjtcbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQodGltZUxhYmVsKTtcblxuICBjb25zdCB0aW1lUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aW1lUGlja2VyLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0aW1lXCIpO1xuICB0aW1lUGlja2VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVldGltZVwiKTtcbiAgdGltZVBpY2tlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZW5hYmxlU3VibWl0KTtcbiAgdGltZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVldGltZVwiKTtcbiAgdGltZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIm5vd1wiKTtcbiAgdGltZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQodGltZVBpY2tlcik7XG5cbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHkgTGV2ZWxcIjtcbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgY29uc3QgcHJpb3JpdHlQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcmlvcml0eVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpO1xuICBwcmlvcml0eVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJjaGFuZ2VcIiwgZW5hYmxlU3VibWl0KTtcbiAgcHJpb3JpdHlQaWNrZXIuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICBwcmlvcml0eVBpY2tlci5yZXF1aXJlZCA9IHRydWU7XG4gIC8vIHByaW9yaXR5UGlja2VyLnNldEF0dHJpYnV0ZShcIm9uY2hhbmdlXCIsIFwidXBkYXRlUHJpb3JpdHkodGhpcy52YWx1ZSlcIik7XG4gIC8vIHByaW9yaXR5UGlja2VyLnNldEF0dHJpYnV0ZShcIm9uZm9jdXNcIiwgXCIodGhpcy50eXBlPSdzZWxlY3QnKVwiKTtcbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQocHJpb3JpdHlQaWNrZXIpO1xuXG4gIGNvbnN0IG9wdGlvblBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uUGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJcIik7XG4gIG9wdGlvblBsYWNlaG9sZGVyLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICBvcHRpb25QbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcbiAgb3B0aW9uUGxhY2Vob2xkZXIudGV4dENvbnRlbnQgPSBcIlNlbGVjdFwiO1xuICBwcmlvcml0eVBpY2tlci5hcHBlbmRDaGlsZChvcHRpb25QbGFjZWhvbGRlcik7XG5cbiAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbjEuY2xhc3NMaXN0LmFkZChcImxvd1wiKTtcbiAgb3B0aW9uMS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkxvd1wiKTtcbiAgb3B0aW9uMS50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gIG9wdGlvbjEuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XG4gIHByaW9yaXR5UGlja2VyLmFwcGVuZENoaWxkKG9wdGlvbjEpO1xuXG4gIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb24yLmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1cIik7XG4gIG9wdGlvbjIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJNZWRpdW1cIik7XG4gIG9wdGlvbjIudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICBvcHRpb24yLnN0eWxlLmNvbG9yID0gXCJvcmFuZ2VcIjtcbiAgcHJpb3JpdHlQaWNrZXIuYXBwZW5kQ2hpbGQob3B0aW9uMik7XG5cbiAgY29uc3Qgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbjMuY2xhc3NMaXN0LmFkZChcImhpZ2hcIik7XG4gIG9wdGlvbjMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJIaWdoXCIpO1xuICBvcHRpb24zLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gIG9wdGlvbjMuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICBwcmlvcml0eVBpY2tlci5hcHBlbmRDaGlsZChvcHRpb24zKTtcblxuICBjb25zdCBidXR0b25Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25Cb3guY2xhc3NMaXN0LmFkZChcImJ1dHRvbkJveFwiKTtcbiAgcG9wdXBGb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkJveCk7XG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdFwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZm9ybUFjdGlvbnMoKTtcbiAgfSk7XG4gIGJ1dHRvbkJveC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW5jZWxcIik7XG4gIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGJ1dHRvbkJveC5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gIGZ1bmN0aW9uIGNhbmNlbEZvcm0oKSB7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb250ZW50LnN0eWxlLmZpbHRlciA9IFwibm9uZVwiO1xuICAgICAgY29udGVudC5zdHlsZS53ZWJraXRGaWx0ZXIgPSBcIm5vbmVcIjtcbiAgICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcbiAgfVxuICBjYW5jZWxGb3JtKCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJUb2RvTGlzdCgpIHtcbiAgY29uc3QgbWFpblBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluUGFuZWxcIik7XG5cbiAgY29uc3QgbGlzdFRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBsaXN0VG9kb3MuY2xhc3NMaXN0LmFkZChcImxpc3RUb2Rvc1wiKTtcbiAgbWFpblBhbmVsLmFwcGVuZENoaWxkKGxpc3RUb2Rvcyk7XG5cbiAgY29uc3QgdG9kb0xpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB0b2RvTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInRvZG9MaXN0SXRlbVwiKTtcbiAgbGlzdFRvZG9zLmFwcGVuZENoaWxkKHRvZG9MaXN0SXRlbSk7XG5cbiAgY29uc3QgdG9kb0xpc3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIik7XG4gIHRvZG9MaXN0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRvZG9MaXN0UHJpb3JpdHlcIik7XG4gIHRvZG9MaXN0SXRlbS5hcHBlbmRDaGlsZCh0b2RvTGlzdFByaW9yaXR5KTtcblxuICBjb25zdCB0b2RvTGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb0xpc3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kb0xpc3RUaXRsZVwiKTtcbiAgdG9kb0xpc3RJdGVtLmFwcGVuZENoaWxkKHRvZG9MaXN0VGl0bGUpO1xuXG4gIGNvbnN0IHRvZG9MaXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdG9kb0xpc3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvTGlzdEJ1dHRvblwiKTtcbiAgdG9kb0xpc3RCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgdG9kb0xpc3RJdGVtLmFwcGVuZENoaWxkKHRvZG9MaXN0QnV0dG9uKTtcblxuICBjb25zdCB0b2RvTGlzdER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvTGlzdER1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRvZG9MaXN0RHVlRGF0ZVwiKTtcbiAgdG9kb0xpc3RJdGVtLmFwcGVuZENoaWxkKHRvZG9MaXN0RHVlRGF0ZSk7XG5cbiAgY29uc3QgdG9kb0xpc3REdWVUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb0xpc3REdWVUaW1lLmNsYXNzTGlzdC5hZGQoXCJ0b2RvTGlzdER1ZVRpbWVcIik7XG4gIHRvZG9MaXN0SXRlbS5hcHBlbmRDaGlsZCh0b2RvTGlzdER1ZVRpbWUpO1xuXG4gIGNvbnN0IHRvZG9MaXN0RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIik7XG4gIHRvZG9MaXN0RWRpdC5jbGFzc0xpc3QuYWRkKFwidG9kb0xpc3RFZGl0XCIpO1xuICB0b2RvTGlzdEl0ZW0uYXBwZW5kQ2hpbGQodG9kb0xpc3RFZGl0KTtcblxuICBjb25zdCB0b2RvTGlzdERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIik7XG4gIHRvZG9MaXN0RGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvTGlzdERlbGV0ZVwiKTtcbiAgdG9kb0xpc3RJdGVtLmFwcGVuZENoaWxkKHRvZG9MaXN0RGVsZXRlKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZGVQYW5lbEZ1bmN0aW9uKCkge1xuICBjb25zdCBzaWRlUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVQYW5lbFwiKTtcblxuICBjb25zdCB0b3BQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvcFBhbmVsLmNsYXNzTGlzdC5hZGQoXCJ0b3BQYW5lbFwiKTtcbiAgc2lkZVBhbmVsLmFwcGVuZENoaWxkKHRvcFBhbmVsKTtcblxuICBjb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGluYm94LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW5ib3hcIik7XG4gIGluYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGNvbnN0IGljb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaWNvbjEuaW5uZXJIVE1MID1cbiAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWluYm94XCI+PHBvbHlsaW5lIHBvaW50cz1cIjIyIDEyIDE2IDEyIDE0IDE1IDEwIDE1IDggMTIgMiAxMlwiPjwvcG9seWxpbmU+PHBhdGggZD1cIk01LjQ1IDUuMTFMMiAxMnY2YTIgMiAwIDAgMCAyIDJoMTZhMiAyIDAgMCAwIDItMnYtNmwtMy40NS02Ljg5QTIgMiAwIDAgMCAxNi43NiA0SDcuMjRhMiAyIDAgMCAwLTEuNzkgMS4xMXpcIj48L3BhdGg+PC9zdmc+JztcbiAgaW5ib3guYXBwZW5kQ2hpbGQoaWNvbjEpO1xuICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGV4dDEudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG4gIGluYm94LmFwcGVuZENoaWxkKHRleHQxKTtcbiAgdG9wUGFuZWwuYXBwZW5kQ2hpbGQoaW5ib3gpO1xuXG4gIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdG9kYXkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RheVwiKTtcbiAgdG9kYXkuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgY29uc3QgaWNvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpY29uMi5pbm5lckhUTUwgPVxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2FsZW5kYXJcIj48cmVjdCB4PVwiM1wiIHk9XCI0XCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgcng9XCIyXCIgcnk9XCIyXCI+PC9yZWN0PjxsaW5lIHgxPVwiMTZcIiB5MT1cIjJcIiB4Mj1cIjE2XCIgeTI9XCI2XCI+PC9saW5lPjxsaW5lIHgxPVwiOFwiIHkxPVwiMlwiIHgyPVwiOFwiIHkyPVwiNlwiPjwvbGluZT48bGluZSB4MT1cIjNcIiB5MT1cIjEwXCIgeDI9XCIyMVwiIHkyPVwiMTBcIj48L2xpbmU+PC9zdmc+JztcbiAgdG9kYXkuYXBwZW5kQ2hpbGQoaWNvbjIpO1xuICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGV4dDIudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gIHRvZGF5LmFwcGVuZENoaWxkKHRleHQyKTtcbiAgdG9wUGFuZWwuYXBwZW5kQ2hpbGQodG9kYXkpO1xuXG4gIGNvbnN0IHVwY29taW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdXBjb21pbmcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1cGNvbWluZ1wiKTtcbiAgdXBjb21pbmcuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgY29uc3QgaWNvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpY29uMy5pbm5lckhUTUwgPVxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItbGlzdFwiPjxsaW5lIHgxPVwiOFwiIHkxPVwiNlwiIHgyPVwiMjFcIiB5Mj1cIjZcIj48L2xpbmU+PGxpbmUgeDE9XCI4XCIgeTE9XCIxMlwiIHgyPVwiMjFcIiB5Mj1cIjEyXCI+PC9saW5lPjxsaW5lIHgxPVwiOFwiIHkxPVwiMThcIiB4Mj1cIjIxXCIgeTI9XCIxOFwiPjwvbGluZT48bGluZSB4MT1cIjNcIiB5MT1cIjZcIiB4Mj1cIjMuMDFcIiB5Mj1cIjZcIj48L2xpbmU+PGxpbmUgeDE9XCIzXCIgeTE9XCIxMlwiIHgyPVwiMy4wMVwiIHkyPVwiMTJcIj48L2xpbmU+PGxpbmUgeDE9XCIzXCIgeTE9XCIxOFwiIHgyPVwiMy4wMVwiIHkyPVwiMThcIj48L2xpbmU+PC9zdmc+JztcbiAgdXBjb21pbmcuYXBwZW5kQ2hpbGQoaWNvbjMpO1xuICBjb25zdCB0ZXh0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGV4dDMudGV4dENvbnRlbnQgPSBcIlVwY29taW5nXCI7XG4gIHVwY29taW5nLmFwcGVuZENoaWxkKHRleHQzKTtcbiAgdG9wUGFuZWwuYXBwZW5kQ2hpbGQodXBjb21pbmcpO1xuXG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZEJ1dHRvblwiKTtcbiAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGFkZEJ1dHRvbi5pbm5lckhUTUwgPVxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItcGx1cy1zcXVhcmVcIj48cmVjdCB4PVwiM1wiIHk9XCIzXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgcng9XCIyXCIgcnk9XCIyXCI+PC9yZWN0PjxsaW5lIHgxPVwiMTJcIiB5MT1cIjhcIiB4Mj1cIjEyXCIgeTI9XCIxNlwiPjwvbGluZT48bGluZSB4MT1cIjhcIiB5MT1cIjEyXCIgeDI9XCIxNlwiIHkyPVwiMTJcIj48L2xpbmU+PC9zdmc+JztcbiAgc2lkZVBhbmVsLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG5cbiAgY29uc3QgdG9vbHRpcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdG9vbHRpcDEuY2xhc3NMaXN0LmFkZChcInRvb2x0aXBcIik7XG4gIHRvb2x0aXAxLnRleHRDb250ZW50ID0gXCJBZGQgVG8gRG8gSXRlbVwiO1xuICBhZGRCdXR0b24uYXBwZW5kQ2hpbGQodG9vbHRpcDEpO1xuXG4gIGNvbnN0IGJvdHRvbVBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYm90dG9tUGFuZWwuY2xhc3NMaXN0LmFkZChcImJvdHRvbVBhbmVsXCIpO1xuICBzaWRlUGFuZWwuYXBwZW5kQ2hpbGQoYm90dG9tUGFuZWwpO1xuXG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0c1wiKTtcbiAgYm90dG9tUGFuZWwuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICBjb25zdCBwcm9qZWN0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBwcm9qZWN0c1RpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0c1RpdGxlKTtcblxuICBjb25zdCBwZXJzb25hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBlcnNvbmFsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGVyc29uYWxcIik7XG4gIHBlcnNvbmFsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGNvbnN0IHRleHQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0ZXh0NC50ZXh0Q29udGVudCA9IFwiUGVyc29uYWxcIjtcbiAgcGVyc29uYWwuYXBwZW5kQ2hpbGQodGV4dDQpO1xuICBib3R0b21QYW5lbC5hcHBlbmRDaGlsZChwZXJzb25hbCk7XG5cbiAgY29uc3Qgd29yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHdvcmsuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3b3JrXCIpO1xuICB3b3JrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGNvbnN0IHRleHQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0ZXh0NS50ZXh0Q29udGVudCA9IFwiV29ya1wiO1xuICB3b3JrLmFwcGVuZENoaWxkKHRleHQ1KTtcbiAgYm90dG9tUGFuZWwuYXBwZW5kQ2hpbGQod29yayk7XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRQcm9qZWN0XCIpO1xuICBhZGRQcm9qZWN0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGFkZFByb2plY3QuaW5uZXJIVE1MID1cbiAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXBsdXMtc3F1YXJlXCI+PHJlY3QgeD1cIjNcIiB5PVwiM1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHJ4PVwiMlwiIHJ5PVwiMlwiPjwvcmVjdD48bGluZSB4MT1cIjEyXCIgeTE9XCI4XCIgeDI9XCIxMlwiIHkyPVwiMTZcIj48L2xpbmU+PGxpbmUgeDE9XCI4XCIgeTE9XCIxMlwiIHgyPVwiMTZcIiB5Mj1cIjEyXCI+PC9saW5lPjwvc3ZnPic7XG4gIHNpZGVQYW5lbC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcblxuICBjb25zdCB0b29sdGlwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0b29sdGlwMi5jbGFzc0xpc3QuYWRkKFwidG9vbHRpcFwiKTtcbiAgdG9vbHRpcDIudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0c1wiO1xuICBhZGRQcm9qZWN0LmFwcGVuZENoaWxkKHRvb2x0aXAyKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0UGFnZSgpIHtcbiAgY29uc3QgeyBib2R5IH0gPSBkb2N1bWVudDtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRvLURvIExpc3RcIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBsaWdodE1vZGVUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsaWdodE1vZGVUb2dnbGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaWdodE1vZGVUb2dnbGVcIik7XG4gIGxpZ2h0TW9kZVRvZ2dsZS5pbm5lckhUTUwgPVxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk03LjUsMkM1LjcxLDMuMTUgNC41LDUuMTggNC41LDcuNUM0LjUsOS44MiA1LjcxLDExLjg1IDcuNTMsMTNDNC40NiwxMyAyLDEwLjU0IDIsNy41QTUuNSw1LjUgMCAwLDEgNy41LDJNMTkuMDcsMy41TDIwLjUsNC45M0w0LjkzLDIwLjVMMy41LDE5LjA3TDE5LjA3LDMuNU0xMi44OSw1LjkzTDExLjQxLDVMOS45Nyw2TDEwLjM5LDQuM0w5LDMuMjRMMTAuNzUsMy4xMkwxMS4zMywxLjQ3TDEyLDMuMUwxMy43MywzLjEzTDEyLjM4LDQuMjZMMTIuODksNS45M005LjU5LDkuNTRMOC40Myw4LjgxTDcuMzEsOS41OUw3LjY1LDguMjdMNi41Niw3LjQ0TDcuOTIsNy4zNUw4LjM3LDYuMDZMOC44OCw3LjMzTDEwLjI0LDcuMzZMOS4xOSw4LjIzTDkuNTksOS41NE0xOSwxMy41QTUuNSw1LjUgMCAwLDEgMTMuNSwxOUMxMi4yOCwxOSAxMS4xNSwxOC42IDEwLjI0LDE3LjkzTDE3LjkzLDEwLjI0QzE4LjYsMTEuMTUgMTksMTIuMjggMTksMTMuNU0xNC42LDIwLjA4TDE3LjM3LDE4LjkzTDE3LjEzLDIyLjI4TDE0LjYsMjAuMDhNMTguOTMsMTcuMzhMMjAuMDgsMTQuNjFMMjIuMjgsMTcuMTVMMTguOTMsMTcuMzhNMjAuMDgsMTIuNDJMMTguOTQsOS42NEwyMi4yOCw5Ljg4TDIwLjA4LDEyLjQyTTkuNjMsMTguOTNMMTIuNCwyMC4wOEw5Ljg3LDIyLjI3TDkuNjMsMTguOTNaXCIgLz48L3N2Zz4nO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobGlnaHRNb2RlVG9nZ2xlKTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5mdW5jdGlvbiB0b2RvaXRlbXModGl0bGUsIGRlc2NyaXByaW9uLCBkdWVEYXRlLCBkdWVUaW1lLCBwcmlvcml0eSkge1xuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHJpb24sIGR1ZURhdGUsIGR1ZVRpbWUsIHByaW9yaXR5IH07XG59XG5cbmNvbnN0IGNyZWF0ZVRvZG9MaXN0ID0gKCkgPT4ge1xuICBjb25zdCB0b2RvcyA9IFtdO1xuXG4gIGNvbnN0IGFkZFRvZG8gPSAodGl0bGUsIGRlc2NyaXByaW9uLCBkdWVEYXRlLCBkdWVUaW1lLCBwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvaXRlbXModGl0bGUsIGRlc2NyaXByaW9uLCBkdWVEYXRlLCBkdWVUaW1lLCBwcmlvcml0eSk7XG4gICAgdG9kb3MucHVzaChuZXdUb2RvKTtcbiAgfTtcblxuICAvKiBjb25zdCByZW1vdmVUb2RvID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJlbmRlclRvZG9MaXN0KCk7XG4gICAgICB9OyAqL1xuXG4gIC8qIGNvbnN0IHRvZ2dsZVRvZG9Db21wbGV0aW9uID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHRvZG9zW2luZGV4XS50b2dnbGVDb21wbGV0aW9uKCk7XG4gICAgICAgIHJlbmRlclRvZG9MaXN0KCk7XG4gICAgICB9OyAqL1xuXG4gIHJldHVybiB7XG4gICAgdG9kb3MsXG4gICAgYWRkVG9kbyAvKiByZW1vdmVUb2RvLCB0b2dnbGVUb2RvQ29tcGxldGlvbiAqLyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRvZG9MaXN0O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9MaXN0QWN0aW9ucygpIHtcbiAgLyogY29uc3QgdG9kb0xpc3REZWxldGVCdXR0b24gPVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvTGlzdERlbGV0ZVwiKTtcbiAgbGV0IGk7XG4gIGZvciAoaSA9IDA7IGkgPCB0b2RvTGlzdERlbGV0ZUJ1dHRvbi5sZW5ndGg7IGkrKykge1xuICAgIHRvZG9MaXN0RGVsZXRlQnV0dG9uW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyAqL1xuICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5pbm5lckhUTUwpO1xuICBjb25zdCBkaXYgPSB0aGlzLnBhcmVudE5vZGU7XG4gIGRpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIC8vIH0pO1xuICAvLyB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgc3RhcnRQYWdlIGZyb20gXCIuL21vZHVsZXMvc3RhcnRwYWdlXCI7XG5cbmltcG9ydCBtYWluQ29udGFpbmVyIGZyb20gXCIuL21vZHVsZXMvY29udGFpbmVyXCI7XG5pbXBvcnQgc2lkZVBhbmVsRnVuY3Rpb24gZnJvbSBcIi4vbW9kdWxlcy9zaWRlcGFuZWxcIjtcbmltcG9ydCB0YXNrUG9wVXAgZnJvbSBcIi4vbW9kdWxlcy9wb3B1cFwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5zdGFydFBhZ2UoKTtcbm1haW5Db250YWluZXIoKTtcbnNpZGVQYW5lbEZ1bmN0aW9uKCk7XG5cbmZ1bmN0aW9uIGJ1dHRvblBvcHVwKCkge1xuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRCdXR0b25cIik7XG4gIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrUG9wVXAoKTtcbiAgfSk7XG59XG5idXR0b25Qb3B1cCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9