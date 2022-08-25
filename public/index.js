(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["../../dist/index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("../../dist/index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.index);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_index) {
  "use strict";

  _index = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  console.log(_index.default);
});

//# sourceMappingURL=index.js.map