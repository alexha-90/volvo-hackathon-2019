"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Weekdays = _interopRequireDefault(require("../Weekdays"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable comma-dangle */
describe('Weekdays', function () {
  it('renders proper weekdays (ISO 8601)', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Weekdays.default, {
      calendarType: "ISO 8601"
    }));
    var weekdays = component.find('.react-calendar__month-view__weekdays__weekday');
    var firstWeekday = weekdays.first();
    var firstWeekdayAbbr = firstWeekday.find('abbr');
    expect(weekdays).toHaveLength(7);
    expect(firstWeekday.text()).toBe('Mon');
    expect(firstWeekdayAbbr.prop('aria-label')).toBe('Monday');
  });
  it('renders proper weekdays (US)', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Weekdays.default, {
      calendarType: "US"
    }));
    var weekdays = component.find('.react-calendar__month-view__weekdays__weekday');
    var firstWeekday = weekdays.first();
    var firstWeekdayAbbr = firstWeekday.find('abbr');
    expect(weekdays).toHaveLength(7);
    expect(firstWeekday.text()).toBe('Sun');
    expect(firstWeekdayAbbr.prop('aria-label')).toBe('Sunday');
  });
});