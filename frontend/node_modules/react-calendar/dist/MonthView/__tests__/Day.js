"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Day = _interopRequireDefault(require("../Day"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable comma-dangle, jsx-a11y/mouse-events-have-key-events */
var tileProps = {
  activeStartDate: new Date(2018, 0, 1),
  classes: ['react-calendar__tile'],
  currentMonthIndex: 0,
  date: new Date(2018, 0, 1)
};
describe('Day', function () {
  it('applies given classNames properly', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Day.default, _extends({}, tileProps, {
      classes: ['react-calendar__tile', 'react-calendar__tile--flag'],
      tileClassName: function tileClassName() {
        return 'testFunctionClassName';
      }
    })));
    var wrapperClassName = component.find('.react-calendar__tile').prop('className');
    expect(wrapperClassName.includes('react-calendar__tile')).toBe(true);
    expect(wrapperClassName.includes('react-calendar__tile--flag')).toBe(true);
    expect(wrapperClassName.includes('react-calendar__month-view__days__day')).toBe(true);
    expect(wrapperClassName.includes('testFunctionClassName')).toBe(true);
  });
  it('applies additional classNames for weekends', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Day.default, _extends({}, tileProps, {
      date: new Date(2018, 0, 6) // Saturday

    })));
    var wrapperClassName = component.find('.react-calendar__tile').prop('className');
    expect(wrapperClassName.includes('react-calendar__month-view__days__day--weekend')).toBe(true);
  });
  it('applies additional classNames for neighboring months', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Day.default, _extends({}, tileProps, {
      date: new Date(2018, 1, 2)
    })));
    var wrapperClassName = component.find('.react-calendar__tile').prop('className');
    expect(wrapperClassName.includes('react-calendar__month-view__days__day--neighboringMonth')).toBe(true);
  });
  it('renders component with proper abbreviation', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Day.default, _extends({}, tileProps, {
      date: new Date(2018, 0, 1)
    })));
    var abbr = component.find('abbr');
    expect(abbr).toHaveLength(1);
    expect(abbr.prop('aria-label')).toBe('January 1, 2018');
    expect(component.text()).toBe('1');
  });
  it('is disabled when date is before beginning of minDate\'s day', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Day.default, _extends({}, tileProps, {
      date: new Date(2018, 0, 1),
      minDate: new Date(2018, 0, 2)
    })));
    expect(component.find('.react-calendar__tile').prop('disabled')).toBeTruthy();
  });
  it('is not disabled when date is after beginning of minDate\'s day', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Day.default, _extends({}, tileProps, {
      date: new Date(2018, 0, 1),
      minDate: new Date(2018, 0, 1)
    })));
    expect(component.find('.react-calendar__tile').prop('disabled')).toBeFalsy();
  });
  it('is disabled when date is after end of maxDate\'s day', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Day.default, _extends({}, tileProps, {
      date: new Date(2018, 0, 2),
      maxDate: new Date(2018, 0, 1)
    })));
    expect(component.find('.react-calendar__tile').prop('disabled')).toBeTruthy();
  });
  it('is not disabled when date is before end of maxDate\'s day', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Day.default, _extends({}, tileProps, {
      date: new Date(2018, 0, 1),
      maxDate: new Date(2018, 0, 1)
    })));
    expect(component.find('.react-calendar__tile').prop('disabled')).toBeFalsy();
  });
  it('calls onClick callback when clicked and sends proper date as an argument', function () {
    var date = new Date(2018, 0, 1);
    var onClick = jest.fn();
    var component = (0, _enzyme.mount)(_react.default.createElement(_Day.default, _extends({}, tileProps, {
      date: date,
      onClick: onClick
    })));
    component.find('.react-calendar__tile').simulate('click');
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledWith(date);
  });
  it('calls onMouseOver callback when hovered and sends proper date as an argument', function () {
    var date = new Date(2018, 0, 1);
    var onMouseOver = jest.fn();
    var component = (0, _enzyme.mount)(_react.default.createElement(_Day.default, _extends({}, tileProps, {
      date: date,
      onMouseOver: onMouseOver
    })));
    component.find('.react-calendar__tile').simulate('mouseOver');
    expect(onMouseOver).toHaveBeenCalled();
    expect(onMouseOver).toHaveBeenCalledWith(date);
  });
  it('calls onMouseOver callback when focused and sends proper date as an argument', function () {
    var date = new Date(2018, 0, 1);
    var onMouseOver = jest.fn();
    var component = (0, _enzyme.mount)(_react.default.createElement(_Day.default, _extends({}, tileProps, {
      date: date,
      onMouseOver: onMouseOver
    })));
    component.find('.react-calendar__tile').simulate('focus');
    expect(onMouseOver).toHaveBeenCalled();
    expect(onMouseOver).toHaveBeenCalledWith(date);
  });
  it('renders tileContent properly', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_Day.default, _extends({}, tileProps, {
      tileContent: _react.default.createElement("div", {
        className: "testContent"
      })
    })));
    var testContent = component.find('.testContent');
    expect(testContent).toHaveLength(1);
  });
  it('renders tileContent function result properly and sends proper arguments to it', function () {
    var date = new Date(2018, 0, 1);
    var tileContent = jest.fn();
    tileContent.mockReturnValue(_react.default.createElement("div", {
      className: "testContent"
    }));
    var component = (0, _enzyme.mount)(_react.default.createElement(_Day.default, _extends({}, tileProps, {
      date: date,
      tileContent: tileContent
    })));
    var testContent = component.find('.testContent');
    expect(tileContent).toHaveBeenCalled();
    expect(tileContent).toHaveBeenCalledWith({
      date: date,
      view: 'month'
    });
    expect(testContent).toHaveLength(1);
  });
});