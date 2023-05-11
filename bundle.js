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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.header {\n  background-color: rgb(179, 68, 87);\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 4rem;\n  width: 100%;\n}\n.header button {\n  justify-self: end;\n  outline: none;\n  background-color: rgb(179, 68, 87);\n  border: none;\n}\n.header svg {\n  height: 1.5rem;\n}\n.header svg path {\n  fill: white;\n}\n\n.content {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  width: 100%;\n}\n.content .sidePanel {\n  background-color: rgb(240, 186, 195);\n  height: 88vh;\n  display: grid;\n  grid-template-rows: 3fr 1fr 6fr 1fr;\n  color: rgb(22, 4, 22);\n}\n.content .sidePanel .topPanel {\n  display: flex;\n  flex-direction: column;\n}\n.content .sidePanel .topPanel > * {\n  display: flex;\n  cursor: pointer;\n  padding-top: 14px;\n}\n.content .sidePanel .bottomPanel {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.content .sidePanel .bottomPanel > * {\n  padding-top: 20px;\n}\n.content .sidePanel button {\n  background-color: rgb(240, 186, 195);\n  outline: none;\n  border: none;\n  cursor: pointer;\n  font-family: \"Lora\", Georgia, serif;\n  color: rgb(22, 4, 22);\n  font-size: 1rem;\n}\n.content .sidePanel button svg.feather.feather-plus-square {\n  height: 100%;\n}\n.content .sidePanel button .tooltip {\n  opacity: 0;\n  position: absolute;\n  z-index: 999999999999;\n  font-family: \"Lora\", Georgia, serif;\n  font-size: 0.8rem;\n  text-align: center;\n  color: rgb(22, 4, 22);\n  background-color: rgb(179, 68, 87);\n  padding: 5px 0;\n  border-radius: 6px;\n  width: 120px;\n}\n.content .sidePanel button .tooltip:hover {\n  opacity: 1;\n}\n\n.popup {\n  margin: auto;\n  position: absolute;\n  filter: none;\n  top: 100px;\n  z-index: 10;\n  width: 100%;\n  height: 300px;\n  font-family: \"Lora\", Georgia, serif;\n}\n.popup form {\n  width: 70%;\n  height: 100%;\n  background-color: rgb(240, 186, 195);\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 12px;\n  box-shadow: 0 0 16px 8px rgb(179, 68, 87);\n  display: grid;\n  grid-template-rows: 1fr 4fr 2fr 1fr;\n}\n.popup form textarea {\n  background-color: rgb(243, 229, 231);\n  outline: none;\n  color: rgb(22, 4, 22);\n  border: none;\n  resize: none;\n  font-family: \"Lora\", Georgia, serif;\n  font-size: 1rem;\n  padding: 10px;\n  overflow: hidden;\n}\n.popup form textarea textarea:focus {\n  font-size: 1.2rem;\n}\n.popup form .controls {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  align-items: center;\n  padding: 0 10px;\n}\n.popup form .controls #duedate,\n.popup form .controls #duetime,\n.popup form .controls #priority,\n.popup form .controls label,\n.popup form .controls option {\n  font-family: \"Lora\", Georgia, serif;\n  color: rgb(22, 4, 22);\n  font-size: 0.8rem;\n}\n.popup form .buttonBox {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  padding-bottom: 10px;\n}\n.popup form .buttonBox button {\n  width: 50%;\n  outline: none;\n  border: 1px solid rgb(240, 186, 195);\n  border-radius: 16px;\n  font-family: \"Lora\", Georgia, serif;\n  color: white;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  cursor: pointer;\n}\n.popup form .buttonBox #submit {\n  background-color: rgb(179, 68, 87);\n  color: white;\n  justify-self: flex-end;\n  margin-right: 5px;\n}\n.popup form .buttonBox #cancel {\n  background-color: #816f72;\n  justify-self: flex-start;\n  margin-left: 5px;\n}\n\n.todoListItem {\n  border-bottom: 1px solid rgb(179, 68, 87);\n  border-radius: 16px;\n  width: 90%;\n  padding: 5px;\n  margin: 5px auto;\n  display: flex;\n  box-shadow: 0 0 8px rgb(179, 68, 87);\n  height: 2rem;\n  align-items: center;\n  justify-content: space-evenly;\n  color: rgb(22, 4, 22);\n}\n.todoListItem #todoListButton {\n  background-color: rgb(240, 186, 195);\n  font-family: \"Lora\", Georgia, serif;\n  padding: 3px 16px;\n  border-radius: 16px;\n  color: rgb(22, 4, 22);\n  border: none;\n  outline: none;\n}\n.todoListItem svg {\n  height: 90%;\n  cursor: pointer;\n}\n\nbody {\n  font-family: \"Lora\", Georgia, serif;\n}/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css","webpack://./src/scssfiles/_header.scss","webpack://./src/scssfiles/_variables.scss","webpack://./src/scssfiles/_content.scss","webpack://./src/scssfiles/_popup.scss","webpack://./src/scssfiles/_todolistitem.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;ACEF;;ACLA;EACE,kCCDQ;EDER,YCDU;EDEV,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;ADQF;ACPE;EACE,iBAAA;EACA,aAAA;EACA,kCCXM;EDYN,YAAA;ADSJ;ACPE;EACE,cAAA;ADSJ;ACPI;EACE,WCjBM;AF0BZ;;AG3BA;EACE,aAAA;EACA,8BAAA;EACA,WAAA;AH8BF;AG5BE;EACE,oCDHQ;ECIR,YAAA;EACA,aAAA;EACA,mCAAA;EACA,qBDRO;AFsCX;AG7BI;EACE,aAAA;EACA,sBAAA;AH+BN;AG9BM;EACE,aAAA;EACA,eAAA;EACA,iBAAA;AHgCR;AG7BI;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;AH+BN;AG9BM;EACE,iBAAA;AHgCR;AG7BI;EACE,oCD1BM;EC2BN,aAAA;EACA,YAAA;EACA,eAAA;EACA,mCD1BE;EC2BF,qBDhCK;ECiCL,eAAA;AH+BN;AG9BM;EACE,YAAA;AHgCR;AG9BM;EACE,UAAA;EACA,kBAAA;EACA,qBAAA;EACA,mCDpCA;ECqCA,iBAAA;EACA,kBAAA;EACA,qBD5CG;EC6CH,kCD/CE;ECgDF,cAAA;EACA,kBAAA;EACA,YAAA;AHgCR;AG9BM;EACE,UAAA;AHgCR;;AIrFA;EACE,YAAA;EACA,kBAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,aAAA;EACA,mCFDM;AFyFR;AIvFE;EACE,UAAA;EACA,YAAA;EACA,oCFTQ;EEUR,iBAAA;EACA,kBAAA;EACA,mBAAA;EACA,yCAAA;EACA,aAAA;EACA,mCAAA;AJyFJ;AIxFI;EACE,oCFfW;EEgBX,aAAA;EACA,qBFpBK;EEqBL,YAAA;EACA,YAAA;EACA,mCFlBE;EEmBF,eAAA;EACA,aAAA;EACA,gBAAA;AJ0FN;AIzFM;EACE,iBAAA;AJ2FR;AIxFI;EACE,aAAA;EACA,sCAAA;EACA,mBAAA;EACA,eAAA;AJ0FN;AIzFM;;;;;EAKE,mCFpCA;EEqCA,qBF1CG;EE2CH,iBAAA;AJ2FR;AIxFI;EACE,aAAA;EACA,8BAAA;EACA,oBAAA;AJ0FN;AIzFM;EACE,UAAA;EACA,aAAA;EACA,oCAAA;EACA,mBAAA;EACA,mCFlDA;EEmDA,YFzDI;EE0DJ,gBAAA;EACA,mBAAA;EACA,eAAA;AJ2FR;AIzFM;EACE,kCFhEE;EEiEF,YFhEI;EEiEJ,sBAAA;EACA,iBAAA;AJ2FR;AIzFM;EACE,yBFlEC;EEmED,wBAAA;EACA,gBAAA;AJ2FR;;AKnKA;EACE,yCAAA;EACA,mBAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;EACA,oCAAA;EACA,YAAA;EACA,mBAAA;EACA,6BAAA;EACA,qBHTS;AF+KX;AKrKE;EACE,oCHVQ;EGWR,mCHPI;EGQJ,iBAAA;EACA,mBAAA;EACA,qBHfO;EGgBP,YAAA;EACA,aAAA;ALuKJ;AKrKE;EACE,WAAA;EACA,eAAA;ALuKJ;;ADjLA;EACE,mCGPM;AF2LR,CAAA,oCAAA","sourceRoot":""}]);
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
/* harmony import */ var _todolistchecked__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todolistchecked */ "./src/modules/todolistchecked.js");






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
  todoListPriority.addEventListener("click", _todolistchecked__WEBPACK_IMPORTED_MODULE_4__["default"]);

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

  const listTodos = document.createElement("ul");
  listTodos.classList.add("listTodos");
  mainPanel.appendChild(listTodos);
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
  const listTodos = document.querySelector(".listTodos");

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
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup */ "./src/modules/popup.js");


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
  addButton.addEventListener("click", _popup__WEBPACK_IMPORTED_MODULE_0__["default"]);
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

