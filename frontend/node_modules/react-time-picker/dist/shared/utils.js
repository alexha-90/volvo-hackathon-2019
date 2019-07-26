"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callIfDefined = exports.getAmPmLabels = exports.max = exports.min = void 0;

var _dateFormatter = require("./dateFormatter");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var isValidNumber = function isValidNumber(a) {
  return typeof a === 'number' && !isNaN(a);
};

var min = function min() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Math.min.apply(Math, _toConsumableArray(args.filter(isValidNumber)));
};

exports.min = min;

var max = function max() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return Math.max.apply(Math, _toConsumableArray(args.filter(isValidNumber)));
};

exports.max = max;
var nines = ['9', '٩'];
var ninesRegExp = new RegExp("[".concat(nines.join(''), "]"));
var amPmFormatter = (0, _dateFormatter.getFormatter)({
  hour: 'numeric'
});

var getAmPmLabels = function getAmPmLabels(locale) {
  var amString = amPmFormatter(locale, new Date(2017, 0, 1, 9));
  var pmString = amPmFormatter(locale, new Date(2017, 0, 1, 21));

  var _amString$split = amString.split(ninesRegExp),
      _amString$split2 = _slicedToArray(_amString$split, 2),
      am1 = _amString$split2[0],
      am2 = _amString$split2[1];

  var _pmString$split = pmString.split(ninesRegExp),
      _pmString$split2 = _slicedToArray(_pmString$split, 2),
      pm1 = _pmString$split2[0],
      pm2 = _pmString$split2[1];

  if (pm2 !== undefined) {
    // If pm2 is undefined, nine was not found in pmString - this locale is not using 12-hour time
    if (am1 !== pm1) {
      return [am1, pm1].map(function (el) {
        return el.trim();
      });
    }

    if (am2 !== pm2) {
      return [am2, pm2].map(function (el) {
        return el.trim();
      });
    }
  } // Fallback


  return ['AM', 'PM'];
};
/**
 * Calls a function, if it's defined, with specified arguments
 * @param {Function} fn
 * @param {Object} args
 */


exports.getAmPmLabels = getAmPmLabels;

var callIfDefined = function callIfDefined(fn) {
  if (fn && typeof fn === 'function') {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    fn.apply(void 0, args);
  }
};

exports.callIfDefined = callIfDefined;