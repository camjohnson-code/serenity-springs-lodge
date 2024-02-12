/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

// Functions
const sortBookingsOldToNew = (bookings) => {
  const filteredBookings = bookings.filter(
    (booking) => booking.date !== 'invalid date'
  );

  return filteredBookings.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA - dateB;
  });
};

const sortBookingsNewToOld = (bookings) => {
  const filteredBookings = bookings.filter(
    (booking) => booking.date !== 'invalid date'
  );

  return filteredBookings.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB - dateA;
  });
};

const convertNumToDollarAmount = (num) => {
  if (typeof num !== 'number') return 'Invalid Amount';
  else
    return num.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
};

const formatDate = (date) => {
  let dateInputs;
  if (date.split('/').map(Number).length === 3)
    dateInputs = date.split('/').map(Number);
  else dateInputs = date.split('-').map(Number);

  const [year, month, day] = dateInputs;
  const dateObject = new Date(year, month - 1, day);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return dateObject.toLocaleDateString('en-US', options);
};

module.exports = {
  sortBookingsOldToNew,
  sortBookingsNewToOld,
  convertNumToDollarAmount,
  formatDate,
};


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 3 */
/***/ ((module) => {

"use strict";


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
/* 4 */
/***/ ((module) => {

"use strict";


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
/* 5 */
/***/ ((module) => {

"use strict";


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
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 7 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 8 */
/***/ ((module) => {

"use strict";


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
/* 9 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_single_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _images_residential_suite_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _images_junior_suite_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _images_suite_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var _images_welcome_section_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17);
/* harmony import */ var _images_breakfast_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18);
/* harmony import */ var _images_lobby_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19);
/* harmony import */ var _images_luxury_pool_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20);
/* harmony import */ var _images_bar_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21);
// Imports












var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_single_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_residential_suite_jpg__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_junior_suite_jpg__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_suite_jpg__WEBPACK_IMPORTED_MODULE_6__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_welcome_section_jpg__WEBPACK_IMPORTED_MODULE_7__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_breakfast_jpg__WEBPACK_IMPORTED_MODULE_8__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_lobby_jpg__WEBPACK_IMPORTED_MODULE_9__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_luxury_pool_jpg__WEBPACK_IMPORTED_MODULE_10__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_bar_jpg__WEBPACK_IMPORTED_MODULE_11__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --orange: #c97200;\n  --light-gray: #282828;\n  --dark-gray: #161616;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\nbody {\n  background: var(--dark-gray);\n  color: white;\n}\n\n.error-module {\n  background-color: white;\n  width: 50vw;\n  height: 50vh;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n  border-radius: 25px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.error-message {\n  color: var(--dark-gray);\n  font-size: 24px;\n  text-align: center;\n  width: 80%;\n  margin: 10px 0;\n}\n\n.menu-button {\n  position: fixed;\n  height: 25px;\n  width: auto;\n  cursor: pointer;\n  z-index: 3;\n  top: 20px;\n  left: 20px;\n}\n\n.mobile-menu-section {\n  position: fixed;\n  width: 100vw;\n  margin: 0;\n  display: block;\n  cursor: pointer;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n\n.mobile-menu {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  background-color: var(--dark-gray);\n  transform: translateX(0) translateY(-230px);\n  max-height: 0;\n  transition: all 0.5s ease;\n}\n\n.mobile-menu.active {\n  max-height: 100vh;\n  transform: translateX(0) translateY(0);\n}\n\n.mobile-menu .nav-button {\n  color: white;\n  font-size: 16px;\n  margin: 40px 0;\n  padding: 0;\n}\n\n.mobile-menu:not(.active) .nav-button {\n  transform: translateY(-2000%);\n}\n\n.login-page {\n  display: flex;\n  overflow: hidden;\n}\n\n.login-image,\n.login-form {\n  width: 50%;\n  height: 100vh;\n}\n\n.hero-image {\n  width: 100%;\n  height: 100%;\n  object-fit: fill;\n}\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding-left: 130px;\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  margin-top: 75px;\n  margin-bottom: 50px;\n}\n\n.log-out-div {\n  border-top: 1px solid white;\n  width: 80%;\n  display: flex;\n  justify-content: center;\n}\n\n.log-out-div button {\n  margin-top: 10px;\n  width: 100%;\n}\n\nnav button,\n.nav-footer a {\n  color: white;\n}\n\n.logo p {\n  font-weight: bold;\n  font-size: 1em;\n  margin-left: 15px;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  width: 450px;\n  height: 550px;\n}\n\nh1 {\n  font-weight: 700;\n  font-size: 60px;\n  margin-bottom: 15px;\n}\n\nform p {\n  font-size: 14px;\n  font-weight: 300;\n}\n\n.login-instruction {\n  margin-bottom: 45px;\n}\n\nlabel {\n  font-weight: 700;\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n\ninput,\n.sign-in-button {\n  height: 60px;\n}\n\ninput,\ninput::placeholder,\n.sign-in-button {\n  font-size: 16px;\n  margin-bottom: 40px;\n}\n\ninput {\n  border: none;\n  border-radius: 10px;\n  padding: 0 15px;\n}\n\n.sign-in-error {\n  outline: 2px solid red;\n}\n\n.sign-in-error-message {\n  color: red;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n\ninput:focus {\n  outline: 2px solid var(--orange);\n}\n\n.sign-in-button {\n  background-color: var(--orange);\n  border: none;\n  font-weight: 700;\n  font-size: 24px;\n  color: white;\n  margin-bottom: 20px;\n}\n\n.forgot-link {\n  color: var(--orange);\n}\n\n.customer-dashboard,\n.nights-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n\nnav {\n  position: fixed;\n  left: 0;\n  top: 0;\n  background-color: var(--light-gray);\n  height: 100vh;\n  width: 20%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-weight: 700;\n  font-size: 24px;\n  padding-top: 40px;\n}\n\n.customer-greeting {\n  margin-bottom: 30px;\n  font-size: 24px;\n}\n\nnav button {\n  width: 80%;\n  height: auto;\n  aspect-ratio: 5 / 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  border: none;\n  border-radius: 24px;\n  background: none;\n  font-weight: 700;\n  font-size: 14px;\n  margin-bottom: 20px;\n}\n\nnav button img {\n  width: 20px;\n  height: auto;\n  margin: 0 15px;\n}\n\nnav button:hover,\nli {\n  background-color: var(--dark-gray);\n}\n\nbutton,\nli {\n  cursor: pointer;\n}\n\n.nav-button {\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  cursor: pointer;\n  border: none;\n  background: none;\n  text-align: left;\n  transition: all 0.3s ease;\n}\n\n.dropdown-button {\n  height: 35px;\n  padding-left: 25px;\n}\n\n.nav-button.active,\n.dropdown-button.active {\n  background-color: var(--dark-gray);\n}\n\n.dropdown-options {\n  border-left: 1px solid white;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.5s ease;\n}\n\n.dropdown-options.active {\n  max-height: 200px;\n}\n\n.toggle-arrow {\n  margin-left: auto;\n  transition: transform 0.5s ease;\n}\n\n.rotate {\n  transform: rotate(180deg);\n}\n\nli button {\n  margin: 0;\n  width: 120px;\n}\n\n.nav-footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 50%;\n  height: 20%;\n  position: fixed;\n  bottom: 0;\n  justify-content: center;\n}\n\n.nav-footer a {\n  font-size: 12px;\n  text-align: center;\n  font-weight: 300;\n  text-decoration: none;\n}\n\n.nav-footer a:first-child {\n  font-weight: 700;\n}\n\n.nav-footer-links {\n  margin-bottom: 5px;\n}\n\n.nav-footer-links:hover {\n  text-decoration: underline;\n}\n\n.nav-footer-links:first-of-type {\n  margin-bottom: 10px;\n  text-decoration: none;\n  cursor: default;\n}\n\n.nav-footer-links:last-of-type {\n  margin-bottom: 20px;\n}\n\n.portfolio-links {\n  width: 10%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.portfolio-link {\n  width: 20px;\n  height: auto;\n}\n\n.dashboard-info {\n  width: 80%;\n  height: 100vh;\n  padding: 40px;\n  position: fixed;\n  right: 0;\n  overflow-y: scroll;\n}\n\n.dashboard-info h3 {\n  font-weight: 700;\n  font-size: 24px;\n  margin-bottom: 15px;\n}\n\n.content {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.module {\n  width: 220px;\n  height: auto;\n  aspect-ratio: 1 / 1;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 15px;\n  text-align: center;\n  background-color: var(--light-gray);\n  margin: 10px 30px 10px 0;\n}\n\n.upcoming-visits-container,\n.past-visits-container,\n.individual-room {\n  display: flex;\n}\n\n.single {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center/cover;\n}\n\n.residential {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center/cover;\n}\n\n.junior {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") center/cover;\n}\n\n.suite {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") center/cover;\n}\n\n.module-button {\n  background-color: white;\n  color: var(--dark-gray);\n  font-size: 14px;\n  font-weight: 500;\n  border: none;\n  height: 45px;\n  padding: 0 10px;\n  border-radius: 20px;\n  align-self: flex-start;\n  margin-top: auto;\n}\n\n.date {\n  text-shadow: 0 0 8px rgba(0, 0, 0, 1);\n}\n\n.link,\na {\n  text-decoration: underline;\n  font-weight: 700;\n  cursor: pointer;\n  color: white;\n}\n\n.dashboard-section,\n.dashboard-section h3 {\n  margin-bottom: 20px;\n}\n\n.date {\n  width: 70%;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.room-finder {\n  background-color: var(--light-gray);\n  border-radius: 40px;\n}\n\n.header {\n  background-color: var(--light-gray);\n  height: 5vw;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 5vw;\n  margin-bottom: 30px;\n}\n\n.left-header-links {\n  display: flex;\n  align-items: center;\n  font-weight: 700;\n  font-size: 24px;\n}\n\n.left-header-links ul {\n  display: flex;\n  margin-left: 20px;\n  list-style-type: none;\n}\n\n.left-header-links li {\n  text-decoration: none;\n  background: none;\n  margin: 0 15px;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.left-header-links a {\n  color: white;\n  text-decoration: none;\n}\n\n.left-header-links a:hover,\n.right-footer a:hover {\n  text-decoration: underline;\n}\n\n.orange-button {\n  height: 40px;\n  width: 120px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--orange);\n  color: white;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.welcome-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 350px;\n  width: 90%;\n  margin: 0 auto;\n  border-radius: 20px;\n  margin-bottom: -40px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") center/cover;\n  background-position: center calc(100% + 150px);\n}\n\n.welcome-section h5 {\n  font-weight: 700;\n  font-size: 40px;\n  margin-bottom: 20px;\n}\n\n.welcome-section p {\n  font-weight: 300;\n  font-size: 20px;\n}\n\n.room-finder {\n  height: 80px;\n  width: 55%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 40px;\n}\n\n.room-finder label {\n  font-size: 14px;\n  font-weight: 700;\n  margin-left: 15px;\n}\n\n.room-finder div input {\n  width: 100%;\n  margin: 0;\n  background: none;\n  color: white;\n}\n\n.room-finder::placeholder {\n  font-size: 14px;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.room-finder div {\n  display: flex;\n  flex-direction: column;\n  height: 80%;\n  width: 30%;\n}\n\n.room-finder button {\n  background-color: var(--orange);\n  border: none;\n  border-radius: 50%;\n  transform: rotate(90deg);\n}\n\n.room-finder button img {\n  height: 25px;\n  width: auto;\n}\n\n.popular-rooms,\n.amenities {\n  margin: 0 auto;\n  margin-top: 30px;\n  height: 400px;\n  width: 90%;\n  font-weight: 500;\n  font-size: 20px;\n}\n\n.room-container {\n  display: flex;\n  height: 400px;\n}\n\n.room-module {\n  border-radius: 20px;\n  aspect-ratio: 1.5 / 1;\n  width: 33%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n  padding: 10px;\n  margin: 10px;\n}\n\n.room-module:nth-of-type(1) {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center/cover;\n  margin-left: 0;\n}\n\n.room-module:nth-of-type(2) {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") center/cover;\n}\n\n.image-container {\n  width: 33%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.image-container > .room-module {\n  height: 45%;\n  width: 100%;\n  margin-left: 0;\n}\n\n.image-container div:nth-of-type(1) {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center/cover;\n  background-position: center calc(100% + 70px);\n}\n\n.image-container div:nth-of-type(2) {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") center/cover;\n  background-position: center calc(100% + 30px);\n}\n\n.room-module button,\n.amenity button {\n  border: none;\n  border-radius: 50px;\n  padding: 10px 20px;\n}\n\n.amenities {\n  overflow: hidden;\n}\n\n.amenities-container {\n  display: flex;\n  justify-content: center;\n}\n\n.amenities-scroller:hover {\n  animation-play-state: paused;\n}\n\n@keyframes scroll {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-163%);\n  }\n}\n\n.amenity {\n  border-radius: 20px;\n  aspect-ratio: 1 / 1;\n  height: 310px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n  padding: 10px;\n  margin: 10px;\n}\n\n.amenities-scroller {\n  width: max-content;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.amenities-scroller .amenity:nth-of-type(1),\n.amenities-scroller .amenity:nth-of-type(5) {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") center/cover;\n  background-position: center calc(100% + 20px);\n}\n\n.amenities-scroller .amenity:nth-of-type(2),\n.amenities-scroller .amenity:nth-of-type(6) {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") center/cover;\n}\n\n.amenities-scroller .amenity:nth-of-type(3),\n.amenities-scroller .amenity:nth-of-type(7) {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") center/cover;\n}\n\n.amenities-scroller .amenity:nth-of-type(4),\n.amenities-scroller .amenity:nth-of-type(8) {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") center/cover;\n}\n\n.available-rooms {\n  padding: 0 40px 20px 40px;\n  display: flex;\n  flex-direction: column;\n}\n\n.available-rooms h4 {\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n\n.available-rooms-container {\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n}\n\n.no-rooms {\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer {\n  width: 100%;\n  height: 150px;\n  background-color: var(--light-gray);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 70px;\n}\n\n.footer-no-rooms {\n  position: fixed;\n  bottom: 0;\n}\n\n.left-footer {\n  height: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.left-footer p:first-of-type {\n  font-weight: 700;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n\n.left-footer p:last-of-type {\n  font-weight: 300;\n  font-size: 12px;\n}\n\n.left-footer img {\n  height: 25px;\n  width: auto;\n}\n\n.right-footer {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 70%;\n}\n\n.right-footer a,\n.right-footer p {\n  color: white;\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: 300;\n}\n\n.right-footer p:first-of-type,\n.bold {\n  font-weight: 700;\n}\n\n.available-rooms-header {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n\n.available-rooms-context {\n  font-weight: 700;\n  font-size: 24px;\n}\n\n.available-rooms-header p {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.individual-room {\n  width: 48%;\n  height: 150px;\n  background-color: var(--light-gray);\n  border-radius: 25px;\n}\n\n.room-image {\n  width: 50%;\n  border-radius: 25px 0 0 25px;\n}\n\n.room-image button {\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.room-info {\n  width: 50%;\n  padding: 15px 15px 0 15px;\n  display: flex;\n  flex-direction: column;\n}\n\n.room-info button {\n  margin-top: 40px;\n}\n\n.max-width-container {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.hidden {\n  display: none;\n}\n\n/* ---------------------------------------------------------------------------------------------------------------------- */\n@media screen and (min-width: 320px) {\n  .login-image {\n    display: none;\n  }\n\n  .login-form {\n    padding-left: 0px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .logo {\n    margin-bottom: 40px;\n    display: flex;\n    width: 100%;\n    padding: 0 10px;\n  }\n\n  .logo p {\n    font-size: 12px;\n  }\n\n  .login-instruction {\n    margin-bottom: 20px;\n  }\n\n  .form {\n    width: 100%;\n    padding: 0 10px;\n  }\n\n  h1 {\n    font-size: 40px;\n  }\n\n  label {\n    font-size: 18px;\n  }\n\n  input,\n  .sign-in-button {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n\n  input,\n  input::placeholder {\n    font-size: 14px;\n  }\n\n  .spending-total {\n    margin-left: 5vw;\n  }\n\n  .customer-dashboard {\n    margin-top: 5vh;\n  }\n\n  .sign-in-button {\n    font-size: 18px;\n  }\n\n  nav {\n    display: none;\n  }\n\n  .dashboard-info {\n    width: 100%;\n    padding: 20px 10px;\n  }\n\n  h3 {\n    text-align: center;\n  }\n\n  .nights-container {\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 5vh;\n  }\n\n  .module {\n    width: 250px;\n    margin: 10px;\n  }\n\n  .content {\n    margin: none;\n  }\n\n  .content p,\n  .module p {\n    font-size: 14px;\n  }\n\n  .past-visits-container,\n  .upcoming-visits-container {\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n\n  .home .dashboard-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .book-rooms {\n    width: 100%;\n  }\n\n  .header {\n    display: none;\n  }\n\n  .welcome-section {\n    margin-top: 30px;\n    background-position: center;\n    height: 250px;\n  }\n\n  .welcome-section h5 {\n    font-size: 24px;\n  }\n\n  .welcome-section h5,\n  .welcome-section p {\n    text-align: center;\n  }\n\n  .welcome-section p {\n    font-size: 12px;\n  }\n\n  .room-finder {\n    width: 90%;\n    padding: 10px;\n    flex-direction: column;\n    height: auto;\n  }\n\n  .popular-rooms {\n    height: auto;\n  }\n\n  .room-finder div {\n    width: 100%;\n    padding-top: 15px;\n  }\n\n  .room-container,\n  .image-container {\n    flex-direction: column;\n    align-items: center;\n    height: auto;\n    width: 100%;\n  }\n\n  .room-module,\n  .image-container .room-module {\n    width: 100%;\n    height: 200px;\n  }\n\n  .image-container .room-module:nth-of-type(1),\n  .image-container .room-module:nth-of-type(2) {\n    background-position: center;\n  }\n\n  .amenities {\n    height: auto;\n    width: 90%;\n  }\n\n  .amenity {\n    height: 200px;\n    width: auto;\n    aspect-ratio: 1 / 1;\n    margin: 10px 0;\n  }\n\n  .amenity:nth-of-type(5),\n  .amenity:nth-of-type(6),\n  .amenity:nth-of-type(7),\n  .amenity:nth-of-type(8) {\n    display: none;\n  }\n\n  .amenities-scroller {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  }\n\n  .footer {\n    padding: 10px;\n    flex-direction: column-reverse;\n    justify-content: center;\n    align-items: center;\n    margin-top: 20px;\n  }\n\n  .left-footer div:first-of-type {\n    display: none;\n  }\n\n  .left-footer {\n    align-items: center;\n    justify-content: center;\n  }\n\n  .footer-links {\n    width: 70px;\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .right-footer {\n    align-items: center;\n    height: 100%;\n  }\n\n  .available-rooms-header {\n    margin-top: 10vh;\n  }\n\n  .available-rooms {\n    padding: 10px;\n  }\n\n  .available-rooms h4,\n  .available-rooms a {\n    font-size: 14px;\n    width: 50%;\n  }\n\n  .available-rooms a {\n    text-align: right;\n  }\n\n  .available-rooms-container {\n    width: 100%;\n  }\n\n  .individual-room {\n    width: 100%;\n  }\n\n  .room-image button,\n  .room-info p,\n  .orange-button {\n    font-size: 12px;\n  }\n}\n\n/* ---------------------------------------------------------------------------------------------------------------------- */\n@media screen and (min-width: 375px) {\n  .logo p {\n    font-size: 14px;\n  }\n\n  .room-info button {\n    margin-top: 50px;\n  }\n}\n\n/* ---------------------------------------------------------------------------------------------------------------------- */\n@media screen and (min-width: 425px) {\n  .logo p {\n    font-size: 16px;\n  }\n\n  .room-info button {\n    margin-top: 55px;\n  }\n}\n\n/* ---------------------------------------------------------------------------------------------------------------------- */\n@media screen and (min-width: 768px) {\n  .menu-button {\n    display: none;\n  }\n\n  .logo p {\n    font-size: 16px;\n  }\n\n  .form,\n  .logo {\n    padding: 0 80px;\n  }\n\n  nav {\n    display: flex;\n    width: 22%;\n  }\n\n  h2 {\n    text-align: center;\n    padding: 0 10px;\n  }\n\n  nav button {\n    font-size: 12px;\n  }\n\n  nav button img {\n    width: 15px;\n    height: auto;\n  }\n\n  .nav-footer a {\n    font-size: 10px;\n  }\n\n  .portfolio-links {\n    width: 15%;\n  }\n\n  .dashboard-info {\n    width: 80%;\n    padding: 20px 40px;\n  }\n\n  h3 {\n    text-align: left;\n  }\n\n  .nights-container {\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  .home .dashboard-section {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .past-visits-container,\n  .upcoming-visits-container {\n    justify-content: flex-start;\n  }\n\n  .home .spending {\n    align-items: flex-start;\n  }\n\n  .spending-total {\n    margin-left: 0;\n  }\n\n  .module {\n    width: 150px;\n    margin: 10px 20px 10px 0;\n  }\n\n  .content {\n    margin: none;\n  }\n\n  .content p,\n  .module p {\n    font-size: 14px;\n  }\n\n  .past-visits-container {\n    width: 100%;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n\n  .available-rooms-header {\n    margin-top: 0;\n  }\n\n  .header {\n    display: flex;\n  }\n\n  .room-finder div input {\n    width: 80%;\n  }\n\n  .left-header-links h4 {\n    font-size: 16px;\n  }\n\n  .left-header-links li {\n    font-size: 12px;\n  }\n\n  .right-header-links .orange-button {\n    height: 25px;\n    width: 80px;\n    font-size: 12px;\n  }\n\n  .room-finder {\n    width: 55%;\n    height: 80px;\n    flex-direction: row;\n    padding: 10px 20px;\n  }\n\n  .room-finder div {\n    padding-top: 0;\n  }\n\n  .room-finder div:nth-of-type(2) {\n    border-left: 0.5px solid white;\n    padding-left: 10px;\n  }\n\n  .room-finder button {\n    padding: 10px;\n  }\n\n  .image-container > .room-module {\n    height: 200px;\n    width: 100%;\n    margin-left: 0;\n  }\n\n  .amenities-scroller .amenity:nth-of-type(1) {\n    background-position: center calc(100% + 220px);\n  }\n\n  .amenities-scroller .amenity:nth-of-type(2) {\n    background-position: center calc(100% + 170px);\n  }\n\n  .amenities-scroller .amenity:nth-of-type(3) {\n    background-position: center calc(100%);\n  }\n\n  .amenities-scroller .amenity:nth-of-type(4) {\n    background-position: center calc(100% + 170px);\n  }\n\n  .left-footer {\n    width: 25%;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n\n  .left-footer div:first-of-type {\n    display: block;\n  }\n\n  .footer,\n  .header {\n    flex-direction: row;\n    justify-content: center;\n    padding: 10px 20px;\n  }\n\n  .right-footer {\n    align-items: flex-end;\n  }\n\n  .right-footer,\n  .left-footer {\n    height: 75%;\n  }\n\n  .available-rooms {\n    padding: 20px;\n  }\n\n  .available-rooms-header {\n    padding: 0;\n  }\n\n  .available-rooms h4 {\n    font-size: 18px;\n  }\n\n  room-image button,\n  .room-info p,\n  .orange-button {\n    font-size: 14px;\n  }\n\n  .available-rooms a {\n    font-size: 16px;\n  }\n}\n\n/* ---------------------------------------------------------------------------------------------------------------------- */\n@media screen and (min-width: 1024px) {\n  .login-image {\n    display: block;\n  }\n\n  .login-form {\n    width: 50%;\n  }\n\n  .form,\n  .logo {\n    padding: 0 40px;\n  }\n\n  .logo p {\n    font-size: 16px;\n  }\n\n  h1 {\n    font-size: 54px;\n  }\n\n  form p {\n    font-size: 16px;\n  }\n\n  label {\n    font-size: 24px;\n  }\n\n  input,\n  .sign-in-button {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n\n  input,\n  input::placeholder {\n    font-size: 16px;\n  }\n\n  .sign-in-button {\n    font-size: 22px;\n  }\n\n  nav {\n    width: 20%;\n  }\n\n  .customer-greeting {\n    text-align: center;\n    padding: 0 10px;\n    font-size: 24px;\n  }\n\n  nav button {\n    font-size: 12px;\n  }\n\n  nav button img {\n    width: 20px;\n    height: auto;\n  }\n\n  .portfolio-links {\n    width: 15%;\n  }\n\n  .module {\n    width: 200px;\n  }\n\n  .left-header-links li {\n    font-size: 14px;\n  }\n\n  .welcome-section {\n    background-position: center calc(100% + 190px);\n    height: 350px;\n  }\n\n  .welcome-section,\n  .popular-rooms,\n  .amenities,\n  .max-width-container {\n    max-width: 1282.5px;\n  }\n\n  .welcome-section h5 {\n    font-size: 36px;\n  }\n\n  .welcome-section p {\n    font-size: 16px;\n  }\n\n  p,\n  .content p,\n  .module p {\n    font-size: 18px;\n  }\n\n  .room-finder div:nth-of-type(2) {\n    border-left: 0.5px solid white;\n  }\n\n  .room-container div {\n    width: 32%;\n  }\n\n  .room-module {\n    margin: 0;\n  }\n\n  .room-module:nth-of-type(2) {\n    margin: 10px 2%;\n  }\n\n  .room-container .room-module,\n  .room-container .image-container {\n    height: 350px;\n  }\n\n  .amenities-scroller {\n    flex-direction: row;\n    flex-wrap: nowrap;\n    gap: 20px;\n    @media (prefers-reduced-motion: no-preference) {\n      animation: scroll 25s linear infinite;\n    }\n  }\n\n  .amenities-container {\n    -webkit-mask: linear-gradient(\n      90deg,\n      transparent,\n      white 20%,\n      white 80%,\n      transparent\n    );\n    mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);\n  }\n  \n\n  .amenity:nth-of-type(5),\n  .amenity:nth-of-type(6),\n  .amenity:nth-of-type(7),\n  .amenity:nth-of-type(8) {\n    display: flex;\n  }\n\n  .amenities-scroller .amenity:nth-of-type(1),\n  .amenities-scroller .amenity:nth-of-type(5) {\n    background-position: center calc(100% + 20px);\n  }\n\n  .amenities-scroller .amenity:nth-of-type(2),\n  .amenities-scroller .amenity:nth-of-type(6) {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") center/cover;\n  }\n\n  .amenities-scroller .amenity:nth-of-type(3),\n  .amenities-scroller .amenity:nth-of-type(7) {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") center/cover;\n  }\n\n  .amenities-scroller .amenity:nth-of-type(4),\n  .amenities-scroller .amenity:nth-of-type(8) {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") center/cover;\n  }\n\n  .room-container {\n    flex-direction: row;\n  }\n\n  .image-container .room-module {\n    width: 100%;\n    height: auto;\n  }\n\n  .room-module div {\n    width: 30%;\n    height: 200px;\n  }\n\n  .amenity {\n    aspect-ratio: 1 / 1;\n    width: auto;\n    height: 350px;\n  }\n\n  .footer {\n    margin-top: 20px;\n    padding: 10px 70px;\n  }\n\n  .left-footer {\n    width: 50%;\n  }\n\n  .right-footer {\n    justify-content: space-evenly;\n  }\n\n  .individual-room {\n    width: 48%;\n  }\n}\n\n/* ---------------------------------------------------------------------------------------------------------------------- */\n@media screen and (min-width: 1440px) {\n  .login-form {\n    width: 50%;\n  }\n\n  .form,\n  .logo {\n    padding: 0 80px;\n  }\n\n  .logo p {\n    font-size: 18px;\n  }\n\n  h1 {\n    font-size: 60px;\n  }\n\n  label {\n    font-size: 26px;\n  }\n\n  input,\n  .sign-in-button {\n    width: 500px;\n    margin-bottom: 20px;\n  }\n\n  input,\n  input::placeholder,\n  form p {\n    font-size: 16px;\n  }\n\n  .sign-in-button {\n    font-size: 24px;\n  }\n\n  nav button {\n    font-size: 16px;\n  }\n\n  nav button img {\n    width: 20px;\n    height: auto;\n  }\n\n  .nav-footer a {\n    font-size: 14px;\n  }\n\n  .portfolio-links {\n    width: 10%;\n  }\n\n  .dashboard-info h3 {\n    font-size: 28px;\n  }\n\n  .nights-container {\n    margin-bottom: 20px;\n  }\n\n  .module {\n    width: 250px;\n  }\n\n  p,\n  .content p,\n  .module p {\n    font-size: 18px;\n  }\n\n  .right-header-links .orange-button {\n    height: 40px;\n    width: 120px;\n    font-size: 14px;\n  }\n\n  .welcome-section {\n    height: 400px;\n  }\n\n  @keyframes scroll {\n    from {\n      transform: translateX(0);\n    }\n    to {\n      transform: translateX(-115.4%);\n    }\n  }\n\n  .available-rooms {\n    padding: 0 40px 20px 40px;\n  }\n}\n\n/* ---------------------------------------------------------------------------------------------------------------------- */\n@media screen and (min-width: 2560px) {\n  .login-form {\n    width: 50%;\n  }\n\n  .form,\n  .logo {\n    padding: 0 80px;\n  }\n\n  .form {\n    height: 50%;\n  }\n\n  .logo p {\n    font-size: 28px;\n  }\n\n  h1 {\n    font-size: 100px;\n  }\n\n  label {\n    font-size: 48px;\n  }\n\n  input,\n  .sign-in-button {\n    width: 75%;\n    height: 120px;\n    margin-bottom: 20px;\n  }\n\n  input,\n  input::placeholder,\n  form p {\n    font-size: 38px;\n  }\n\n  .sign-in-button {\n    font-size: 24px;\n  }\n\n  .customer-greeting {\n    font-size: 60px;\n  }\n\n  nav button {\n    font-size: 38px;\n  }\n\n  nav button img {\n    width: 40px;\n    height: auto;\n  }\n\n  .nav-footer a {\n    font-size: 24px;\n  }\n\n  ul {\n    width: 80%;\n  }\n\n  .dropdown-options.active {\n    max-height: 400px;\n  }\n\n  .portfolio-links {\n    width: 15%;\n  }\n\n  .dashboard-info h3 {\n    font-size: 50px;\n  }\n\n  .module {\n    width: 450px;\n  }\n\n  .module-button {\n    height: 60px;\n    font-size: 24px;\n    padding: 0 20px;\n  }\n\n  p,\n  .content p,\n  .module p {\n    font-size: 38px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --orange: #c97200;\n  --light-gray: #282828;\n  --dark-gray: #161616;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\nbody {\n  background: var(--dark-gray);\n  color: white;\n}\n\n.error-module {\n  background-color: white;\n  width: 50vw;\n  height: 50vh;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n  border-radius: 25px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.error-message {\n  color: var(--dark-gray);\n  font-size: 24px;\n  text-align: center;\n  width: 80%;\n  margin: 10px 0;\n}\n\n.menu-button {\n  position: fixed;\n  height: 25px;\n  width: auto;\n  cursor: pointer;\n  z-index: 3;\n  top: 20px;\n  left: 20px;\n}\n\n.mobile-menu-section {\n  position: fixed;\n  width: 100vw;\n  margin: 0;\n  display: block;\n  cursor: pointer;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n\n.mobile-menu {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  background-color: var(--dark-gray);\n  transform: translateX(0) translateY(-230px);\n  max-height: 0;\n  transition: all 0.5s ease;\n}\n\n.mobile-menu.active {\n  max-height: 100vh;\n  transform: translateX(0) translateY(0);\n}\n\n.mobile-menu .nav-button {\n  color: white;\n  font-size: 16px;\n  margin: 40px 0;\n  padding: 0;\n}\n\n.mobile-menu:not(.active) .nav-button {\n  transform: translateY(-2000%);\n}\n\n.login-page {\n  display: flex;\n  overflow: hidden;\n}\n\n.login-image,\n.login-form {\n  width: 50%;\n  height: 100vh;\n}\n\n.hero-image {\n  width: 100%;\n  height: 100%;\n  object-fit: fill;\n}\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding-left: 130px;\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  margin-top: 75px;\n  margin-bottom: 50px;\n}\n\n.log-out-div {\n  border-top: 1px solid white;\n  width: 80%;\n  display: flex;\n  justify-content: center;\n}\n\n.log-out-div button {\n  margin-top: 10px;\n  width: 100%;\n}\n\nnav button,\n.nav-footer a {\n  color: white;\n}\n\n.logo p {\n  font-weight: bold;\n  font-size: 1em;\n  margin-left: 15px;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  width: 450px;\n  height: 550px;\n}\n\nh1 {\n  font-weight: 700;\n  font-size: 60px;\n  margin-bottom: 15px;\n}\n\nform p {\n  font-size: 14px;\n  font-weight: 300;\n}\n\n.login-instruction {\n  margin-bottom: 45px;\n}\n\nlabel {\n  font-weight: 700;\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n\ninput,\n.sign-in-button {\n  height: 60px;\n}\n\ninput,\ninput::placeholder,\n.sign-in-button {\n  font-size: 16px;\n  margin-bottom: 40px;\n}\n\ninput {\n  border: none;\n  border-radius: 10px;\n  padding: 0 15px;\n}\n\n.sign-in-error {\n  outline: 2px solid red;\n}\n\n.sign-in-error-message {\n  color: red;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n\ninput:focus {\n  outline: 2px solid var(--orange);\n}\n\n.sign-in-button {\n  background-color: var(--orange);\n  border: none;\n  font-weight: 700;\n  font-size: 24px;\n  color: white;\n  margin-bottom: 20px;\n}\n\n.forgot-link {\n  color: var(--orange);\n}\n\n.customer-dashboard,\n.nights-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n\nnav {\n  position: fixed;\n  left: 0;\n  top: 0;\n  background-color: var(--light-gray);\n  height: 100vh;\n  width: 20%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-weight: 700;\n  font-size: 24px;\n  padding-top: 40px;\n}\n\n.customer-greeting {\n  margin-bottom: 30px;\n  font-size: 24px;\n}\n\nnav button {\n  width: 80%;\n  height: auto;\n  aspect-ratio: 5 / 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  border: none;\n  border-radius: 24px;\n  background: none;\n  font-weight: 700;\n  font-size: 14px;\n  margin-bottom: 20px;\n}\n\nnav button img {\n  width: 20px;\n  height: auto;\n  margin: 0 15px;\n}\n\nnav button:hover,\nli {\n  background-color: var(--dark-gray);\n}\n\nbutton,\nli {\n  cursor: pointer;\n}\n\n.nav-button {\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  cursor: pointer;\n  border: none;\n  background: none;\n  text-align: left;\n  transition: all 0.3s ease;\n}\n\n.dropdown-button {\n  height: 35px;\n  padding-left: 25px;\n}\n\n.nav-button.active,\n.dropdown-button.active {\n  background-color: var(--dark-gray);\n}\n\n.dropdown-options {\n  border-left: 1px solid white;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.5s ease;\n}\n\n.dropdown-options.active {\n  max-height: 200px;\n}\n\n.toggle-arrow {\n  margin-left: auto;\n  transition: transform 0.5s ease;\n}\n\n.rotate {\n  transform: rotate(180deg);\n}\n\nli button {\n  margin: 0;\n  width: 120px;\n}\n\n.nav-footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 50%;\n  height: 20%;\n  position: fixed;\n  bottom: 0;\n  justify-content: center;\n}\n\n.nav-footer a {\n  font-size: 12px;\n  text-align: center;\n  font-weight: 300;\n  text-decoration: none;\n}\n\n.nav-footer a:first-child {\n  font-weight: 700;\n}\n\n.nav-footer-links {\n  margin-bottom: 5px;\n}\n\n.nav-footer-links:hover {\n  text-decoration: underline;\n}\n\n.nav-footer-links:first-of-type {\n  margin-bottom: 10px;\n  text-decoration: none;\n  cursor: default;\n}\n\n.nav-footer-links:last-of-type {\n  margin-bottom: 20px;\n}\n\n.portfolio-links {\n  width: 10%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.portfolio-link {\n  width: 20px;\n  height: auto;\n}\n\n.dashboard-info {\n  width: 80%;\n  height: 100vh;\n  padding: 40px;\n  position: fixed;\n  right: 0;\n  overflow-y: scroll;\n}\n\n.dashboard-info h3 {\n  font-weight: 700;\n  font-size: 24px;\n  margin-bottom: 15px;\n}\n\n.content {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.module {\n  width: 220px;\n  height: auto;\n  aspect-ratio: 1 / 1;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 15px;\n  text-align: center;\n  background-color: var(--light-gray);\n  margin: 10px 30px 10px 0;\n}\n\n.upcoming-visits-container,\n.past-visits-container,\n.individual-room {\n  display: flex;\n}\n\n.single {\n  background: url('../images/single.jpg') center/cover;\n}\n\n.residential {\n  background: url('../images/residential-suite.jpg') center/cover;\n}\n\n.junior {\n  background: url('../images/junior-suite.jpg') center/cover;\n}\n\n.suite {\n  background: url('../images/suite.jpg') center/cover;\n}\n\n.module-button {\n  background-color: white;\n  color: var(--dark-gray);\n  font-size: 14px;\n  font-weight: 500;\n  border: none;\n  height: 45px;\n  padding: 0 10px;\n  border-radius: 20px;\n  align-self: flex-start;\n  margin-top: auto;\n}\n\n.date {\n  text-shadow: 0 0 8px rgba(0, 0, 0, 1);\n}\n\n.link,\na {\n  text-decoration: underline;\n  font-weight: 700;\n  cursor: pointer;\n  color: white;\n}\n\n.dashboard-section,\n.dashboard-section h3 {\n  margin-bottom: 20px;\n}\n\n.date {\n  width: 70%;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.room-finder {\n  background-color: var(--light-gray);\n  border-radius: 40px;\n}\n\n.header {\n  background-color: var(--light-gray);\n  height: 5vw;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 5vw;\n  margin-bottom: 30px;\n}\n\n.left-header-links {\n  display: flex;\n  align-items: center;\n  font-weight: 700;\n  font-size: 24px;\n}\n\n.left-header-links ul {\n  display: flex;\n  margin-left: 20px;\n  list-style-type: none;\n}\n\n.left-header-links li {\n  text-decoration: none;\n  background: none;\n  margin: 0 15px;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.left-header-links a {\n  color: white;\n  text-decoration: none;\n}\n\n.left-header-links a:hover,\n.right-footer a:hover {\n  text-decoration: underline;\n}\n\n.orange-button {\n  height: 40px;\n  width: 120px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--orange);\n  color: white;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.welcome-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 350px;\n  width: 90%;\n  margin: 0 auto;\n  border-radius: 20px;\n  margin-bottom: -40px;\n  background: url('../images/welcome-section.jpg') center/cover;\n  background-position: center calc(100% + 150px);\n}\n\n.welcome-section h5 {\n  font-weight: 700;\n  font-size: 40px;\n  margin-bottom: 20px;\n}\n\n.welcome-section p {\n  font-weight: 300;\n  font-size: 20px;\n}\n\n.room-finder {\n  height: 80px;\n  width: 55%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 40px;\n}\n\n.room-finder label {\n  font-size: 14px;\n  font-weight: 700;\n  margin-left: 15px;\n}\n\n.room-finder div input {\n  width: 100%;\n  margin: 0;\n  background: none;\n  color: white;\n}\n\n.room-finder::placeholder {\n  font-size: 14px;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.room-finder div {\n  display: flex;\n  flex-direction: column;\n  height: 80%;\n  width: 30%;\n}\n\n.room-finder button {\n  background-color: var(--orange);\n  border: none;\n  border-radius: 50%;\n  transform: rotate(90deg);\n}\n\n.room-finder button img {\n  height: 25px;\n  width: auto;\n}\n\n.popular-rooms,\n.amenities {\n  margin: 0 auto;\n  margin-top: 30px;\n  height: 400px;\n  width: 90%;\n  font-weight: 500;\n  font-size: 20px;\n}\n\n.room-container {\n  display: flex;\n  height: 400px;\n}\n\n.room-module {\n  border-radius: 20px;\n  aspect-ratio: 1.5 / 1;\n  width: 33%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n  padding: 10px;\n  margin: 10px;\n}\n\n.room-module:nth-of-type(1) {\n  background: url('../images/residential-suite.jpg') center/cover;\n  margin-left: 0;\n}\n\n.room-module:nth-of-type(2) {\n  background: url('../images/suite.jpg') center/cover;\n}\n\n.image-container {\n  width: 33%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.image-container > .room-module {\n  height: 45%;\n  width: 100%;\n  margin-left: 0;\n}\n\n.image-container div:nth-of-type(1) {\n  background: url('../images/single.jpg') center/cover;\n  background-position: center calc(100% + 70px);\n}\n\n.image-container div:nth-of-type(2) {\n  background: url('../images/junior-suite.jpg') center/cover;\n  background-position: center calc(100% + 30px);\n}\n\n.room-module button,\n.amenity button {\n  border: none;\n  border-radius: 50px;\n  padding: 10px 20px;\n}\n\n.amenities {\n  overflow: hidden;\n}\n\n.amenities-container {\n  display: flex;\n  justify-content: center;\n}\n\n.amenities-scroller:hover {\n  animation-play-state: paused;\n}\n\n@keyframes scroll {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-163%);\n  }\n}\n\n.amenity {\n  border-radius: 20px;\n  aspect-ratio: 1 / 1;\n  height: 310px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n  padding: 10px;\n  margin: 10px;\n}\n\n.amenities-scroller {\n  width: max-content;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.amenities-scroller .amenity:nth-of-type(1),\n.amenities-scroller .amenity:nth-of-type(5) {\n  background: url('../images/breakfast.jpg') center/cover;\n  background-position: center calc(100% + 20px);\n}\n\n.amenities-scroller .amenity:nth-of-type(2),\n.amenities-scroller .amenity:nth-of-type(6) {\n  background: url('../images/lobby.jpg') center/cover;\n}\n\n.amenities-scroller .amenity:nth-of-type(3),\n.amenities-scroller .amenity:nth-of-type(7) {\n  background: url('../images/luxury-pool.jpg') center/cover;\n}\n\n.amenities-scroller .amenity:nth-of-type(4),\n.amenities-scroller .amenity:nth-of-type(8) {\n  background: url('../images/bar.jpg') center/cover;\n}\n\n.available-rooms {\n  padding: 0 40px 20px 40px;\n  display: flex;\n  flex-direction: column;\n}\n\n.available-rooms h4 {\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n\n.available-rooms-container {\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n}\n\n.no-rooms {\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer {\n  width: 100%;\n  height: 150px;\n  background-color: var(--light-gray);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 70px;\n}\n\n.footer-no-rooms {\n  position: fixed;\n  bottom: 0;\n}\n\n.left-footer {\n  height: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.left-footer p:first-of-type {\n  font-weight: 700;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n\n.left-footer p:last-of-type {\n  font-weight: 300;\n  font-size: 12px;\n}\n\n.left-footer img {\n  height: 25px;\n  width: auto;\n}\n\n.right-footer {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 70%;\n}\n\n.right-footer a,\n.right-footer p {\n  color: white;\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: 300;\n}\n\n.right-footer p:first-of-type,\n.bold {\n  font-weight: 700;\n}\n\n.available-rooms-header {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n\n.available-rooms-context {\n  font-weight: 700;\n  font-size: 24px;\n}\n\n.available-rooms-header p {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.individual-room {\n  width: 48%;\n  height: 150px;\n  background-color: var(--light-gray);\n  border-radius: 25px;\n}\n\n.room-image {\n  width: 50%;\n  border-radius: 25px 0 0 25px;\n}\n\n.room-image button {\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.room-info {\n  width: 50%;\n  padding: 15px 15px 0 15px;\n  display: flex;\n  flex-direction: column;\n}\n\n.room-info button {\n  margin-top: 40px;\n}\n\n.max-width-container {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.hidden {\n  display: none;\n}\n\n/* ---------------------------------------------------------------------------------------------------------------------- */\n@media screen and (min-width: 320px) {\n  .login-image {\n    display: none;\n  }\n\n  .login-form {\n    padding-left: 0px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .logo {\n    margin-bottom: 40px;\n    display: flex;\n    width: 100%;\n    padding: 0 10px;\n  }\n\n  .logo p {\n    font-size: 12px;\n  }\n\n  .login-instruction {\n    margin-bottom: 20px;\n  }\n\n  .form {\n    width: 100%;\n    padding: 0 10px;\n  }\n\n  h1 {\n    font-size: 40px;\n  }\n\n  label {\n    font-size: 18px;\n  }\n\n  input,\n  .sign-in-button {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n\n  input,\n  input::placeholder {\n    font-size: 14px;\n  }\n\n  .spending-total {\n    margin-left: 5vw;\n  }\n\n  .customer-dashboard {\n    margin-top: 5vh;\n  }\n\n  .sign-in-button {\n    font-size: 18px;\n  }\n\n  nav {\n    display: none;\n  }\n\n  .dashboard-info {\n    width: 100%;\n    padding: 20px 10px;\n  }\n\n  h3 {\n    text-align: center;\n  }\n\n  .nights-container {\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 5vh;\n  }\n\n  .module {\n    width: 250px;\n    margin: 10px;\n  }\n\n  .content {\n    margin: none;\n  }\n\n  .content p,\n  .module p {\n    font-size: 14px;\n  }\n\n  .past-visits-container,\n  .upcoming-visits-container {\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n\n  .home .dashboard-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .book-rooms {\n    width: 100%;\n  }\n\n  .header {\n    display: none;\n  }\n\n  .welcome-section {\n    margin-top: 30px;\n    background-position: center;\n    height: 250px;\n  }\n\n  .welcome-section h5 {\n    font-size: 24px;\n  }\n\n  .welcome-section h5,\n  .welcome-section p {\n    text-align: center;\n  }\n\n  .welcome-section p {\n    font-size: 12px;\n  }\n\n  .room-finder {\n    width: 90%;\n    padding: 10px;\n    flex-direction: column;\n    height: auto;\n  }\n\n  .popular-rooms {\n    height: auto;\n  }\n\n  .room-finder div {\n    width: 100%;\n    padding-top: 15px;\n  }\n\n  .room-container,\n  .image-container {\n    flex-direction: column;\n    align-items: center;\n    height: auto;\n    width: 100%;\n  }\n\n  .room-module,\n  .image-container .room-module {\n    width: 100%;\n    height: 200px;\n  }\n\n  .image-container .room-module:nth-of-type(1),\n  .image-container .room-module:nth-of-type(2) {\n    background-position: center;\n  }\n\n  .amenities {\n    height: auto;\n    width: 90%;\n  }\n\n  .amenity {\n    height: 200px;\n    width: auto;\n    aspect-ratio: 1 / 1;\n    margin: 10px 0;\n  }\n\n  .amenity:nth-of-type(5),\n  .amenity:nth-of-type(6),\n  .amenity:nth-of-type(7),\n  .amenity:nth-of-type(8) {\n    display: none;\n  }\n\n  .amenities-scroller {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  }\n\n  .footer {\n    padding: 10px;\n    flex-direction: column-reverse;\n    justify-content: center;\n    align-items: center;\n    margin-top: 20px;\n  }\n\n  .left-footer div:first-of-type {\n    display: none;\n  }\n\n  .left-footer {\n    align-items: center;\n    justify-content: center;\n  }\n\n  .footer-links {\n    width: 70px;\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .right-footer {\n    align-items: center;\n    height: 100%;\n  }\n\n  .available-rooms-header {\n    margin-top: 10vh;\n  }\n\n  .available-rooms {\n    padding: 10px;\n  }\n\n  .available-rooms h4,\n  .available-rooms a {\n    font-size: 14px;\n    width: 50%;\n  }\n\n  .available-rooms a {\n    text-align: right;\n  }\n\n  .available-rooms-container {\n    width: 100%;\n  }\n\n  .individual-room {\n    width: 100%;\n  }\n\n  .room-image button,\n  .room-info p,\n  .orange-button {\n    font-size: 12px;\n  }\n}\n\n/* ---------------------------------------------------------------------------------------------------------------------- */\n@media screen and (min-width: 375px) {\n  .logo p {\n    font-size: 14px;\n  }\n\n  .room-info button {\n    margin-top: 50px;\n  }\n}\n\n/* ---------------------------------------------------------------------------------------------------------------------- */\n@media screen and (min-width: 425px) {\n  .logo p {\n    font-size: 16px;\n  }\n\n  .room-info button {\n    margin-top: 55px;\n  }\n}\n\n/* ---------------------------------------------------------------------------------------------------------------------- */\n@media screen and (min-width: 768px) {\n  .menu-button {\n    display: none;\n  }\n\n  .logo p {\n    font-size: 16px;\n  }\n\n  .form,\n  .logo {\n    padding: 0 80px;\n  }\n\n  nav {\n    display: flex;\n    width: 22%;\n  }\n\n  h2 {\n    text-align: center;\n    padding: 0 10px;\n  }\n\n  nav button {\n    font-size: 12px;\n  }\n\n  nav button img {\n    width: 15px;\n    height: auto;\n  }\n\n  .nav-footer a {\n    font-size: 10px;\n  }\n\n  .portfolio-links {\n    width: 15%;\n  }\n\n  .dashboard-info {\n    width: 80%;\n    padding: 20px 40px;\n  }\n\n  h3 {\n    text-align: left;\n  }\n\n  .nights-container {\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  .home .dashboard-section {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .past-visits-container,\n  .upcoming-visits-container {\n    justify-content: flex-start;\n  }\n\n  .home .spending {\n    align-items: flex-start;\n  }\n\n  .spending-total {\n    margin-left: 0;\n  }\n\n  .module {\n    width: 150px;\n    margin: 10px 20px 10px 0;\n  }\n\n  .content {\n    margin: none;\n  }\n\n  .content p,\n  .module p {\n    font-size: 14px;\n  }\n\n  .past-visits-container {\n    width: 100%;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n\n  .available-rooms-header {\n    margin-top: 0;\n  }\n\n  .header {\n    display: flex;\n  }\n\n  .room-finder div input {\n    width: 80%;\n  }\n\n  .left-header-links h4 {\n    font-size: 16px;\n  }\n\n  .left-header-links li {\n    font-size: 12px;\n  }\n\n  .right-header-links .orange-button {\n    height: 25px;\n    width: 80px;\n    font-size: 12px;\n  }\n\n  .room-finder {\n    width: 55%;\n    height: 80px;\n    flex-direction: row;\n    padding: 10px 20px;\n  }\n\n  .room-finder div {\n    padding-top: 0;\n  }\n\n  .room-finder div:nth-of-type(2) {\n    border-left: 0.5px solid white;\n    padding-left: 10px;\n  }\n\n  .room-finder button {\n    padding: 10px;\n  }\n\n  .image-container > .room-module {\n    height: 200px;\n    width: 100%;\n    margin-left: 0;\n  }\n\n  .amenities-scroller .amenity:nth-of-type(1) {\n    background-position: center calc(100% + 220px);\n  }\n\n  .amenities-scroller .amenity:nth-of-type(2) {\n    background-position: center calc(100% + 170px);\n  }\n\n  .amenities-scroller .amenity:nth-of-type(3) {\n    background-position: center calc(100%);\n  }\n\n  .amenities-scroller .amenity:nth-of-type(4) {\n    background-position: center calc(100% + 170px);\n  }\n\n  .left-footer {\n    width: 25%;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n\n  .left-footer div:first-of-type {\n    display: block;\n  }\n\n  .footer,\n  .header {\n    flex-direction: row;\n    justify-content: center;\n    padding: 10px 20px;\n  }\n\n  .right-footer {\n    align-items: flex-end;\n  }\n\n  .right-footer,\n  .left-footer {\n    height: 75%;\n  }\n\n  .available-rooms {\n    padding: 20px;\n  }\n\n  .available-rooms-header {\n    padding: 0;\n  }\n\n  .available-rooms h4 {\n    font-size: 18px;\n  }\n\n  room-image button,\n  .room-info p,\n  .orange-button {\n    font-size: 14px;\n  }\n\n  .available-rooms a {\n    font-size: 16px;\n  }\n}\n\n/* ---------------------------------------------------------------------------------------------------------------------- */\n@media screen and (min-width: 1024px) {\n  .login-image {\n    display: block;\n  }\n\n  .login-form {\n    width: 50%;\n  }\n\n  .form,\n  .logo {\n    padding: 0 40px;\n  }\n\n  .logo p {\n    font-size: 16px;\n  }\n\n  h1 {\n    font-size: 54px;\n  }\n\n  form p {\n    font-size: 16px;\n  }\n\n  label {\n    font-size: 24px;\n  }\n\n  input,\n  .sign-in-button {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n\n  input,\n  input::placeholder {\n    font-size: 16px;\n  }\n\n  .sign-in-button {\n    font-size: 22px;\n  }\n\n  nav {\n    width: 20%;\n  }\n\n  .customer-greeting {\n    text-align: center;\n    padding: 0 10px;\n    font-size: 24px;\n  }\n\n  nav button {\n    font-size: 12px;\n  }\n\n  nav button img {\n    width: 20px;\n    height: auto;\n  }\n\n  .portfolio-links {\n    width: 15%;\n  }\n\n  .module {\n    width: 200px;\n  }\n\n  .left-header-links li {\n    font-size: 14px;\n  }\n\n  .welcome-section {\n    background-position: center calc(100% + 190px);\n    height: 350px;\n  }\n\n  .welcome-section,\n  .popular-rooms,\n  .amenities,\n  .max-width-container {\n    max-width: 1282.5px;\n  }\n\n  .welcome-section h5 {\n    font-size: 36px;\n  }\n\n  .welcome-section p {\n    font-size: 16px;\n  }\n\n  p,\n  .content p,\n  .module p {\n    font-size: 18px;\n  }\n\n  .room-finder div:nth-of-type(2) {\n    border-left: 0.5px solid white;\n  }\n\n  .room-container div {\n    width: 32%;\n  }\n\n  .room-module {\n    margin: 0;\n  }\n\n  .room-module:nth-of-type(2) {\n    margin: 10px 2%;\n  }\n\n  .room-container .room-module,\n  .room-container .image-container {\n    height: 350px;\n  }\n\n  .amenities-scroller {\n    flex-direction: row;\n    flex-wrap: nowrap;\n    gap: 20px;\n    @media (prefers-reduced-motion: no-preference) {\n      animation: scroll 25s linear infinite;\n    }\n  }\n\n  .amenities-container {\n    -webkit-mask: linear-gradient(\n      90deg,\n      transparent,\n      white 20%,\n      white 80%,\n      transparent\n    );\n    mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);\n  }\n  \n\n  .amenity:nth-of-type(5),\n  .amenity:nth-of-type(6),\n  .amenity:nth-of-type(7),\n  .amenity:nth-of-type(8) {\n    display: flex;\n  }\n\n  .amenities-scroller .amenity:nth-of-type(1),\n  .amenities-scroller .amenity:nth-of-type(5) {\n    background-position: center calc(100% + 20px);\n  }\n\n  .amenities-scroller .amenity:nth-of-type(2),\n  .amenities-scroller .amenity:nth-of-type(6) {\n    background: url('../images/lobby.jpg') center/cover;\n  }\n\n  .amenities-scroller .amenity:nth-of-type(3),\n  .amenities-scroller .amenity:nth-of-type(7) {\n    background: url('../images/luxury-pool.jpg') center/cover;\n  }\n\n  .amenities-scroller .amenity:nth-of-type(4),\n  .amenities-scroller .amenity:nth-of-type(8) {\n    background: url('../images/bar.jpg') center/cover;\n  }\n\n  .room-container {\n    flex-direction: row;\n  }\n\n  .image-container .room-module {\n    width: 100%;\n    height: auto;\n  }\n\n  .room-module div {\n    width: 30%;\n    height: 200px;\n  }\n\n  .amenity {\n    aspect-ratio: 1 / 1;\n    width: auto;\n    height: 350px;\n  }\n\n  .footer {\n    margin-top: 20px;\n    padding: 10px 70px;\n  }\n\n  .left-footer {\n    width: 50%;\n  }\n\n  .right-footer {\n    justify-content: space-evenly;\n  }\n\n  .individual-room {\n    width: 48%;\n  }\n}\n\n/* ---------------------------------------------------------------------------------------------------------------------- */\n@media screen and (min-width: 1440px) {\n  .login-form {\n    width: 50%;\n  }\n\n  .form,\n  .logo {\n    padding: 0 80px;\n  }\n\n  .logo p {\n    font-size: 18px;\n  }\n\n  h1 {\n    font-size: 60px;\n  }\n\n  label {\n    font-size: 26px;\n  }\n\n  input,\n  .sign-in-button {\n    width: 500px;\n    margin-bottom: 20px;\n  }\n\n  input,\n  input::placeholder,\n  form p {\n    font-size: 16px;\n  }\n\n  .sign-in-button {\n    font-size: 24px;\n  }\n\n  nav button {\n    font-size: 16px;\n  }\n\n  nav button img {\n    width: 20px;\n    height: auto;\n  }\n\n  .nav-footer a {\n    font-size: 14px;\n  }\n\n  .portfolio-links {\n    width: 10%;\n  }\n\n  .dashboard-info h3 {\n    font-size: 28px;\n  }\n\n  .nights-container {\n    margin-bottom: 20px;\n  }\n\n  .module {\n    width: 250px;\n  }\n\n  p,\n  .content p,\n  .module p {\n    font-size: 18px;\n  }\n\n  .right-header-links .orange-button {\n    height: 40px;\n    width: 120px;\n    font-size: 14px;\n  }\n\n  .welcome-section {\n    height: 400px;\n  }\n\n  @keyframes scroll {\n    from {\n      transform: translateX(0);\n    }\n    to {\n      transform: translateX(-115.4%);\n    }\n  }\n\n  .available-rooms {\n    padding: 0 40px 20px 40px;\n  }\n}\n\n/* ---------------------------------------------------------------------------------------------------------------------- */\n@media screen and (min-width: 2560px) {\n  .login-form {\n    width: 50%;\n  }\n\n  .form,\n  .logo {\n    padding: 0 80px;\n  }\n\n  .form {\n    height: 50%;\n  }\n\n  .logo p {\n    font-size: 28px;\n  }\n\n  h1 {\n    font-size: 100px;\n  }\n\n  label {\n    font-size: 48px;\n  }\n\n  input,\n  .sign-in-button {\n    width: 75%;\n    height: 120px;\n    margin-bottom: 20px;\n  }\n\n  input,\n  input::placeholder,\n  form p {\n    font-size: 38px;\n  }\n\n  .sign-in-button {\n    font-size: 24px;\n  }\n\n  .customer-greeting {\n    font-size: 60px;\n  }\n\n  nav button {\n    font-size: 38px;\n  }\n\n  nav button img {\n    width: 40px;\n    height: auto;\n  }\n\n  .nav-footer a {\n    font-size: 24px;\n  }\n\n  ul {\n    width: 80%;\n  }\n\n  .dropdown-options.active {\n    max-height: 400px;\n  }\n\n  .portfolio-links {\n    width: 15%;\n  }\n\n  .dashboard-info h3 {\n    font-size: 50px;\n  }\n\n  .module {\n    width: 450px;\n  }\n\n  .module-button {\n    height: 60px;\n    font-size: 24px;\n    padding: 0 20px;\n  }\n\n  p,\n  .content p,\n  .module p {\n    font-size: 38px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 10 */
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 11 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 12 */
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/single.jpg");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/residential-suite.jpg");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/junior-suite.jpg");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/suite.jpg");

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/welcome-section.jpg");

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/breakfast.jpg");

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/lobby.jpg");

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/luxury-pool.jpg");

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/bar.jpg");

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/logo.svg");

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/login.jpg");

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/home.svg");

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/hotel.png");

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/spending.png");

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/calendar.png");

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/github-mark-white.png");

/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/In-White-96.png");

/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/arrow.png");

/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/menu.png");

/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/sign-out.png");

/***/ })
/******/ 	]);
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _images_login_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _images_home_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _images_hotel_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
/* harmony import */ var _images_spending_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26);
/* harmony import */ var _images_calendar_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27);
/* harmony import */ var _images_github_mark_white_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28);
/* harmony import */ var _images_In_White_96_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29);
/* harmony import */ var _images_arrow_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30);
/* harmony import */ var _images_single_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13);
/* harmony import */ var _images_welcome_section_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17);
/* harmony import */ var _images_menu_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31);
/* harmony import */ var _images_sign_out_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32);
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
const {
  sortBookingsOldToNew,
  sortBookingsNewToOld,
  convertNumToDollarAmount,
  formatDate,
} = __webpack_require__(1);