/***/ "./src/modules/todolistchecked.js":
/*!****************************************!*\
  !*** ./src/modules/todolistchecked.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoListChecked)
/* harmony export */ });
function todoListChecked() {
  this.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#160416" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>';
  const listItem = this.parentNode;
  listItem.style.background = "#816f72";
}


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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






(0,_modules_startpage__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_container__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_sidepanel__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUMsdURBQVk7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsdURBQVk7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHVEQUFZO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsdURBQVk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFXO0FBQ2YsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hJZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkNnQzs7QUFFakI7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyw4Q0FBUztBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoR2U7QUFDZixVQUFVLE9BQU87O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzdCZjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGlDQUFpQztBQUMvQywrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7Ozs7Ozs7VUNaQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTRDO0FBQ0k7QUFDSTs7QUFFL0I7O0FBRXJCLDhEQUFTO0FBQ1QsOERBQWE7QUFDYiw4REFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvYnV0dG9uZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9mYWN0b3J5ZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Zvcm12YWxpZGF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3BvcHVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbmRlcnRvZG9saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3NpZGVwYW5lbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdGFydHBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kb2xpc3RjaGVja2VkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG9saXN0ZGVsZXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmE6aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgNjgsIDg3KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmhlYWRlciBidXR0b24ge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgNjgsIDg3KTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLmhlYWRlciBzdmcge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcbi5oZWFkZXIgc3ZnIHBhdGgge1xcbiAgZmlsbDogd2hpdGU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmNvbnRlbnQgLnNpZGVQYW5lbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxODYsIDE5NSk7XFxuICBoZWlnaHQ6IDg4dmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMWZyIDZmciAxZnI7XFxuICBjb2xvcjogcmdiKDIyLCA0LCAyMik7XFxufVxcbi5jb250ZW50IC5zaWRlUGFuZWwgLnRvcFBhbmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uY29udGVudCAuc2lkZVBhbmVsIC50b3BQYW5lbCA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxNHB4O1xcbn1cXG4uY29udGVudCAuc2lkZVBhbmVsIC5ib3R0b21QYW5lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4uY29udGVudCAuc2lkZVBhbmVsIC5ib3R0b21QYW5lbCA+ICoge1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxufVxcbi5jb250ZW50IC5zaWRlUGFuZWwgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE4NiwgMTk1KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBHZW9yZ2lhLCBzZXJpZjtcXG4gIGNvbG9yOiByZ2IoMjIsIDQsIDIyKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmNvbnRlbnQgLnNpZGVQYW5lbCBidXR0b24gc3ZnLmZlYXRoZXIuZmVhdGhlci1wbHVzLXNxdWFyZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jb250ZW50IC5zaWRlUGFuZWwgYnV0dG9uIC50b29sdGlwIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTk5OTk5OTk5OTk7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBHZW9yZ2lhLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHJnYigyMiwgNCwgMjIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgNjgsIDg3KTtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgd2lkdGg6IDEyMHB4O1xcbn1cXG4uY29udGVudCAuc2lkZVBhbmVsIGJ1dHRvbiAudG9vbHRpcDpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZmlsdGVyOiBub25lO1xcbiAgdG9wOiAxMDBweDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgR2VvcmdpYSwgc2VyaWY7XFxufVxcbi5wb3B1cCBmb3JtIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxODYsIDE5NSk7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBib3gtc2hhZG93OiAwIDAgMTZweCA4cHggcmdiKDE3OSwgNjgsIDg3KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMmZyIDFmcjtcXG59XFxuLnBvcHVwIGZvcm0gdGV4dGFyZWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjI5LCAyMzEpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMjIsIDQsIDIyKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIEdlb3JnaWEsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5wb3B1cCBmb3JtIHRleHRhcmVhIHRleHRhcmVhOmZvY3VzIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG4ucG9wdXAgZm9ybSAuY29udHJvbHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuLnBvcHVwIGZvcm0gLmNvbnRyb2xzICNkdWVkYXRlLFxcbi5wb3B1cCBmb3JtIC5jb250cm9scyAjZHVldGltZSxcXG4ucG9wdXAgZm9ybSAuY29udHJvbHMgI3ByaW9yaXR5LFxcbi5wb3B1cCBmb3JtIC5jb250cm9scyBsYWJlbCxcXG4ucG9wdXAgZm9ybSAuY29udHJvbHMgb3B0aW9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIEdlb3JnaWEsIHNlcmlmO1xcbiAgY29sb3I6IHJnYigyMiwgNCwgMjIpO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcbi5wb3B1cCBmb3JtIC5idXR0b25Cb3gge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4ucG9wdXAgZm9ybSAuYnV0dG9uQm94IGJ1dHRvbiB7XFxuICB3aWR0aDogNTAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNDAsIDE4NiwgMTk1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBHZW9yZ2lhLCBzZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucG9wdXAgZm9ybSAuYnV0dG9uQm94ICNzdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgNjgsIDg3KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLnBvcHVwIGZvcm0gLmJ1dHRvbkJveCAjY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MTZmNzI7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4udG9kb0xpc3RJdGVtIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTc5LCA2OCwgODcpO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW46IDVweCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiKDE3OSwgNjgsIDg3KTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGNvbG9yOiByZ2IoMjIsIDQsIDIyKTtcXG59XFxuLnRvZG9MaXN0SXRlbSAjdG9kb0xpc3RCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTg2LCAxOTUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgR2VvcmdpYSwgc2VyaWY7XFxuICBwYWRkaW5nOiAzcHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBjb2xvcjogcmdiKDIyLCA0LCAyMik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4udG9kb0xpc3RJdGVtIHN2ZyB7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBHZW9yZ2lhLCBzZXJpZjtcXG59LyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzc2ZpbGVzL19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3NmaWxlcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzZmlsZXMvX2NvbnRlbnQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3NmaWxlcy9fcG9wdXAuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3NmaWxlcy9fdG9kb2xpc3RpdGVtLnNj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cnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCByZW5kZXJUb2RvTGlzdCBmcm9tIFwiLi9yZW5kZXJ0b2RvbGlzdFwiO1xuaW1wb3J0IGNyZWF0ZVRvZG9MaXN0IGZyb20gXCIuL3RvZG9saXN0XCI7XG5pbXBvcnQgZW5hYmxlU3VibWl0IGZyb20gXCIuL2Zvcm12YWxpZGF0aW9uXCI7XG5pbXBvcnQgdG9kb0xpc3REZWxldGVCdXR0b24gZnJvbSBcIi4vdG9kb2xpc3RkZWxldGVcIjtcbmltcG9ydCB0b2RvTGlzdENoZWNrZWQgZnJvbSBcIi4vdG9kb2xpc3RjaGVja2VkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1dHRvbkZ1bmN0aW9ucygpIHtcbiAgZW5hYmxlU3VibWl0KCk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cFRpdGxlXCIpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXBEZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlZGF0ZVwiKS52YWx1ZTtcbiAgY29uc3QgZHVlVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVldGltZVwiKS52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlO1xuXG4gIGNvbnN0IHRvZG9MaXN0ID0gY3JlYXRlVG9kb0xpc3QoKTtcbiAgdG9kb0xpc3QuYWRkVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGR1ZVRpbWUsIHByaW9yaXR5KTtcblxuICByZW5kZXJUb2RvTGlzdCgpO1xuXG4gIGNvbnN0IHRvZG9MaXN0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9MaXN0UHJpb3JpdHlcIik7XG5cbiAgaWYgKHByaW9yaXR5ID09PSBcIkxvd1wiKSB7XG4gICAgLy8gc2V0IGRpZmZlcmVudCBzdmcgY29sb3JzIGZvciBhbGwgcHJpb3JpdHkgbGV2ZWxzXG4gICAgdG9kb0xpc3RQcmlvcml0eS5pbm5lckhUTUwgPVxuICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiMwMEZGMDBcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItc3F1YXJlXCI+PHJlY3QgeD1cIjNcIiB5PVwiM1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHJ4PVwiMlwiIHJ5PVwiMlwiPjwvcmVjdD48L3N2Zz4nO1xuICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSBcIk1lZGl1bVwiKSB7XG4gICAgdG9kb0xpc3RQcmlvcml0eS5pbm5lckhUTUwgPVxuICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNGRkE1MDBcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItc3F1YXJlXCI+PHJlY3QgeD1cIjNcIiB5PVwiM1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHJ4PVwiMlwiIHJ5PVwiMlwiPjwvcmVjdD48L3N2Zz4nO1xuICB9IGVsc2Uge1xuICAgIHRvZG9MaXN0UHJpb3JpdHkuaW5uZXJIVE1MID1cbiAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjRkYwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXNxdWFyZVwiPjxyZWN0IHg9XCIzXCIgeT1cIjNcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiByeD1cIjJcIiByeT1cIjJcIj48L3JlY3Q+PC9zdmc+JztcbiAgfVxuICB0b2RvTGlzdFByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2RvTGlzdENoZWNrZWQpO1xuXG4gIGNvbnN0IHRvZG9MaXN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9MaXN0VGl0bGVcIik7XG4gIHRvZG9MaXN0VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICBjb25zdCB0b2RvTGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0xpc3RCdXR0b25cIik7XG4gIHRvZG9MaXN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJERVRBSUxTXCI7XG5cbiAgY29uc3QgdG9kb0xpc3REdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvTGlzdER1ZURhdGVcIik7XG4gIHRvZG9MaXN0RHVlRGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG5cbiAgY29uc3QgdG9kb0xpc3REdWVUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvTGlzdER1ZVRpbWVcIik7XG4gIHRvZG9MaXN0RHVlVGltZS50ZXh0Q29udGVudCA9IGR1ZVRpbWU7XG5cbiAgY29uc3QgdG9kb0xpc3RFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvTGlzdEVkaXRcIik7XG4gIHRvZG9MaXN0RWRpdC5pbm5lckhUTUwgPVxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItZWRpdFwiPjxwYXRoIGQ9XCJNMTEgNEg0YTIgMiAwIDAgMC0yIDJ2MTRhMiAyIDAgMCAwIDIgMmgxNGEyIDIgMCAwIDAgMi0ydi03XCI+PC9wYXRoPjxwYXRoIGQ9XCJNMTguNSAyLjVhMi4xMjEgMi4xMjEgMCAwIDEgMyAzTDEyIDE1bC00IDEgMS00IDkuNS05LjV6XCI+PC9wYXRoPjwvc3ZnPic7XG5cbiAgY29uc3QgdG9kb0xpc3REZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9MaXN0RGVsZXRlXCIpO1xuICB0b2RvTGlzdERlbGV0ZS5pbm5lckhUTUwgPVxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItdHJhc2gtMlwiPjxwb2x5bGluZSBwb2ludHM9XCIzIDYgNSA2IDIxIDZcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XCJNMTkgNnYxNGEyIDIgMCAwIDEtMiAySDdhMiAyIDAgMCAxLTItMlY2bTMgMFY0YTIgMiAwIDAgMSAyLTJoNGEyIDIgMCAwIDEgMiAydjJcIj48L3BhdGg+PGxpbmUgeDE9XCIxMFwiIHkxPVwiMTFcIiB4Mj1cIjEwXCIgeTI9XCIxN1wiPjwvbGluZT48bGluZSB4MT1cIjE0XCIgeTE9XCIxMVwiIHgyPVwiMTRcIiB5Mj1cIjE3XCI+PC9saW5lPjwvc3ZnPic7XG4gIHRvZG9MaXN0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2RvTGlzdERlbGV0ZUJ1dHRvbik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluQ29udGFpbmVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gIGNvbnN0IHNpZGVQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGVQYW5lbC5jbGFzc0xpc3QuYWRkKFwic2lkZVBhbmVsXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGVQYW5lbCk7XG5cbiAgY29uc3QgbWFpblBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpblBhbmVsLmNsYXNzTGlzdC5hZGQoXCJtYWluUGFuZWxcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpblBhbmVsKTtcblxuICBjb25zdCBsaXN0VG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGxpc3RUb2Rvcy5jbGFzc0xpc3QuYWRkKFwibGlzdFRvZG9zXCIpO1xuICBtYWluUGFuZWwuYXBwZW5kQ2hpbGQobGlzdFRvZG9zKTtcbn1cbiIsImltcG9ydCBidXR0b25GdW5jdGlvbnMgZnJvbSBcIi4vYnV0dG9uZnVuY3Rpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1BY3Rpb25zKCkge1xuICBjb25zdCBwb3B1cEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwRm9ybVwiKTsgLy8gY2FsbCBldmVudGxpc3RlbmVyIHRvIGZvcm0gc28gdGhhdCBwcmV2ZW50ZGVmYXVsdCB3b3Jrc1xuICBwb3B1cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcInN1Ym1pdFwiLCAvLyBjbGljayBtZXRob2Qgb25seSB2YWxpZGF0ZWQgZmlyc3QgaXRlbSBpbiBmb3JtLCBub3QgYWxsIGl0ZW1zXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYnV0dG9uRnVuY3Rpb25zKCk7XG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpO1xuICAgICAgY29udGVudC5zdHlsZS5maWx0ZXIgPSBcIm5vbmVcIjtcbiAgICAgIGNvbnRlbnQuc3R5bGUud2Via2l0RmlsdGVyID0gXCJub25lXCI7XG4gICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSxcbiAgICB0cnVlXG4gICk7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5hYmxlU3VibWl0KCkge1xuICBjb25zdCBwb3B1cEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwRm9ybVwiKTtcbiAgY29uc3QgcmVxdWlyZWRGaWVsZHMgPSBwb3B1cEZvcm0ucXVlcnlTZWxlY3RvckFsbChcIltyZXF1aXJlZF1cIik7XG4gIGxldCBhbGxGaWxsZWQgPSB0cnVlO1xuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFwiKTtcbiAgaWYgKGFsbEZpbGxlZCkge1xuICAgIHN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgfSBlbHNlIHtcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gIH1cbiAgcmVxdWlyZWRGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpZiAoIWZpZWxkLnZhbHVlKSB7XG4gICAgICBhbGxGaWxsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIllvdSBlbnRlcmVkOlwiLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwVGl0bGVcIikudmFsdWUpO1xufSk7ICovXG4iLCJpbXBvcnQgZm9ybUFjdGlvbnMgZnJvbSBcIi4vZmFjdG9yeWZ1bmN0aW9uc1wiO1xuaW1wb3J0IGVuYWJsZVN1Ym1pdCBmcm9tIFwiLi9mb3JtdmFsaWRhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrUG9wVXAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gIGNvbnRlbnQuc3R5bGUuZmlsdGVyID0gXCJibHVyKDIwcHgpXCI7XG4gIGNvbnRlbnQuc3R5bGUud2Via2l0RmlsdGVyID0gXCJibHVyKDIwcHgpXCI7XG5cbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwicG9wdXBcIik7XG4gIHBvcHVwLnN0eWxlLmZpbHRlciA9IFwibm9uZVwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocG9wdXApO1xuXG4gIGNvbnN0IHBvcHVwRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBwb3B1cC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBvcHVwRm9ybVwiKTtcbiAgcG9wdXAuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInBvcHVwRm9ybVwiKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBGb3JtKTtcblxuICBjb25zdCBwb3B1cFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBwb3B1cFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicG9wdXBUaXRsZVwiKTtcbiAgcG9wdXBUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZW5hYmxlU3VibWl0KTtcbiAgcG9wdXBUaXRsZS5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCI1MFwiKTtcbiAgcG9wdXBUaXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRpdGxlXCIpO1xuICBwb3B1cFRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJUaXRsZVwiKTtcbiAgcG9wdXBUaXRsZS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgcG9wdXBGb3JtLmFwcGVuZENoaWxkKHBvcHVwVGl0bGUpO1xuXG4gIGNvbnN0IHBvcHVwRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHBvcHVwRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwb3B1cERlc2NyaXB0aW9uXCIpO1xuICBwb3B1cERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjE0MFwiKTtcbiAgcG9wdXBEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuICBwb3B1cEZvcm0uYXBwZW5kQ2hpbGQocG9wdXBEZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgY29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250cm9scy5jbGFzc0xpc3QuYWRkKFwiY29udHJvbHNcIik7XG4gIHBvcHVwRm9ybS5hcHBlbmRDaGlsZChjb250cm9scyk7XG5cbiAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlZGF0ZVwiKTtcbiAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuICBjb250cm9scy5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuXG4gIGNvbnN0IGRhdGVQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRhdGVQaWNrZXIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIGRhdGVQaWNrZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVkYXRlXCIpO1xuICBkYXRlUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlbmFibGVTdWJtaXQpO1xuICBkYXRlUGlja2VyLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkdWVkYXRlXCIpO1xuICBkYXRlUGlja2VyLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVG9kYXlcIik7XG4gIGRhdGVQaWNrZXIucmVxdWlyZWQgPSB0cnVlO1xuICBjb250cm9scy5hcHBlbmRDaGlsZChkYXRlUGlja2VyKTtcblxuICBjb25zdCB0aW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRpbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aW1lXCIpO1xuICB0aW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpbWVcIjtcbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQodGltZUxhYmVsKTtcblxuICBjb25zdCB0aW1lUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aW1lUGlja2VyLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0aW1lXCIpO1xuICB0aW1lUGlja2VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVldGltZVwiKTtcbiAgdGltZVBpY2tlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZW5hYmxlU3VibWl0KTtcbiAgdGltZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVldGltZVwiKTtcbiAgdGltZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIm5vd1wiKTtcbiAgdGltZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQodGltZVBpY2tlcik7XG5cbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHkgTGV2ZWxcIjtcbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgY29uc3QgcHJpb3JpdHlQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcmlvcml0eVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpO1xuICBwcmlvcml0eVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJjaGFuZ2VcIiwgZW5hYmxlU3VibWl0KTtcbiAgcHJpb3JpdHlQaWNrZXIuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICBwcmlvcml0eVBpY2tlci5yZXF1aXJlZCA9IHRydWU7XG4gIC8vIHByaW9yaXR5UGlja2VyLnNldEF0dHJpYnV0ZShcIm9uY2hhbmdlXCIsIFwidXBkYXRlUHJpb3JpdHkodGhpcy52YWx1ZSlcIik7XG4gIC8vIHByaW9yaXR5UGlja2VyLnNldEF0dHJpYnV0ZShcIm9uZm9jdXNcIiwgXCIodGhpcy50eXBlPSdzZWxlY3QnKVwiKTtcbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQocHJpb3JpdHlQaWNrZXIpO1xuXG4gIGNvbnN0IG9wdGlvblBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uUGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJcIik7XG4gIG9wdGlvblBsYWNlaG9sZGVyLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICBvcHRpb25QbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcbiAgb3B0aW9uUGxhY2Vob2xkZXIudGV4dENvbnRlbnQgPSBcIlNlbGVjdFwiO1xuICBwcmlvcml0eVBpY2tlci5hcHBlbmRDaGlsZChvcHRpb25QbGFjZWhvbGRlcik7XG5cbiAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbjEuY2xhc3NMaXN0LmFkZChcImxvd1wiKTtcbiAgb3B0aW9uMS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkxvd1wiKTtcbiAgb3B0aW9uMS50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gIG9wdGlvbjEuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XG4gIHByaW9yaXR5UGlja2VyLmFwcGVuZENoaWxkKG9wdGlvbjEpO1xuXG4gIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb24yLmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1cIik7XG4gIG9wdGlvbjIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJNZWRpdW1cIik7XG4gIG9wdGlvbjIudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICBvcHRpb24yLnN0eWxlLmNvbG9yID0gXCJvcmFuZ2VcIjtcbiAgcHJpb3JpdHlQaWNrZXIuYXBwZW5kQ2hpbGQob3B0aW9uMik7XG5cbiAgY29uc3Qgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbjMuY2xhc3NMaXN0LmFkZChcImhpZ2hcIik7XG4gIG9wdGlvbjMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJIaWdoXCIpO1xuICBvcHRpb24zLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gIG9wdGlvbjMuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICBwcmlvcml0eVBpY2tlci5hcHBlbmRDaGlsZChvcHRpb24zKTtcblxuICBjb25zdCBidXR0b25Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25Cb3guY2xhc3NMaXN0LmFkZChcImJ1dHRvbkJveFwiKTtcbiAgcG9wdXBGb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkJveCk7XG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdFwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZm9ybUFjdGlvbnMoKTtcbiAgfSk7XG4gIGJ1dHRvbkJveC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW5jZWxcIik7XG4gIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGJ1dHRvbkJveC5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gIGZ1bmN0aW9uIGNhbmNlbEZvcm0oKSB7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb250ZW50LnN0eWxlLmZpbHRlciA9IFwibm9uZVwiO1xuICAgICAgY29udGVudC5zdHlsZS53ZWJraXRGaWx0ZXIgPSBcIm5vbmVcIjtcbiAgICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcbiAgfVxuICBjYW5jZWxGb3JtKCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJUb2RvTGlzdCgpIHtcbiAgY29uc3QgbGlzdFRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0VG9kb3NcIik7XG5cbiAgY29uc3QgdG9kb0xpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB0b2RvTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInRvZG9MaXN0SXRlbVwiKTtcbiAgbGlzdFRvZG9zLmFwcGVuZENoaWxkKHRvZG9MaXN0SXRlbSk7XG5cbiAgY29uc3QgdG9kb0xpc3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIik7XG4gIHRvZG9MaXN0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRvZG9MaXN0UHJpb3JpdHlcIik7XG4gIHRvZG9MaXN0SXRlbS5hcHBlbmRDaGlsZCh0b2RvTGlzdFByaW9yaXR5KTtcblxuICBjb25zdCB0b2RvTGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb0xpc3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kb0xpc3RUaXRsZVwiKTtcbiAgdG9kb0xpc3RJdGVtLmFwcGVuZENoaWxkKHRvZG9MaXN0VGl0bGUpO1xuXG4gIGNvbnN0IHRvZG9MaXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdG9kb0xpc3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvTGlzdEJ1dHRvblwiKTtcbiAgdG9kb0xpc3RCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgdG9kb0xpc3RJdGVtLmFwcGVuZENoaWxkKHRvZG9MaXN0QnV0dG9uKTtcblxuICBjb25zdCB0b2RvTGlzdER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvTGlzdER1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRvZG9MaXN0RHVlRGF0ZVwiKTtcbiAgdG9kb0xpc3RJdGVtLmFwcGVuZENoaWxkKHRvZG9MaXN0RHVlRGF0ZSk7XG5cbiAgY29uc3QgdG9kb0xpc3REdWVUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb0xpc3REdWVUaW1lLmNsYXNzTGlzdC5hZGQoXCJ0b2RvTGlzdER1ZVRpbWVcIik7XG4gIHRvZG9MaXN0SXRlbS5hcHBlbmRDaGlsZCh0b2RvTGlzdER1ZVRpbWUpO1xuXG4gIGNvbnN0IHRvZG9MaXN0RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIik7XG4gIHRvZG9MaXN0RWRpdC5jbGFzc0xpc3QuYWRkKFwidG9kb0xpc3RFZGl0XCIpO1xuICB0b2RvTGlzdEl0ZW0uYXBwZW5kQ2hpbGQodG9kb0xpc3RFZGl0KTtcblxuICBjb25zdCB0b2RvTGlzdERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIik7XG4gIHRvZG9MaXN0RGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvTGlzdERlbGV0ZVwiKTtcbiAgdG9kb0xpc3RJdGVtLmFwcGVuZENoaWxkKHRvZG9MaXN0RGVsZXRlKTtcbn1cbiIsImltcG9ydCB0YXNrUG9wVXAgZnJvbSBcIi4vcG9wdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lkZVBhbmVsRnVuY3Rpb24oKSB7XG4gIGNvbnN0IHNpZGVQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZVBhbmVsXCIpO1xuXG4gIGNvbnN0IHRvcFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9wUGFuZWwuY2xhc3NMaXN0LmFkZChcInRvcFBhbmVsXCIpO1xuICBzaWRlUGFuZWwuYXBwZW5kQ2hpbGQodG9wUGFuZWwpO1xuXG4gIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaW5ib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbmJveFwiKTtcbiAgaW5ib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgY29uc3QgaWNvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpY29uMS5pbm5lckhUTUwgPVxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItaW5ib3hcIj48cG9seWxpbmUgcG9pbnRzPVwiMjIgMTIgMTYgMTIgMTQgMTUgMTAgMTUgOCAxMiAyIDEyXCI+PC9wb2x5bGluZT48cGF0aCBkPVwiTTUuNDUgNS4xMUwyIDEydjZhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0ydi02bC0zLjQ1LTYuODlBMiAyIDAgMCAwIDE2Ljc2IDRINy4yNGEyIDIgMCAwIDAtMS43OSAxLjExelwiPjwvcGF0aD48L3N2Zz4nO1xuICBpbmJveC5hcHBlbmRDaGlsZChpY29uMSk7XG4gIGNvbnN0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0ZXh0MS50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcbiAgaW5ib3guYXBwZW5kQ2hpbGQodGV4dDEpO1xuICB0b3BQYW5lbC5hcHBlbmRDaGlsZChpbmJveCk7XG5cbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0b2RheS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZGF5XCIpO1xuICB0b2RheS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBjb25zdCBpY29uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGljb24yLmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jYWxlbmRhclwiPjxyZWN0IHg9XCIzXCIgeT1cIjRcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiByeD1cIjJcIiByeT1cIjJcIj48L3JlY3Q+PGxpbmUgeDE9XCIxNlwiIHkxPVwiMlwiIHgyPVwiMTZcIiB5Mj1cIjZcIj48L2xpbmU+PGxpbmUgeDE9XCI4XCIgeTE9XCIyXCIgeDI9XCI4XCIgeTI9XCI2XCI+PC9saW5lPjxsaW5lIHgxPVwiM1wiIHkxPVwiMTBcIiB4Mj1cIjIxXCIgeTI9XCIxMFwiPjwvbGluZT48L3N2Zz4nO1xuICB0b2RheS5hcHBlbmRDaGlsZChpY29uMik7XG4gIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0ZXh0Mi50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgdG9kYXkuYXBwZW5kQ2hpbGQodGV4dDIpO1xuICB0b3BQYW5lbC5hcHBlbmRDaGlsZCh0b2RheSk7XG5cbiAgY29uc3QgdXBjb21pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB1cGNvbWluZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInVwY29taW5nXCIpO1xuICB1cGNvbWluZy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBjb25zdCBpY29uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGljb24zLmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1saXN0XCI+PGxpbmUgeDE9XCI4XCIgeTE9XCI2XCIgeDI9XCIyMVwiIHkyPVwiNlwiPjwvbGluZT48bGluZSB4MT1cIjhcIiB5MT1cIjEyXCIgeDI9XCIyMVwiIHkyPVwiMTJcIj48L2xpbmU+PGxpbmUgeDE9XCI4XCIgeTE9XCIxOFwiIHgyPVwiMjFcIiB5Mj1cIjE4XCI+PC9saW5lPjxsaW5lIHgxPVwiM1wiIHkxPVwiNlwiIHgyPVwiMy4wMVwiIHkyPVwiNlwiPjwvbGluZT48bGluZSB4MT1cIjNcIiB5MT1cIjEyXCIgeDI9XCIzLjAxXCIgeTI9XCIxMlwiPjwvbGluZT48bGluZSB4MT1cIjNcIiB5MT1cIjE4XCIgeDI9XCIzLjAxXCIgeTI9XCIxOFwiPjwvbGluZT48L3N2Zz4nO1xuICB1cGNvbWluZy5hcHBlbmRDaGlsZChpY29uMyk7XG4gIGNvbnN0IHRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0ZXh0My50ZXh0Q29udGVudCA9IFwiVXBjb21pbmdcIjtcbiAgdXBjb21pbmcuYXBwZW5kQ2hpbGQodGV4dDMpO1xuICB0b3BQYW5lbC5hcHBlbmRDaGlsZCh1cGNvbWluZyk7XG5cbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkQnV0dG9uXCIpO1xuICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYWRkQnV0dG9uLmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1wbHVzLXNxdWFyZVwiPjxyZWN0IHg9XCIzXCIgeT1cIjNcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiByeD1cIjJcIiByeT1cIjJcIj48L3JlY3Q+PGxpbmUgeDE9XCIxMlwiIHkxPVwiOFwiIHgyPVwiMTJcIiB5Mj1cIjE2XCI+PC9saW5lPjxsaW5lIHgxPVwiOFwiIHkxPVwiMTJcIiB4Mj1cIjE2XCIgeTI9XCIxMlwiPjwvbGluZT48L3N2Zz4nO1xuICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tQb3BVcCk7XG4gIHNpZGVQYW5lbC5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuXG4gIGNvbnN0IHRvb2x0aXAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRvb2x0aXAxLmNsYXNzTGlzdC5hZGQoXCJ0b29sdGlwXCIpO1xuICB0b29sdGlwMS50ZXh0Q29udGVudCA9IFwiQWRkIFRvIERvIEl0ZW1cIjtcbiAgYWRkQnV0dG9uLmFwcGVuZENoaWxkKHRvb2x0aXAxKTtcblxuICBjb25zdCBib3R0b21QYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJvdHRvbVBhbmVsLmNsYXNzTGlzdC5hZGQoXCJib3R0b21QYW5lbFwiKTtcbiAgc2lkZVBhbmVsLmFwcGVuZENoaWxkKGJvdHRvbVBhbmVsKTtcblxuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHNcIik7XG4gIGJvdHRvbVBhbmVsLmFwcGVuZENoaWxkKHByb2plY3RzKTtcbiAgY29uc3QgcHJvamVjdHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgcHJvamVjdHNUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNUaXRsZSk7XG5cbiAgY29uc3QgcGVyc29uYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwZXJzb25hbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBlcnNvbmFsXCIpO1xuICBwZXJzb25hbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBjb25zdCB0ZXh0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGV4dDQudGV4dENvbnRlbnQgPSBcIlBlcnNvbmFsXCI7XG4gIHBlcnNvbmFsLmFwcGVuZENoaWxkKHRleHQ0KTtcbiAgYm90dG9tUGFuZWwuYXBwZW5kQ2hpbGQocGVyc29uYWwpO1xuXG4gIGNvbnN0IHdvcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB3b3JrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwid29ya1wiKTtcbiAgd29yay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBjb25zdCB0ZXh0NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGV4dDUudGV4dENvbnRlbnQgPSBcIldvcmtcIjtcbiAgd29yay5hcHBlbmRDaGlsZCh0ZXh0NSk7XG4gIGJvdHRvbVBhbmVsLmFwcGVuZENoaWxkKHdvcmspO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkUHJvamVjdFwiKTtcbiAgYWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBhZGRQcm9qZWN0LmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1wbHVzLXNxdWFyZVwiPjxyZWN0IHg9XCIzXCIgeT1cIjNcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiByeD1cIjJcIiByeT1cIjJcIj48L3JlY3Q+PGxpbmUgeDE9XCIxMlwiIHkxPVwiOFwiIHgyPVwiMTJcIiB5Mj1cIjE2XCI+PC9saW5lPjxsaW5lIHgxPVwiOFwiIHkxPVwiMTJcIiB4Mj1cIjE2XCIgeTI9XCIxMlwiPjwvbGluZT48L3N2Zz4nO1xuICBzaWRlUGFuZWwuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG5cbiAgY29uc3QgdG9vbHRpcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdG9vbHRpcDIuY2xhc3NMaXN0LmFkZChcInRvb2x0aXBcIik7XG4gIHRvb2x0aXAyLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdHNcIjtcbiAgYWRkUHJvamVjdC5hcHBlbmRDaGlsZCh0b29sdGlwMik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydFBhZ2UoKSB7XG4gIGNvbnN0IHsgYm9keSB9ID0gZG9jdW1lbnQ7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJUby1EbyBMaXN0XCI7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgbGlnaHRNb2RlVG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGlnaHRNb2RlVG9nZ2xlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlnaHRNb2RlVG9nZ2xlXCIpO1xuICBsaWdodE1vZGVUb2dnbGUuaW5uZXJIVE1MID1cbiAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNNy41LDJDNS43MSwzLjE1IDQuNSw1LjE4IDQuNSw3LjVDNC41LDkuODIgNS43MSwxMS44NSA3LjUzLDEzQzQuNDYsMTMgMiwxMC41NCAyLDcuNUE1LjUsNS41IDAgMCwxIDcuNSwyTTE5LjA3LDMuNUwyMC41LDQuOTNMNC45MywyMC41TDMuNSwxOS4wN0wxOS4wNywzLjVNMTIuODksNS45M0wxMS40MSw1TDkuOTcsNkwxMC4zOSw0LjNMOSwzLjI0TDEwLjc1LDMuMTJMMTEuMzMsMS40N0wxMiwzLjFMMTMuNzMsMy4xM0wxMi4zOCw0LjI2TDEyLjg5LDUuOTNNOS41OSw5LjU0TDguNDMsOC44MUw3LjMxLDkuNTlMNy42NSw4LjI3TDYuNTYsNy40NEw3LjkyLDcuMzVMOC4zNyw2LjA2TDguODgsNy4zM0wxMC4yNCw3LjM2TDkuMTksOC4yM0w5LjU5LDkuNTRNMTksMTMuNUE1LjUsNS41IDAgMCwxIDEzLjUsMTlDMTIuMjgsMTkgMTEuMTUsMTguNiAxMC4yNCwxNy45M0wxNy45MywxMC4yNEMxOC42LDExLjE1IDE5LDEyLjI4IDE5LDEzLjVNMTQuNiwyMC4wOEwxNy4zNywxOC45M0wxNy4xMywyMi4yOEwxNC42LDIwLjA4TTE4LjkzLDE3LjM4TDIwLjA4LDE0LjYxTDIyLjI4LDE3LjE1TDE4LjkzLDE3LjM4TTIwLjA4LDEyLjQyTDE4Ljk0LDkuNjRMMjIuMjgsOS44OEwyMC4wOCwxMi40Mk05LjYzLDE4LjkzTDEyLjQsMjAuMDhMOS44NywyMi4yN0w5LjYzLDE4LjkzWlwiIC8+PC9zdmc+JztcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGxpZ2h0TW9kZVRvZ2dsZSk7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuZnVuY3Rpb24gdG9kb2l0ZW1zKHRpdGxlLCBkZXNjcmlwcmlvbiwgZHVlRGF0ZSwgZHVlVGltZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXByaW9uLCBkdWVEYXRlLCBkdWVUaW1lLCBwcmlvcml0eSB9O1xufVxuXG5jb25zdCBjcmVhdGVUb2RvTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgdG9kb3MgPSBbXTtcblxuICBjb25zdCBhZGRUb2RvID0gKHRpdGxlLCBkZXNjcmlwcmlvbiwgZHVlRGF0ZSwgZHVlVGltZSwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCBuZXdUb2RvID0gdG9kb2l0ZW1zKHRpdGxlLCBkZXNjcmlwcmlvbiwgZHVlRGF0ZSwgZHVlVGltZSwgcHJpb3JpdHkpO1xuICAgIHRvZG9zLnB1c2gobmV3VG9kbyk7XG4gIH07XG5cbiAgLyogY29uc3QgcmVtb3ZlVG9kbyA9IChpbmRleCkgPT4ge1xuICAgICAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICByZW5kZXJUb2RvTGlzdCgpO1xuICAgICAgfTsgKi9cblxuICAvKiBjb25zdCB0b2dnbGVUb2RvQ29tcGxldGlvbiA9IChpbmRleCkgPT4ge1xuICAgICAgICB0b2Rvc1tpbmRleF0udG9nZ2xlQ29tcGxldGlvbigpO1xuICAgICAgICByZW5kZXJUb2RvTGlzdCgpO1xuICAgICAgfTsgKi9cblxuICByZXR1cm4ge1xuICAgIHRvZG9zLFxuICAgIGFkZFRvZG8gLyogcmVtb3ZlVG9kbywgdG9nZ2xlVG9kb0NvbXBsZXRpb24gKi8sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUb2RvTGlzdDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9MaXN0Q2hlY2tlZCgpIHtcbiAgdGhpcy5pbm5lckhUTUwgPVxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjMTYwNDE2XCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNoZWNrLXNxdWFyZVwiPjxwb2x5bGluZSBwb2ludHM9XCI5IDExIDEyIDE0IDIyIDRcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XCJNMjEgMTJ2N2EyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJoMTFcIj48L3BhdGg+PC9zdmc+JztcbiAgY29uc3QgbGlzdEl0ZW0gPSB0aGlzLnBhcmVudE5vZGU7XG4gIGxpc3RJdGVtLnN0eWxlLmJhY2tncm91bmQgPSBcIiM4MTZmNzJcIjtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvTGlzdERlbGV0ZUJ1dHRvbigpIHtcbiAgLyogY29uc3QgdG9kb0xpc3REZWxldGVCdXR0b24gPVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvTGlzdERlbGV0ZVwiKTtcbiAgbGV0IGk7XG4gIGZvciAoaSA9IDA7IGkgPCB0b2RvTGlzdERlbGV0ZUJ1dHRvbi5sZW5ndGg7IGkrKykge1xuICAgIHRvZG9MaXN0RGVsZXRlQnV0dG9uW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyAqL1xuICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5pbm5lckhUTUwpO1xuICBjb25zdCBkaXYgPSB0aGlzLnBhcmVudE5vZGU7XG4gIGRpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIC8vIH0pO1xuICAvLyB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgc3RhcnRQYWdlIGZyb20gXCIuL21vZHVsZXMvc3RhcnRwYWdlXCI7XG5pbXBvcnQgbWFpbkNvbnRhaW5lciBmcm9tIFwiLi9tb2R1bGVzL2NvbnRhaW5lclwiO1xuaW1wb3J0IHNpZGVQYW5lbEZ1bmN0aW9uIGZyb20gXCIuL21vZHVsZXMvc2lkZXBhbmVsXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbnN0YXJ0UGFnZSgpO1xubWFpbkNvbnRhaW5lcigpO1xuc2lkZVBhbmVsRnVuY3Rpb24oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==