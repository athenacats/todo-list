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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.header {\n  background-color: rgb(179, 68, 87);\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 4rem;\n  width: 100%;\n}\n.header button {\n  justify-self: end;\n  outline: none;\n  background-color: rgb(179, 68, 87);\n  border: none;\n}\n.header svg {\n  height: 1.5rem;\n}\n.header svg path {\n  fill: white;\n}\n\n.content {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  width: 100%;\n}\n.content .sidePanel {\n  background-color: rgb(240, 186, 195);\n  height: 88vh;\n  display: grid;\n  grid-template-rows: 3fr 1fr 6fr 1fr;\n  color: rgb(22, 4, 22);\n}\n.content .sidePanel .topPanel {\n  display: flex;\n  flex-direction: column;\n}\n.content .sidePanel .topPanel > * {\n  display: flex;\n  cursor: pointer;\n  padding-top: 14px;\n}\n.content .sidePanel .bottomPanel {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.content .sidePanel .bottomPanel > * {\n  padding-top: 20px;\n}\n.content .sidePanel button {\n  background-color: rgb(240, 186, 195);\n  outline: none;\n  border: none;\n  cursor: pointer;\n  font-family: \"Lora\", Georgia, serif;\n  color: rgb(22, 4, 22);\n  font-size: 1rem;\n}\n.content .sidePanel button svg.feather.feather-plus-square {\n  height: 100%;\n}\n.content .sidePanel button .tooltip {\n  opacity: 0;\n  position: absolute;\n  z-index: 999999999999;\n  font-family: \"Lora\", Georgia, serif;\n  font-size: 0.8rem;\n  text-align: center;\n  color: rgb(22, 4, 22);\n  background-color: rgb(179, 68, 87);\n  padding: 5px 0;\n  border-radius: 6px;\n  width: 120px;\n}\n.content .sidePanel button .tooltip:hover {\n  opacity: 1;\n}\n\n.popup {\n  margin: auto;\n  position: absolute;\n  filter: none;\n  top: 100px;\n  z-index: 10;\n  width: 100%;\n  height: 300px;\n  font-family: \"Lora\", Georgia, serif;\n}\n.popup form {\n  width: 70%;\n  height: 100%;\n  background-color: rgb(240, 186, 195);\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 12px;\n  box-shadow: 0 0 16px 8px rgb(179, 68, 87);\n  display: grid;\n  grid-template-rows: 1fr 4fr 2fr 1fr;\n}\n.popup form textarea {\n  background-color: rgb(243, 229, 231);\n  outline: none;\n  color: rgb(22, 4, 22);\n  border: none;\n  resize: none;\n  font-family: \"Lora\", Georgia, serif;\n  font-size: 1rem;\n  padding: 10px;\n  overflow: hidden;\n}\n.popup form textarea textarea:focus {\n  font-size: 1.2rem;\n}\n.popup form .controls {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  align-items: center;\n  padding: 0 10px;\n}\n.popup form .controls #duedate,\n.popup form .controls #duetime,\n.popup form .controls #priority,\n.popup form .controls label,\n.popup form .controls option {\n  font-family: \"Lora\", Georgia, serif;\n  color: rgb(22, 4, 22);\n  font-size: 0.8rem;\n}\n.popup form .buttonBox {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  padding-bottom: 10px;\n}\n.popup form .buttonBox button {\n  width: 50%;\n  outline: none;\n  border: 1px solid rgb(240, 186, 195);\n  border-radius: 16px;\n  font-family: \"Lora\", Georgia, serif;\n  color: white;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  cursor: pointer;\n}\n.popup form .buttonBox #submit {\n  background-color: rgb(179, 68, 87);\n  color: white;\n  justify-self: flex-end;\n  margin-right: 5px;\n}\n.popup form .buttonBox #cancel {\n  background-color: #816f72;\n  justify-self: flex-start;\n  margin-left: 5px;\n}\n\n.todoListItem {\n  border-bottom: 1px solid rgb(179, 68, 87);\n  border-radius: 16px;\n  width: 90%;\n  padding: 5px;\n  margin: 5px auto;\n  display: flex;\n  box-shadow: 0 0 8px rgb(179, 68, 87);\n  height: 2rem;\n  align-items: center;\n  justify-content: space-evenly;\n  color: rgb(22, 4, 22);\n}\n.todoListItem #todoListButton {\n  background-color: rgb(240, 186, 195);\n  font-family: \"Lora\", Georgia, serif;\n  padding: 3px 16px;\n  border-radius: 16px;\n  color: rgb(22, 4, 22);\n  border: none;\n  outline: none;\n}\n.todoListItem svg {\n  height: 90%;\n  cursor: pointer;\n}\n\n.projectPopup {\n  margin: auto;\n  position: absolute;\n  filter: none;\n  top: 200px;\n  z-index: 10;\n  width: 100%;\n  height: 150px;\n  font-family: \"Lora\", Georgia, serif;\n}\n.projectPopup form {\n  width: 70%;\n  height: 100%;\n  background-color: rgb(240, 186, 195);\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 12px;\n  box-shadow: 0 0 16px 8px rgb(179, 68, 87);\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  align-items: center;\n}\n.projectPopup form input {\n  background-color: rgb(243, 229, 231);\n  height: 2rem;\n  width: 80%;\n  outline: none;\n  color: rgb(22, 4, 22);\n  border: none;\n  border-radius: 16px;\n  resize: none;\n  font-family: \"Lora\", Georgia, serif;\n  font-size: 1rem;\n  padding: 10px;\n  overflow: hidden;\n}\n.projectPopup form input input:focus {\n  font-size: 1.2rem;\n}\n.projectPopup form label {\n  font-family: \"Lora\", Georgia, serif;\n  color: rgb(22, 4, 22);\n  font-size: 1rem;\n  margin-left: 5%;\n}\n.projectPopup form .projectButtonBox {\n  grid-column: span 2;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  padding-bottom: 10px;\n}\n.projectPopup form .projectButtonBox button {\n  width: 50%;\n  outline: none;\n  border: 1px solid rgb(240, 186, 195);\n  border-radius: 16px;\n  font-family: \"Lora\", Georgia, serif;\n  color: white;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  cursor: pointer;\n}\n.projectPopup form .projectButtonBox #projectSubmit {\n  background-color: rgb(179, 68, 87);\n  color: white;\n  justify-self: flex-end;\n  margin-right: 5px;\n}\n.projectPopup form .projectButtonBox #projectCancel {\n  background-color: #816f72;\n  justify-self: flex-start;\n  margin-left: 5px;\n}\n\nbody {\n  font-family: \"Lora\", Georgia, serif;\n}/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css","webpack://./src/scssfiles/_header.scss","webpack://./src/scssfiles/_variables.scss","webpack://./src/scssfiles/_content.scss","webpack://./src/scssfiles/_popup.scss","webpack://./src/scssfiles/_todolistitem.scss","webpack://./src/scssfiles/_projectpopup.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
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




function buttonFunctions() {
  (0,_formvalidation__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const title = document.querySelector("#popupTitle").value;
  const description = document.querySelector("#popupDescription").value;
  const dueDate = document.querySelector("#duedate").value;
  const dueTime = document.querySelector("#duetime").value;
  const priority = document.querySelector("#priority").value;

  const todoList = (0,_todolist__WEBPACK_IMPORTED_MODULE_1__["default"])();
  todoList.addTodo(title, description, dueDate, dueTime, priority);

  if (title === "") {
    // require this so that blank todos are not attached on subsequent submits
    // do nothing
  } else {
    (0,_rendertodolist__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }
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
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup */ "./src/modules/popup.js");
/* harmony import */ var _projectpopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectpopup */ "./src/modules/projectpopup.js");



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

  (0,_popup__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_projectpopup__WEBPACK_IMPORTED_MODULE_1__["default"])();
}


/***/ }),

/***/ "./src/modules/createProject.js":
/*!**************************************!*\
  !*** ./src/modules/createProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProject)
/* harmony export */ });
function createProject() {
  const projectPopup = document.querySelector(".projectPopup");
  projectPopup.style.display = "grid";
  const content = document.querySelector(".content");
  content.style.filter = "blur(20px)";
  content.style.webkitFilter = "blur(20px)";
}


/***/ }),

/***/ "./src/modules/displayhidepopup.js":
/*!*****************************************!*\
  !*** ./src/modules/displayhidepopup.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayHidePopup)
/* harmony export */ });
function displayHidePopup() {
  const popup = document.querySelector(".popup");
  popup.style.display = "flex";
  const content = document.querySelector(".content");
  content.style.filter = "blur(20px)";
  content.style.webkitFilter = "blur(20px)";
}


