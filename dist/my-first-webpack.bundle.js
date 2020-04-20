/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/printFullName.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/displayStudents.js":
/*!********************************!*\
  !*** ./src/displayStudents.js ***!
  \********************************/
/*! exports provided: student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"student\", function() { return student; });\n/*\r\nWrite a function called displayStudentInfo which accepts an object and returns the string \"Your full name is\" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object inside of the function.\r\n\r\nExamples:\r\n    displayStudentInfo({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik')\r\n*/\r\n\r\nlet student = {\r\n  first: \"Elie\",\r\n  last: \"Shopik\",\r\n};\r\n\r\nfunction displayStudentInfo(student) {\r\n  let { first, last } = student;\r\n  return `Your full name is ${first} ${last}.`;\r\n}\r\n\r\nlet div = document.querySelector(\".div\");\r\ndiv.textContent = displayStudentInfo(student);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/displayStudents.js?");

/***/ }),

/***/ "./src/printFullName.js":
/*!******************************!*\
  !*** ./src/printFullName.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayStudents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayStudents.js */ \"./src/displayStudents.js\");\n/*\r\nWrite a function called printFullName which accepts an object and returns the string \"Your full name is\" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object DIRECTLY from the parameters. The output of the printFullName function should be the exact same as the displayStudentInfo function.\r\n\r\nExamples:\r\n    printFullName({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik'\r\n*/\r\n\r\n\r\n\r\nfunction printFullName(obj) {\r\n  let { first, last } = obj;\r\n  console.log(first);\r\n  return \"Your full name is\" + first + last;\r\n}\r\n\r\nconsole.log(printFullName(_displayStudents_js__WEBPACK_IMPORTED_MODULE_0__[\"student\"]));\r\n\n\n//# sourceURL=webpack:///./src/printFullName.js?");

/***/ })

/******/ });