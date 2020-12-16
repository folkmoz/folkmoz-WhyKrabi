webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _hooks_useScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useScroll */ "./src/hooks/useScroll.js");


var _jsxFileName = "C:\\Users\\folkm\\OneDrive\\\u0E40\u0E14\u0E2A\u0E01\u0E4C\u0E17\u0E47\u0E2D\u0E1B\\Projects-Web\\WhyKrabi\\frontend\\src\\components\\Header\\Header.js",
    _this = undefined,
    _s = $RefreshSig$();






var Header = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].header.withConfig({
  displayName: "Header",
  componentId: "sc-1ohbfqy-0"
})(["background:transparent;position:fixed;top:0;width:100%;transition:.2s all;z-index:1905;", ""], function (_ref) {
  var active = _ref.active;
  return active && "\n        background: #fff;\n        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);\n    ";
});
_c = Header;
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Header__Nav",
  componentId: "sc-1ohbfqy-1"
})([".brand{color:#fff;text-transform:uppercase;font-family:'Roboto',sans-serif;font-weight:700;font-size:25px;transition:.2s linear;scroll-behavior:smooth;", " em{font-style:normal;color:#f7c552;font-size:32px;}"], function (_ref2) {
  var active = _ref2.active;
  return active && "\n            color: #000;\n        ";
});
_c2 = Nav;
var menu = ['หน้าแรก', 'ทำไมต้องมากระบี่', 'บล็อก', 'แอพลิเคชั่น', 'ผู้จัดทำ'];
var Navbar = function Navbar() {
  _s();

  var _useScroll = Object(_hooks_useScroll__WEBPACK_IMPORTED_MODULE_5__["useScroll"])(),
      offset = _useScroll.offset,
      isScroll = _useScroll.isScroll;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Header, {
    active: isScroll ? true : undefined,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Toolbar"], {
      className: 'h-full',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Nav, {
        className: 'px-5 flex justify-between w-full',
        active: isScroll ? true : undefined,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: 'brand w-1/2',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: '/',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                children: "w"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 33
              }, _this), "hykrabi"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: 'menu w-1/2',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: 'flex sm:flex-col md:flex-row justify-around items-center h-full',
            children: menu.map(function (e) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "cursor-pointer ".concat(isScroll ? 'text-black' : 'text-white', " p-2 hover:text-yellow-400"),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: e
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 138
                }, _this)
              }, e, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 37
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 9
  }, _this);
};

_s(Navbar, "/l4aBHvBaNC0qs76QBK+GRylPv0=", false, function () {
  return [_hooks_useScroll__WEBPACK_IMPORTED_MODULE_5__["useScroll"]];
});

_c3 = Navbar;

var _c, _c2, _c3;

