"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isMaxDate", {
  enumerable: true,
  get: function get() {
    return _propTypes2.isMaxDate;
  }
});
Object.defineProperty(exports, "isMinDate", {
  enumerable: true,
  get: function get() {
    return _propTypes2.isMinDate;
  }
});
exports.isValueType = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _propTypes2 = require("react-calendar/dist/shared/propTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var allViews = ['century', 'decade', 'year', 'month'];
var allValueTypes = [].concat(_toConsumableArray(allViews.slice(1)), ['day']);

var isValueType = _propTypes["default"].oneOf(allValueTypes);

exports.isValueType = isValueType;