/***/ }),

/***/ "./src/modules/formActions.js":
/*!************************************!*\
  !*** ./src/modules/formActions.js ***!
  \************************************/
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
      document.getElementById("popupTitle").value = "";
      document.getElementById("popupDescription").value = "";
      document.getElementById("duedate").value = "";
      document.getElementById("duetime").value = "";
      document.getElementById("priority").value = "";
      content.style.filter = "none";
      content.style.webkitFilter = "none";
      popup.style.display = "none";
    },
    true
  );
}


/***/ }),

/***/ "./src/modules/formcancel.js":
/*!***********************************!*\
  !*** ./src/modules/formcancel.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cancelForm)
/* harmony export */ });
function cancelForm() {
  const content = document.querySelector(".content");
  const popup = document.querySelector(".popup");
  document.getElementById("popupTitle").value = "";
  document.getElementById("popupDescription").value = "";
  document.getElementById("duedate").value = "";
  document.getElementById("duetime").value = "";
  document.getElementById("priority").value = "";
  content.style.filter = "none";
  content.style.webkitFilter = "none";
  popup.style.display = "none";
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
/* harmony import */ var _formActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formActions */ "./src/modules/formActions.js");
/* harmony import */ var _formvalidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formvalidation */ "./src/modules/formvalidation.js");
/* harmony import */ var _formcancel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formcancel */ "./src/modules/formcancel.js");




function taskPopUp() {
  const container = document.querySelector(".container");

  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.style.filter = "none";
  popup.style.display = "none";
  container.appendChild(popup);

  const popupForm = document.createElement("form");
  popupForm.setAttribute("id", "popupForm");
  popupForm.setAttribute("name", "popupForm");
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
    (0,_formActions__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
  buttonBox.appendChild(button);

  const cancelButton = document.createElement("button");
  cancelButton.setAttribute("type", "button");
  cancelButton.setAttribute("id", "cancel");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", _formcancel__WEBPACK_IMPORTED_MODULE_2__["default"]);
  buttonBox.appendChild(cancelButton);
}


/***/ }),

/***/ "./src/modules/projectFormActions.js":
/*!*******************************************!*\
  !*** ./src/modules/projectFormActions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectFormActions)
/* harmony export */ });
/* harmony import */ var _projectbuttonfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectbuttonfunctions */ "./src/modules/projectbuttonfunctions.js");


function projectFormActions() {
  const projectPopupForm = document.querySelector("#projectPopupForm"); // call eventlistener to form so that preventdefault works
  projectPopupForm.addEventListener(
    "submit", // click method only validated first item in form, not all items
    (event) => {
      event.preventDefault();
      (0,_projectbuttonfunctions__WEBPACK_IMPORTED_MODULE_0__["default"])();
      const content = document.querySelector(".content");
      const projectPopup = document.querySelector(".projectPopup");
      document.getElementById("projectName").value = "";
      content.style.filter = "none";
      content.style.webkitFilter = "none";
      projectPopup.style.display = "none";
    },
    true
  );
}


/***/ }),

/***/ "./src/modules/projectbuttonfunctions.js":
/*!***********************************************!*\
  !*** ./src/modules/projectbuttonfunctions.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectButtonFunctions)
/* harmony export */ });
/* harmony import */ var _renderproject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderproject */ "./src/modules/renderproject.js");


function projectButtonFunctions() {
  const project = document.getElementById("projectName").value;

  if (project === "") {
    // require this so that blank todos are not attached on subsequent submits
    // do nothing
  } else {
    (0,_renderproject__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }
}


/***/ }),

/***/ "./src/modules/projectformcancel.js":
/*!******************************************!*\
  !*** ./src/modules/projectformcancel.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectCancelForm)
/* harmony export */ });
function projectCancelForm() {
  const content = document.querySelector(".content");
  const popup = document.querySelector(".projectPopup");
  document.getElementById("projectName").value = "";
  content.style.filter = "none";
  content.style.webkitFilter = "none";
  popup.style.display = "none";
}


/***/ }),

/***/ "./src/modules/projectpopup.js":
/*!*************************************!*\
  !*** ./src/modules/projectpopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectCreationPopup)
/* harmony export */ });
/* harmony import */ var _projectFormActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectFormActions */ "./src/modules/projectFormActions.js");
/* harmony import */ var _projectvalidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectvalidation */ "./src/modules/projectvalidation.js");
/* harmony import */ var _projectformcancel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectformcancel */ "./src/modules/projectformcancel.js");




function projectCreationPopup() {
  const container = document.querySelector(".container");

  const projectPopup = document.createElement("div");
  projectPopup.classList.add("projectPopup");
  projectPopup.style.filter = "none";
  projectPopup.style.display = "none";
  container.appendChild(projectPopup);

  const projectPopupForm = document.createElement("form");
  projectPopupForm.setAttribute("id", "projectPopupForm ");
  projectPopupForm.setAttribute("name", "projectPopupForm ");
  projectPopup.appendChild(projectPopupForm);

  const projectLabel = document.createElement("label");
  projectLabel.setAttribute("for", "projectLabel");
  projectLabel.textContent = "Project Name";
  projectPopupForm.appendChild(projectLabel);

  const projectName = document.createElement("input");
  projectName.setAttribute("type", "text");
  projectName.setAttribute("id", "projectName");
  projectName.addEventListener("input", _projectvalidation__WEBPACK_IMPORTED_MODULE_1__["default"]);
  projectName.setAttribute("name", "projectName");
  projectName.setAttribute("placeholder", "Gym");
  projectName.required = true;
  projectPopupForm.appendChild(projectName);

  const buttonBox = document.createElement("div");
  buttonBox.classList.add("projectButtonBox");
  projectPopupForm.appendChild(buttonBox);

  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.setAttribute("id", "projectSubmit");
  button.textContent = "Submit";
  button.addEventListener("click", () => {
    (0,_projectFormActions__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
  buttonBox.appendChild(button);

  const cancelButton = document.createElement("button");
  cancelButton.setAttribute("type", "button");
  cancelButton.setAttribute("id", "projectCancel");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", _projectformcancel__WEBPACK_IMPORTED_MODULE_2__["default"]);
  buttonBox.appendChild(cancelButton);
}


/***/ }),

/***/ "./src/modules/projectvalidation.js":
/*!******************************************!*\
  !*** ./src/modules/projectvalidation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ enableProjectSubmit)
/* harmony export */ });
/* eslint-disable no-plusplus */
function enableProjectSubmit() {
  const projectPopupForm = document.querySelector("#projectPopupForm");
  const requiredFields = projectPopupForm.querySelectorAll("[required]");
  let allFilled = true;
  const submitButton = document.querySelector("#projectSubmit");
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


/***/ }),

/***/ "./src/modules/renderproject.js":
/*!**************************************!*\
  !*** ./src/modules/renderproject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderProject)
/* harmony export */ });
/* harmony import */ var _todolistdelete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolistdelete */ "./src/modules/todolistdelete.js");


function renderProject() {
  const project = document.getElementById("projectName").value;
  const bottomPanel = document.querySelector(".bottomPanel");

  const newProject = document.createElement("button");
  newProject.setAttribute("id", "3");
  newProject.setAttribute("type", "button");
  const text = document.createElement("h3");
  text.textContent = project;
  newProject.appendChild(text);
  bottomPanel.appendChild(newProject);

  const projectDelete = document.createElement("svg");
  projectDelete.classList.add("projectDelete");
  projectDelete.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>';
  projectDelete.addEventListener("click", _todolistdelete__WEBPACK_IMPORTED_MODULE_0__["default"]);
  newProject.appendChild(projectDelete);
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
/* harmony import */ var _todolistdelete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolistdelete */ "./src/modules/todolistdelete.js");
/* harmony import */ var _todolistchecked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todolistchecked */ "./src/modules/todolistchecked.js");