// An example of how you tell webpack to use a CSS (SCSS) file


// An example of how you tell webpack to use an image (also need to link to it in the index.html)














// Global Variables
const mobileMenuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuSection = document.querySelector('.mobile-menu-section');
const errorModule = document.querySelector('.error-module');
const loginPage = document.querySelector('.login-page');
const loginForm = document.querySelector('.form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const signInButton = document.querySelector('.sign-in-button');
const nav = document.querySelector('.customer-nav');
const navButtons = document.querySelectorAll('.nav-button');
const dropdownButtons = document.querySelectorAll('.dropdown-button');
const dropdownOptions = document.querySelector('.dropdown-options');
const toggleArrow = document.querySelector('.toggle-arrow');
const logOutButton = document.querySelector('.log-out');
const customerDashboard = document.querySelector('.customer-dashboard');
const dashboardSections = document.querySelectorAll('.dashboard-info');
const bookingsOverviewSection = document.querySelector('.bookings-overview');
const bookingsUpcomingSection = document.querySelector('.bookings-upcoming');
const bookRoomDashboard = document.querySelector('.book-rooms');
const dashboardButton = document.querySelector('.header-button');
const roomSearchButton = document.querySelector('.room-search-button');
const checkInDateInput = document.getElementById('check-in');
const numGuestsInput = document.getElementById('guests');
const submitArrow = document.querySelector('.submit-arrow');
const welcomeBanner = document.querySelector('.welcome-section');
const searchForm = document.querySelector('.room-finder');
const popularRoomsSection = document.querySelector('.popular-rooms');
const amenitiesSection = document.querySelector('.amenities');
const availableRoomsSection = document.querySelector('.available-rooms');
const availableRoomsHeader = document.querySelector('.available-rooms-header');
const availableRoomsDisplay = document.querySelector(
  '.available-rooms-context'
);
const availableRoomsContainer = document.querySelector(
  '.available-rooms-container'
);
const footer = document.querySelector('.footer');
let today = new Date();
let currentUser;
let allRooms;
let allBookings;
let userBookings;
let goBackLink;
let confirmButton;
let bookedRoom;
let isSignedIn = false;

// Event Listeners
document.addEventListener('click', function (event) {
  toggleMobileMenu(event);
});

loginForm.addEventListener('submit', function (event) {
  if (event.target === loginForm) {
    const customerID = username.value.split('customer')[1];
    const enteredPassword = password.value;

    if (
      !Number(customerID) ||
      Number(customerID) > 50 ||
      enteredPassword !== 'overlook2021'
    ) {
      event.preventDefault();
      showLoginErrorMessage(customerID, enteredPassword);
    } else {
      event.preventDefault();
      getUser(
        `https://peaceful-anchorage-36801-d8ce29adb0a7.herokuapp.com/api/v1/customers/${customerID}`
      ).then(() => changeDashboardView(event));
    }
  }
});

nav.addEventListener('click', function (event) {
  if (event.target.closest('.nav-button')) {
    changeActiveButton(event);
    changeDashboardView(event);
    toggleDropdownMenu(event);
  }
});

customerDashboard.addEventListener('click', function (event) {
  if (event.target.closest('.dashboard-section')) {
    changeDashboardView(event);
  }
});

bookRoomDashboard.addEventListener('click', function (event) {
  changeDashboardView(event);
});

bookingsOverviewSection.addEventListener('click', function (event) {
  changeDashboardView(event);
});

bookingsUpcomingSection.addEventListener('click', function (event) {
  changeDashboardView(event);
});

// API Calls
const fetchData = (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        show(errorModule);
        throw new Error(error);
      }
      return response.json();
    })
    .catch((error) => {
      show(errorModule);
    });
};

