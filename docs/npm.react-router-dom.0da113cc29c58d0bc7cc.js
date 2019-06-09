(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["npm.react-router-dom"],{

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************/
/*! exports provided: BrowserRouter, HashRouter, Link, NavLink, MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter, __RouterContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BrowserRouter\", function() { return BrowserRouter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HashRouter\", function() { return HashRouter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Link\", function() { return Link; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavLink\", function() { return NavLink; });\n/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ \"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MemoryRouter\", function() { return react_router__WEBPACK_IMPORTED_MODULE_2__[\"MemoryRouter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Prompt\", function() { return react_router__WEBPACK_IMPORTED_MODULE_2__[\"Prompt\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Redirect\", function() { return react_router__WEBPACK_IMPORTED_MODULE_2__[\"Redirect\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Route\", function() { return react_router__WEBPACK_IMPORTED_MODULE_2__[\"Route\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Router\", function() { return react_router__WEBPACK_IMPORTED_MODULE_2__[\"Router\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"StaticRouter\", function() { return react_router__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Switch\", function() { return react_router__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"generatePath\", function() { return react_router__WEBPACK_IMPORTED_MODULE_2__[\"generatePath\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"matchPath\", function() { return react_router__WEBPACK_IMPORTED_MODULE_2__[\"matchPath\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"withRouter\", function() { return react_router__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__RouterContext\", function() { return react_router__WEBPACK_IMPORTED_MODULE_2__[\"__RouterContext\"]; });\n\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ \"./node_modules/history/esm/history.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tiny-warning */ \"./node_modules/tiny-warning/dist/tiny-warning.esm.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\");\n/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tiny-invariant */ \"./node_modules/tiny-invariant/dist/tiny-invariant.esm.js\");\n\n\n\n\n\n\n\n\n\n\n\n/**\n * The public API for a <Router> that uses HTML5 history.\n */\n\nvar BrowserRouter =\n/*#__PURE__*/\nfunction (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(BrowserRouter, _React$Component);\n\n  function BrowserRouter() {\n    var _this;\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;\n    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__[\"createBrowserHistory\"])(_this.props);\n    return _this;\n  }\n\n  var _proto = BrowserRouter.prototype;\n\n  _proto.render = function render() {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[\"Router\"], {\n      history: this.history,\n      children: this.props.children\n    });\n  };\n\n  return BrowserRouter;\n}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);\n\nif (true) {\n  BrowserRouter.propTypes = {\n    basename: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,\n    children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,\n    forceRefresh: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,\n    getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,\n    keyLength: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number\n  };\n\n  BrowserRouter.prototype.componentDidMount = function () {\n     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(!this.props.history, \"<BrowserRouter> ignores the history prop. To use a custom history, \" + \"use `import { Router }` instead of `import { BrowserRouter as Router }`.\") : undefined;\n  };\n}\n\n/**\n * The public API for a <Router> that uses window.location.hash.\n */\n\nvar HashRouter =\n/*#__PURE__*/\nfunction (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(HashRouter, _React$Component);\n\n  function HashRouter() {\n    var _this;\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;\n    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__[\"createHashHistory\"])(_this.props);\n    return _this;\n  }\n\n  var _proto = HashRouter.prototype;\n\n  _proto.render = function render() {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[\"Router\"], {\n      history: this.history,\n      children: this.props.children\n    });\n  };\n\n  return HashRouter;\n}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);\n\nif (true) {\n  HashRouter.propTypes = {\n    basename: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,\n    children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,\n    getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,\n    hashType: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf([\"hashbang\", \"noslash\", \"slash\"])\n  };\n\n  HashRouter.prototype.componentDidMount = function () {\n     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(!this.props.history, \"<HashRouter> ignores the history prop. To use a custom history, \" + \"use `import { Router }` instead of `import { HashRouter as Router }`.\") : undefined;\n  };\n}\n\nfunction isModifiedEvent(event) {\n  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);\n}\n/**\n * The public API for rendering a history-aware <a>.\n */\n\n\nvar Link =\n/*#__PURE__*/\nfunction (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Link, _React$Component);\n\n  function Link() {\n    return _React$Component.apply(this, arguments) || this;\n  }\n\n  var _proto = Link.prototype;\n\n  _proto.handleClick = function handleClick(event, history) {\n    try {\n      if (this.props.onClick) this.props.onClick(event);\n    } catch (ex) {\n      event.preventDefault();\n      throw ex;\n    }\n\n    if (!event.defaultPrevented && // onClick prevented default\n    event.button === 0 && ( // ignore everything but left clicks\n    !this.props.target || this.props.target === \"_self\") && // let browser handle \"target=_blank\" etc.\n    !isModifiedEvent(event) // ignore clicks with modifier keys\n    ) {\n        event.preventDefault();\n        var method = this.props.replace ? history.replace : history.push;\n        method(this.props.to);\n      }\n  };\n\n  _proto.render = function render() {\n    var _this = this;\n\n    var _this$props = this.props,\n        innerRef = _this$props.innerRef,\n        replace = _this$props.replace,\n        to = _this$props.to,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this$props, [\"innerRef\", \"replace\", \"to\"]); // eslint-disable-line no-unused-vars\n\n\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[\"__RouterContext\"].Consumer, null, function (context) {\n      !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(false, \"You should not use <Link> outside a <Router>\") : undefined : void 0;\n      var location = typeof to === \"string\" ? Object(history__WEBPACK_IMPORTED_MODULE_3__[\"createLocation\"])(to, null, null, context.location) : to;\n      var href = location ? context.history.createHref(location) : \"\";\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, rest, {\n        onClick: function onClick(event) {\n          return _this.handleClick(event, context.history);\n        },\n        href: href,\n        ref: innerRef\n      }));\n    });\n  };\n\n  return Link;\n}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);\n\nif (true) {\n  var toType = prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]);\n  var innerRefType = prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({\n    current: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any\n  })]);\n  Link.propTypes = {\n    innerRef: innerRefType,\n    onClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,\n    replace: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,\n    target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,\n    to: toType.isRequired\n  };\n}\n\nfunction joinClassnames() {\n  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {\n    classnames[_key] = arguments[_key];\n  }\n\n  return classnames.filter(function (i) {\n    return i;\n  }).join(\" \");\n}\n/**\n * A <Link> wrapper that knows if it's \"active\" or not.\n */\n\n\nfunction NavLink(_ref) {\n  var _ref$ariaCurrent = _ref[\"aria-current\"],\n      ariaCurrent = _ref$ariaCurrent === void 0 ? \"page\" : _ref$ariaCurrent,\n      _ref$activeClassName = _ref.activeClassName,\n      activeClassName = _ref$activeClassName === void 0 ? \"active\" : _ref$activeClassName,\n      activeStyle = _ref.activeStyle,\n      classNameProp = _ref.className,\n      exact = _ref.exact,\n      isActiveProp = _ref.isActive,\n      locationProp = _ref.location,\n      strict = _ref.strict,\n      styleProp = _ref.style,\n      to = _ref.to,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_ref, [\"aria-current\", \"activeClassName\", \"activeStyle\", \"className\", \"exact\", \"isActive\", \"location\", \"strict\", \"style\", \"to\"]);\n\n  var path = typeof to === \"object\" ? to.pathname : to; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202\n\n  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\\]|/\\\\])/g, \"\\\\$1\");\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[\"__RouterContext\"].Consumer, null, function (context) {\n    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(false, \"You should not use <NavLink> outside a <Router>\") : undefined : void 0;\n    var pathToMatch = locationProp ? locationProp.pathname : context.location.pathname;\n    var match = escapedPath ? Object(react_router__WEBPACK_IMPORTED_MODULE_2__[\"matchPath\"])(pathToMatch, {\n      path: escapedPath,\n      exact: exact,\n      strict: strict\n    }) : null;\n    var isActive = !!(isActiveProp ? isActiveProp(match, context.location) : match);\n    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;\n    var style = isActive ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, styleProp, activeStyle) : styleProp;\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n      \"aria-current\": isActive && ariaCurrent || null,\n      className: className,\n      style: style,\n      to: to\n    }, rest));\n  });\n}\n\nif (true) {\n  var ariaCurrentType = prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf([\"page\", \"step\", \"location\", \"date\", \"time\", \"true\"]);\n  NavLink.propTypes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, Link.propTypes, {\n    \"aria-current\": ariaCurrentType,\n    activeClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,\n    activeStyle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,\n    className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,\n    exact: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,\n    isActive: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,\n    location: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,\n    strict: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,\n    style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object\n  });\n}\n\n\n\n\n//# sourceURL=webpack:///./node_modules/react-router-dom/esm/react-router-dom.js?");

/***/ })

}]);