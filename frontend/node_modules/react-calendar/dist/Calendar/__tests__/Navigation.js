"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Navigation = _interopRequireDefault(require("../Navigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var allViews = ['century', 'decade', 'year', 'month'];
/* eslint-disable comma-dangle */

describe('Navigation', function () {
  it('renders prev2, prev, drill up, next and next2 buttons', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_Navigation.default, {
      activeStartDate: new Date(2017, 0, 1),
      drillUp: jest.fn(),
      setActiveStartDate: jest.fn(),
      view: "month",
      views: allViews
    }));
    var children = component.children();

    var _children = _slicedToArray(children, 5),
        prev2 = _children[0],
        prev = _children[1],
        drillUp = _children[2],
        next = _children[3],
        next2 = _children[4];

    expect(children).toHaveLength(5);
    expect(prev2.type).toBe('button');
    expect(prev.type).toBe('button');
    expect(drillUp.type).toBe('button');
    expect(next.type).toBe('button');
    expect(next2.type).toBe('button');
  });
  it('renders prev, drill up, next and buttons only for century view', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_Navigation.default, {
      activeStartDate: new Date(2017, 0, 1),
      drillUp: jest.fn(),
      setActiveStartDate: jest.fn(),
      view: "century",
      views: allViews
    }));
    var children = component.children();

    var _children2 = _slicedToArray(children, 3),
        prev = _children2[0],
        drillUp = _children2[1],
        next = _children2[2];

    expect(children).toHaveLength(3);
    expect(prev.type).toBe('button');
    expect(drillUp.type).toBe('button');
    expect(next.type).toBe('button');
  });
  it('displays proper title for month view', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_Navigation.default, {
      activeStartDate: new Date(2017, 0, 1),
      drillUp: jest.fn(),
      setActiveStartDate: jest.fn(),
      view: "month",
      views: allViews
    }));

    var _component$children = component.children(),
        _component$children2 = _slicedToArray(_component$children, 3),
        drillUp = _component$children2[2];

    expect(drillUp.props.children.toString()).toBe('January 2017');
  });
  it('displays proper title for year view', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_Navigation.default, {
      activeStartDate: new Date(2017, 0, 1),
      drillUp: jest.fn(),
      setActiveStartDate: jest.fn(),
      view: "year",
      views: allViews
    }));

    var _component$children3 = component.children(),
        _component$children4 = _slicedToArray(_component$children3, 3),
        drillUp = _component$children4[2];

    expect(drillUp.props.children.toString()).toBe('2017');
  });
  it('displays proper title for decade view', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_Navigation.default, {
      activeStartDate: new Date(2017, 0, 1),
      drillUp: jest.fn(),
      setActiveStartDate: jest.fn(),
      view: "decade",
      views: allViews
    }));

    var _component$children5 = component.children(),
        _component$children6 = _slicedToArray(_component$children5, 3),
        drillUp = _component$children6[2];

    expect(drillUp.props.children.toString()).toBe('2011 – 2020');
  });
  it('displays proper title for century view', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_Navigation.default, {
      activeStartDate: new Date(2017, 0, 1),
      drillUp: jest.fn(),
      setActiveStartDate: jest.fn(),
      view: "century",
      views: allViews
    }));

    var _component$children7 = component.children(),
        _component$children8 = _slicedToArray(_component$children7, 2),
        drillUp = _component$children8[1];

    expect(drillUp.props.children.toString()).toBe('2001 – 2100');
  });
  it('displays proper user-defined labels on prev2, prev, next and next2 buttons', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_Navigation.default, {
      activeStartDate: new Date(2017, 0, 1),
      drillUp: jest.fn(),
      next2Label: "next2Label",
      nextLabel: "nextLabel",
      prev2Label: "prev2Label",
      prevLabel: "prevLabel",
      setActiveStartDate: jest.fn(),
      view: "month",
      views: allViews
    }));

    var _component$children9 = component.children(),
        _component$children10 = _slicedToArray(_component$children9, 5),
        prev2 = _component$children10[0],
        prev = _component$children10[1],
        next = _component$children10[3],
        next2 = _component$children10[4];

    expect(prev2.props.children).toBe('prev2Label');
    expect(prev.props.children).toBe('prevLabel');
    expect(next.props.children).toBe('nextLabel');
    expect(next2.props.children).toBe('next2Label');
  });
  it('displays proper user-defined ARIA labels on prev2, prev, navigation, next and next2 buttons', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_Navigation.default, {
      activeStartDate: new Date(2017, 0, 1),
      drillUp: jest.fn(),
      navigationAriaLabel: "navigationAriaLabel",
      next2AriaLabel: "next2AriaLabel",
      nextAriaLabel: "nextAriaLabel",
      prev2AriaLabel: "prev2AriaLabel",
      prevAriaLabel: "prevAriaLabel",
      setActiveStartDate: jest.fn(),
      view: "month",
      views: allViews
    }));

    var _component$children11 = component.children(),
        _component$children12 = _slicedToArray(_component$children11, 5),
        prev2 = _component$children12[0],
        prev = _component$children12[1],
        navigation = _component$children12[2],
        next = _component$children12[3],
        next2 = _component$children12[4];

    expect(prev2.props['aria-label']).toBe('prev2AriaLabel');
    expect(prev.props['aria-label']).toBe('prevAriaLabel');
    expect(navigation.props['aria-label']).toBe('navigationAriaLabel');
    expect(next.props['aria-label']).toBe('nextAriaLabel');
    expect(next2.props['aria-label']).toBe('next2AriaLabel');
  });
  it('calls drillUp function on drill up button click', function () {
    var drillUpFn = jest.fn();
    var component = (0, _enzyme.shallow)(_react.default.createElement(_Navigation.default, {
      activeStartDate: new Date(2017, 0, 1),
      drillUp: drillUpFn,
      setActiveStartDate: jest.fn(),
      view: "month",
      views: allViews
    }));
    var button = component.find('button.react-calendar__navigation__label');
    button.simulate('click');
    expect(drillUpFn).toHaveBeenCalledTimes(1);
  });
  it('calls setActiveStartDate on prev2, prev, next and next2 buttons click', function () {
    var setActiveStartDateFn = jest.fn();
    var component = (0, _enzyme.shallow)(_react.default.createElement(_Navigation.default, {
      activeStartDate: new Date(2017, 0, 1),
      drillUp: jest.fn(),
      setActiveStartDate: setActiveStartDateFn,
      view: "month",
      views: allViews
    }));
    var arrows = component.find('button.react-calendar__navigation__arrow');
    var prev2 = arrows.at(0);
    var prev = arrows.at(1);
    var next = arrows.at(2);
    var next2 = arrows.at(3);
    prev2.simulate('click');
    prev.simulate('click');
    next.simulate('click');
    next2.simulate('click');
    expect(setActiveStartDateFn).toHaveBeenCalledTimes(4);
  });
  var monthSetActiveStartDateFn = jest.fn();
  var monthViewComponent = (0, _enzyme.shallow)(_react.default.createElement(_Navigation.default, {
    activeStartDate: new Date(2017, 0, 1),
    drillUp: jest.fn(),
    setActiveStartDate: monthSetActiveStartDateFn,
    view: "month",
    views: allViews
  }));
  var monthViewArrows = monthViewComponent.find('button.react-calendar__navigation__arrow');
  it('jumps 12 months back on prev2 button click for month view', function () {
    var prev2 = monthViewArrows.at(0);
    prev2.simulate('click');
    expect(monthSetActiveStartDateFn).toHaveBeenCalledWith(new Date(2016, 0, 1));
  });
  it('jumps 1 month back on prev button click for month view', function () {
    var prev = monthViewArrows.at(1);
    prev.simulate('click');
    expect(monthSetActiveStartDateFn).toHaveBeenCalledWith(new Date(2016, 11, 1));
  });
  it('jumps 1 month forward on next button click for month view', function () {
    var next = monthViewArrows.at(2);
    next.simulate('click');
    expect(monthSetActiveStartDateFn).toHaveBeenCalledWith(new Date(2017, 1, 1));
  });
  it('jumps 12 months forward on next2 button click for month view', function () {
    var next2 = monthViewArrows.at(3);
    next2.simulate('click');
    expect(monthSetActiveStartDateFn).toHaveBeenCalledWith(new Date(2018, 0, 1));
  });
  var yearSetActiveStartDateFn = jest.fn();
  var yearViewComponent = (0, _enzyme.shallow)(_react.default.createElement(_Navigation.default, {
    activeStartDate: new Date(2017, 0, 1),
    drillUp: jest.fn(),
    setActiveStartDate: yearSetActiveStartDateFn,
    view: "year",
    views: allViews
  }));
  var yearViewArrows = yearViewComponent.find('button.react-calendar__navigation__arrow');
  it('jumps 10 years back on prev2 button click for year view', function () {
    var prev2 = yearViewArrows.at(0);
    prev2.simulate('click');
    expect(yearSetActiveStartDateFn).toHaveBeenCalledWith(new Date(2007, 0, 1));
  });
  it('jumps 1 year back on prev button click for year view', function () {
    var prev2 = yearViewArrows.at(1);
    prev2.simulate('click');
    expect(yearSetActiveStartDateFn).toHaveBeenCalledWith(new Date(2016, 0, 1));
  });
  it('jumps 1 year forward on next button click for year view', function () {
    var next = yearViewArrows.at(2);
    next.simulate('click');
    expect(yearSetActiveStartDateFn).toHaveBeenCalledWith(new Date(2018, 0, 1));
  });
  it('jumps 10 years forward on next2 button click for year view', function () {
    var next2 = yearViewArrows.at(3);
    next2.simulate('click');
    expect(yearSetActiveStartDateFn).toHaveBeenCalledWith(new Date(2027, 0, 1));
  });
  var decadeSetActiveStartDateFn = jest.fn();
  var decadeViewComponent = (0, _enzyme.shallow)(_react.default.createElement(_Navigation.default, {
    activeStartDate: new Date(2017, 0, 1),
    drillUp: jest.fn(),
    setActiveStartDate: decadeSetActiveStartDateFn,
    view: "decade",
    views: allViews
  }));
  var decadeViewArrows = decadeViewComponent.find('button.react-calendar__navigation__arrow');
  it('jumps 10 decades back on prev2 button click for decade view', function () {
    var prev2 = decadeViewArrows.at(0);
    prev2.simulate('click');
    expect(decadeSetActiveStartDateFn).toHaveBeenCalledWith(new Date(1911, 0, 1));
  });
  it('jumps 1 decade back on prev button click for decade view', function () {
    var prev = decadeViewArrows.at(1);
    prev.simulate('click');
    expect(decadeSetActiveStartDateFn).toHaveBeenCalledWith(new Date(2001, 0, 1));
  });
  it('jumps 1 decade forward on next button click for decade view', function () {
    var next = decadeViewArrows.at(2);
    next.simulate('click');
    expect(decadeSetActiveStartDateFn).toHaveBeenCalledWith(new Date(2021, 0, 1));
  });
  it('jumps 10 decades forward on next2 button click for decade view', function () {
    var next2 = decadeViewArrows.at(3);
    next2.simulate('click');
    expect(decadeSetActiveStartDateFn).toHaveBeenCalledWith(new Date(2111, 0, 1));
  });
  var centurySetActiveStartDateFn = jest.fn();
  var centuryViewComponent = (0, _enzyme.shallow)(_react.default.createElement(_Navigation.default, {
    activeStartDate: new Date(2017, 0, 1),
    drillUp: jest.fn(),
    setActiveStartDate: centurySetActiveStartDateFn,
    view: "century",
    views: allViews
  }));
  var centuryViewArrows = centuryViewComponent.find('button.react-calendar__navigation__arrow');
  it('jumps 1 century back on prev button click for century view', function () {
    var prev = centuryViewArrows.at(0);
    prev.simulate('click');
    expect(centurySetActiveStartDateFn).toHaveBeenCalledWith(new Date(1901, 0, 1));
  });
  it('jumps 1 century forward on next button click for century view', function () {
    var next = centuryViewArrows.at(1);
    next.simulate('click');
    expect(centurySetActiveStartDateFn).toHaveBeenCalledWith(new Date(2101, 0, 1));
  });
  it('correctly marks drillUp button as disabled when already on top allowed view', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_Navigation.default, {
      activeStartDate: new Date(2017, 0, 1),
      drillUp: jest.fn(),
      setActiveStartDate: jest.fn(),
      view: "century",
      views: allViews
    }));
    var button = component.find('button.react-calendar__navigation__label');
    expect(button.prop('disabled')).toBeTruthy();
  });
  it('disallows navigating before minDate', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_Navigation.default, {
      activeStartDate: new Date(2017, 0, 1),
      drillUp: jest.fn(),
      minDate: new Date(2017, 0, 1),
      setActiveStartDate: jest.fn(),
      view: "month",
      views: allViews
    }));
    var arrows = component.find('button.react-calendar__navigation__arrow');
    var prev2 = arrows.at(0);
    var prev = arrows.at(1);
    expect(prev2.prop('disabled')).toBeTruthy();
    expect(prev.prop('disabled')).toBeTruthy();
  });
  it('disallows navigating before dynamically set minDate', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_Navigation.default, {
      activeStartDate: new Date(2017, 0, 1),
      drillUp: jest.fn(),
      setActiveStartDate: jest.fn(),
      view: "month",
      views: allViews
    }));
    component.setProps({
      minDate: new Date(2017, 0, 1)
    });
    var arrows = component.find('button.react-calendar__navigation__arrow');
    var prev2 = arrows.at(0);
    var prev = arrows.at(1);
    expect(prev2.prop('disabled')).toBeTruthy();
    expect(prev.prop('disabled')).toBeTruthy();
  });
  it('disallows navigating after maxDate', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_Navigation.default, {
      activeStartDate: new Date(2017, 0, 1),
      drillUp: jest.fn(),
      maxDate: new Date(2017, 0, 31),
      setActiveStartDate: jest.fn(),
      view: "month",
      views: allViews
    }));
    var arrows = component.find('button.react-calendar__navigation__arrow');
    var next = arrows.at(2);
    var next2 = arrows.at(3);
    expect(next.prop('disabled')).toBeTruthy();
    expect(next2.prop('disabled')).toBeTruthy();
  });
  it('disallows navigating after dynamically set maxDate', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_Navigation.default, {
      activeStartDate: new Date(2017, 0, 1),
      drillUp: jest.fn(),
      setActiveStartDate: jest.fn(),
      view: "month",
      views: allViews
    }));
    component.setProps({
      maxDate: new Date(2017, 0, 31)
    });
    var arrows = component.find('button.react-calendar__navigation__arrow');
    var next = arrows.at(2);
    var next2 = arrows.at(3);
    expect(next.prop('disabled')).toBeTruthy();
    expect(next2.prop('disabled')).toBeTruthy();
  });
  it('disallows navigating before the year 1000', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_Navigation.default, {
      activeStartDate: new Date(1000, 0, 1),
      drillUp: jest.fn(),
      setActiveStartDate: jest.fn(),
      view: "year",
      views: allViews
    }));
    var arrows = component.find('button.react-calendar__navigation__arrow');
    var prev2 = arrows.at(0);
    var prev = arrows.at(1);
    expect(prev2.prop('disabled')).toBeTruthy();
    expect(prev.prop('disabled')).toBeTruthy();
  });
  it('renders custom navigation label when given navigationLabel prop', function () {
    var date = new Date(2017, 0, 1);
    var label = 'Custom label';
    var view = 'month';
    var navigationLabel = jest.fn().mockReturnValue(label);
    var component = (0, _enzyme.shallow)(_react.default.createElement(_Navigation.default, {
      activeStartDate: date,
      drillUp: jest.fn(),
      navigationLabel: navigationLabel,
      setActiveStartDate: jest.fn(),
      view: view,
      views: allViews
    }));

    var _component$children13 = component.children(),
        _component$children14 = _slicedToArray(_component$children13, 3),
        drillUp = _component$children14[2];

    expect(navigationLabel).toHaveBeenCalledWith({
      date: date,
      view: view,
      label: 'January 2017'
    });
    expect(drillUp.props.children.toString()).toBe(label);
  });
});