const getUser = (url) => {
  return fetchData(url)
    .then((user) => {
      if (!user) {
        show(errorModule);
        throw new Error(error);
      }

      currentUser = user;
      populateName(currentUser);
    })
    .then(() =>
      getAllRooms(
        'https://peaceful-anchorage-36801-d8ce29adb0a7.herokuapp.com/api/v1/rooms'
      )
    )
    .then(() =>
      getAllBookings(
        'https://peaceful-anchorage-36801-d8ce29adb0a7.herokuapp.com/api/v1/bookings'
      )
    )
    .then(() => {
      isSignedIn = true;
      showMobileMenu();
      getUserBookings(allBookings, currentUser);
      updateUpcomingVisits();
      populateSpendingAmount();
      updatePastVisits();
      formatDateInput();
    })
    .catch((error) => {
      show(errorModule);
    });
};

const getAllRooms = (url) => {
  return fetchData(url)
    .then((rooms) => {
      if (!rooms) {
        show(errorModule);
        throw new Error(error);
      }

      allRooms = rooms.rooms;
    })
    .catch((error) => {
      show(errorModule);
    });
};

const getAllBookings = (url) => {
  return fetchData(url)
    .then((bookings) => {
      if (!bookings) {
        show(errorModule);
        throw new Error(error);
      }

      allBookings = bookings.bookings;
    })
    .catch((error) => {
      show(errorModule);
    });
};