function renderTodoList() {
  const title = document.querySelector("#popupTitle").value;
  const dueDate = document.querySelector("#duedate").value;
  const dueTime = document.querySelector("#duetime").value;
  const priority = document.querySelector("#priority").value;
  const listTodos = document.querySelector(".listTodos");

  const todoListItem = document.createElement("li");
  todoListItem.classList.add("todoListItem");
  listTodos.appendChild(todoListItem);

  const todoListPriority = document.createElement("svg");
  todoListPriority.classList.add("todoListPriority");
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
  todoListPriority.addEventListener("click", _todolistchecked__WEBPACK_IMPORTED_MODULE_1__["default"]);
  todoListItem.appendChild(todoListPriority);

  const todoListTitle = document.createElement("div");
  todoListTitle.classList.add("todoListTitle");
  todoListTitle.textContent = title;
  todoListItem.appendChild(todoListTitle);

  const todoListButton = document.createElement("button");
  todoListButton.setAttribute("id", "todoListButton");
  todoListButton.setAttribute("type", "button");
  todoListButton.textContent = "DETAILS";
  todoListItem.appendChild(todoListButton);

  const todoListDueDate = document.createElement("div");
  todoListDueDate.classList.add("todoListDueDate");
  todoListDueDate.textContent = dueDate;
  todoListItem.appendChild(todoListDueDate);

  const todoListDueTime = document.createElement("div");
  todoListDueTime.classList.add("todoListDueTime");
  todoListDueTime.textContent = dueTime;
  todoListItem.appendChild(todoListDueTime);

  const todoListEdit = document.createElement("svg");
  todoListEdit.classList.add("todoListEdit");
  todoListEdit.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>';
  todoListItem.appendChild(todoListEdit);

  const todoListDelete = document.createElement("svg");
  todoListDelete.classList.add("todoListDelete");
  todoListDelete.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>';
  todoListDelete.addEventListener("click", _todolistdelete__WEBPACK_IMPORTED_MODULE_0__["default"]);
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
/* harmony import */ var _displayhidepopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayhidepopup */ "./src/modules/displayhidepopup.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ "./src/modules/createProject.js");



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
  addButton.addEventListener("click", _displayhidepopup__WEBPACK_IMPORTED_MODULE_0__["default"]);
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
  addProject.addEventListener("click", _createProject__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QztBQUNJO0FBQ0k7O0FBRS9COztBQUVyQiw4REFBUztBQUNULDhEQUFhO0FBQ2IsOERBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2J1dHRvbmZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kaXNwbGF5aGlkZXBvcHVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Zvcm1BY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Zvcm1jYW5jZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZm9ybXZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdEZvcm1BY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RidXR0b25mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdGZvcm1jYW5jZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHBvcHVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3R2YWxpZGF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbmRlcnByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVydG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc2lkZXBhbmVsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0YXJ0cGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvbGlzdGNoZWNrZWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kb2xpc3RkZWxldGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9yYTppdGFsLHdnaHRAMCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc5LCA2OCwgODcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uaGVhZGVyIGJ1dHRvbiB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc5LCA2OCwgODcpO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4uaGVhZGVyIHN2ZyB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuLmhlYWRlciBzdmcgcGF0aCB7XFxuICBmaWxsOiB3aGl0ZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uY29udGVudCAuc2lkZVBhbmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE4NiwgMTk1KTtcXG4gIGhlaWdodDogODh2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnIgNmZyIDFmcjtcXG4gIGNvbG9yOiByZ2IoMjIsIDQsIDIyKTtcXG59XFxuLmNvbnRlbnQgLnNpZGVQYW5lbCAudG9wUGFuZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5jb250ZW50IC5zaWRlUGFuZWwgLnRvcFBhbmVsID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZy10b3A6IDE0cHg7XFxufVxcbi5jb250ZW50IC5zaWRlUGFuZWwgLmJvdHRvbVBhbmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5jb250ZW50IC5zaWRlUGFuZWwgLmJvdHRvbVBhbmVsID4gKiB7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuLmNvbnRlbnQgLnNpZGVQYW5lbCBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTg2LCAxOTUpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIEdlb3JnaWEsIHNlcmlmO1xcbiAgY29sb3I6IHJnYigyMiwgNCwgMjIpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uY29udGVudCAuc2lkZVBhbmVsIGJ1dHRvbiBzdmcuZmVhdGhlci5mZWF0aGVyLXBsdXMtc3F1YXJlIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmNvbnRlbnQgLnNpZGVQYW5lbCBidXR0b24gLnRvb2x0aXAge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk5OTk5OTk5OTk5OTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIEdlb3JnaWEsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiKDIyLCA0LCAyMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc5LCA2OCwgODcpO1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB3aWR0aDogMTIwcHg7XFxufVxcbi5jb250ZW50IC5zaWRlUGFuZWwgYnV0dG9uIC50b29sdGlwOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wb3B1cCB7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmaWx0ZXI6IG5vbmU7XFxuICB0b3A6IDEwMHB4O1xcbiAgei1pbmRleDogMTA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBHZW9yZ2lhLCBzZXJpZjtcXG59XFxuLnBvcHVwIGZvcm0ge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE4NiwgMTk1KTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxNnB4IDhweCByZ2IoMTc5LCA2OCwgODcpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmciAyZnIgMWZyO1xcbn1cXG4ucG9wdXAgZm9ybSB0ZXh0YXJlYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyMjksIDIzMSk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6IHJnYigyMiwgNCwgMjIpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcmVzaXplOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgR2VvcmdpYSwgc2VyaWY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnBvcHVwIGZvcm0gdGV4dGFyZWEgdGV4dGFyZWE6Zm9jdXMge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbi5wb3B1cCBmb3JtIC5jb250cm9scyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG4ucG9wdXAgZm9ybSAuY29udHJvbHMgI2R1ZWRhdGUsXFxuLnBvcHVwIGZvcm0gLmNvbnRyb2xzICNkdWV0aW1lLFxcbi5wb3B1cCBmb3JtIC5jb250cm9scyAjcHJpb3JpdHksXFxuLnBvcHVwIGZvcm0gLmNvbnRyb2xzIGxhYmVsLFxcbi5wb3B1cCBmb3JtIC5jb250cm9scyBvcHRpb24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgR2VvcmdpYSwgc2VyaWY7XFxuICBjb2xvcjogcmdiKDIyLCA0LCAyMik7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuLnBvcHVwIGZvcm0gLmJ1dHRvbkJveCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi5wb3B1cCBmb3JtIC5idXR0b25Cb3ggYnV0dG9uIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0MCwgMTg2LCAxOTUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIEdlb3JnaWEsIHNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wb3B1cCBmb3JtIC5idXR0b25Cb3ggI3N1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc5LCA2OCwgODcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4ucG9wdXAgZm9ybSAuYnV0dG9uQm94ICNjYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxNmY3MjtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi50b2RvTGlzdEl0ZW0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNzksIDY4LCA4Nyk7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbjogNXB4IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm94LXNoYWRvdzogMCAwIDhweCByZ2IoMTc5LCA2OCwgODcpO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgY29sb3I6IHJnYigyMiwgNCwgMjIpO1xcbn1cXG4udG9kb0xpc3RJdGVtICN0b2RvTGlzdEJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxODYsIDE5NSk7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBHZW9yZ2lhLCBzZXJpZjtcXG4gIHBhZGRpbmc6IDNweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGNvbG9yOiByZ2IoMjIsIDQsIDIyKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi50b2RvTGlzdEl0ZW0gc3ZnIHtcXG4gIGhlaWdodDogOTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdFBvcHVwIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZpbHRlcjogbm9uZTtcXG4gIHRvcDogMjAwcHg7XFxuICB6LWluZGV4OiAxMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIEdlb3JnaWEsIHNlcmlmO1xcbn1cXG4ucHJvamVjdFBvcHVwIGZvcm0ge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE4NiwgMTk1KTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxNnB4IDhweCByZ2IoMTc5LCA2OCwgODcpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0UG9wdXAgZm9ybSBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyMjksIDIzMSk7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogODAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMjIsIDQsIDIyKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICByZXNpemU6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBHZW9yZ2lhLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ucHJvamVjdFBvcHVwIGZvcm0gaW5wdXQgaW5wdXQ6Zm9jdXMge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbi5wcm9qZWN0UG9wdXAgZm9ybSBsYWJlbCB7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBHZW9yZ2lhLCBzZXJpZjtcXG4gIGNvbG9yOiByZ2IoMjIsIDQsIDIyKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuLnByb2plY3RQb3B1cCBmb3JtIC5wcm9qZWN0QnV0dG9uQm94IHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi5wcm9qZWN0UG9wdXAgZm9ybSAucHJvamVjdEJ1dHRvbkJveCBidXR0b24ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjQwLCAxODYsIDE5NSk7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgR2VvcmdpYSwgc2VyaWY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnByb2plY3RQb3B1cCBmb3JtIC5wcm9qZWN0QnV0dG9uQm94ICNwcm9qZWN0U3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzksIDY4LCA4Nyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5wcm9qZWN0UG9wdXAgZm9ybSAucHJvamVjdEJ1dHRvbkJveCAjcHJvamVjdENhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODE2ZjcyO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBHZW9yZ2lhLCBzZXJpZjtcXG59LyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzc2ZpbGVzL19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3NmaWxlcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzZmlsZXMvX2NvbnRlbnQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3NmaWxlcy9fcG9wdXAuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3NmaWxlcy9fdG9kb2xpc3RpdGVtLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzZmlsZXMvX3Byb2plY3Rwb3B1cC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0VGOztBQ0xBO0VBQ0Usa0NDRFE7RURFUixZQ0RVO0VERVYsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRFFGO0FDUEU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0NYTTtFRFlOLFlBQUE7QURTSjtBQ1BFO0VBQ0UsY0FBQTtBRFNKO0FDUEk7RUFDRSxXQ2pCTTtBRjBCWjs7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RixlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FOa01OO0FNak1NO0VBQ0UsaUJBQUE7QU5tTVI7QU1oTUk7RUFDRSxtQ0poQ0U7RUlpQ0YscUJKdENLO0VJdUNMLGVBQUE7RUFDQSxlQUFBO0FOa01OO0FNaE1JO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBTmtNTjtBTWpNTTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLG1DSi9DQTtFSWdEQSxZSnRESTtFSXVESixnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBTm1NUjtBTWpNTTtFQUNFLGtDSjdERTtFSThERixZSjdESTtFSThESixzQkFBQTtFQUNBLGlCQUFBO0FObU1SO0FNak1NO0VBQ0UseUJKL0RDO0VJZ0VELHdCQUFBO0VBQ0EsZ0JBQUE7QU5tTVI7O0FEMVBBO0VBQ0UsbUNHUk07QUZxUVIsQ0FBQSxvQ0FBQVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCByZW5kZXJUb2RvTGlzdCBmcm9tIFwiLi9yZW5kZXJ0b2RvbGlzdFwiO1xuaW1wb3J0IGNyZWF0ZVRvZG9MaXN0IGZyb20gXCIuL3RvZG9saXN0XCI7XG5pbXBvcnQgZW5hYmxlU3VibWl0IGZyb20gXCIuL2Zvcm12YWxpZGF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1dHRvbkZ1bmN0aW9ucygpIHtcbiAgZW5hYmxlU3VibWl0KCk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cFRpdGxlXCIpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXBEZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlZGF0ZVwiKS52YWx1ZTtcbiAgY29uc3QgZHVlVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVldGltZVwiKS52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlO1xuXG4gIGNvbnN0IHRvZG9MaXN0ID0gY3JlYXRlVG9kb0xpc3QoKTtcbiAgdG9kb0xpc3QuYWRkVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGR1ZVRpbWUsIHByaW9yaXR5KTtcblxuICBpZiAodGl0bGUgPT09IFwiXCIpIHtcbiAgICAvLyByZXF1aXJlIHRoaXMgc28gdGhhdCBibGFuayB0b2RvcyBhcmUgbm90IGF0dGFjaGVkIG9uIHN1YnNlcXVlbnQgc3VibWl0c1xuICAgIC8vIGRvIG5vdGhpbmdcbiAgfSBlbHNlIHtcbiAgICByZW5kZXJUb2RvTGlzdCgpO1xuICB9XG59XG4iLCJpbXBvcnQgdGFza1BvcFVwIGZyb20gXCIuL3BvcHVwXCI7XG5pbXBvcnQgcHJvamVjdENyZWF0aW9uUG9wdXAgZnJvbSBcIi4vcHJvamVjdHBvcHVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW5Db250YWluZXIoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgY29uc3Qgc2lkZVBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2lkZVBhbmVsLmNsYXNzTGlzdC5hZGQoXCJzaWRlUGFuZWxcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZVBhbmVsKTtcblxuICBjb25zdCBtYWluUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluUGFuZWwuY2xhc3NMaXN0LmFkZChcIm1haW5QYW5lbFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluUGFuZWwpO1xuXG4gIGNvbnN0IGxpc3RUb2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgbGlzdFRvZG9zLmNsYXNzTGlzdC5hZGQoXCJsaXN0VG9kb3NcIik7XG4gIG1haW5QYW5lbC5hcHBlbmRDaGlsZChsaXN0VG9kb3MpO1xuXG4gIHRhc2tQb3BVcCgpO1xuICBwcm9qZWN0Q3JlYXRpb25Qb3B1cCgpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgY29uc3QgcHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0UG9wdXBcIik7XG4gIHByb2plY3RQb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gIGNvbnRlbnQuc3R5bGUuZmlsdGVyID0gXCJibHVyKDIwcHgpXCI7XG4gIGNvbnRlbnQuc3R5bGUud2Via2l0RmlsdGVyID0gXCJibHVyKDIwcHgpXCI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5SGlkZVBvcHVwKCkge1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIik7XG4gIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgY29udGVudC5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMjBweClcIjtcbiAgY29udGVudC5zdHlsZS53ZWJraXRGaWx0ZXIgPSBcImJsdXIoMjBweClcIjtcbn1cbiIsImltcG9ydCBidXR0b25GdW5jdGlvbnMgZnJvbSBcIi4vYnV0dG9uZnVuY3Rpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1BY3Rpb25zKCkge1xuICBjb25zdCBwb3B1cEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwRm9ybVwiKTsgLy8gY2FsbCBldmVudGxpc3RlbmVyIHRvIGZvcm0gc28gdGhhdCBwcmV2ZW50ZGVmYXVsdCB3b3Jrc1xuICBwb3B1cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcInN1Ym1pdFwiLCAvLyBjbGljayBtZXRob2Qgb25seSB2YWxpZGF0ZWQgZmlyc3QgaXRlbSBpbiBmb3JtLCBub3QgYWxsIGl0ZW1zXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYnV0dG9uRnVuY3Rpb25zKCk7XG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3B1cFRpdGxlXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wdXBEZXNjcmlwdGlvblwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZWRhdGVcIikudmFsdWUgPSBcIlwiO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWV0aW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikudmFsdWUgPSBcIlwiO1xuICAgICAgY29udGVudC5zdHlsZS5maWx0ZXIgPSBcIm5vbmVcIjtcbiAgICAgIGNvbnRlbnQuc3R5bGUud2Via2l0RmlsdGVyID0gXCJub25lXCI7XG4gICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSxcbiAgICB0cnVlXG4gICk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYW5jZWxGb3JtKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIik7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wdXBUaXRsZVwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wdXBEZXNjcmlwdGlvblwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlZGF0ZVwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVldGltZVwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikudmFsdWUgPSBcIlwiO1xuICBjb250ZW50LnN0eWxlLmZpbHRlciA9IFwibm9uZVwiO1xuICBjb250ZW50LnN0eWxlLndlYmtpdEZpbHRlciA9IFwibm9uZVwiO1xuICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5hYmxlU3VibWl0KCkge1xuICBjb25zdCBwb3B1cEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwRm9ybVwiKTtcbiAgY29uc3QgcmVxdWlyZWRGaWVsZHMgPSBwb3B1cEZvcm0ucXVlcnlTZWxlY3RvckFsbChcIltyZXF1aXJlZF1cIik7XG4gIGxldCBhbGxGaWxsZWQgPSB0cnVlO1xuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFwiKTtcbiAgaWYgKGFsbEZpbGxlZCkge1xuICAgIHN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgfSBlbHNlIHtcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gIH1cbiAgcmVxdWlyZWRGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpZiAoIWZpZWxkLnZhbHVlKSB7XG4gICAgICBhbGxGaWxsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIllvdSBlbnRlcmVkOlwiLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwVGl0bGVcIikudmFsdWUpO1xufSk7ICovXG4iLCJpbXBvcnQgZm9ybUFjdGlvbnMgZnJvbSBcIi4vZm9ybUFjdGlvbnNcIjtcbmltcG9ydCBlbmFibGVTdWJtaXQgZnJvbSBcIi4vZm9ybXZhbGlkYXRpb25cIjtcbmltcG9ydCBjYW5jZWxGb3JtIGZyb20gXCIuL2Zvcm1jYW5jZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza1BvcFVwKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcblxuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cFwiKTtcbiAgcG9wdXAuc3R5bGUuZmlsdGVyID0gXCJub25lXCI7XG4gIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBvcHVwKTtcblxuICBjb25zdCBwb3B1cEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgcG9wdXBGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicG9wdXBGb3JtXCIpO1xuICBwb3B1cEZvcm0uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInBvcHVwRm9ybVwiKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBGb3JtKTtcblxuICBjb25zdCBwb3B1cFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBwb3B1cFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicG9wdXBUaXRsZVwiKTtcbiAgcG9wdXBUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZW5hYmxlU3VibWl0KTtcbiAgcG9wdXBUaXRsZS5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCI1MFwiKTtcbiAgcG9wdXBUaXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRpdGxlXCIpO1xuICBwb3B1cFRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJUaXRsZVwiKTtcbiAgcG9wdXBUaXRsZS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgcG9wdXBGb3JtLmFwcGVuZENoaWxkKHBvcHVwVGl0bGUpO1xuXG4gIGNvbnN0IHBvcHVwRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHBvcHVwRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwb3B1cERlc2NyaXB0aW9uXCIpO1xuICBwb3B1cERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjE0MFwiKTtcbiAgcG9wdXBEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuICBwb3B1cEZvcm0uYXBwZW5kQ2hpbGQocG9wdXBEZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgY29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250cm9scy5jbGFzc0xpc3QuYWRkKFwiY29udHJvbHNcIik7XG4gIHBvcHVwRm9ybS5hcHBlbmRDaGlsZChjb250cm9scyk7XG5cbiAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlZGF0ZVwiKTtcbiAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuICBjb250cm9scy5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuXG4gIGNvbnN0IGRhdGVQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRhdGVQaWNrZXIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIGRhdGVQaWNrZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVkYXRlXCIpO1xuICBkYXRlUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlbmFibGVTdWJtaXQpO1xuICBkYXRlUGlja2VyLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkdWVkYXRlXCIpO1xuICBkYXRlUGlja2VyLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVG9kYXlcIik7XG4gIGRhdGVQaWNrZXIucmVxdWlyZWQgPSB0cnVlO1xuICBjb250cm9scy5hcHBlbmRDaGlsZChkYXRlUGlja2VyKTtcblxuICBjb25zdCB0aW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRpbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aW1lXCIpO1xuICB0aW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpbWVcIjtcbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQodGltZUxhYmVsKTtcblxuICBjb25zdCB0aW1lUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aW1lUGlja2VyLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0aW1lXCIpO1xuICB0aW1lUGlja2VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVldGltZVwiKTtcbiAgdGltZVBpY2tlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZW5hYmxlU3VibWl0KTtcbiAgdGltZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVldGltZVwiKTtcbiAgdGltZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIm5vd1wiKTtcbiAgdGltZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQodGltZVBpY2tlcik7XG5cbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHkgTGV2ZWxcIjtcbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgY29uc3QgcHJpb3JpdHlQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcmlvcml0eVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpO1xuICBwcmlvcml0eVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJjaGFuZ2VcIiwgZW5hYmxlU3VibWl0KTtcbiAgcHJpb3JpdHlQaWNrZXIuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICBwcmlvcml0eVBpY2tlci5yZXF1aXJlZCA9IHRydWU7XG4gIC8vIHByaW9yaXR5UGlja2VyLnNldEF0dHJpYnV0ZShcIm9uY2hhbmdlXCIsIFwidXBkYXRlUHJpb3JpdHkodGhpcy52YWx1ZSlcIik7XG4gIC8vIHByaW9yaXR5UGlja2VyLnNldEF0dHJpYnV0ZShcIm9uZm9jdXNcIiwgXCIodGhpcy50eXBlPSdzZWxlY3QnKVwiKTtcbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQocHJpb3JpdHlQaWNrZXIpO1xuXG4gIGNvbnN0IG9wdGlvblBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uUGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJcIik7XG4gIG9wdGlvblBsYWNlaG9sZGVyLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICBvcHRpb25QbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcbiAgb3B0aW9uUGxhY2Vob2xkZXIudGV4dENvbnRlbnQgPSBcIlNlbGVjdFwiO1xuICBwcmlvcml0eVBpY2tlci5hcHBlbmRDaGlsZChvcHRpb25QbGFjZWhvbGRlcik7XG5cbiAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbjEuY2xhc3NMaXN0LmFkZChcImxvd1wiKTtcbiAgb3B0aW9uMS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkxvd1wiKTtcbiAgb3B0aW9uMS50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gIG9wdGlvbjEuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XG4gIHByaW9yaXR5UGlja2VyLmFwcGVuZENoaWxkKG9wdGlvbjEpO1xuXG4gIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb24yLmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1cIik7XG4gIG9wdGlvbjIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJNZWRpdW1cIik7XG4gIG9wdGlvbjIudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICBvcHRpb24yLnN0eWxlLmNvbG9yID0gXCJvcmFuZ2VcIjtcbiAgcHJpb3JpdHlQaWNrZXIuYXBwZW5kQ2hpbGQob3B0aW9uMik7XG5cbiAgY29uc3Qgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbjMuY2xhc3NMaXN0LmFkZChcImhpZ2hcIik7XG4gIG9wdGlvbjMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJIaWdoXCIpO1xuICBvcHRpb24zLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gIG9wdGlvbjMuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICBwcmlvcml0eVBpY2tlci5hcHBlbmRDaGlsZChvcHRpb24zKTtcblxuICBjb25zdCBidXR0b25Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25Cb3guY2xhc3NMaXN0LmFkZChcImJ1dHRvbkJveFwiKTtcbiAgcG9wdXBGb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkJveCk7XG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdFwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZm9ybUFjdGlvbnMoKTtcbiAgfSk7XG4gIGJ1dHRvbkJveC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW5jZWxcIik7XG4gIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FuY2VsRm9ybSk7XG4gIGJ1dHRvbkJveC5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xufVxuIiwiaW1wb3J0IHByb2plY3RCdXR0b25GdW5jdGlvbnMgZnJvbSBcIi4vcHJvamVjdGJ1dHRvbmZ1bmN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0Rm9ybUFjdGlvbnMoKSB7XG4gIGNvbnN0IHByb2plY3RQb3B1cEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RQb3B1cEZvcm1cIik7IC8vIGNhbGwgZXZlbnRsaXN0ZW5lciB0byBmb3JtIHNvIHRoYXQgcHJldmVudGRlZmF1bHQgd29ya3NcbiAgcHJvamVjdFBvcHVwRm9ybS5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwic3VibWl0XCIsIC8vIGNsaWNrIG1ldGhvZCBvbmx5IHZhbGlkYXRlZCBmaXJzdCBpdGVtIGluIGZvcm0sIG5vdCBhbGwgaXRlbXNcbiAgICAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwcm9qZWN0QnV0dG9uRnVuY3Rpb25zKCk7XG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgICAgY29uc3QgcHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0UG9wdXBcIik7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3ROYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgIGNvbnRlbnQuc3R5bGUuZmlsdGVyID0gXCJub25lXCI7XG4gICAgICBjb250ZW50LnN0eWxlLndlYmtpdEZpbHRlciA9IFwibm9uZVwiO1xuICAgICAgcHJvamVjdFBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9LFxuICAgIHRydWVcbiAgKTtcbn1cbiIsImltcG9ydCByZW5kZXJQcm9qZWN0IGZyb20gXCIuL3JlbmRlcnByb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdEJ1dHRvbkZ1bmN0aW9ucygpIHtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE5hbWVcIikudmFsdWU7XG5cbiAgaWYgKHByb2plY3QgPT09IFwiXCIpIHtcbiAgICAvLyByZXF1aXJlIHRoaXMgc28gdGhhdCBibGFuayB0b2RvcyBhcmUgbm90IGF0dGFjaGVkIG9uIHN1YnNlcXVlbnQgc3VibWl0c1xuICAgIC8vIGRvIG5vdGhpbmdcbiAgfSBlbHNlIHtcbiAgICByZW5kZXJQcm9qZWN0KCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RDYW5jZWxGb3JtKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFBvcHVwXCIpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3ROYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgY29udGVudC5zdHlsZS5maWx0ZXIgPSBcIm5vbmVcIjtcbiAgY29udGVudC5zdHlsZS53ZWJraXRGaWx0ZXIgPSBcIm5vbmVcIjtcbiAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuIiwiaW1wb3J0IHByb2plY3RGb3JtQWN0aW9ucyBmcm9tIFwiLi9wcm9qZWN0Rm9ybUFjdGlvbnNcIjtcbmltcG9ydCBlbmFibGVQcm9qZWN0U3VibWl0IGZyb20gXCIuL3Byb2plY3R2YWxpZGF0aW9uXCI7XG5pbXBvcnQgcHJvamVjdENhbmNlbEZvcm0gZnJvbSBcIi4vcHJvamVjdGZvcm1jYW5jZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdENyZWF0aW9uUG9wdXAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHByb2plY3RQb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RQb3B1cC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFBvcHVwXCIpO1xuICBwcm9qZWN0UG9wdXAuc3R5bGUuZmlsdGVyID0gXCJub25lXCI7XG4gIHByb2plY3RQb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0UG9wdXApO1xuXG4gIGNvbnN0IHByb2plY3RQb3B1cEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgcHJvamVjdFBvcHVwRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RQb3B1cEZvcm0gXCIpO1xuICBwcm9qZWN0UG9wdXBGb3JtLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0UG9wdXBGb3JtIFwiKTtcbiAgcHJvamVjdFBvcHVwLmFwcGVuZENoaWxkKHByb2plY3RQb3B1cEZvcm0pO1xuXG4gIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3RMYWJlbFwiKTtcbiAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IE5hbWVcIjtcbiAgcHJvamVjdFBvcHVwRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0TmFtZVwiKTtcbiAgcHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGVuYWJsZVByb2plY3RTdWJtaXQpO1xuICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdE5hbWVcIik7XG4gIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiR3ltXCIpO1xuICBwcm9qZWN0TmFtZS5yZXF1aXJlZCA9IHRydWU7XG4gIHByb2plY3RQb3B1cEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gIGNvbnN0IGJ1dHRvbkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbkJveC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEJ1dHRvbkJveFwiKTtcbiAgcHJvamVjdFBvcHVwRm9ybS5hcHBlbmRDaGlsZChidXR0b25Cb3gpO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0U3VibWl0XCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwcm9qZWN0Rm9ybUFjdGlvbnMoKTtcbiAgfSk7XG4gIGJ1dHRvbkJveC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0Q2FuY2VsXCIpO1xuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RDYW5jZWxGb3JtKTtcbiAgYnV0dG9uQm94LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5hYmxlUHJvamVjdFN1Ym1pdCgpIHtcbiAgY29uc3QgcHJvamVjdFBvcHVwRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFBvcHVwRm9ybVwiKTtcbiAgY29uc3QgcmVxdWlyZWRGaWVsZHMgPSBwcm9qZWN0UG9wdXBGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbcmVxdWlyZWRdXCIpO1xuICBsZXQgYWxsRmlsbGVkID0gdHJ1ZTtcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0U3VibWl0XCIpO1xuICBpZiAoYWxsRmlsbGVkKSB7XG4gICAgc3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICB9IGVsc2Uge1xuICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgfVxuICByZXF1aXJlZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGlmICghZmllbGQudmFsdWUpIHtcbiAgICAgIGFsbEZpbGxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgdG9kb0xpc3REZWxldGVCdXR0b24gZnJvbSBcIi4vdG9kb2xpc3RkZWxldGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdCgpIHtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE5hbWVcIikudmFsdWU7XG4gIGNvbnN0IGJvdHRvbVBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3R0b21QYW5lbFwiKTtcblxuICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIjNcIik7XG4gIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGV4dC50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQodGV4dCk7XG4gIGJvdHRvbVBhbmVsLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuXG4gIGNvbnN0IHByb2plY3REZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3ZnXCIpO1xuICBwcm9qZWN0RGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0RGVsZXRlXCIpO1xuICBwcm9qZWN0RGVsZXRlLmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci10cmFzaC0yXCI+PHBvbHlsaW5lIHBvaW50cz1cIjMgNiA1IDYgMjEgNlwiPjwvcG9seWxpbmU+PHBhdGggZD1cIk0xOSA2djE0YTIgMiAwIDAgMS0yIDJIN2EyIDIgMCAwIDEtMi0yVjZtMyAwVjRhMiAyIDAgMCAxIDItMmg0YTIgMiAwIDAgMSAyIDJ2MlwiPjwvcGF0aD48bGluZSB4MT1cIjEwXCIgeTE9XCIxMVwiIHgyPVwiMTBcIiB5Mj1cIjE3XCI+PC9saW5lPjxsaW5lIHgxPVwiMTRcIiB5MT1cIjExXCIgeDI9XCIxNFwiIHkyPVwiMTdcIj48L2xpbmU+PC9zdmc+JztcbiAgcHJvamVjdERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9kb0xpc3REZWxldGVCdXR0b24pO1xuICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3REZWxldGUpO1xufVxuIiwiaW1wb3J0IHRvZG9MaXN0RGVsZXRlQnV0dG9uIGZyb20gXCIuL3RvZG9saXN0ZGVsZXRlXCI7XG5pbXBvcnQgdG9kb0xpc3RDaGVja2VkIGZyb20gXCIuL3RvZG9saXN0Y2hlY2tlZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJUb2RvTGlzdCgpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwVGl0bGVcIikudmFsdWU7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZWRhdGVcIikudmFsdWU7XG4gIGNvbnN0IGR1ZVRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZXRpbWVcIikudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZTtcbiAgY29uc3QgbGlzdFRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0VG9kb3NcIik7XG5cbiAgY29uc3QgdG9kb0xpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB0b2RvTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInRvZG9MaXN0SXRlbVwiKTtcbiAgbGlzdFRvZG9zLmFwcGVuZENoaWxkKHRvZG9MaXN0SXRlbSk7XG5cbiAgY29uc3QgdG9kb0xpc3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIik7XG4gIHRvZG9MaXN0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRvZG9MaXN0UHJpb3JpdHlcIik7XG4gIGlmIChwcmlvcml0eSA9PT0gXCJMb3dcIikge1xuICAgIC8vIHNldCBkaWZmZXJlbnQgc3ZnIGNvbG9ycyBmb3IgYWxsIHByaW9yaXR5IGxldmVsc1xuICAgIHRvZG9MaXN0UHJpb3JpdHkuaW5uZXJIVE1MID1cbiAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjMDBGRjAwXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXNxdWFyZVwiPjxyZWN0IHg9XCIzXCIgeT1cIjNcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiByeD1cIjJcIiByeT1cIjJcIj48L3JlY3Q+PC9zdmc+JztcbiAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gXCJNZWRpdW1cIikge1xuICAgIHRvZG9MaXN0UHJpb3JpdHkuaW5uZXJIVE1MID1cbiAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjRkZBNTAwXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXNxdWFyZVwiPjxyZWN0IHg9XCIzXCIgeT1cIjNcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiByeD1cIjJcIiByeT1cIjJcIj48L3JlY3Q+PC9zdmc+JztcbiAgfSBlbHNlIHtcbiAgICB0b2RvTGlzdFByaW9yaXR5LmlubmVySFRNTCA9XG4gICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI0ZGMDAwMFwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1zcXVhcmVcIj48cmVjdCB4PVwiM1wiIHk9XCIzXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgcng9XCIyXCIgcnk9XCIyXCI+PC9yZWN0Pjwvc3ZnPic7XG4gIH1cbiAgdG9kb0xpc3RQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9kb0xpc3RDaGVja2VkKTtcbiAgdG9kb0xpc3RJdGVtLmFwcGVuZENoaWxkKHRvZG9MaXN0UHJpb3JpdHkpO1xuXG4gIGNvbnN0IHRvZG9MaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvTGlzdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvTGlzdFRpdGxlXCIpO1xuICB0b2RvTGlzdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIHRvZG9MaXN0SXRlbS5hcHBlbmRDaGlsZCh0b2RvTGlzdFRpdGxlKTtcblxuICBjb25zdCB0b2RvTGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRvZG9MaXN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb0xpc3RCdXR0b25cIik7XG4gIHRvZG9MaXN0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIHRvZG9MaXN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJERVRBSUxTXCI7XG4gIHRvZG9MaXN0SXRlbS5hcHBlbmRDaGlsZCh0b2RvTGlzdEJ1dHRvbik7XG5cbiAgY29uc3QgdG9kb0xpc3REdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb0xpc3REdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvTGlzdER1ZURhdGVcIik7XG4gIHRvZG9MaXN0RHVlRGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG4gIHRvZG9MaXN0SXRlbS5hcHBlbmRDaGlsZCh0b2RvTGlzdER1ZURhdGUpO1xuXG4gIGNvbnN0IHRvZG9MaXN0RHVlVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9MaXN0RHVlVGltZS5jbGFzc0xpc3QuYWRkKFwidG9kb0xpc3REdWVUaW1lXCIpO1xuICB0b2RvTGlzdER1ZVRpbWUudGV4dENvbnRlbnQgPSBkdWVUaW1lO1xuICB0b2RvTGlzdEl0ZW0uYXBwZW5kQ2hpbGQodG9kb0xpc3REdWVUaW1lKTtcblxuICBjb25zdCB0b2RvTGlzdEVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3ZnXCIpO1xuICB0b2RvTGlzdEVkaXQuY2xhc3NMaXN0LmFkZChcInRvZG9MaXN0RWRpdFwiKTtcbiAgdG9kb0xpc3RFZGl0LmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1lZGl0XCI+PHBhdGggZD1cIk0xMSA0SDRhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJ2LTdcIj48L3BhdGg+PHBhdGggZD1cIk0xOC41IDIuNWEyLjEyMSAyLjEyMSAwIDAgMSAzIDNMMTIgMTVsLTQgMSAxLTQgOS41LTkuNXpcIj48L3BhdGg+PC9zdmc+JztcbiAgdG9kb0xpc3RJdGVtLmFwcGVuZENoaWxkKHRvZG9MaXN0RWRpdCk7XG5cbiAgY29uc3QgdG9kb0xpc3REZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3ZnXCIpO1xuICB0b2RvTGlzdERlbGV0ZS5jbGFzc0xpc3QuYWRkKFwidG9kb0xpc3REZWxldGVcIik7XG4gIHRvZG9MaXN0RGVsZXRlLmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci10cmFzaC0yXCI+PHBvbHlsaW5lIHBvaW50cz1cIjMgNiA1IDYgMjEgNlwiPjwvcG9seWxpbmU+PHBhdGggZD1cIk0xOSA2djE0YTIgMiAwIDAgMS0yIDJIN2EyIDIgMCAwIDEtMi0yVjZtMyAwVjRhMiAyIDAgMCAxIDItMmg0YTIgMiAwIDAgMSAyIDJ2MlwiPjwvcGF0aD48bGluZSB4MT1cIjEwXCIgeTE9XCIxMVwiIHgyPVwiMTBcIiB5Mj1cIjE3XCI+PC9saW5lPjxsaW5lIHgxPVwiMTRcIiB5MT1cIjExXCIgeDI9XCIxNFwiIHkyPVwiMTdcIj48L2xpbmU+PC9zdmc+JztcbiAgdG9kb0xpc3REZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZG9MaXN0RGVsZXRlQnV0dG9uKTtcbiAgdG9kb0xpc3RJdGVtLmFwcGVuZENoaWxkKHRvZG9MaXN0RGVsZXRlKTtcbn1cbiIsImltcG9ydCBkaXNwbGF5SGlkZVBvcHVwIGZyb20gXCIuL2Rpc3BsYXloaWRlcG9wdXBcIjtcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lkZVBhbmVsRnVuY3Rpb24oKSB7XG4gIGNvbnN0IHNpZGVQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZVBhbmVsXCIpO1xuXG4gIGNvbnN0IHRvcFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9wUGFuZWwuY2xhc3NMaXN0LmFkZChcInRvcFBhbmVsXCIpO1xuICBzaWRlUGFuZWwuYXBwZW5kQ2hpbGQodG9wUGFuZWwpO1xuXG4gIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaW5ib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbmJveFwiKTtcbiAgaW5ib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgY29uc3QgaWNvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpY29uMS5pbm5lckhUTUwgPVxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItaW5ib3hcIj48cG9seWxpbmUgcG9pbnRzPVwiMjIgMTIgMTYgMTIgMTQgMTUgMTAgMTUgOCAxMiAyIDEyXCI+PC9wb2x5bGluZT48cGF0aCBkPVwiTTUuNDUgNS4xMUwyIDEydjZhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0ydi02bC0zLjQ1LTYuODlBMiAyIDAgMCAwIDE2Ljc2IDRINy4yNGEyIDIgMCAwIDAtMS43OSAxLjExelwiPjwvcGF0aD48L3N2Zz4nO1xuICBpbmJveC5hcHBlbmRDaGlsZChpY29uMSk7XG4gIGNvbnN0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0ZXh0MS50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcbiAgaW5ib3guYXBwZW5kQ2hpbGQodGV4dDEpO1xuICB0b3BQYW5lbC5hcHBlbmRDaGlsZChpbmJveCk7XG5cbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0b2RheS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZGF5XCIpO1xuICB0b2RheS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBjb25zdCBpY29uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGljb24yLmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jYWxlbmRhclwiPjxyZWN0IHg9XCIzXCIgeT1cIjRcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiByeD1cIjJcIiByeT1cIjJcIj48L3JlY3Q+PGxpbmUgeDE9XCIxNlwiIHkxPVwiMlwiIHgyPVwiMTZcIiB5Mj1cIjZcIj48L2xpbmU+PGxpbmUgeDE9XCI4XCIgeTE9XCIyXCIgeDI9XCI4XCIgeTI9XCI2XCI+PC9saW5lPjxsaW5lIHgxPVwiM1wiIHkxPVwiMTBcIiB4Mj1cIjIxXCIgeTI9XCIxMFwiPjwvbGluZT48L3N2Zz4nO1xuICB0b2RheS5hcHBlbmRDaGlsZChpY29uMik7XG4gIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0ZXh0Mi50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgdG9kYXkuYXBwZW5kQ2hpbGQodGV4dDIpO1xuICB0b3BQYW5lbC5hcHBlbmRDaGlsZCh0b2RheSk7XG5cbiAgY29uc3QgdXBjb21pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB1cGNvbWluZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInVwY29taW5nXCIpO1xuICB1cGNvbWluZy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBjb25zdCBpY29uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGljb24zLmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1saXN0XCI+PGxpbmUgeDE9XCI4XCIgeTE9XCI2XCIgeDI9XCIyMVwiIHkyPVwiNlwiPjwvbGluZT48bGluZSB4MT1cIjhcIiB5MT1cIjEyXCIgeDI9XCIyMVwiIHkyPVwiMTJcIj48L2xpbmU+PGxpbmUgeDE9XCI4XCIgeTE9XCIxOFwiIHgyPVwiMjFcIiB5Mj1cIjE4XCI+PC9saW5lPjxsaW5lIHgxPVwiM1wiIHkxPVwiNlwiIHgyPVwiMy4wMVwiIHkyPVwiNlwiPjwvbGluZT48bGluZSB4MT1cIjNcIiB5MT1cIjEyXCIgeDI9XCIzLjAxXCIgeTI9XCIxMlwiPjwvbGluZT48bGluZSB4MT1cIjNcIiB5MT1cIjE4XCIgeDI9XCIzLjAxXCIgeTI9XCIxOFwiPjwvbGluZT48L3N2Zz4nO1xuICB1cGNvbWluZy5hcHBlbmRDaGlsZChpY29uMyk7XG4gIGNvbnN0IHRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0ZXh0My50ZXh0Q29udGVudCA9IFwiVXBjb21pbmdcIjtcbiAgdXBjb21pbmcuYXBwZW5kQ2hpbGQodGV4dDMpO1xuICB0b3BQYW5lbC5hcHBlbmRDaGlsZCh1cGNvbWluZyk7XG5cbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkQnV0dG9uXCIpO1xuICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYWRkQnV0dG9uLmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1wbHVzLXNxdWFyZVwiPjxyZWN0IHg9XCIzXCIgeT1cIjNcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiByeD1cIjJcIiByeT1cIjJcIj48L3JlY3Q+PGxpbmUgeDE9XCIxMlwiIHkxPVwiOFwiIHgyPVwiMTJcIiB5Mj1cIjE2XCI+PC9saW5lPjxsaW5lIHgxPVwiOFwiIHkxPVwiMTJcIiB4Mj1cIjE2XCIgeTI9XCIxMlwiPjwvbGluZT48L3N2Zz4nO1xuICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlIaWRlUG9wdXApO1xuICBzaWRlUGFuZWwuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcblxuICBjb25zdCB0b29sdGlwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0b29sdGlwMS5jbGFzc0xpc3QuYWRkKFwidG9vbHRpcFwiKTtcbiAgdG9vbHRpcDEudGV4dENvbnRlbnQgPSBcIkFkZCBUbyBEbyBJdGVtXCI7XG4gIGFkZEJ1dHRvbi5hcHBlbmRDaGlsZCh0b29sdGlwMSk7XG5cbiAgY29uc3QgYm90dG9tUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib3R0b21QYW5lbC5jbGFzc0xpc3QuYWRkKFwiYm90dG9tUGFuZWxcIik7XG4gIHNpZGVQYW5lbC5hcHBlbmRDaGlsZChib3R0b21QYW5lbCk7XG5cbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0cy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzXCIpO1xuICBib3R0b21QYW5lbC5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG4gIGNvbnN0IHByb2plY3RzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHByb2plY3RzVGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RzVGl0bGUpO1xuXG4gIGNvbnN0IHBlcnNvbmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcGVyc29uYWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwZXJzb25hbFwiKTtcbiAgcGVyc29uYWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgY29uc3QgdGV4dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRleHQ0LnRleHRDb250ZW50ID0gXCJQZXJzb25hbFwiO1xuICBwZXJzb25hbC5hcHBlbmRDaGlsZCh0ZXh0NCk7XG4gIGJvdHRvbVBhbmVsLmFwcGVuZENoaWxkKHBlcnNvbmFsKTtcblxuICBjb25zdCB3b3JrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgd29yay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndvcmtcIik7XG4gIHdvcmsuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgY29uc3QgdGV4dDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRleHQ1LnRleHRDb250ZW50ID0gXCJXb3JrXCI7XG4gIHdvcmsuYXBwZW5kQ2hpbGQodGV4dDUpO1xuICBib3R0b21QYW5lbC5hcHBlbmRDaGlsZCh3b3JrKTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZFByb2plY3RcIik7XG4gIGFkZFByb2plY3Quc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYWRkUHJvamVjdC5pbm5lckhUTUwgPVxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItcGx1cy1zcXVhcmVcIj48cmVjdCB4PVwiM1wiIHk9XCIzXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgcng9XCIyXCIgcnk9XCIyXCI+PC9yZWN0PjxsaW5lIHgxPVwiMTJcIiB5MT1cIjhcIiB4Mj1cIjEyXCIgeTI9XCIxNlwiPjwvbGluZT48bGluZSB4MT1cIjhcIiB5MT1cIjEyXCIgeDI9XCIxNlwiIHkyPVwiMTJcIj48L2xpbmU+PC9zdmc+JztcbiAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUHJvamVjdCk7XG4gIHNpZGVQYW5lbC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcblxuICBjb25zdCB0b29sdGlwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0b29sdGlwMi5jbGFzc0xpc3QuYWRkKFwidG9vbHRpcFwiKTtcbiAgdG9vbHRpcDIudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0c1wiO1xuICBhZGRQcm9qZWN0LmFwcGVuZENoaWxkKHRvb2x0aXAyKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0UGFnZSgpIHtcbiAgY29uc3QgeyBib2R5IH0gPSBkb2N1bWVudDtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRvLURvIExpc3RcIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBsaWdodE1vZGVUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsaWdodE1vZGVUb2dnbGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaWdodE1vZGVUb2dnbGVcIik7XG4gIGxpZ2h0TW9kZVRvZ2dsZS5pbm5lckhUTUwgPVxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk03LjUsMkM1LjcxLDMuMTUgNC41LDUuMTggNC41LDcuNUM0LjUsOS44MiA1LjcxLDExLjg1IDcuNTMsMTNDNC40NiwxMyAyLDEwLjU0IDIsNy41QTUuNSw1LjUgMCAwLDEgNy41LDJNMTkuMDcsMy41TDIwLjUsNC45M0w0LjkzLDIwLjVMMy41LDE5LjA3TDE5LjA3LDMuNU0xMi44OSw1LjkzTDExLjQxLDVMOS45Nyw2TDEwLjM5LDQuM0w5LDMuMjRMMTAuNzUsMy4xMkwxMS4zMywxLjQ3TDEyLDMuMUwxMy43MywzLjEzTDEyLjM4LDQuMjZMMTIuODksNS45M005LjU5LDkuNTRMOC40Myw4LjgxTDcuMzEsOS41OUw3LjY1LDguMjdMNi41Niw3LjQ0TDcuOTIsNy4zNUw4LjM3LDYuMDZMOC44OCw3LjMzTDEwLjI0LDcuMzZMOS4xOSw4LjIzTDkuNTksOS41NE0xOSwxMy41QTUuNSw1LjUgMCAwLDEgMTMuNSwxOUMxMi4yOCwxOSAxMS4xNSwxOC42IDEwLjI0LDE3LjkzTDE3LjkzLDEwLjI0QzE4LjYsMTEuMTUgMTksMTIuMjggMTksMTMuNU0xNC42LDIwLjA4TDE3LjM3LDE4LjkzTDE3LjEzLDIyLjI4TDE0LjYsMjAuMDhNMTguOTMsMTcuMzhMMjAuMDgsMTQuNjFMMjIuMjgsMTcuMTVMMTguOTMsMTcuMzhNMjAuMDgsMTIuNDJMMTguOTQsOS42NEwyMi4yOCw5Ljg4TDIwLjA4LDEyLjQyTTkuNjMsMTguOTNMMTIuNCwyMC4wOEw5Ljg3LDIyLjI3TDkuNjMsMTguOTNaXCIgLz48L3N2Zz4nO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobGlnaHRNb2RlVG9nZ2xlKTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5mdW5jdGlvbiB0b2RvaXRlbXModGl0bGUsIGRlc2NyaXByaW9uLCBkdWVEYXRlLCBkdWVUaW1lLCBwcmlvcml0eSkge1xuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHJpb24sIGR1ZURhdGUsIGR1ZVRpbWUsIHByaW9yaXR5IH07XG59XG5cbmNvbnN0IGNyZWF0ZVRvZG9MaXN0ID0gKCkgPT4ge1xuICBjb25zdCB0b2RvcyA9IFtdO1xuXG4gIGNvbnN0IGFkZFRvZG8gPSAodGl0bGUsIGRlc2NyaXByaW9uLCBkdWVEYXRlLCBkdWVUaW1lLCBwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvaXRlbXModGl0bGUsIGRlc2NyaXByaW9uLCBkdWVEYXRlLCBkdWVUaW1lLCBwcmlvcml0eSk7XG4gICAgdG9kb3MucHVzaChuZXdUb2RvKTtcbiAgfTtcblxuICAvKiBjb25zdCByZW1vdmVUb2RvID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJlbmRlclRvZG9MaXN0KCk7XG4gICAgICB9OyAqL1xuXG4gIC8qIGNvbnN0IHRvZ2dsZVRvZG9Db21wbGV0aW9uID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHRvZG9zW2luZGV4XS50b2dnbGVDb21wbGV0aW9uKCk7XG4gICAgICAgIHJlbmRlclRvZG9MaXN0KCk7XG4gICAgICB9OyAqL1xuXG4gIHJldHVybiB7XG4gICAgdG9kb3MsXG4gICAgYWRkVG9kbyAvKiByZW1vdmVUb2RvLCB0b2dnbGVUb2RvQ29tcGxldGlvbiAqLyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRvZG9MaXN0O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb0xpc3RDaGVja2VkKCkge1xuICB0aGlzLmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiMxNjA0MTZcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2hlY2stc3F1YXJlXCI+PHBvbHlsaW5lIHBvaW50cz1cIjkgMTEgMTIgMTQgMjIgNFwiPjwvcG9seWxpbmU+PHBhdGggZD1cIk0yMSAxMnY3YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmgxMVwiPjwvcGF0aD48L3N2Zz4nO1xuICBjb25zdCBsaXN0SXRlbSA9IHRoaXMucGFyZW50Tm9kZTtcbiAgbGlzdEl0ZW0uc3R5bGUuYmFja2dyb3VuZCA9IFwiIzgxNmY3MlwiO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9MaXN0RGVsZXRlQnV0dG9uKCkge1xuICAvKiBjb25zdCB0b2RvTGlzdERlbGV0ZUJ1dHRvbiA9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG9MaXN0RGVsZXRlXCIpO1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IHRvZG9MaXN0RGVsZXRlQnV0dG9uLmxlbmd0aDsgaSsrKSB7XG4gICAgdG9kb0xpc3REZWxldGVCdXR0b25baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7ICovXG4gIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlubmVySFRNTCk7XG4gIGNvbnN0IGRpdiA9IHRoaXMucGFyZW50Tm9kZTtcbiAgZGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgLy8gfSk7XG4gIC8vIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBzdGFydFBhZ2UgZnJvbSBcIi4vbW9kdWxlcy9zdGFydHBhZ2VcIjtcbmltcG9ydCBtYWluQ29udGFpbmVyIGZyb20gXCIuL21vZHVsZXMvY29udGFpbmVyXCI7XG5pbXBvcnQgc2lkZVBhbmVsRnVuY3Rpb24gZnJvbSBcIi4vbW9kdWxlcy9zaWRlcGFuZWxcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuc3RhcnRQYWdlKCk7XG5tYWluQ29udGFpbmVyKCk7XG5zaWRlUGFuZWxGdW5jdGlvbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9