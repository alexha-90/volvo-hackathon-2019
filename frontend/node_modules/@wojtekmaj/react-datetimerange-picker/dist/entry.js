"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("react-calendar/dist/Calendar.css");

require("react-clock/dist/Clock.css");

var _DateTimeRangePicker = _interopRequireDefault(require("./DateTimeRangePicker"));

require("./DateTimeRangePicker.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// File is created during build phase and placed in dist directory
// eslint-disable-next-line import/no-unresolved
var _default = _DateTimeRangePicker["default"];
exports["default"] = _default;