const bookRoom = (url) => {
  const data = {
    userID: parseInt(currentUser.id),
    date: `${checkInDateInput.value.replaceAll('-', '/')}`,
    roomNumber: parseInt(bookedRoom[0].number),
  };

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        show(errorModule);
        throw new Error(error);
      }

      return response;
    })
    .catch((error) => {
      show(errorModule);
    });
};

// Functions
const hide = (element) => {
  element.classList.add('hidden');
};

const show = (element) => {
  element.classList.remove('hidden');
};

const changeDashboardView = (event) => {
  if (event.target === loginForm) {
    hide(loginPage);
    show(customerDashboard);
  }

  if (event.target.innerText === 'Home') {
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[0]);
    });
  }

  if (
    event.target.innerText === 'Spending' ||
    event.target.classList.contains('spending-link')
  ) {
    populateSpendingDashboard(userBookings);
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[1]);
      navButtons.forEach((button) => button.classList.remove('active'));
      navButtons[8].classList.add('active');
    });
  }

  if (event.target.innerText === 'Overview') {
    populateBookingsOverview();
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[2]);
    });
  }

  if (event.target.innerText === 'Upcoming') {
    populateUpcomingBookings();
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[3]);
    });
  }

  if (event.target.innerText === 'Past') {
    populatePastBookings();
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[4]);
    });
  }

  if (
    event.target.innerText === 'Book A Room' ||
    event.target.classList.contains('booking-link')
  ) {
    hide(customerDashboard);
    show(bookRoomDashboard);
    hide(availableRoomsSection);
    show(footer);
    show(welcomeBanner);
    show(searchForm);
    show(popularRoomsSection);
    show(amenitiesSection);
    footer.classList.remove('footer-no-rooms');
    checkInDateInput.value = '';
    checkInDateInput.type = 'text';
    numGuestsInput.value = '';
  }

  if (
    event.target === logOutButton ||
    event.target.classList.contains('log-out')
  ) {
    location.reload();
  }

  if (
    event.target === dashboardButton ||
    event.target.classList.contains('return-to-dashboard')
  ) {
    hide(footer);
    hide(bookRoomDashboard);
    show(customerDashboard);
    navButtons.forEach((button) => button.classList.remove('active'));
    navButtons[0].classList.add('active');
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[0]);
    });
    getUser(
      `https://peaceful-anchorage-36801-d8ce29adb0a7.herokuapp.com/api/v1/customers/${currentUser.id}`
    );
  }

  if (
    checkInDateInput.value &&
    numGuestsInput.value &&
    (event.target === roomSearchButton || event.target === submitArrow)
  ) {
    event.preventDefault();
    hide(welcomeBanner);
    hide(searchForm);
    hide(popularRoomsSection);
    hide(amenitiesSection);
    show(availableRoomsSection);
    populateAvailableRoomsContainer();
  }

  if (
    event.target.innerText === 'Go Back' ||
    event.target.innerText === 'again'
  ) {
    const nestedDivs = availableRoomsContainer.querySelectorAll('div');
    if (nestedDivs.length === 3) {
      show(availableRoomsSection);
      populateAvailableRoomsContainer();
    } else {
      checkInDateInput.value = '';
      checkInDateInput.type = 'text';
      numGuestsInput.value = '';
      show(welcomeBanner);
      show(searchForm);
      show(popularRoomsSection);
      show(amenitiesSection);
      hide(availableRoomsSection);
      footer.classList.remove('footer-no-rooms');
    }
  }

  if (
    event.target.innerText === 'New Search' ||
    event.target.innerText === 'Rooms' ||
    event.target.innerText === 'Amenities'
  ) {
    checkInDateInput.value = '';
    checkInDateInput.type = 'text';
    numGuestsInput.value = '';
    show(welcomeBanner);
    show(searchForm);
    show(popularRoomsSection);
    show(amenitiesSection);
    hide(availableRoomsSection);
    footer.classList.remove('footer-no-rooms');
  }

  if (
    event.target.classList.contains('book-now-button') ||
    event.target.innerText === 'Book Now'
  ) {
    footer.classList.add('footer-no-rooms');
    availableRoomsContainer.classList.add('no-rooms');
    showBookedRoom(event);
  }

  if (
    event.target.classList.contains('confirm-booking') ||
    event.target.innerText === 'Confirm'
  ) {
    assignBookedRoom();
    showConfirmedBooking(event);
    bookRoom(
      'https://peaceful-anchorage-36801-d8ce29adb0a7.herokuapp.com/api/v1/bookings'
    );
    getUser(
      `https://peaceful-anchorage-36801-d8ce29adb0a7.herokuapp.com/api/v1/customers/${currentUser.id}`
    );
  }
};

