"use strict";

var _dates = require("../dates");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    hour24 | hour12 | amPm\n    ", "   | ", "  | ", "\n    ", "   | ", "   | ", "\n    ", "   | ", "   | ", "\n    ", "   | ", "   | ", "\n    ", "   | ", "   | ", "\n    ", "   | ", "   | ", "\n    ", "   | ", "   | ", "\n    ", "   | ", "   | ", "\n    ", "   | ", "   | ", "\n    ", "   | ", "   | ", "\n    ", "  | ", "  | ", "\n    ", "  | ", "  | ", "\n    ", "  | ", "  | ", "\n    ", "  | ", "   | ", "\n    ", "  | ", "   | ", "\n    ", "  | ", "   | ", "\n    ", "  | ", "   | ", "\n    ", "  | ", "   | ", "\n    ", "  | ", "   | ", "\n    ", "  | ", "   | ", "\n    ", "  | ", "   | ", "\n    ", "  | ", "   | ", "\n    ", "  | ", "  | ", "\n    ", "  | ", "  | ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    hour12 | amPm    | hour24\n    ", "  | ", " | ", "\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    ", "  | ", " | ", "\n    ", "  | ", " | ", "\n    ", "  | ", " | ", "\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    ", "  | ", " | ", "\n    ", "  | ", " | ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

describe('getHoursMinutes', function () {
  it('returns proper hour and minute for a given date', function () {
    var date = new Date(2017, 0, 1, 16, 4);
    var hoursMinutes = (0, _dates.getHoursMinutes)(date);
    expect(hoursMinutes).toBe('16:04');
  });
  it('returns proper hour and minute for a given string of hour and minute', function () {
    var date = '16:04';
    var hoursMinutes = (0, _dates.getHoursMinutes)(date);
    expect(hoursMinutes).toBe('16:04');
  });
  it('returns proper hour and minute for a given string of hour, minute and second', function () {
    var date = '16:04:08';
    var hoursMinutes = (0, _dates.getHoursMinutes)(date);
    expect(hoursMinutes).toBe('16:04');
  });
  it('throws an error when given nonsense data', function () {
    var text = 'wololo';
    var flag = true;
    expect(function () {
      return (0, _dates.getHoursMinutes)(text);
    }).toThrow();
    expect(function () {
      return (0, _dates.getHoursMinutes)(flag);
    }).toThrow();
  });
});
describe('getHoursMinutesSeconds', function () {
  it('returns proper hour, minute and second for a given date', function () {
    var date = new Date(2017, 0, 1, 16, 4, 41);
    var hoursMinutesSeconds = (0, _dates.getHoursMinutesSeconds)(date);
    expect(hoursMinutesSeconds).toBe('16:04:41');
  });
  it('returns proper hour, minute and second for a given string of hour and minute', function () {
    var date = '16:04';
    var hoursMinutesSeconds = (0, _dates.getHoursMinutesSeconds)(date);
    expect(hoursMinutesSeconds).toBe('16:04:00');
  });
  it('returns proper hour, minute and second for a given string of hour, minute and second', function () {
    var date = '16:04:08';
    var hoursMinutesSeconds = (0, _dates.getHoursMinutesSeconds)(date);
    expect(hoursMinutesSeconds).toBe('16:04:08');
  });
  it('throws an error when given nonsense data', function () {
    var text = 'wololo';
    var flag = true;
    expect(function () {
      return (0, _dates.getHoursMinutesSeconds)(text);
    }).toThrow();
    expect(function () {
      return (0, _dates.getHoursMinutesSeconds)(flag);
    }).toThrow();
  });
});
describe('convert12to24', function () {
  it.each(_templateObject(), 12, 'am', 0, 1, 'am', 1, 2, 'am', 2, 3, 'am', 3, 4, 'am', 4, 5, 'am', 5, 6, 'am', 6, 7, 'am', 7, 8, 'am', 8, 9, 'am', 9, 10, 'am', 10, 11, 'am', 11, 12, 'pm', 12, 1, 'pm', 13, 2, 'pm', 14, 3, 'pm', 15, 4, 'pm', 16, 5, 'pm', 17, 6, 'pm', 18, 7, 'pm', 19, 8, 'pm', 20, 9, 'pm', 21, 10, 'pm', 22, 11, 'pm', 23)('returns $hour24 for $hour12 $amPm', function (_ref) {
    var hour12 = _ref.hour12,
        amPm = _ref.amPm,
        hour24 = _ref.hour24;
    expect((0, _dates.convert12to24)(hour12, amPm)).toBe(hour24);
  });
});
describe('convert24to12', function () {
  it.each(_templateObject2(), 0, 12, 'am', 1, 1, 'am', 2, 2, 'am', 3, 3, 'am', 4, 4, 'am', 5, 5, 'am', 6, 6, 'am', 7, 7, 'am', 8, 8, 'am', 9, 9, 'am', 10, 10, 'am', 11, 11, 'am', 12, 12, 'pm', 13, 1, 'pm', 14, 2, 'pm', 15, 3, 'pm', 16, 4, 'pm', 17, 5, 'pm', 18, 6, 'pm', 19, 7, 'pm', 20, 8, 'pm', 21, 9, 'pm', 22, 10, 'pm', 23, 11, 'pm')('returns $hour12 $amPm for $hour24', function (_ref2) {
    var hour12 = _ref2.hour12,
        amPm = _ref2.amPm,
        hour24 = _ref2.hour24;
    expect((0, _dates.convert24to12)(hour24)).toEqual([hour12, amPm]);
  });
});