$RefreshReg$(_c, "Header");
$RefreshReg$(_c2, "Nav");
$RefreshReg$(_c3, "Navbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJzdHlsZWQiLCJoZWFkZXIiLCJhY3RpdmUiLCJOYXYiLCJkaXYiLCJtZW51IiwiTmF2YmFyIiwidXNlU2Nyb2xsIiwib2Zmc2V0IiwiaXNTY3JvbGwiLCJ1bmRlZmluZWQiLCJtYXAiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLG9HQVNOO0FBQUEsTUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsU0FBY0EsTUFBTSwyRkFBcEI7QUFBQSxDQVRNLENBQVo7S0FBTUgsTTtBQWVOLElBQU1JLEdBQUcsR0FBR0gseURBQU0sQ0FBQ0ksR0FBVjtBQUFBO0FBQUE7QUFBQSx3TkFXSztBQUFBLE1BQUVGLE1BQUYsU0FBRUEsTUFBRjtBQUFBLFNBQWNBLE1BQU0sMENBQXBCO0FBQUEsQ0FYTCxDQUFUO01BQU1DLEc7QUF5Qk4sSUFBTUUsSUFBSSxHQUFHLENBQ1QsU0FEUyxFQUNDLGtCQURELEVBQ29CLE9BRHBCLEVBQzRCLGFBRDVCLEVBQzBDLFVBRDFDLENBQWI7QUFJTyxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsbUJBRUtDLGtFQUFTLEVBRmQ7QUFBQSxNQUVoQkMsTUFGZ0IsY0FFaEJBLE1BRmdCO0FBQUEsTUFFUkMsUUFGUSxjQUVSQSxRQUZROztBQU14QixzQkFDSSxxRUFBQyxNQUFEO0FBQVEsVUFBTSxFQUFFQSxRQUFRLEdBQUcsSUFBSCxHQUFVQyxTQUFsQztBQUFBLDJCQUNJLHFFQUFDLHlEQUFEO0FBQVMsZUFBUyxFQUFFLFFBQXBCO0FBQUEsNkJBQ0kscUVBQUMsR0FBRDtBQUNJLGlCQUFTLEVBQUUsa0NBRGY7QUFFSSxjQUFNLEVBQUVELFFBQVEsR0FBRyxJQUFILEdBQVVDLFNBRjlCO0FBQUEsZ0NBSUk7QUFBSyxtQkFBUyxFQUFFLGFBQWhCO0FBQUEsaUNBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFFLEdBQVo7QUFBQSxtQ0FDSTtBQUFBLHNDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLGVBWUk7QUFBSyxtQkFBUyxFQUFFLFlBQWhCO0FBQUEsaUNBQ0k7QUFBSSxxQkFBUyxFQUFFLGlFQUFmO0FBQUEsc0JBRVFMLElBQUksQ0FBQ00sR0FBTCxDQUFTLFVBQUFDLENBQUM7QUFBQSxrQ0FDTjtBQUVJLHlCQUFTLDJCQUFvQkgsUUFBUSxHQUFHLFlBQUgsR0FBa0IsWUFBOUMsK0JBRmI7QUFBQSx1Q0FFcUc7QUFBQSw0QkFBT0c7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRnJHLGlCQUNTQSxDQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRE07QUFBQSxhQUFWO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQThCSCxDQXBDTTs7R0FBTU4sTTtVQUVvQkMsMEQ7OztNQUZwQkQsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmY2OWZhNzE4ZWMzOTk2MmNiMDBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmltcG9ydCB7QXBwQmFyLCBHcmlkLCBUb29sYmFyLCBUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHt1c2VTY3JvbGx9IGZyb20gXCIuLi8uLi9ob29rcy91c2VTY3JvbGxcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogLjJzIGFsbDtcclxuICAgIHotaW5kZXg6IDE5MDU7XHJcbiAgICBcclxuICBcclxuICAgICR7KHthY3RpdmV9KSA9PiBhY3RpdmUgJiYgYFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBgfVxyXG5gXHJcblxyXG5jb25zdCBOYXYgPSBzdHlsZWQuZGl2IGBcclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAuYnJhbmQge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4ycyBsaW5lYXI7XHJcbiAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgICAgICAgICAgICR7KHthY3RpdmV9KSA9PiBhY3RpdmUgJiYgYFxyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBgfVxyXG5cclxuICAgICAgZW0ge1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBjb2xvcjogI2Y3YzU1MjsgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBcclxuICAgICAgXHJcbmBcclxuXHJcbmNvbnN0IG1lbnUgPSBbXHJcbiAgICAn4Lir4LiZ4LmJ4Liy4LmB4Lij4LiBJywn4LiX4Liz4LmE4Lih4LiV4LmJ4Lit4LiH4Lih4Liy4LiB4Lij4Liw4Lia4Li14LmIJywn4Lia4Lil4LmH4Lit4LiBJywn4LmB4Lit4Lie4Lil4Li04LmA4LiE4LiK4Lix4LmI4LiZJywn4Lic4Li54LmJ4LiI4Lix4LiU4LiX4LizJ1xyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgb2Zmc2V0LCBpc1Njcm9sbCB9ID0gdXNlU2Nyb2xsKClcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEhlYWRlciBhY3RpdmU9e2lzU2Nyb2xsID8gdHJ1ZSA6IHVuZGVmaW5lZH0+XHJcbiAgICAgICAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT17J2gtZnVsbCd9PlxyXG4gICAgICAgICAgICAgICAgPE5hdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J3B4LTUgZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsJ31cclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2lzU2Nyb2xsID8gdHJ1ZSA6IHVuZGVmaW5lZCB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydicmFuZCB3LTEvMid9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy8nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbT53PC9lbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoeWtyYWJpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J21lbnUgdy0xLzInfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17J2ZsZXggc206ZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1hcm91bmQgaXRlbXMtY2VudGVyIGgtZnVsbCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnUubWFwKGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyICR7aXNTY3JvbGwgPyAndGV4dC1ibGFjaycgOiAndGV4dC13aGl0ZSd9IHAtMiBob3Zlcjp0ZXh0LXllbGxvdy00MDBgfT48c3Bhbj57ZX08L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0hlYWRlcj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9