const updateUpcomingVisits = () => {
  const upcomingBookings = getUpcomingBookings(userBookings);
  const sortedBookings = sortBookingsOldToNew([...upcomingBookings]);

  populateNextVisit(sortedBookings);
};

const updateSpending = () => {
  const amount = userBookings.reduce(
    (acc, booking) => acc + allRooms[booking.roomNumber - 1].costPerNight,
    0
  );

  const formattedAmount = convertNumToDollarAmount(amount);
  return formattedAmount;
};

const updatePastVisits = () => {
  const pastBookings = getPastBookings(userBookings);
  const sortedNewPastBookings = sortBookingsNewToOld([...pastBookings]);
  const sortedOldPastBookings = sortBookingsOldToNew([...pastBookings]);

  populateRecentVisits(pastBookings);
};

const getBookedRooms = () => {
  const checkInDate = checkInDateInput.value
    .split('Check-in Date')[0]
    .split('-')
    .join('/');

  return allBookings
    .filter((booking) => booking.date === checkInDate)
    .map((room) => room.roomNumber);
};

const getUnbookedRooms = (bookedRooms) => {
  return allRooms.filter((room) => {
    return !bookedRooms.includes(room.number);
  });
};

const getAvailableRooms = () => {
  const numGuests = numGuestsInput.value.split('num guests')[0];
  const numBedsNeeded = Math.round(numGuests / 2);
  const bookedRooms = getBookedRooms();
  const unbookedRooms = getUnbookedRooms(bookedRooms);

  return unbookedRooms.filter((room) => room.numBeds >= numBedsNeeded);
};

