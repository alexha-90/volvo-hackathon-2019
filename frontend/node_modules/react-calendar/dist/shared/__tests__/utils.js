"use strict";

var _utils = require("../utils");

describe('mergeFunctions', function () {
  it('returns a function when called', function () {
    var testFunction1 = jest.fn();
    var testFunction2 = jest.fn();
    var mergedFunctions = (0, _utils.mergeFunctions)(testFunction1, testFunction2);
    expect(mergedFunctions).toBeInstanceOf(Function);
  });
  it('calls all functions passed to it upon creation of a merged function exactly once', function () {
    var testFunction1 = jest.fn();
    var testFunction2 = jest.fn();
    var mergedFunctions = (0, _utils.mergeFunctions)(testFunction1, testFunction2);
    mergedFunctions();
    expect(testFunction1).toHaveBeenCalledTimes(1);
    expect(testFunction2).toHaveBeenCalledTimes(1);
  });
  it('passes the same arguments to all functions passed to it upon creation of a merged function', function () {
    var arg1 = 'hello';
    var arg2 = null;
    var arg3 = 42;
    var testFunction1 = jest.fn();
    var testFunction2 = jest.fn();
    var mergedFunctions = (0, _utils.mergeFunctions)(testFunction1, testFunction2);
    mergedFunctions(arg1, arg2, arg3);
    expect(testFunction1).toHaveBeenCalledWith(arg1, arg2, arg3);
    expect(testFunction2).toHaveBeenCalledWith(arg1, arg2, arg3);
  });
});
describe('isValueWithinRange', function () {
  it('returns true for a value between range bonduaries', function () {
    var value = new Date(2017, 6, 1);
    var range = [new Date(2017, 0, 1), new Date(2018, 0, 1)];
    var valueWithin = (0, _utils.isValueWithinRange)(value, range);
    expect(valueWithin).toBe(true);
  });
  it('returns true for a value on the first range bonduary', function () {
    var value = new Date(2017, 0, 1);
    var range = [new Date(2017, 0, 1), new Date(2018, 0, 1)];
    var valueWithin = (0, _utils.isValueWithinRange)(value, range);
    expect(valueWithin).toBe(true);
  });
  it('returns true for a value on the last range bonduary', function () {
    var value = new Date(2018, 0, 1);
    var range = [new Date(2017, 0, 1), new Date(2018, 0, 1)];
    var valueWithin = (0, _utils.isValueWithinRange)(value, range);
    expect(valueWithin).toBe(true);
  });
  it('returns true for a value smaller than both range bonduaries', function () {
    var value = new Date(2016, 0, 1);
    var range = [new Date(2017, 0, 1), new Date(2018, 0, 1)];
    var valueWithin = (0, _utils.isValueWithinRange)(value, range);
    expect(valueWithin).toBe(false);
  });
  it('returns true for a value larger than both range bonduaries', function () {
    var value = new Date(2019, 0, 1);
    var range = [new Date(2017, 0, 1), new Date(2018, 0, 1)];
    var valueWithin = (0, _utils.isValueWithinRange)(value, range);
    expect(valueWithin).toBe(false);
  });
});
describe('isRangeWithinRange', function () {
  it('returns true for range fitting within another range', function () {
    var greaterRange = [new Date(2011, 0, 1), new Date(2020, 0, 1)];
    var smallerRange = [new Date(2016, 0, 1), new Date(2017, 0, 1)];
    var rangeWithin = (0, _utils.isRangeWithinRange)(greaterRange, smallerRange);
    expect(rangeWithin).toBe(true);
  });
  it('returns true for a range identical with another range', function () {
    var greaterRange = [new Date(2016, 0, 1), new Date(2017, 0, 1)];
    var smallerRange = [new Date(2016, 0, 1), new Date(2017, 0, 1)];
    var rangeWithin = (0, _utils.isRangeWithinRange)(greaterRange, smallerRange);
    expect(rangeWithin).toBe(true);
  });
  it('returns false for a range that starts outside of another range', function () {
    var greaterRange = [new Date(2011, 0, 1), new Date(2020, 0, 1)];
    var smallerRange = [new Date(2010, 0, 1), new Date(2017, 0, 1)];
    var rangeWithin = (0, _utils.isRangeWithinRange)(greaterRange, smallerRange);
    expect(rangeWithin).toBe(false);
  });
  it('returns false for a range that ends outside of another range', function () {
    var greaterRange = [new Date(2011, 0, 1), new Date(2020, 0, 1)];
    var smallerRange = [new Date(2016, 0, 1), new Date(2021, 0, 1)];
    var rangeWithin = (0, _utils.isRangeWithinRange)(greaterRange, smallerRange);
    expect(rangeWithin).toBe(false);
  });
});
describe('doRangesOverlap', function () {
  it('returns true for overlapping ranges', function () {
    var range1 = [new Date(2016, 0, 1), new Date(2017, 0, 1)];
    var range2 = [new Date(2016, 6, 1), new Date(2017, 6, 1)];
    var rangesOverlap = (0, _utils.doRangesOverlap)(range1, range2);
    var rangesOverlapReversed = (0, _utils.doRangesOverlap)(range2, range1);
    expect(rangesOverlap).toBe(true);
    expect(rangesOverlapReversed).toBe(true);
  });
  it('returns true for touching ranges', function () {
    var range1 = [new Date(2016, 0, 1), new Date(2017, 0, 1)];
    var range2 = [new Date(2017, 0, 1), new Date(2018, 0, 1)];
    var rangesOverlap = (0, _utils.doRangesOverlap)(range1, range2);
    var rangesOverlapReversed = (0, _utils.doRangesOverlap)(range2, range1);
    expect(rangesOverlap).toBe(true);
    expect(rangesOverlapReversed).toBe(true);
  });
  it('returns false for ranges that do not overlap', function () {
    var range1 = [new Date(2006, 0, 1), new Date(2007, 0, 1)];
    var range2 = [new Date(2016, 0, 1), new Date(2017, 0, 1)];
    var rangesOverlap = (0, _utils.doRangesOverlap)(range1, range2);
    var rangesOverlapReversed = (0, _utils.doRangesOverlap)(range2, range1);
    expect(rangesOverlap).toBe(false);
    expect(rangesOverlapReversed).toBe(false);
  });
});
describe('between', function () {
  it('returns value when value is within set boundaries', function () {
    var value = new Date(2017, 6, 1);
    var min = new Date(2017, 0, 1);
    var max = new Date(2017, 11, 1);
    var result = (0, _utils.between)(value, min, max);
    expect(result).toBe(value);
  });
  it('returns min when value is smaller than min', function () {
    var value = new Date(2017, 0, 1);
    var min = new Date(2017, 6, 1);
    var max = new Date(2017, 11, 1);
    var result = (0, _utils.between)(value, min, max);
    expect(result).toBe(min);
  });
  it('returns max when value is larger than max', function () {
    var value = new Date(2017, 11, 1);
    var min = new Date(2017, 0, 1);
    var max = new Date(2017, 6, 1);
    var result = (0, _utils.between)(value, min, max);
    expect(result).toBe(max);
  });
  it('returns value when min and max are not provided', function () {
    var value = new Date(2017, 6, 1);
    var result = (0, _utils.between)(value, null, undefined);
    expect(result).toBe(value);
  });
});
describe('getTileClasses', function () {
  it('returns all flags set to false when given no value', function () {
    var result = (0, _utils.getTileClasses)();
    expect(result.includes('react-calendar__tile--active')).toBe(false);
    expect(result.includes('react-calendar__tile--hasActive')).toBe(false);
    expect(result.includes('react-calendar__tile--hover')).toBe(false);
  });
  it('throws an error when given date but not given dateType parameter ', function () {
    expect(function () {
      return (0, _utils.getTileClasses)({
        date: new Date(2017, 0, 1)
      });
    }).toThrow();
  });
  it('throws an error when given date and value but not given valueType parameter ', function () {
    expect(function () {
      return (0, _utils.getTileClasses)({
        date: new Date(2017, 0, 1),
        dateType: 'month',
        value: new Date(2017, 0, 1)
      });
    }).toThrow();
  });
  it('returns active flag set to true when passed a value equal to date', function () {
    var result = (0, _utils.getTileClasses)({
      value: new Date(2017, 0, 1),
      valueType: 'month',
      date: new Date(2017, 0, 1),
      dateType: 'month'
    });
    expect(result.includes('react-calendar__tile--active')).toBe(true);
    expect(result.includes('react-calendar__tile--hasActive')).toBe(false);
    expect(result.includes('react-calendar__tile--hover')).toBe(false);
  });
  it('returns active flag set to true when passed a value array equal to date array', function () {
    var result = (0, _utils.getTileClasses)({
      value: [new Date(2017, 0, 1), new Date(2017, 0, 31)],
      date: [new Date(2017, 0, 1), new Date(2017, 0, 31)]
    });
    expect(result.includes('react-calendar__tile--active')).toBe(true);
    expect(result.includes('react-calendar__tile--hasActive')).toBe(false);
    expect(result.includes('react-calendar__tile--hover')).toBe(false);
  });
  it('returns hasActive flag set to true when passed a value covering date', function () {
    var result = (0, _utils.getTileClasses)({
      value: new Date(2017, 6, 1),
      valueType: 'month',
      date: new Date(2017, 0, 1),
      dateType: 'year'
    });
    expect(result.includes('react-calendar__tile--active')).toBe(false);
    expect(result.includes('react-calendar__tile--hasActive')).toBe(true);
    expect(result.includes('react-calendar__tile--hover')).toBe(false);
  });
  it('returns hover flag set to true when passed a date between value and hover (1)', function () {
    var result = (0, _utils.getTileClasses)({
      value: new Date(2017, 6, 1),
      valueType: 'month',
      date: new Date(2017, 3, 1),
      dateType: 'month',
      hover: new Date(2017, 0, 1)
    });
    expect(result.includes('react-calendar__tile--active')).toBe(false);
    expect(result.includes('react-calendar__tile--hasActive')).toBe(false);
    expect(result.includes('react-calendar__tile--hover')).toBe(true);
  });
  it('returns hover flag set to true when passed a date between value and hover (2)', function () {
    var result = (0, _utils.getTileClasses)({
      value: new Date(2017, 0, 1),
      valueType: 'month',
      date: new Date(2017, 3, 1),
      dateType: 'month',
      hover: new Date(2017, 6, 1)
    });
    expect(result.includes('react-calendar__tile--active')).toBe(false);
    expect(result.includes('react-calendar__tile--hasActive')).toBe(false);
    expect(result.includes('react-calendar__tile--hover')).toBe(true);
  });
  it('returns all flags set to false when given value completely unrelated to date', function () {
    var result = (0, _utils.getTileClasses)({
      value: new Date(2017, 6, 1),
      valueType: 'month',
      date: new Date(2016, 0, 1),
      dateType: 'month'
    });
    expect(result.includes('react-calendar__tile--active')).toBe(false);
    expect(result.includes('react-calendar__tile--hasActive')).toBe(false);
    expect(result.includes('react-calendar__tile--hover')).toBe(false);
  });
});