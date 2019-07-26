"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _WeekNumbers = _interopRequireDefault(require("../WeekNumbers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable comma-dangle */
describe('WeekNumbers', function () {
  it('renders proper weekNumbers for a year that starts in week 1 (ISO 8601)', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_WeekNumbers.default, {
      activeStartDate: new Date(2018, 0, 1),
      calendarType: "ISO 8601"
    }));
    var weekNumbers = component.find('WeekNumber');
    expect(weekNumbers).toHaveLength(5);
    expect(weekNumbers.first().text()).toBe('1');
  });
  it('renders proper weekNumbers for a year that starts on week 52 (ISO 8601)', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_WeekNumbers.default, {
      activeStartDate: new Date(2017, 0, 1),
      calendarType: "ISO 8601"
    }));
    var weekNumbers = component.find('WeekNumber');
    expect(weekNumbers).toHaveLength(6);
    expect(weekNumbers.first().text()).toBe('52');
  });
  it('renders proper weekNumbers for a year that starts on week 53 (ISO 8601)', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_WeekNumbers.default, {
      activeStartDate: new Date(2016, 0, 1),
      calendarType: "ISO 8601"
    }));
    var weekNumbers = component.find('WeekNumber');
    expect(weekNumbers).toHaveLength(5);
    expect(weekNumbers.first().text()).toBe('53');
  });
  it('renders proper weekNumbers for a year that starts in week 1 (US)', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_WeekNumbers.default, {
      activeStartDate: new Date(2017, 0, 1),
      calendarType: "US"
    }));
    var weekNumbers = component.find('WeekNumber');
    expect(weekNumbers).toHaveLength(5);
    expect(weekNumbers.first().text()).toBe('1');
  });
  it('renders proper weekNumbers given showFixedNumberOfWeeks flag', function () {
    // Same config as in first test which gives 5 weeks, except for the flag
    var component = (0, _enzyme.mount)(_react.default.createElement(_WeekNumbers.default, {
      activeStartDate: new Date(2018, 0, 1),
      calendarType: "ISO 8601",
      showFixedNumberOfWeeks: true
    }));
    var weekNumbers = component.find('WeekNumber');
    expect(weekNumbers).toHaveLength(6);
    expect(weekNumbers.first().text()).toBe('1');
  });
  it('renders static divs as children when not given onClickWeekNumber', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_WeekNumbers.default, {
      activeStartDate: new Date(2017, 0, 1),
      calendarType: "ISO 8601"
    }));
    var children = component.find('div.react-calendar__tile');
    expect(children).toHaveLength(6);
  });
  it('renders buttons as children when given onClickWeekNumber', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_WeekNumbers.default, {
      activeStartDate: new Date(2017, 0, 1),
      calendarType: "ISO 8601",
      onClickWeekNumber: jest.fn()
    }));
    var children = component.find('button.react-calendar__tile');
    expect(children).toHaveLength(6);
  });
  it('calls onClickWeekNumber function with proper arguments when clicked a week number (ISO 8601)', function () {
    var onClickWeekNumber = jest.fn();
    var component = (0, _enzyme.mount)(_react.default.createElement(_WeekNumbers.default, {
      activeStartDate: new Date(2017, 0, 1),
      calendarType: "ISO 8601",
      onClickWeekNumber: onClickWeekNumber
    }));
    var children = component.find('button.react-calendar__tile');
    children.first().simulate('click');
    expect(onClickWeekNumber).toHaveBeenCalledWith(52, new Date(2016, 11, 26));
  });
  it('calls onClickWeekNumber function with proper arguments when clicked a week number (US)', function () {
    var onClickWeekNumber = jest.fn();
    var component = (0, _enzyme.mount)(_react.default.createElement(_WeekNumbers.default, {
      activeStartDate: new Date(2017, 0, 1),
      calendarType: "US",
      onClickWeekNumber: onClickWeekNumber
    }));
    var children = component.find('button.react-calendar__tile');
    children.first().simulate('click');
    expect(onClickWeekNumber).toHaveBeenCalledWith(1, new Date(2017, 0, 1));
  });
});