const assignBookedRoom = () => {
  const roomContainer = document.querySelector('.individual-room');

  const bedsInfo = document.querySelector('.bed-info').textContent.split(' ');
  const numBeds = Number(bedsInfo[0]);
  const bedSize = bedsInfo[1];
  const costPerNightInfo = document
    .querySelector('.cost-per-night')
    .textContent.split(' ')[3];
  const costPerNight = parseFloat(costPerNightInfo.replace('$', ''));

  bookedRoom = allRooms.filter(
    (room) =>
      room.costPerNight === costPerNight &&
      room.numBeds === numBeds &&
      room.bedSize === bedSize
  );
};

const getUserBookings = (bookings, user) => {
  userBookings = bookings.filter((booking) => booking.userID === user.id);
};

const getUpcomingBookings = (bookings) => {
  return bookings.filter((booking) => {
    const bookingDate = new Date(booking.date);
    return bookingDate >= today;
  });
};

const getPastBookings = (bookings) => {
  return bookings.filter((booking) => {
    const bookingDate = new Date(booking.date);
    return bookingDate < today;
  });
};

const makeRoomTypeButton = (booking) => {
  if (booking.roomNumber)
    return allRooms[booking.roomNumber - 1].roomType
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  else
    return allRooms[booking.number - 1].roomType
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
};

