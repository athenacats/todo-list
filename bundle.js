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
  (0,_projectbuttonfunctions__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const content = document.querySelector(".content");
  const projectPopup = document.querySelector(".projectPopup");
  document.getElementById("projectName").value = "";
  content.style.filter = "none";
  content.style.webkitFilter = "none";
  projectPopup.style.display = "none";
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
/* harmony import */ var _projectvalidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectvalidation */ "./src/modules/projectvalidation.js");



function projectButtonFunctions() {
  (0,_projectvalidation__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
  button.setAttribute("type", "button");
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
  const projectName = document.querySelector("#projectName");
  let allFilled = true;
  const submitButton = document.querySelector("#projectSubmit");
  if (allFilled) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "");
  }

  if (!projectName.value) {
    allFilled = false;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBNEM7QUFDSTtBQUNJOztBQUUvQjs7QUFFckIsOERBQVM7QUFDVCw4REFBYTtBQUNiLDhEQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9idXR0b25mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZGlzcGxheWhpZGVwb3B1cC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9mb3JtQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9mb3JtY2FuY2VsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Zvcm12YWxpZGF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3BvcHVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RGb3JtQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0YnV0dG9uZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3Rmb3JtY2FuY2VsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3Rwb3B1cC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0dmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXJwcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbmRlcnRvZG9saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3NpZGVwYW5lbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdGFydHBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kb2xpc3RjaGVja2VkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG9saXN0ZGVsZXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmE6aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgNjgsIDg3KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmhlYWRlciBidXR0b24ge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgNjgsIDg3KTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLmhlYWRlciBzdmcge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcbi5oZWFkZXIgc3ZnIHBhdGgge1xcbiAgZmlsbDogd2hpdGU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmNvbnRlbnQgLnNpZGVQYW5lbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxODYsIDE5NSk7XFxuICBoZWlnaHQ6IDg4dmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMWZyIDZmciAxZnI7XFxuICBjb2xvcjogcmdiKDIyLCA0LCAyMik7XFxufVxcbi5jb250ZW50IC5zaWRlUGFuZWwgLnRvcFBhbmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uY29udGVudCAuc2lkZVBhbmVsIC50b3BQYW5lbCA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxNHB4O1xcbn1cXG4uY29udGVudCAuc2lkZVBhbmVsIC5ib3R0b21QYW5lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4uY29udGVudCAuc2lkZVBhbmVsIC5ib3R0b21QYW5lbCA+ICoge1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxufVxcbi5jb250ZW50IC5zaWRlUGFuZWwgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE4NiwgMTk1KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBHZW9yZ2lhLCBzZXJpZjtcXG4gIGNvbG9yOiByZ2IoMjIsIDQsIDIyKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmNvbnRlbnQgLnNpZGVQYW5lbCBidXR0b24gc3ZnLmZlYXRoZXIuZmVhdGhlci1wbHVzLXNxdWFyZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jb250ZW50IC5zaWRlUGFuZWwgYnV0dG9uIC50b29sdGlwIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTk5OTk5OTk5OTk7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBHZW9yZ2lhLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHJnYigyMiwgNCwgMjIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgNjgsIDg3KTtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgd2lkdGg6IDEyMHB4O1xcbn1cXG4uY29udGVudCAuc2lkZVBhbmVsIGJ1dHRvbiAudG9vbHRpcDpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZmlsdGVyOiBub25lO1xcbiAgdG9wOiAxMDBweDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgR2VvcmdpYSwgc2VyaWY7XFxufVxcbi5wb3B1cCBmb3JtIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxODYsIDE5NSk7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBib3gtc2hhZG93OiAwIDAgMTZweCA4cHggcmdiKDE3OSwgNjgsIDg3KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMmZyIDFmcjtcXG59XFxuLnBvcHVwIGZvcm0gdGV4dGFyZWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjI5LCAyMzEpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMjIsIDQsIDIyKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIEdlb3JnaWEsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5wb3B1cCBmb3JtIHRleHRhcmVhIHRleHRhcmVhOmZvY3VzIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG4ucG9wdXAgZm9ybSAuY29udHJvbHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuLnBvcHVwIGZvcm0gLmNvbnRyb2xzICNkdWVkYXRlLFxcbi5wb3B1cCBmb3JtIC5jb250cm9scyAjZHVldGltZSxcXG4ucG9wdXAgZm9ybSAuY29udHJvbHMgI3ByaW9yaXR5LFxcbi5wb3B1cCBmb3JtIC5jb250cm9scyBsYWJlbCxcXG4ucG9wdXAgZm9ybSAuY29udHJvbHMgb3B0aW9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIEdlb3JnaWEsIHNlcmlmO1xcbiAgY29sb3I6IHJnYigyMiwgNCwgMjIpO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcbi5wb3B1cCBmb3JtIC5idXR0b25Cb3gge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4ucG9wdXAgZm9ybSAuYnV0dG9uQm94IGJ1dHRvbiB7XFxuICB3aWR0aDogNTAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNDAsIDE4NiwgMTk1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBHZW9yZ2lhLCBzZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucG9wdXAgZm9ybSAuYnV0dG9uQm94ICNzdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgNjgsIDg3KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLnBvcHVwIGZvcm0gLmJ1dHRvbkJveCAjY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MTZmNzI7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4udG9kb0xpc3RJdGVtIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTc5LCA2OCwgODcpO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW46IDVweCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiKDE3OSwgNjgsIDg3KTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGNvbG9yOiByZ2IoMjIsIDQsIDIyKTtcXG59XFxuLnRvZG9MaXN0SXRlbSAjdG9kb0xpc3RCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTg2LCAxOTUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgR2VvcmdpYSwgc2VyaWY7XFxuICBwYWRkaW5nOiAzcHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBjb2xvcjogcmdiKDIyLCA0LCAyMik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4udG9kb0xpc3RJdGVtIHN2ZyB7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RQb3B1cCB7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmaWx0ZXI6IG5vbmU7XFxuICB0b3A6IDIwMHB4O1xcbiAgei1pbmRleDogMTA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBHZW9yZ2lhLCBzZXJpZjtcXG59XFxuLnByb2plY3RQb3B1cCBmb3JtIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxODYsIDE5NSk7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBib3gtc2hhZG93OiAwIDAgMTZweCA4cHggcmdiKDE3OSwgNjgsIDg3KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucHJvamVjdFBvcHVwIGZvcm0gaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjI5LCAyMzEpO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogcmdiKDIyLCA0LCAyMik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgcmVzaXplOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgR2VvcmdpYSwgc2VyaWY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnByb2plY3RQb3B1cCBmb3JtIGlucHV0IGlucHV0OmZvY3VzIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG4ucHJvamVjdFBvcHVwIGZvcm0gbGFiZWwge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgR2VvcmdpYSwgc2VyaWY7XFxuICBjb2xvcjogcmdiKDIyLCA0LCAyMik7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW4tbGVmdDogNSU7XFxufVxcbi5wcm9qZWN0UG9wdXAgZm9ybSAucHJvamVjdEJ1dHRvbkJveCB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4ucHJvamVjdFBvcHVwIGZvcm0gLnByb2plY3RCdXR0b25Cb3ggYnV0dG9uIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0MCwgMTg2LCAxOTUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIEdlb3JnaWEsIHNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wcm9qZWN0UG9wdXAgZm9ybSAucHJvamVjdEJ1dHRvbkJveCAjcHJvamVjdFN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc5LCA2OCwgODcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4ucHJvamVjdFBvcHVwIGZvcm0gLnByb2plY3RCdXR0b25Cb3ggI3Byb2plY3RDYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxNmY3MjtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgR2VvcmdpYSwgc2VyaWY7XFxufS8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3NmaWxlcy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzZmlsZXMvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzc2ZpbGVzL19jb250ZW50LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzZmlsZXMvX3BvcHVwLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzZmlsZXMvX3RvZG9saXN0aXRlbS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzc2ZpbGVzL19wcm9qZWN0cG9wdXAuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QUNMQTtFQUNFLGtDQ0RRO0VERVIsWUNEVTtFREVWLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURRRjtBQ1BFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0NDWE07RURZTixZQUFBO0FEU0o7QUNQRTtFQUNFLGNBQUE7QURTSjtBQ1BJO0VBQ0UsV0NqQk07QUYwQlo7O0FHM0JBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBSDhCRjtBRzVCRTtF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O0FObU1SO0FNaE1JO0VBQ0UsbUNKaENFO0VJaUNGLHFCSnRDSztFSXVDTCxlQUFBO0VBQ0EsZUFBQTtBTmtNTjtBTWhNSTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QU5rTU47QU1qTU07RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0ovQ0E7RUlnREEsWUp0REk7RUl1REosZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QU5tTVI7QU1qTU07RUFDRSxrQ0o3REU7RUk4REYsWUo3REk7RUk4REosc0JBQUE7RUFDQSxpQkFBQTtBTm1NUjtBTWpNTTtFQUNFLHlCSi9EQztFSWdFRCx3QkFBQTtFQUNBLGdCQUFBO0FObU1SOztBRDFQQTtFQUNFLG1DR1JNO0FGcVFSLENBQUEsb0NBQUFcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcmVuZGVyVG9kb0xpc3QgZnJvbSBcIi4vcmVuZGVydG9kb2xpc3RcIjtcbmltcG9ydCBjcmVhdGVUb2RvTGlzdCBmcm9tIFwiLi90b2RvbGlzdFwiO1xuaW1wb3J0IGVuYWJsZVN1Ym1pdCBmcm9tIFwiLi9mb3JtdmFsaWRhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidXR0b25GdW5jdGlvbnMoKSB7XG4gIGVuYWJsZVN1Ym1pdCgpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXBUaXRsZVwiKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwRGVzY3JpcHRpb25cIikudmFsdWU7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZWRhdGVcIikudmFsdWU7XG4gIGNvbnN0IGR1ZVRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZXRpbWVcIikudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZTtcblxuICBjb25zdCB0b2RvTGlzdCA9IGNyZWF0ZVRvZG9MaXN0KCk7XG4gIHRvZG9MaXN0LmFkZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBkdWVUaW1lLCBwcmlvcml0eSk7XG5cbiAgaWYgKHRpdGxlID09PSBcIlwiKSB7XG4gICAgLy8gcmVxdWlyZSB0aGlzIHNvIHRoYXQgYmxhbmsgdG9kb3MgYXJlIG5vdCBhdHRhY2hlZCBvbiBzdWJzZXF1ZW50IHN1Ym1pdHNcbiAgICAvLyBkbyBub3RoaW5nXG4gIH0gZWxzZSB7XG4gICAgcmVuZGVyVG9kb0xpc3QoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHRhc2tQb3BVcCBmcm9tIFwiLi9wb3B1cFwiO1xuaW1wb3J0IHByb2plY3RDcmVhdGlvblBvcHVwIGZyb20gXCIuL3Byb2plY3Rwb3B1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluQ29udGFpbmVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gIGNvbnN0IHNpZGVQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGVQYW5lbC5jbGFzc0xpc3QuYWRkKFwic2lkZVBhbmVsXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGVQYW5lbCk7XG5cbiAgY29uc3QgbWFpblBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpblBhbmVsLmNsYXNzTGlzdC5hZGQoXCJtYWluUGFuZWxcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpblBhbmVsKTtcblxuICBjb25zdCBsaXN0VG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGxpc3RUb2Rvcy5jbGFzc0xpc3QuYWRkKFwibGlzdFRvZG9zXCIpO1xuICBtYWluUGFuZWwuYXBwZW5kQ2hpbGQobGlzdFRvZG9zKTtcblxuICB0YXNrUG9wVXAoKTtcbiAgcHJvamVjdENyZWF0aW9uUG9wdXAoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gIGNvbnN0IHByb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFBvcHVwXCIpO1xuICBwcm9qZWN0UG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBjb250ZW50LnN0eWxlLmZpbHRlciA9IFwiYmx1cigyMHB4KVwiO1xuICBjb250ZW50LnN0eWxlLndlYmtpdEZpbHRlciA9IFwiYmx1cigyMHB4KVwiO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUhpZGVQb3B1cCgpIHtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpO1xuICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gIGNvbnRlbnQuc3R5bGUuZmlsdGVyID0gXCJibHVyKDIwcHgpXCI7XG4gIGNvbnRlbnQuc3R5bGUud2Via2l0RmlsdGVyID0gXCJibHVyKDIwcHgpXCI7XG59XG4iLCJpbXBvcnQgYnV0dG9uRnVuY3Rpb25zIGZyb20gXCIuL2J1dHRvbmZ1bmN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtQWN0aW9ucygpIHtcbiAgY29uc3QgcG9wdXBGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cEZvcm1cIik7IC8vIGNhbGwgZXZlbnRsaXN0ZW5lciB0byBmb3JtIHNvIHRoYXQgcHJldmVudGRlZmF1bHQgd29ya3NcbiAgcG9wdXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJzdWJtaXRcIiwgLy8gY2xpY2sgbWV0aG9kIG9ubHkgdmFsaWRhdGVkIGZpcnN0IGl0ZW0gaW4gZm9ybSwgbm90IGFsbCBpdGVtc1xuICAgIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGJ1dHRvbkZ1bmN0aW9ucygpO1xuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wdXBUaXRsZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcHVwRGVzY3JpcHRpb25cIikudmFsdWUgPSBcIlwiO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVkYXRlXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVldGltZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlID0gXCJcIjtcbiAgICAgIGNvbnRlbnQuc3R5bGUuZmlsdGVyID0gXCJub25lXCI7XG4gICAgICBjb250ZW50LnN0eWxlLndlYmtpdEZpbHRlciA9IFwibm9uZVwiO1xuICAgICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0sXG4gICAgdHJ1ZVxuICApO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FuY2VsRm9ybSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcHVwVGl0bGVcIikudmFsdWUgPSBcIlwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcHVwRGVzY3JpcHRpb25cIikudmFsdWUgPSBcIlwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZWRhdGVcIikudmFsdWUgPSBcIlwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZXRpbWVcIikudmFsdWUgPSBcIlwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlID0gXCJcIjtcbiAgY29udGVudC5zdHlsZS5maWx0ZXIgPSBcIm5vbmVcIjtcbiAgY29udGVudC5zdHlsZS53ZWJraXRGaWx0ZXIgPSBcIm5vbmVcIjtcbiAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuYWJsZVN1Ym1pdCgpIHtcbiAgY29uc3QgcG9wdXBGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cEZvcm1cIik7XG4gIGNvbnN0IHJlcXVpcmVkRmllbGRzID0gcG9wdXBGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbcmVxdWlyZWRdXCIpO1xuICBsZXQgYWxsRmlsbGVkID0gdHJ1ZTtcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIik7XG4gIGlmIChhbGxGaWxsZWQpIHtcbiAgICBzdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gIH0gZWxzZSB7XG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICB9XG4gIHJlcXVpcmVkRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaWYgKCFmaWVsZC52YWx1ZSkge1xuICAgICAgYWxsRmlsbGVkID0gZmFsc2U7XG4gICAgfVxuICB9KTtcbn1cblxuLyogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJZb3UgZW50ZXJlZDpcIiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cFRpdGxlXCIpLnZhbHVlKTtcbn0pOyAqL1xuIiwiaW1wb3J0IGZvcm1BY3Rpb25zIGZyb20gXCIuL2Zvcm1BY3Rpb25zXCI7XG5pbXBvcnQgZW5hYmxlU3VibWl0IGZyb20gXCIuL2Zvcm12YWxpZGF0aW9uXCI7XG5pbXBvcnQgY2FuY2VsRm9ybSBmcm9tIFwiLi9mb3JtY2FuY2VsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tQb3BVcCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG5cbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwicG9wdXBcIik7XG4gIHBvcHVwLnN0eWxlLmZpbHRlciA9IFwibm9uZVwiO1xuICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwb3B1cCk7XG5cbiAgY29uc3QgcG9wdXBGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIHBvcHVwRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBvcHVwRm9ybVwiKTtcbiAgcG9wdXBGb3JtLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwb3B1cEZvcm1cIik7XG4gIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwRm9ybSk7XG5cbiAgY29uc3QgcG9wdXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgcG9wdXBUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBvcHVwVGl0bGVcIik7XG4gIHBvcHVwVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGVuYWJsZVN1Ym1pdCk7XG4gIHBvcHVwVGl0bGUuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiNTBcIik7XG4gIHBvcHVwVGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaXRsZVwiKTtcbiAgcG9wdXBUaXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiVGl0bGVcIik7XG4gIHBvcHVwVGl0bGUuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gIHBvcHVwRm9ybS5hcHBlbmRDaGlsZChwb3B1cFRpdGxlKTtcblxuICBjb25zdCBwb3B1cERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBwb3B1cERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicG9wdXBEZXNjcmlwdGlvblwiKTtcbiAgcG9wdXBEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIxNDBcIik7XG4gIHBvcHVwRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZXNjcmlwdGlvblwiKTtcbiAgcG9wdXBGb3JtLmFwcGVuZENoaWxkKHBvcHVwRGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udHJvbHMuY2xhc3NMaXN0LmFkZChcImNvbnRyb2xzXCIpO1xuICBwb3B1cEZvcm0uYXBwZW5kQ2hpbGQoY29udHJvbHMpO1xuXG4gIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZWRhdGVcIik7XG4gIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcblxuICBjb25zdCBkYXRlUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkYXRlUGlja2VyLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICBkYXRlUGlja2VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlZGF0ZVwiKTtcbiAgZGF0ZVBpY2tlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZW5hYmxlU3VibWl0KTtcbiAgZGF0ZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVlZGF0ZVwiKTtcbiAgZGF0ZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRvZGF5XCIpO1xuICBkYXRlUGlja2VyLnJlcXVpcmVkID0gdHJ1ZTtcbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlcik7XG5cbiAgY29uc3QgdGltZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0aW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGltZVwiKTtcbiAgdGltZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaW1lXCI7XG4gIGNvbnRyb2xzLmFwcGVuZENoaWxkKHRpbWVMYWJlbCk7XG5cbiAgY29uc3QgdGltZVBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGltZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGltZVwiKTtcbiAgdGltZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZXRpbWVcIik7XG4gIHRpbWVQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGVuYWJsZVN1Ym1pdCk7XG4gIHRpbWVQaWNrZXIuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZXRpbWVcIik7XG4gIHRpbWVQaWNrZXIuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJub3dcIik7XG4gIHRpbWVQaWNrZXIuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gIGNvbnRyb2xzLmFwcGVuZENoaWxkKHRpbWVQaWNrZXIpO1xuXG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlcIik7XG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5IExldmVsXCI7XG4gIGNvbnRyb2xzLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuXG4gIGNvbnN0IHByaW9yaXR5UGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJpb3JpdHlQaWNrZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eVwiKTtcbiAgcHJpb3JpdHlQaWNrZXIuc2V0QXR0cmlidXRlKFwiY2hhbmdlXCIsIGVuYWJsZVN1Ym1pdCk7XG4gIHByaW9yaXR5UGlja2VyLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgcHJpb3JpdHlQaWNrZXIucmVxdWlyZWQgPSB0cnVlO1xuICAvLyBwcmlvcml0eVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJvbmNoYW5nZVwiLCBcInVwZGF0ZVByaW9yaXR5KHRoaXMudmFsdWUpXCIpO1xuICAvLyBwcmlvcml0eVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJvbmZvY3VzXCIsIFwiKHRoaXMudHlwZT0nc2VsZWN0JylcIik7XG4gIGNvbnRyb2xzLmFwcGVuZENoaWxkKHByaW9yaXR5UGlja2VyKTtcblxuICBjb25zdCBvcHRpb25QbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvblBsYWNlaG9sZGVyLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiXCIpO1xuICBvcHRpb25QbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgb3B0aW9uUGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIik7XG4gIG9wdGlvblBsYWNlaG9sZGVyLnRleHRDb250ZW50ID0gXCJTZWxlY3RcIjtcbiAgcHJpb3JpdHlQaWNrZXIuYXBwZW5kQ2hpbGQob3B0aW9uUGxhY2Vob2xkZXIpO1xuXG4gIGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb24xLmNsYXNzTGlzdC5hZGQoXCJsb3dcIik7XG4gIG9wdGlvbjEuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJMb3dcIik7XG4gIG9wdGlvbjEudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICBvcHRpb24xLnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xuICBwcmlvcml0eVBpY2tlci5hcHBlbmRDaGlsZChvcHRpb24xKTtcblxuICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uMi5jbGFzc0xpc3QuYWRkKFwibWVkaXVtXCIpO1xuICBvcHRpb24yLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTWVkaXVtXCIpO1xuICBvcHRpb24yLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgb3B0aW9uMi5zdHlsZS5jb2xvciA9IFwib3JhbmdlXCI7XG4gIHByaW9yaXR5UGlja2VyLmFwcGVuZENoaWxkKG9wdGlvbjIpO1xuXG4gIGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb24zLmNsYXNzTGlzdC5hZGQoXCJoaWdoXCIpO1xuICBvcHRpb24zLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSGlnaFwiKTtcbiAgb3B0aW9uMy50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICBvcHRpb24zLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgcHJpb3JpdHlQaWNrZXIuYXBwZW5kQ2hpbGQob3B0aW9uMyk7XG5cbiAgY29uc3QgYnV0dG9uQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uQm94LmNsYXNzTGlzdC5hZGQoXCJidXR0b25Cb3hcIik7XG4gIHBvcHVwRm9ybS5hcHBlbmRDaGlsZChidXR0b25Cb3gpO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJtaXRcIik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGZvcm1BY3Rpb25zKCk7XG4gIH0pO1xuICBidXR0b25Cb3guYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FuY2VsXCIpO1xuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbEZvcm0pO1xuICBidXR0b25Cb3guYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbn1cbiIsImltcG9ydCBwcm9qZWN0QnV0dG9uRnVuY3Rpb25zIGZyb20gXCIuL3Byb2plY3RidXR0b25mdW5jdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdEZvcm1BY3Rpb25zKCkge1xuICBwcm9qZWN0QnV0dG9uRnVuY3Rpb25zKCk7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gIGNvbnN0IHByb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFBvcHVwXCIpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3ROYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgY29udGVudC5zdHlsZS5maWx0ZXIgPSBcIm5vbmVcIjtcbiAgY29udGVudC5zdHlsZS53ZWJraXRGaWx0ZXIgPSBcIm5vbmVcIjtcbiAgcHJvamVjdFBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cbiIsImltcG9ydCByZW5kZXJQcm9qZWN0IGZyb20gXCIuL3JlbmRlcnByb2plY3RcIjtcbmltcG9ydCBlbmFibGVQcm9qZWN0U3VibWl0IGZyb20gXCIuL3Byb2plY3R2YWxpZGF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RCdXR0b25GdW5jdGlvbnMoKSB7XG4gIGVuYWJsZVByb2plY3RTdWJtaXQoKTtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE5hbWVcIikudmFsdWU7XG5cbiAgaWYgKHByb2plY3QgPT09IFwiXCIpIHtcbiAgICAvLyByZXF1aXJlIHRoaXMgc28gdGhhdCBibGFuayB0b2RvcyBhcmUgbm90IGF0dGFjaGVkIG9uIHN1YnNlcXVlbnQgc3VibWl0c1xuICAgIC8vIGRvIG5vdGhpbmdcbiAgfSBlbHNlIHtcbiAgICByZW5kZXJQcm9qZWN0KCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RDYW5jZWxGb3JtKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFBvcHVwXCIpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3ROYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgY29udGVudC5zdHlsZS5maWx0ZXIgPSBcIm5vbmVcIjtcbiAgY29udGVudC5zdHlsZS53ZWJraXRGaWx0ZXIgPSBcIm5vbmVcIjtcbiAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuIiwiaW1wb3J0IHByb2plY3RGb3JtQWN0aW9ucyBmcm9tIFwiLi9wcm9qZWN0Rm9ybUFjdGlvbnNcIjtcbmltcG9ydCBlbmFibGVQcm9qZWN0U3VibWl0IGZyb20gXCIuL3Byb2plY3R2YWxpZGF0aW9uXCI7XG5pbXBvcnQgcHJvamVjdENhbmNlbEZvcm0gZnJvbSBcIi4vcHJvamVjdGZvcm1jYW5jZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdENyZWF0aW9uUG9wdXAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHByb2plY3RQb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RQb3B1cC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFBvcHVwXCIpO1xuICBwcm9qZWN0UG9wdXAuc3R5bGUuZmlsdGVyID0gXCJub25lXCI7XG4gIHByb2plY3RQb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0UG9wdXApO1xuXG4gIGNvbnN0IHByb2plY3RQb3B1cEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgcHJvamVjdFBvcHVwRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RQb3B1cEZvcm0gXCIpO1xuICBwcm9qZWN0UG9wdXBGb3JtLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0UG9wdXBGb3JtIFwiKTtcbiAgcHJvamVjdFBvcHVwLmFwcGVuZENoaWxkKHByb2plY3RQb3B1cEZvcm0pO1xuXG4gIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3RMYWJlbFwiKTtcbiAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IE5hbWVcIjtcbiAgcHJvamVjdFBvcHVwRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0TmFtZVwiKTtcbiAgcHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGVuYWJsZVByb2plY3RTdWJtaXQpO1xuICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdE5hbWVcIik7XG4gIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiR3ltXCIpO1xuICBwcm9qZWN0TmFtZS5yZXF1aXJlZCA9IHRydWU7XG4gIHByb2plY3RQb3B1cEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gIGNvbnN0IGJ1dHRvbkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbkJveC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEJ1dHRvbkJveFwiKTtcbiAgcHJvamVjdFBvcHVwRm9ybS5hcHBlbmRDaGlsZChidXR0b25Cb3gpO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0U3VibWl0XCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwcm9qZWN0Rm9ybUFjdGlvbnMoKTtcbiAgfSk7XG4gIGJ1dHRvbkJveC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0Q2FuY2VsXCIpO1xuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RDYW5jZWxGb3JtKTtcbiAgYnV0dG9uQm94LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5hYmxlUHJvamVjdFN1Ym1pdCgpIHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3ROYW1lXCIpO1xuICBsZXQgYWxsRmlsbGVkID0gdHJ1ZTtcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0U3VibWl0XCIpO1xuICBpZiAoYWxsRmlsbGVkKSB7XG4gICAgc3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICB9IGVsc2Uge1xuICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgfVxuXG4gIGlmICghcHJvamVjdE5hbWUudmFsdWUpIHtcbiAgICBhbGxGaWxsZWQgPSBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHRvZG9MaXN0RGVsZXRlQnV0dG9uIGZyb20gXCIuL3RvZG9saXN0ZGVsZXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclByb2plY3QoKSB7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3ROYW1lXCIpLnZhbHVlO1xuICBjb25zdCBib3R0b21QYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm90dG9tUGFuZWxcIik7XG5cbiAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCIzXCIpO1xuICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRleHQudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHRleHQpO1xuICBib3R0b21QYW5lbC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcblxuICBjb25zdCBwcm9qZWN0RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN2Z1wiKTtcbiAgcHJvamVjdERlbGV0ZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERlbGV0ZVwiKTtcbiAgcHJvamVjdERlbGV0ZS5pbm5lckhUTUwgPVxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItdHJhc2gtMlwiPjxwb2x5bGluZSBwb2ludHM9XCIzIDYgNSA2IDIxIDZcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XCJNMTkgNnYxNGEyIDIgMCAwIDEtMiAySDdhMiAyIDAgMCAxLTItMlY2bTMgMFY0YTIgMiAwIDAgMSAyLTJoNGEyIDIgMCAwIDEgMiAydjJcIj48L3BhdGg+PGxpbmUgeDE9XCIxMFwiIHkxPVwiMTFcIiB4Mj1cIjEwXCIgeTI9XCIxN1wiPjwvbGluZT48bGluZSB4MT1cIjE0XCIgeTE9XCIxMVwiIHgyPVwiMTRcIiB5Mj1cIjE3XCI+PC9saW5lPjwvc3ZnPic7XG4gIHByb2plY3REZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZG9MaXN0RGVsZXRlQnV0dG9uKTtcbiAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlKTtcbn1cbiIsImltcG9ydCB0b2RvTGlzdERlbGV0ZUJ1dHRvbiBmcm9tIFwiLi90b2RvbGlzdGRlbGV0ZVwiO1xuaW1wb3J0IHRvZG9MaXN0Q2hlY2tlZCBmcm9tIFwiLi90b2RvbGlzdGNoZWNrZWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyVG9kb0xpc3QoKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cFRpdGxlXCIpLnZhbHVlO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVkYXRlXCIpLnZhbHVlO1xuICBjb25zdCBkdWVUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWV0aW1lXCIpLnZhbHVlO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIikudmFsdWU7XG4gIGNvbnN0IGxpc3RUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdFRvZG9zXCIpO1xuXG4gIGNvbnN0IHRvZG9MaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdG9kb0xpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0b2RvTGlzdEl0ZW1cIik7XG4gIGxpc3RUb2Rvcy5hcHBlbmRDaGlsZCh0b2RvTGlzdEl0ZW0pO1xuXG4gIGNvbnN0IHRvZG9MaXN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3ZnXCIpO1xuICB0b2RvTGlzdFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0b2RvTGlzdFByaW9yaXR5XCIpO1xuICBpZiAocHJpb3JpdHkgPT09IFwiTG93XCIpIHtcbiAgICAvLyBzZXQgZGlmZmVyZW50IHN2ZyBjb2xvcnMgZm9yIGFsbCBwcmlvcml0eSBsZXZlbHNcbiAgICB0b2RvTGlzdFByaW9yaXR5LmlubmVySFRNTCA9XG4gICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiIzAwRkYwMFwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1zcXVhcmVcIj48cmVjdCB4PVwiM1wiIHk9XCIzXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgcng9XCIyXCIgcnk9XCIyXCI+PC9yZWN0Pjwvc3ZnPic7XG4gIH0gZWxzZSBpZiAocHJpb3JpdHkgPT09IFwiTWVkaXVtXCIpIHtcbiAgICB0b2RvTGlzdFByaW9yaXR5LmlubmVySFRNTCA9XG4gICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI0ZGQTUwMFwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1zcXVhcmVcIj48cmVjdCB4PVwiM1wiIHk9XCIzXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgcng9XCIyXCIgcnk9XCIyXCI+PC9yZWN0Pjwvc3ZnPic7XG4gIH0gZWxzZSB7XG4gICAgdG9kb0xpc3RQcmlvcml0eS5pbm5lckhUTUwgPVxuICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNGRjAwMDBcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItc3F1YXJlXCI+PHJlY3QgeD1cIjNcIiB5PVwiM1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHJ4PVwiMlwiIHJ5PVwiMlwiPjwvcmVjdD48L3N2Zz4nO1xuICB9XG4gIHRvZG9MaXN0UHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZG9MaXN0Q2hlY2tlZCk7XG4gIHRvZG9MaXN0SXRlbS5hcHBlbmRDaGlsZCh0b2RvTGlzdFByaW9yaXR5KTtcblxuICBjb25zdCB0b2RvTGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb0xpc3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kb0xpc3RUaXRsZVwiKTtcbiAgdG9kb0xpc3RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICB0b2RvTGlzdEl0ZW0uYXBwZW5kQ2hpbGQodG9kb0xpc3RUaXRsZSk7XG5cbiAgY29uc3QgdG9kb0xpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0b2RvTGlzdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9MaXN0QnV0dG9uXCIpO1xuICB0b2RvTGlzdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICB0b2RvTGlzdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiREVUQUlMU1wiO1xuICB0b2RvTGlzdEl0ZW0uYXBwZW5kQ2hpbGQodG9kb0xpc3RCdXR0b24pO1xuXG4gIGNvbnN0IHRvZG9MaXN0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9MaXN0RHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kb0xpc3REdWVEYXRlXCIpO1xuICB0b2RvTGlzdER1ZURhdGUudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuICB0b2RvTGlzdEl0ZW0uYXBwZW5kQ2hpbGQodG9kb0xpc3REdWVEYXRlKTtcblxuICBjb25zdCB0b2RvTGlzdER1ZVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvTGlzdER1ZVRpbWUuY2xhc3NMaXN0LmFkZChcInRvZG9MaXN0RHVlVGltZVwiKTtcbiAgdG9kb0xpc3REdWVUaW1lLnRleHRDb250ZW50ID0gZHVlVGltZTtcbiAgdG9kb0xpc3RJdGVtLmFwcGVuZENoaWxkKHRvZG9MaXN0RHVlVGltZSk7XG5cbiAgY29uc3QgdG9kb0xpc3RFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN2Z1wiKTtcbiAgdG9kb0xpc3RFZGl0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvTGlzdEVkaXRcIik7XG4gIHRvZG9MaXN0RWRpdC5pbm5lckhUTUwgPVxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItZWRpdFwiPjxwYXRoIGQ9XCJNMTEgNEg0YTIgMiAwIDAgMC0yIDJ2MTRhMiAyIDAgMCAwIDIgMmgxNGEyIDIgMCAwIDAgMi0ydi03XCI+PC9wYXRoPjxwYXRoIGQ9XCJNMTguNSAyLjVhMi4xMjEgMi4xMjEgMCAwIDEgMyAzTDEyIDE1bC00IDEgMS00IDkuNS05LjV6XCI+PC9wYXRoPjwvc3ZnPic7XG4gIHRvZG9MaXN0SXRlbS5hcHBlbmRDaGlsZCh0b2RvTGlzdEVkaXQpO1xuXG4gIGNvbnN0IHRvZG9MaXN0RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN2Z1wiKTtcbiAgdG9kb0xpc3REZWxldGUuY2xhc3NMaXN0LmFkZChcInRvZG9MaXN0RGVsZXRlXCIpO1xuICB0b2RvTGlzdERlbGV0ZS5pbm5lckhUTUwgPVxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItdHJhc2gtMlwiPjxwb2x5bGluZSBwb2ludHM9XCIzIDYgNSA2IDIxIDZcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XCJNMTkgNnYxNGEyIDIgMCAwIDEtMiAySDdhMiAyIDAgMCAxLTItMlY2bTMgMFY0YTIgMiAwIDAgMSAyLTJoNGEyIDIgMCAwIDEgMiAydjJcIj48L3BhdGg+PGxpbmUgeDE9XCIxMFwiIHkxPVwiMTFcIiB4Mj1cIjEwXCIgeTI9XCIxN1wiPjwvbGluZT48bGluZSB4MT1cIjE0XCIgeTE9XCIxMVwiIHgyPVwiMTRcIiB5Mj1cIjE3XCI+PC9saW5lPjwvc3ZnPic7XG4gIHRvZG9MaXN0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2RvTGlzdERlbGV0ZUJ1dHRvbik7XG4gIHRvZG9MaXN0SXRlbS5hcHBlbmRDaGlsZCh0b2RvTGlzdERlbGV0ZSk7XG59XG4iLCJpbXBvcnQgZGlzcGxheUhpZGVQb3B1cCBmcm9tIFwiLi9kaXNwbGF5aGlkZXBvcHVwXCI7XG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZGVQYW5lbEZ1bmN0aW9uKCkge1xuICBjb25zdCBzaWRlUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVQYW5lbFwiKTtcblxuICBjb25zdCB0b3BQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvcFBhbmVsLmNsYXNzTGlzdC5hZGQoXCJ0b3BQYW5lbFwiKTtcbiAgc2lkZVBhbmVsLmFwcGVuZENoaWxkKHRvcFBhbmVsKTtcblxuICBjb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGluYm94LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW5ib3hcIik7XG4gIGluYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGNvbnN0IGljb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaWNvbjEuaW5uZXJIVE1MID1cbiAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWluYm94XCI+PHBvbHlsaW5lIHBvaW50cz1cIjIyIDEyIDE2IDEyIDE0IDE1IDEwIDE1IDggMTIgMiAxMlwiPjwvcG9seWxpbmU+PHBhdGggZD1cIk01LjQ1IDUuMTFMMiAxMnY2YTIgMiAwIDAgMCAyIDJoMTZhMiAyIDAgMCAwIDItMnYtNmwtMy40NS02Ljg5QTIgMiAwIDAgMCAxNi43NiA0SDcuMjRhMiAyIDAgMCAwLTEuNzkgMS4xMXpcIj48L3BhdGg+PC9zdmc+JztcbiAgaW5ib3guYXBwZW5kQ2hpbGQoaWNvbjEpO1xuICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGV4dDEudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG4gIGluYm94LmFwcGVuZENoaWxkKHRleHQxKTtcbiAgdG9wUGFuZWwuYXBwZW5kQ2hpbGQoaW5ib3gpO1xuXG4gIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdG9kYXkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RheVwiKTtcbiAgdG9kYXkuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgY29uc3QgaWNvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpY29uMi5pbm5lckhUTUwgPVxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2FsZW5kYXJcIj48cmVjdCB4PVwiM1wiIHk9XCI0XCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgcng9XCIyXCIgcnk9XCIyXCI+PC9yZWN0PjxsaW5lIHgxPVwiMTZcIiB5MT1cIjJcIiB4Mj1cIjE2XCIgeTI9XCI2XCI+PC9saW5lPjxsaW5lIHgxPVwiOFwiIHkxPVwiMlwiIHgyPVwiOFwiIHkyPVwiNlwiPjwvbGluZT48bGluZSB4MT1cIjNcIiB5MT1cIjEwXCIgeDI9XCIyMVwiIHkyPVwiMTBcIj48L2xpbmU+PC9zdmc+JztcbiAgdG9kYXkuYXBwZW5kQ2hpbGQoaWNvbjIpO1xuICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGV4dDIudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gIHRvZGF5LmFwcGVuZENoaWxkKHRleHQyKTtcbiAgdG9wUGFuZWwuYXBwZW5kQ2hpbGQodG9kYXkpO1xuXG4gIGNvbnN0IHVwY29taW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdXBjb21pbmcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1cGNvbWluZ1wiKTtcbiAgdXBjb21pbmcuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgY29uc3QgaWNvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpY29uMy5pbm5lckhUTUwgPVxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItbGlzdFwiPjxsaW5lIHgxPVwiOFwiIHkxPVwiNlwiIHgyPVwiMjFcIiB5Mj1cIjZcIj48L2xpbmU+PGxpbmUgeDE9XCI4XCIgeTE9XCIxMlwiIHgyPVwiMjFcIiB5Mj1cIjEyXCI+PC9saW5lPjxsaW5lIHgxPVwiOFwiIHkxPVwiMThcIiB4Mj1cIjIxXCIgeTI9XCIxOFwiPjwvbGluZT48bGluZSB4MT1cIjNcIiB5MT1cIjZcIiB4Mj1cIjMuMDFcIiB5Mj1cIjZcIj48L2xpbmU+PGxpbmUgeDE9XCIzXCIgeTE9XCIxMlwiIHgyPVwiMy4wMVwiIHkyPVwiMTJcIj48L2xpbmU+PGxpbmUgeDE9XCIzXCIgeTE9XCIxOFwiIHgyPVwiMy4wMVwiIHkyPVwiMThcIj48L2xpbmU+PC9zdmc+JztcbiAgdXBjb21pbmcuYXBwZW5kQ2hpbGQoaWNvbjMpO1xuICBjb25zdCB0ZXh0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGV4dDMudGV4dENvbnRlbnQgPSBcIlVwY29taW5nXCI7XG4gIHVwY29taW5nLmFwcGVuZENoaWxkKHRleHQzKTtcbiAgdG9wUGFuZWwuYXBwZW5kQ2hpbGQodXBjb21pbmcpO1xuXG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZEJ1dHRvblwiKTtcbiAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGFkZEJ1dHRvbi5pbm5lckhUTUwgPVxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItcGx1cy1zcXVhcmVcIj48cmVjdCB4PVwiM1wiIHk9XCIzXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgcng9XCIyXCIgcnk9XCIyXCI+PC9yZWN0PjxsaW5lIHgxPVwiMTJcIiB5MT1cIjhcIiB4Mj1cIjEyXCIgeTI9XCIxNlwiPjwvbGluZT48bGluZSB4MT1cIjhcIiB5MT1cIjEyXCIgeDI9XCIxNlwiIHkyPVwiMTJcIj48L2xpbmU+PC9zdmc+JztcbiAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5SGlkZVBvcHVwKTtcbiAgc2lkZVBhbmVsLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG5cbiAgY29uc3QgdG9vbHRpcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdG9vbHRpcDEuY2xhc3NMaXN0LmFkZChcInRvb2x0aXBcIik7XG4gIHRvb2x0aXAxLnRleHRDb250ZW50ID0gXCJBZGQgVG8gRG8gSXRlbVwiO1xuICBhZGRCdXR0b24uYXBwZW5kQ2hpbGQodG9vbHRpcDEpO1xuXG4gIGNvbnN0IGJvdHRvbVBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYm90dG9tUGFuZWwuY2xhc3NMaXN0LmFkZChcImJvdHRvbVBhbmVsXCIpO1xuICBzaWRlUGFuZWwuYXBwZW5kQ2hpbGQoYm90dG9tUGFuZWwpO1xuXG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0c1wiKTtcbiAgYm90dG9tUGFuZWwuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICBjb25zdCBwcm9qZWN0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBwcm9qZWN0c1RpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0c1RpdGxlKTtcblxuICBjb25zdCBwZXJzb25hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBlcnNvbmFsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGVyc29uYWxcIik7XG4gIHBlcnNvbmFsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGNvbnN0IHRleHQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0ZXh0NC50ZXh0Q29udGVudCA9IFwiUGVyc29uYWxcIjtcbiAgcGVyc29uYWwuYXBwZW5kQ2hpbGQodGV4dDQpO1xuICBib3R0b21QYW5lbC5hcHBlbmRDaGlsZChwZXJzb25hbCk7XG5cbiAgY29uc3Qgd29yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHdvcmsuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3b3JrXCIpO1xuICB3b3JrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGNvbnN0IHRleHQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0ZXh0NS50ZXh0Q29udGVudCA9IFwiV29ya1wiO1xuICB3b3JrLmFwcGVuZENoaWxkKHRleHQ1KTtcbiAgYm90dG9tUGFuZWwuYXBwZW5kQ2hpbGQod29yayk7XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRQcm9qZWN0XCIpO1xuICBhZGRQcm9qZWN0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGFkZFByb2plY3QuaW5uZXJIVE1MID1cbiAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXBsdXMtc3F1YXJlXCI+PHJlY3QgeD1cIjNcIiB5PVwiM1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHJ4PVwiMlwiIHJ5PVwiMlwiPjwvcmVjdD48bGluZSB4MT1cIjEyXCIgeTE9XCI4XCIgeDI9XCIxMlwiIHkyPVwiMTZcIj48L2xpbmU+PGxpbmUgeDE9XCI4XCIgeTE9XCIxMlwiIHgyPVwiMTZcIiB5Mj1cIjEyXCI+PC9saW5lPjwvc3ZnPic7XG4gIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVByb2plY3QpO1xuICBzaWRlUGFuZWwuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG5cbiAgY29uc3QgdG9vbHRpcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdG9vbHRpcDIuY2xhc3NMaXN0LmFkZChcInRvb2x0aXBcIik7XG4gIHRvb2x0aXAyLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdHNcIjtcbiAgYWRkUHJvamVjdC5hcHBlbmRDaGlsZCh0b29sdGlwMik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydFBhZ2UoKSB7XG4gIGNvbnN0IHsgYm9keSB9ID0gZG9jdW1lbnQ7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJUby1EbyBMaXN0XCI7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgbGlnaHRNb2RlVG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGlnaHRNb2RlVG9nZ2xlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlnaHRNb2RlVG9nZ2xlXCIpO1xuICBsaWdodE1vZGVUb2dnbGUuaW5uZXJIVE1MID1cbiAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNNy41LDJDNS43MSwzLjE1IDQuNSw1LjE4IDQuNSw3LjVDNC41LDkuODIgNS43MSwxMS44NSA3LjUzLDEzQzQuNDYsMTMgMiwxMC41NCAyLDcuNUE1LjUsNS41IDAgMCwxIDcuNSwyTTE5LjA3LDMuNUwyMC41LDQuOTNMNC45MywyMC41TDMuNSwxOS4wN0wxOS4wNywzLjVNMTIuODksNS45M0wxMS40MSw1TDkuOTcsNkwxMC4zOSw0LjNMOSwzLjI0TDEwLjc1LDMuMTJMMTEuMzMsMS40N0wxMiwzLjFMMTMuNzMsMy4xM0wxMi4zOCw0LjI2TDEyLjg5LDUuOTNNOS41OSw5LjU0TDguNDMsOC44MUw3LjMxLDkuNTlMNy42NSw4LjI3TDYuNTYsNy40NEw3LjkyLDcuMzVMOC4zNyw2LjA2TDguODgsNy4zM0wxMC4yNCw3LjM2TDkuMTksOC4yM0w5LjU5LDkuNTRNMTksMTMuNUE1LjUsNS41IDAgMCwxIDEzLjUsMTlDMTIuMjgsMTkgMTEuMTUsMTguNiAxMC4yNCwxNy45M0wxNy45MywxMC4yNEMxOC42LDExLjE1IDE5LDEyLjI4IDE5LDEzLjVNMTQuNiwyMC4wOEwxNy4zNywxOC45M0wxNy4xMywyMi4yOEwxNC42LDIwLjA4TTE4LjkzLDE3LjM4TDIwLjA4LDE0LjYxTDIyLjI4LDE3LjE1TDE4LjkzLDE3LjM4TTIwLjA4LDEyLjQyTDE4Ljk0LDkuNjRMMjIuMjgsOS44OEwyMC4wOCwxMi40Mk05LjYzLDE4LjkzTDEyLjQsMjAuMDhMOS44NywyMi4yN0w5LjYzLDE4LjkzWlwiIC8+PC9zdmc+JztcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGxpZ2h0TW9kZVRvZ2dsZSk7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuZnVuY3Rpb24gdG9kb2l0ZW1zKHRpdGxlLCBkZXNjcmlwcmlvbiwgZHVlRGF0ZSwgZHVlVGltZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXByaW9uLCBkdWVEYXRlLCBkdWVUaW1lLCBwcmlvcml0eSB9O1xufVxuXG5jb25zdCBjcmVhdGVUb2RvTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgdG9kb3MgPSBbXTtcblxuICBjb25zdCBhZGRUb2RvID0gKHRpdGxlLCBkZXNjcmlwcmlvbiwgZHVlRGF0ZSwgZHVlVGltZSwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCBuZXdUb2RvID0gdG9kb2l0ZW1zKHRpdGxlLCBkZXNjcmlwcmlvbiwgZHVlRGF0ZSwgZHVlVGltZSwgcHJpb3JpdHkpO1xuICAgIHRvZG9zLnB1c2gobmV3VG9kbyk7XG4gIH07XG5cbiAgLyogY29uc3QgcmVtb3ZlVG9kbyA9IChpbmRleCkgPT4ge1xuICAgICAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICByZW5kZXJUb2RvTGlzdCgpO1xuICAgICAgfTsgKi9cblxuICAvKiBjb25zdCB0b2dnbGVUb2RvQ29tcGxldGlvbiA9IChpbmRleCkgPT4ge1xuICAgICAgICB0b2Rvc1tpbmRleF0udG9nZ2xlQ29tcGxldGlvbigpO1xuICAgICAgICByZW5kZXJUb2RvTGlzdCgpO1xuICAgICAgfTsgKi9cblxuICByZXR1cm4ge1xuICAgIHRvZG9zLFxuICAgIGFkZFRvZG8gLyogcmVtb3ZlVG9kbywgdG9nZ2xlVG9kb0NvbXBsZXRpb24gKi8sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUb2RvTGlzdDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9MaXN0Q2hlY2tlZCgpIHtcbiAgdGhpcy5pbm5lckhUTUwgPVxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjMTYwNDE2XCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNoZWNrLXNxdWFyZVwiPjxwb2x5bGluZSBwb2ludHM9XCI5IDExIDEyIDE0IDIyIDRcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XCJNMjEgMTJ2N2EyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJoMTFcIj48L3BhdGg+PC9zdmc+JztcbiAgY29uc3QgbGlzdEl0ZW0gPSB0aGlzLnBhcmVudE5vZGU7XG4gIGxpc3RJdGVtLnN0eWxlLmJhY2tncm91bmQgPSBcIiM4MTZmNzJcIjtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvTGlzdERlbGV0ZUJ1dHRvbigpIHtcbiAgLyogY29uc3QgdG9kb0xpc3REZWxldGVCdXR0b24gPVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvTGlzdERlbGV0ZVwiKTtcbiAgbGV0IGk7XG4gIGZvciAoaSA9IDA7IGkgPCB0b2RvTGlzdERlbGV0ZUJ1dHRvbi5sZW5ndGg7IGkrKykge1xuICAgIHRvZG9MaXN0RGVsZXRlQnV0dG9uW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyAqL1xuICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5pbm5lckhUTUwpO1xuICBjb25zdCBkaXYgPSB0aGlzLnBhcmVudE5vZGU7XG4gIGRpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIC8vIH0pO1xuICAvLyB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgc3RhcnRQYWdlIGZyb20gXCIuL21vZHVsZXMvc3RhcnRwYWdlXCI7XG5pbXBvcnQgbWFpbkNvbnRhaW5lciBmcm9tIFwiLi9tb2R1bGVzL2NvbnRhaW5lclwiO1xuaW1wb3J0IHNpZGVQYW5lbEZ1bmN0aW9uIGZyb20gXCIuL21vZHVsZXMvc2lkZXBhbmVsXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbnN0YXJ0UGFnZSgpO1xubWFpbkNvbnRhaW5lcigpO1xuc2lkZVBhbmVsRnVuY3Rpb24oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==