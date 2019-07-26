"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getHours", {
  enumerable: true,
  get: function get() {
    return _dates.getHours;
  }
});
Object.defineProperty(exports, "getMinutes", {
  enumerable: true,
  get: function get() {
    return _dates.getMinutes;
  }
});
Object.defineProperty(exports, "getSeconds", {
  enumerable: true,
  get: function get() {
    return _dates.getSeconds;
  }
});
exports.convert24to12 = exports.convert12to24 = exports.getHoursMinutesSeconds = exports.getHoursMinutes = void 0;

var _dates = require("react-clock/dist/shared/dates");

var getHoursMinutes = function getHoursMinutes(date) {
  if (!date) {
    return date;
  }

  var hours = "0".concat((0, _dates.getHours)(date)).slice(-2);
  var minutes = "0".concat((0, _dates.getMinutes)(date)).slice(-2);
  return "".concat(hours, ":").concat(minutes);
};

exports.getHoursMinutes = getHoursMinutes;

var getHoursMinutesSeconds = function getHoursMinutesSeconds(date) {
  if (!date) {
    return date;
  }

  var hours = "0".concat((0, _dates.getHours)(date)).slice(-2);
  var minutes = "0".concat((0, _dates.getMinutes)(date)).slice(-2);
  var seconds = "0".concat((0, _dates.getSeconds)(date)).slice(-2);
  return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
};

exports.getHoursMinutesSeconds = getHoursMinutesSeconds;

var convert12to24 = function convert12to24(hour12, amPm) {
  var hour24 = parseInt(hour12, 10);

  if (amPm === 'am' && hour24 === 12) {
    hour24 = 0;
  } else if (amPm === 'pm' && hour24 < 12) {
    hour24 += 12;
  }

  return hour24;
};

exports.convert12to24 = convert12to24;

var convert24to12 = function convert24to12(hour24) {
  var hour12 = hour24 % 12 || 12;
  return [hour12, hour24 < 12 ? 'am' : 'pm'];
};

exports.convert24to12 = convert24to12;