const formatDateInput = () => {
  checkInDateInput.min = new Date().toISOString().split('T')[0];
};

// DOM Manipulation Functions
const showMobileMenu = () => {
  if (isSignedIn && window.innerWidth <= 768) {
    show(mobileMenu);
    show(mobileMenuButton);
    show(mobileMenuSection);
  }
};

const toggleMobileMenu = (event) => {
  if (event.target.classList.contains('menu-button')) {
    mobileMenu.classList.toggle('active');
    mobileMenuSection.classList.toggle('active');
  }

  if (event.target.innerText === 'Home') {
    hide(footer);
    hide(bookRoomDashboard);
    show(customerDashboard);
    navButtons.forEach((button) => button.classList.remove('active'));
    navButtons[0].classList.add('active');
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[0]);
    });
    getUser(
      `https://peaceful-anchorage-36801-d8ce29adb0a7.herokuapp.com/api/v1/customers/${currentUser.id}`
    );
    mobileMenu.classList.toggle('active');
    mobileMenuSection.classList.toggle('active');
  }

  if (
    event.target.innerText === 'Spending' ||
    event.target.classList.contains('spending-link')
  ) {
    populateSpendingDashboard(userBookings);
    hide(footer);
    hide(bookRoomDashboard);
    show(customerDashboard);
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[1]);
      navButtons.forEach((button) => button.classList.remove('active'));
      navButtons[8].classList.add('active');
      mobileMenu.classList.toggle('active');
      mobileMenuSection.classList.toggle('active');
    });
  }

  if (event.target.innerText === 'Upcoming') {
    populateUpcomingBookings();
    hide(footer);
    hide(bookRoomDashboard);
    show(customerDashboard);
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[3]);
      mobileMenu.classList.toggle('active');
      mobileMenuSection.classList.toggle('active');
    });
  }

  if (event.target.innerText === 'Past') {
    populatePastBookings();
    hide(footer);
    hide(bookRoomDashboard);
    show(customerDashboard);
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[4]);
      mobileMenu.classList.toggle('active');
      mobileMenuSection.classList.toggle('active');
    });
  }

  if (
    event.target.innerText === 'Book A Room' ||
    event.target.classList.contains('booking-link')
  ) {
    hide(customerDashboard);
    show(bookRoomDashboard);
    hide(availableRoomsSection);
    show(footer);
    show(welcomeBanner);
    show(searchForm);
    show(popularRoomsSection);
    show(amenitiesSection);
    footer.classList.remove('footer-no-rooms');
    checkInDateInput.value = '';
    checkInDateInput.type = 'text';
    numGuestsInput.value = '';
    mobileMenu.classList.toggle('active');
    mobileMenuSection.classList.toggle('active');
  }
};

const toggleDropdownMenu = (event) => {
  if (
    (event.target === navButtons[7] ||
      event.target.closest('button') === navButtons[7]) &&
    !event.target.classList.contains('dropdown-button')
  ) {
    dropdownOptions.classList.toggle('active');
    toggleArrow.classList.toggle('rotate');
  } else if (event.target.classList.contains('dropdown-button')) {
    dropdownOptions.classList.add('active');
    toggleArrow.classList.add('rotate');
  } else {
    dropdownOptions.classList.remove('active');
    toggleArrow.classList.remove('rotate');
  }
};

const changeActiveButton = (event) => {
  const targetButton = event.target.closest('button');

  if (
    (event.target.classList.contains('nav-button') ||
      (targetButton && targetButton.classList.contains('nav-button'))) &&
    (!targetButton || targetButton.innerText !== 'Bookings') &&
    targetButton.innerText !== 'Book A Room'
  ) {
    navButtons.forEach((button) => button.classList.remove('active'));

    if (
      targetButton !== navButtons[1] &&
      targetButton.innerText !== 'Book A Room'
    ) {
      targetButton.classList.add('active');
    }
  }
};

const populateName = () => {
  const customerGreeting = document.querySelector('.customer-greeting');
  customerGreeting.innerText = `Welcome, ${currentUser.name.split(' ')[0]}!`;
};

const populateNextVisit = (bookings) => {
  const container = document.querySelector('.upcoming-visits-container');

  if (bookings.length) {
    const date = bookings[0].date;
    const formattedDate = formatDate(date);
    const roomType = makeRoomTypeButton(bookings[0]);

    container.innerHTML = `<div class="module ${
      allRooms[bookings[0].roomNumber - 1].roomType.split(' ')[0]
    }">
        <div class="content">
          <p class="date">${formattedDate}</p>
        </div>
        <button class="module-button">${roomType}</button>
      </div>`;
  } else {
    container.innerHTML = `<div class="module">
        <div class="content">
          <p>No upcoming visits!</p>
          <p> Schedule one <span class="link booking-link">here</span>.</p>
        </div>
      </div>`;
  }
};

const populateSpendingAmount = () => {
  const spendMessage = document.querySelector('.spend-amount');
  const amount = updateSpending();

  spendMessage.innerText = `You have spent ${amount} over ${userBookings.length} nights.`;
};

const populateRecentVisits = (bookings) => {
  const container = document.querySelector('.past-visits-container');
  const sortedBookings = sortBookingsNewToOld([...bookings]);
  container.innerHTML = '';

  for (let i = 0; i < 4; i++) {
    if (sortedBookings[i]) {
      const date = sortedBookings[i].date;
      const formattedDate = formatDate(date);
      const roomType = makeRoomTypeButton(sortedBookings[i]);

      container.innerHTML += `<div class="module ${
        allRooms[sortedBookings[i].roomNumber - 1].roomType.split(' ')[0]
      }">
        <div class="content">
          <p class="date">${formattedDate}</p>
        </div>
        <button class="module-button">${roomType}</button>
      </div>`;
    }
  }
};

const populateSpendingDashboard = (bookings) => {
  updateSpendingTotal(bookings);
  updateSpendingBreakdown(bookings);
};

const updateSpendingTotal = (bookings) => {
  const spendingText = document.querySelector('.spending-total');

  spendingText.innerText = `Total: ${updateSpending(bookings)}`;
};

const updateSpendingBreakdown = (bookings) => {
  const container = document.querySelector('.nights-container');
  const sortedBookings = sortBookingsNewToOld([...bookings]);

  container.innerHTML = '';

  sortedBookings.forEach((booking, index, array) => {
    const div = document.createElement('div');

    const date = booking.date;
    const formattedDate = formatDate(date);

    const amount = allRooms[booking.roomNumber - 1].costPerNight;
    const formattedAmount = convertNumToDollarAmount(amount);

    div.classList.add('module');
    div.innerHTML = `<p>Night #${array.length - index}: ${formattedDate}</p>
    <p class="bold">$${amount}</p>`;

    container.appendChild(div);
  });
};

const getBookingsInfo = (bookings) => {
  const pastBookings = getPastBookings(bookings);
  const upcomingBookings = getUpcomingBookings(bookings);

  const sortedPastBookings = sortBookingsNewToOld([...pastBookings]);
  const sortedUpcomingBookings = sortBookingsOldToNew([...upcomingBookings]);

  return { sortedPastBookings, sortedUpcomingBookings };
};

const populateBookingsOverview = () => {
  const upcomingVisitsDiv = document.querySelector('.overview-upcoming');
  const pastVisitsDiv = document.querySelector('.overview-past');

  const { sortedPastBookings, sortedUpcomingBookings } =
    getBookingsInfo(userBookings);

  if (sortedUpcomingBookings.length) {
    upcomingVisitsDiv.innerHTML = '';

    sortedUpcomingBookings.forEach((booking, index) => {
      const date = booking.date;
      const formattedDate = formatDate(date);
      const roomType = allRooms[
        sortedUpcomingBookings[index].roomNumber - 1
      ].roomType
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      const div = document.createElement('div');
      div.classList.add(
        'module',
        `${allRooms[booking.roomNumber - 1].roomType.split(' ')[0]}`
      );

      div.innerHTML = `
        <div class="content">
          <p class="date">${formattedDate}</p>
        </div>
        <button class="module-button">${roomType}</button>`;

      upcomingVisitsDiv.appendChild(div);
    });
  } else {
    const div = document.createElement('div');
    div.classList.add('module');
    div.innerHTML = `<div class="content">
          <p>You have no upcoming visits!</p>
          <p> Schedule one <span class="link booking-link">here</span>.</p>
        </div>`;

    upcomingVisitsDiv.innerHTML = '';
    upcomingVisitsDiv.appendChild(div);
  }

  if (sortedPastBookings.length) {
    pastVisitsDiv.innerHTML = '';

    sortedPastBookings.forEach((booking) => {
      const date = booking.date;
      const formattedDate = formatDate(date);
      const roomType = makeRoomTypeButton(booking);

      const div = document.createElement('div');
      div.classList.add(
        'module',
        `${allRooms[booking.roomNumber - 1].roomType.split(' ')[0]}`
      );

      div.innerHTML = `
          <div class="content">
            <p class="date">${formattedDate}</p>
          </div>
          <button class="module-button">${roomType}</button>`;

      pastVisitsDiv.appendChild(div);
    });
  } else {
    const div = document.createElement('div');
    div.classList.add('module');
    div.innerHTML = `<div class="content">
          <p>You haven't stayed with us yet!</p>
          <p> Schedule one <span class="link booking-link">here</span>.</p>
        </div>`;

    pastVisitsDiv.innerHTML = '';
    pastVisitsDiv.appendChild(div);
  }
};

const populateUpcomingBookings = () => {
  const { sortedUpcomingBookings } = getBookingsInfo(userBookings);

  const upcomingBookingsDiv = document.querySelector('.upcoming-bookings');

  if (sortedUpcomingBookings.length) {
    upcomingBookingsDiv.innerHTML = '';

    sortedUpcomingBookings.forEach((booking) => {
      const date = booking.date;
      const formattedDate = formatDate(date);
      const roomType = makeRoomTypeButton(booking);

      const div = document.createElement('div');
      div.classList.add(
        'module',
        `${allRooms[booking.roomNumber - 1].roomType.split(' ')[0]}`
      );

      div.innerHTML = `
            <div class="content">
              <p class="date">${formattedDate}</p>
            </div>
            <button class="module-button">${roomType}</button>`;

      upcomingBookingsDiv.appendChild(div);
    });
  } else {
    const div = document.createElement('div');
    div.classList.add('module');
    div.innerHTML = `<div class="content">
          <p>You have no upcoming visits!</p>
          <p> Schedule one <span class="link booking-link">here</span>.</p>
        </div>`;

    upcomingBookingsDiv.innerHTML = '';
    upcomingBookingsDiv.appendChild(div);
  }
};

const populatePastBookings = () => {
  const { sortedPastBookings } = getBookingsInfo(userBookings);

  const pastBookingsDiv = document.querySelector('.past-bookings');

  if (sortedPastBookings.length) {
    pastBookingsDiv.innerHTML = '';

    sortedPastBookings.forEach((booking) => {
      const date = booking.date;
      const formattedDate = formatDate(date);
      const roomType = makeRoomTypeButton(booking);

      const div = document.createElement('div');
      div.classList.add(
        'module',
        `${allRooms[booking.roomNumber - 1].roomType.split(' ')[0]}`
      );

      div.innerHTML = `
            <div class="content">
              <p class="date">${formattedDate}</p>
            </div>
            <button class="module-button">${roomType}</button>`;

      pastBookingsDiv.appendChild(div);
    });
  } else {
    const div = document.createElement('div');
    div.classList.add('module');
    div.innerHTML = `<div class="content">
          <p>You haven't stayed with us yet!</p>
          <p> Schedule one <span class="link">here</span>.</p>
        </div>`;

    pastBookingsDiv.innerHTML = '';
    pastBookingsDiv.appendChild(div);
  }
};

const populateAvailableRoomsContainer = () => {
  const availableRooms = getAvailableRooms().sort(
    (a, b) => a.costPerNight - b.costPerNight
  );

  const roomDate = checkInDateInput.value;
  const formattedDate = formatDate(roomDate);

  availableRoomsDisplay.innerText = `Available Rooms on ${formattedDate}`;

  if (!goBackLink) {
    goBackLink = document.createElement('a');
    goBackLink.href = '#';
    goBackLink.innerText = `Go Back`;
    goBackLink.classList.add('go-back-link');

    availableRoomsHeader.appendChild(goBackLink);
  }

  if (!availableRooms.length) {
    footer.classList.add('footer-no-rooms');
    availableRoomsContainer.classList.add('no-rooms');

    availableRoomsContainer.innerHTML = `
    <p>I fiercely apologize, but there aren't any rooms available that match your criteria.</p>
    <br>
    <p>Please try <span class="link">again</span>.</p>`;
  } else {
    footer.classList.remove('footer-no-rooms');
    availableRoomsContainer.classList.remove('no-rooms');
    availableRoomsContainer.innerHTML = '';

    availableRooms.forEach((room) => {
      const individualRoom = document.createElement('div');
      const roomImage = document.createElement('div');
      const roomInfo = document.createElement('div');
      const roomType = makeRoomTypeButton(room);

      individualRoom.classList.add('individual-room');
      roomImage.classList.add(
        'room-image',
        `${allRooms[room.number - 1].roomType.split(' ')[0]}`
      );
      roomInfo.classList.add('room-info');

      roomImage.innerHTML = `<button class="module-button">${roomType}</button>`;
      roomInfo.innerHTML = `
      <p class="bold bed-info">${room.numBeds} ${room.bedSize} beds.</p>
      <p class="cost-per-night"><span class="bold">Cost Per Night:</span> ${convertNumToDollarAmount(
        room.costPerNight
      )}</p>
      <button class="orange-button book-now-button"><span class="bold book-now-button">Book Now</span></button>
      <button class="orange-button confirm-booking hidden"><span class="bold">Confirm</span></button>
      `;

      individualRoom.appendChild(roomImage);
      individualRoom.appendChild(roomInfo);
      availableRoomsContainer.appendChild(individualRoom);
    });
  }
};

const showBookedRoom = (event) => {
  const selectedRoom = event.target.closest('.individual-room');
  const roomDate = checkInDateInput.value;
  const formattedDate = formatDate(roomDate);

  availableRoomsDisplay.innerText = `Confirm Booking for ${formattedDate}`;
  availableRoomsContainer.innerText = 'Please confirm your booking.';
  availableRoomsContainer.appendChild(selectedRoom);

  const confirmButton = document.querySelector('.confirm-booking');
  const bookNowButton = document.querySelector('.book-now-button');
  show(confirmButton);
  hide(bookNowButton);
};

const showConfirmedBooking = (event) => {
  goBackLink = document.querySelector('.go-back-link');
  goBackLink.innerText = 'New Search';

  availableRoomsContainer.innerHTML = `
    <p>Your room has been booked!</p>
    <br>
    <p>Click <a href="#" class="link return-to-dashboard">here</a> to return to the dashboard and view your reservations.</p>
    `;
};

const showLoginErrorMessage = (submittedID, submittedPassword) => {
  const usernameErrorMessage = document.querySelector('.username-error');
  const passwordErrorMessage = document.querySelector('.password-error');

  if (usernameErrorMessage) {
    usernameErrorMessage.remove();
    username.classList.remove('sign-in-error');
  }

  if (passwordErrorMessage) {
    passwordErrorMessage.remove();
    password.classList.remove('sign-in-error');
  }

  if (!Number(submittedID) || Number(submittedID) > 50) {
    const errorText = document.createElement('p');
    errorText.classList.add('sign-in-error-message', 'username-error');
    errorText.innerText = ``;
    errorText.innerText = `Invalid username! Please try again.`;
    username.classList.add('sign-in-error');
    username.insertAdjacentElement('afterend', errorText);
  }

  if (submittedPassword !== 'overlook2021') {
    const errorText = document.createElement('p');
    errorText.classList.add('sign-in-error-message', 'password-error');
    errorText.innerText = ``;
    errorText.innerText = `Incorrect password! Please try again.`;
    password.classList.add('sign-in-error');
    password.insertAdjacentElement('afterend', errorText);
  }
};

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map