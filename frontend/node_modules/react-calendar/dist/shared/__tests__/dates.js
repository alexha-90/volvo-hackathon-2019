"use strict";

var _dates = require("../dates");

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      date                      | flag\n      ", " | ", "\n      ", " | ", "\n      ", "   | ", "\n      ", "   | ", "\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      date                      | flag\n      ", " | ", "\n      ", " | ", "\n      ", "   | ", "\n      ", "   | ", "\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      date                      | flag\n      ", " | ", "\n      ", " | ", "\n      ", "   | ", "\n      ", "   | ", "\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      date                      | flag\n      ", " | ", "\n      ", " | ", "\n      ", "   | ", "\n      ", "   | ", "\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      date                      | flag\n      ", " | ", "\n      ", " | ", "\n      ", "   | ", "\n      ", "   | ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

describe('getYear', function () {
  it('returns proper year for a given date', function () {
    var date = new Date(2017, 0, 1);
    var year = (0, _dates.getYear)(date);
    expect(year).toBe(2017);
  });
  it('returns proper year for a given number', function () {
    var date = 2017;
    var year = (0, _dates.getYear)(date);
    expect(year).toBe(2017);
  });
  it('returns proper year for a given string', function () {
    var date = '2017';
    var year = (0, _dates.getYear)(date);
    expect(year).toBe(2017);
  });
  it('throws an error when given nonsense data', function () {
    var text = 'wololo';
    var flag = true;
    expect(function () {
      return (0, _dates.getYear)(text);
    }).toThrow();
    expect(function () {
      return (0, _dates.getYear)(flag);
    }).toThrow();
    expect(function () {
      return (0, _dates.getYear)();
    }).toThrow();
  });
});
describe('getMonth', function () {
  it('returns proper month', function () {
    var date = new Date(2017, 0, 1);
    var monthIndex = (0, _dates.getMonth)(date);
    expect(monthIndex).toBe(1);
  });
});
describe('getMonthIndex', function () {
  it('returns proper month index', function () {
    var date = new Date(2017, 0, 1);
    var monthIndex = (0, _dates.getMonthIndex)(date);
    expect(monthIndex).toBe(0);
  });
});
describe('getDay', function () {
  it('returns proper day', function () {
    var date = new Date(2017, 0, 1);
    var day = (0, _dates.getDay)(date);
    expect(day).toBe(1);
  });
});
describe('getDayOfWeek', function () {
  it('returns proper day of the week (ISO 8601)', function () {
    var date = new Date(2017, 0, 1);
    var dayOfWeek = (0, _dates.getDayOfWeek)(date, 'ISO 8601');
    expect(dayOfWeek).toBe(6);
  });
  it('returns proper day of the week (US)', function () {
    var date = new Date(2017, 0, 1);
    var dayOfWeek = (0, _dates.getDayOfWeek)(date, 'US');
    expect(dayOfWeek).toBe(0);
  });
  it('returns proper day of the week (Arabic)', function () {
    var date = new Date(2017, 0, 1);
    var dayOfWeek = (0, _dates.getDayOfWeek)(date, 'Arabic');
    expect(dayOfWeek).toBe(1);
  });
  it('returns proper day of the week (Hebrew)', function () {
    var date = new Date(2017, 0, 1);
    var dayOfWeek = (0, _dates.getDayOfWeek)(date, 'Hebrew');
    expect(dayOfWeek).toBe(0);
  });
  it('returns proper day of the week (default)', function () {
    var date = new Date(2017, 0, 1);
    var dayOfWeek = (0, _dates.getDayOfWeek)(date);
    expect(dayOfWeek).toBe(6);
  });
  it('throws an error when given unrecognized calendar type', function () {
    var date = new Date(2017, 0, 1);
    expect(function () {
      return (0, _dates.getDayOfWeek)(date, 'Chinese');
    }).toThrow();
  });
});
describe('getBeginOfCenturyYear', function () {
  it('returns proper year of the beginning of the century', function () {
    var date1 = new Date(2017, 0, 1);
    var date2 = new Date(2001, 0, 1);
    var date3 = new Date(2000, 0, 1);
    var beginOfCenturyYear1 = (0, _dates.getBeginOfCenturyYear)(date1);
    var beginOfCenturyYear2 = (0, _dates.getBeginOfCenturyYear)(date2);
    var beginOfCenturyYear3 = (0, _dates.getBeginOfCenturyYear)(date3);
    expect(beginOfCenturyYear1).toBe(2001);
    expect(beginOfCenturyYear2).toBe(2001);
    expect(beginOfCenturyYear3).toBe(1901);
  });
});
describe('getBeginOfCentury', function () {
  it('returns proper beginning of the century', function () {
    var date = new Date(2017, 0, 1);
    var beginOfCenturyDate = new Date(2001, 0, 1);
    var beginOfCentury = (0, _dates.getBeginOfCentury)(date);
    expect(beginOfCentury).toEqual(beginOfCenturyDate);
  });
});
describe('getEndOfCentury', function () {
  it('returns proper end of the century', function () {
    var date = new Date(2017, 0, 1);
    var endOfCenturyDate = new Date(2100, 11, 31, 23, 59, 59, 999);
    var endOfCentury = (0, _dates.getEndOfCentury)(date);
    expect(endOfCentury).toEqual(endOfCenturyDate);
  });
});
describe('getCenturyRange', function () {
  it('returns proper century date range', function () {
    var date = new Date(2017, 0, 1);
    var beginOfCenturyDate = new Date(2001, 0, 1);
    var endOfCenturyDate = new Date(2100, 11, 31, 23, 59, 59, 999);
    var centuryRange = (0, _dates.getCenturyRange)(date);
    expect(centuryRange).toHaveLength(2);
    expect(centuryRange).toEqual([beginOfCenturyDate, endOfCenturyDate]);
  });
});
describe('getBeginPreviousOfCentury', function () {
  it('returns proper beginning of the previous century', function () {
    var date = new Date(2017, 0, 1);
    var beginOfPreviousCenturyDate = new Date(1901, 0, 1);
    var beginOfPreviousCentury = (0, _dates.getBeginOfPreviousCentury)(date);
    expect(beginOfPreviousCentury).toEqual(beginOfPreviousCenturyDate);
  });
});
describe('getEndOfPreviousCentury', function () {
  it('returns proper end of the previous century', function () {
    var date = new Date(2017, 0, 1);
    var endOfPreviousCenturyDate = new Date(2000, 11, 31, 23, 59, 59, 999);
    var endOfPreviousCentury = (0, _dates.getEndOfPreviousCentury)(date);
    expect(endOfPreviousCentury).toEqual(endOfPreviousCenturyDate);
  });
});
describe('getBeginOfNextCentury', function () {
  it('returns proper beginning of the next century', function () {
    var date = new Date(2017, 0, 1);
    var beginOfNextCenturyDate = new Date(2101, 0, 1);
    var beginOfNextCentury = (0, _dates.getBeginOfNextCentury)(date);
    expect(beginOfNextCentury).toEqual(beginOfNextCenturyDate);
  });
});
describe('getBeginOfDecadeYear', function () {
  it('returns proper year of the beginning of the decade', function () {
    var date1 = new Date(2017, 0, 1);
    var date2 = new Date(2001, 0, 1);
    var date3 = new Date(2000, 0, 1);
    var beginOfDecadeYear1 = (0, _dates.getBeginOfDecadeYear)(date1);
    var beginOfDecadeYear2 = (0, _dates.getBeginOfDecadeYear)(date2);
    var beginOfDecadeYear3 = (0, _dates.getBeginOfDecadeYear)(date3);
    expect(beginOfDecadeYear1).toBe(2011);
    expect(beginOfDecadeYear2).toBe(2001);
    expect(beginOfDecadeYear3).toBe(1991);
  });
});
describe('getBeginOfDecade', function () {
  it('returns proper beginning of the decade', function () {
    var date = new Date(2017, 0, 1);
    var beginOfDecadeDate = new Date(2011, 0, 1);
    var beginOfDecade = (0, _dates.getBeginOfDecade)(date);
    expect(beginOfDecade).toEqual(beginOfDecadeDate);
  });
});
describe('getEndOfDecade', function () {
  it('returns proper end of the decade', function () {
    var date = new Date(2017, 0, 1);
    var endOfDecadeDate = new Date(2020, 11, 31, 23, 59, 59, 999);
    var endOfDecade = (0, _dates.getEndOfDecade)(date);
    expect(endOfDecade).toEqual(endOfDecadeDate);
  });
});
describe('getDecadeRange', function () {
  it('returns proper decade date range', function () {
    var date = new Date(2017, 0, 1);
    var beginOfDecadeDate = new Date(2011, 0, 1);
    var endOfDecadeDate = new Date(2020, 11, 31, 23, 59, 59, 999);
    var decadeRange = (0, _dates.getDecadeRange)(date);
    expect(decadeRange).toHaveLength(2);
    expect(decadeRange).toEqual([beginOfDecadeDate, endOfDecadeDate]);
  });
});
describe('getBeginPreviousOfDecade', function () {
  it('returns proper beginning of the previous decade', function () {
    var date = new Date(2017, 0, 1);
    var beginOfPreviousDecadeDate = new Date(2001, 0, 1);
    var beginOfPreviousDecade = (0, _dates.getBeginOfPreviousDecade)(date);
    expect(beginOfPreviousDecade).toEqual(beginOfPreviousDecadeDate);
  });
});
describe('getEndOfPreviousDecade', function () {
  it('returns proper end of the previous decade', function () {
    var date = new Date(2017, 0, 1);
    var endOfPreviousDecadeDate = new Date(2010, 11, 31, 23, 59, 59, 999);
    var endOfPreviousDecade = (0, _dates.getEndOfPreviousDecade)(date);
    expect(endOfPreviousDecade).toEqual(endOfPreviousDecadeDate);
  });
});
describe('getBeginOfNextDecade', function () {
  it('returns proper beginning of the next decade', function () {
    var date = new Date(2017, 0, 1);
    var beginOfNextDecadeDate = new Date(2021, 0, 1);
    var beginOfNextDecade = (0, _dates.getBeginOfNextDecade)(date);
    expect(beginOfNextDecade).toEqual(beginOfNextDecadeDate);
  });
});
describe('getBeginOfYear', function () {
  it('returns proper beginning of the year', function () {
    var date = new Date(2017, 0, 1);
    var beginOfYearDate = new Date(2017, 0, 1);
    var beginOfYear = (0, _dates.getBeginOfYear)(date);
    expect(beginOfYear).toEqual(beginOfYearDate);
  });
});
describe('getEndOfYear', function () {
  it('returns proper end of the year', function () {
    var date = new Date(2017, 0, 1);
    var endOfYearDate = new Date(2017, 11, 31, 23, 59, 59, 999);
    var endOfYear = (0, _dates.getEndOfYear)(date);
    expect(endOfYear).toEqual(endOfYearDate);
  });
});
describe('getYearRange', function () {
  it('returns proper year date range', function () {
    var date = new Date(2017, 0, 1);
    var beginOfYearDate = new Date(2017, 0, 1);
    var endOfYearDate = new Date(2017, 11, 31, 23, 59, 59, 999);
    var yearRange = (0, _dates.getYearRange)(date);
    expect(yearRange).toHaveLength(2);
    expect(yearRange).toEqual([beginOfYearDate, endOfYearDate]);
  });
});
describe('getBeginPreviousOfYear', function () {
  it('returns proper beginning of the previous year', function () {
    var date = new Date(2017, 0, 1);
    var beginOfPreviousYearDate = new Date(2016, 0, 1);
    var beginOfPreviousYear = (0, _dates.getBeginOfPreviousYear)(date);
    expect(beginOfPreviousYear).toEqual(beginOfPreviousYearDate);
  });
});
describe('getEndOfPreviousYear', function () {
  it('returns proper end of the previous year', function () {
    var date = new Date(2017, 0, 1);
    var endOfPreviousYearDate = new Date(2016, 11, 31, 23, 59, 59, 999);
    var endOfPreviousYear = (0, _dates.getEndOfPreviousYear)(date);
    expect(endOfPreviousYear).toEqual(endOfPreviousYearDate);
  });
});
describe('getBeginOfNextYear', function () {
  it('returns proper beginning of the next year', function () {
    var date = new Date(2017, 0, 1);
    var beginOfNextYearDate = new Date(2018, 0, 1);
    var beginOfNextYear = (0, _dates.getBeginOfNextYear)(date);
    expect(beginOfNextYear).toEqual(beginOfNextYearDate);
  });
});
describe('getBeginOfMonth', function () {
  it('returns proper beginning of the month', function () {
    var date = new Date(2017, 0, 1);
    var beginOfMonthDate = new Date(2017, 0, 1);
    var beginOfMonth = (0, _dates.getBeginOfMonth)(date);
    expect(beginOfMonth).toEqual(beginOfMonthDate);
  });
});
describe('getEndOfMonth', function () {
  it('returns proper end of the month', function () {
    var date = new Date(2017, 0, 1);
    var endOfMonthDate = new Date(2017, 0, 31, 23, 59, 59, 999);
    var endOfMonth = (0, _dates.getEndOfMonth)(date);
    expect(endOfMonth).toEqual(endOfMonthDate);
  });
});
describe('getBeginOfWeek', function () {
  it('returns proper beginning of the week (ISO 8601)', function () {
    var date = new Date(2017, 0, 1);
    var beginOfWeekDate = new Date(2016, 11, 26);
    var beginOfWeek = (0, _dates.getBeginOfWeek)(date, 'ISO 8601');
    expect(beginOfWeek).toEqual(beginOfWeekDate);
  });
  it('returns proper beginning of the week (US)', function () {
    var date = new Date(2016, 0, 1);
    var beginOfWeekDate = new Date(2015, 11, 27);
    var beginOfWeek = (0, _dates.getBeginOfWeek)(date, 'US');
    expect(beginOfWeek).toEqual(beginOfWeekDate);
  });
  it('returns proper beginning of the week (Arabic)', function () {
    var date = new Date(2016, 0, 1);
    var beginOfWeekDate = new Date(2015, 11, 26);
    var beginOfWeek = (0, _dates.getBeginOfWeek)(date, 'Arabic');
    expect(beginOfWeek).toEqual(beginOfWeekDate);
  });
  it('returns proper beginning of the week (Hebrew)', function () {
    var date = new Date(2016, 0, 1);
    var beginOfWeekDate = new Date(2015, 11, 27);
    var beginOfWeek = (0, _dates.getBeginOfWeek)(date, 'Hebrew');
    expect(beginOfWeek).toEqual(beginOfWeekDate);
  });
  it('returns proper beginning of the week (default)', function () {
    var date = new Date(2017, 0, 1);
    var beginOfWeekDate = new Date(2016, 11, 26);
    var beginOfWeek = (0, _dates.getBeginOfWeek)(date);
    expect(beginOfWeek).toEqual(beginOfWeekDate);
  });
});
describe('getMonthRange', function () {
  it('returns proper month date range', function () {
    var date = new Date(2017, 0, 1);
    var beginOfMonthDate = new Date(2017, 0, 1);
    var endOfMonthDate = new Date(2017, 0, 31, 23, 59, 59, 999);
    var monthRange = (0, _dates.getMonthRange)(date);
    expect(monthRange).toHaveLength(2);
    expect(monthRange).toEqual([beginOfMonthDate, endOfMonthDate]);
  });
});
describe('getBeginPreviousOfMonth', function () {
  it('returns proper beginning of the previous month', function () {
    var date = new Date(2017, 0, 1);
    var beginOfPreviousMonthDate = new Date(2016, 11, 1);
    var beginOfPreviousMonth = (0, _dates.getBeginOfPreviousMonth)(date);
    expect(beginOfPreviousMonth).toEqual(beginOfPreviousMonthDate);
  });
});
describe('getEndOfPreviousMonth', function () {
  it('returns proper end of the previous month', function () {
    var date = new Date(2017, 0, 1);
    var endOfPreviousMonthDate = new Date(2016, 11, 31, 23, 59, 59, 999);
    var endOfPreviousMonth = (0, _dates.getEndOfPreviousMonth)(date);
    expect(endOfPreviousMonth).toEqual(endOfPreviousMonthDate);
  });
});
describe('getBeginOfNextMonth', function () {
  it('returns proper beginning of the next month', function () {
    var date = new Date(2017, 0, 1);
    var beginOfNextMonthDate = new Date(2017, 1, 1);
    var beginOfNextMonth = (0, _dates.getBeginOfNextMonth)(date);
    expect(beginOfNextMonth).toEqual(beginOfNextMonthDate);
  });
});
describe('getBeginOfDay', function () {
  it('returns proper beginning of the day', function () {
    var date = new Date(2017, 0, 1);
    var beginOfDayDate = new Date(2017, 0, 1);
    var beginOfDay = (0, _dates.getBeginOfDay)(date);
    expect(beginOfDay).toEqual(beginOfDayDate);
  });
});
describe('getEndOfDay', function () {
  it('returns proper end of the day', function () {
    var date = new Date(2017, 0, 1);
    var endOfDayDate = new Date(2017, 0, 1, 23, 59, 59, 999);
    var endOfDay = (0, _dates.getEndOfDay)(date);
    expect(endOfDay).toEqual(endOfDayDate);
  });
});
describe('getDayRange', function () {
  it('returns proper day date range', function () {
    var date = new Date(2017, 0, 1);
    var beginOfDayDate = new Date(2017, 0, 1);
    var endOfDayDate = new Date(2017, 0, 1, 23, 59, 59, 999);
    var dayRange = (0, _dates.getDayRange)(date);
    expect(dayRange).toHaveLength(2);
    expect(dayRange).toEqual([beginOfDayDate, endOfDayDate]);
  });
});
describe('getWeekNumber', function () {
  it('returns proper week number for a sample week 1 (ISO 8601)', function () {
    var year = 2018;
    var month = 0;
    var startDate = 1;

    for (var currentDate = startDate; currentDate < startDate + 7; currentDate += 1) {
      var date = new Date(year, month, currentDate);
      var weekNumber = (0, _dates.getWeekNumber)(date, 'ISO 8601');
      expect(weekNumber).toBe(1);
    }
  });
  it('returns proper week number for a sample year starting in week 1 (ISO 8601)', function () {
    var year = 2018;
    var month = 0;
    var startDate = 1;

    for (var currentWeek = 1; currentWeek <= 52; currentWeek += 1) {
      var weekOffset = (currentWeek - 1) * 7;
      var date = new Date(year, month, startDate + weekOffset);
      var weekNumber = (0, _dates.getWeekNumber)(date, 'ISO 8601');
      expect(weekNumber).toBe(currentWeek);
    }
  });
  it('returns proper week number for a sample week 52 (ISO 8601)', function () {
    var year = 2016;
    var month = 11;
    var startDate = 26;

    for (var currentDate = startDate; currentDate < startDate + 7; currentDate += 1) {
      var date = new Date(year, month, currentDate);
      var weekNumber = (0, _dates.getWeekNumber)(date, 'ISO 8601');
      expect(weekNumber).toBe(52);
    }
  });
  it('returns proper week number for a sample week 53 (ISO 8601)', function () {
    var year = 2015;
    var month = 11;
    var startDate = 28;

    for (var currentDate = startDate; currentDate < startDate + 7; currentDate += 1) {
      var date = new Date(year, month, currentDate);
      var weekNumber = (0, _dates.getWeekNumber)(date, 'ISO 8601');
      expect(weekNumber).toBe(53);
    }
  });
  it('returns proper week number for a sample week 1 (US)', function () {
    var year = 2015;
    var month = 11;
    var startDate = 27;

    for (var currentDate = startDate; currentDate < startDate + 7; currentDate += 1) {
      var date = new Date(year, month, currentDate);
      var weekNumber = (0, _dates.getWeekNumber)(date, 'US');
      expect(weekNumber).toBe(1);
    }
  });
  it('returns proper week number for a sample year starting in week 1 (US)', function () {
    var year = 2015;
    var month = 11;
    var startDate = 27;

    for (var currentWeek = 1; currentWeek <= 53; currentWeek += 1) {
      var weekOffset = (currentWeek - 1) * 7;
      var date = new Date(year, month, startDate + weekOffset);
      var weekNumber = (0, _dates.getWeekNumber)(date, 'US');
      expect(weekNumber).toBe(currentWeek);
    }
  });
  it('returns proper week number for a sample week 1 (US)', function () {
    var year = 2015;
    var month = 11;
    var startDate = 27;

    for (var currentDate = startDate; currentDate < startDate + 7; currentDate += 1) {
      var date = new Date(year, month, currentDate);
      var weekNumber = (0, _dates.getWeekNumber)(date, 'US');
      expect(weekNumber).toBe(1);
    }
  });
  it('returns proper week number for a sample week 52 (US)', function () {
    var year = 2017;
    var month = 11;
    var startDate = 24;

    for (var currentDate = startDate; currentDate < startDate + 7; currentDate += 1) {
      var date = new Date(year, month, currentDate);
      var weekNumber = (0, _dates.getWeekNumber)(date, 'US');
      expect(weekNumber).toBe(52);
    }
  });
  it('returns proper week number for a sample week 53 (US)', function () {
    var year = 2016;
    var month = 11;
    var startDate = 25;

    for (var currentDate = startDate; currentDate < startDate + 7; currentDate += 1) {
      var date = new Date(year, month, currentDate);
      var weekNumber = (0, _dates.getWeekNumber)(date, 'US');
      expect(weekNumber).toBe(53);
    }
  });
  it('returns proper week number for a sample week 1 (Arabic)', function () {
    var year = 2018;
    var month = 0;
    var startDate = 1;

    for (var currentDate = startDate; currentDate < startDate + 7; currentDate += 1) {
      var date = new Date(year, month, currentDate);
      var weekNumber = (0, _dates.getWeekNumber)(date, 'Arabic');
      expect(weekNumber).toBe(1);
    }
  });
  it('returns proper week number for a sample year starting in week 1 (Arabic)', function () {
    var year = 2018;
    var month = 0;
    var startDate = 1;

    for (var currentWeek = 1; currentWeek <= 52; currentWeek += 1) {
      var weekOffset = (currentWeek - 1) * 7;
      var date = new Date(year, month, startDate + weekOffset);
      var weekNumber = (0, _dates.getWeekNumber)(date, 'Arabic');
      expect(weekNumber).toBe(currentWeek);
    }
  });
  it('returns proper week number for a sample week 52 (Arabic)', function () {
    var year = 2016;
    var month = 11;
    var startDate = 26;

    for (var currentDate = startDate; currentDate < startDate + 7; currentDate += 1) {
      var date = new Date(year, month, currentDate);
      var weekNumber = (0, _dates.getWeekNumber)(date, 'Arabic');
      expect(weekNumber).toBe(52);
    }
  });
  it('returns proper week number for a sample week 53 (Arabic)', function () {
    var year = 2015;
    var month = 11;
    var startDate = 28;

    for (var currentDate = startDate; currentDate < startDate + 7; currentDate += 1) {
      var date = new Date(year, month, currentDate);
      var weekNumber = (0, _dates.getWeekNumber)(date, 'Arabic');
      expect(weekNumber).toBe(53);
    }
  });
  it('returns proper week number for a sample week 1 (Hebrew)', function () {
    var year = 2018;
    var month = 0;
    var startDate = 1;

    for (var currentDate = startDate; currentDate < startDate + 7; currentDate += 1) {
      var date = new Date(year, month, currentDate);
      var weekNumber = (0, _dates.getWeekNumber)(date, 'Hebrew');
      expect(weekNumber).toBe(1);
    }
  });
  it('returns proper week number for a sample year starting in week 1 (Hebrew)', function () {
    var year = 2018;
    var month = 0;
    var startDate = 1;

    for (var currentWeek = 1; currentWeek <= 52; currentWeek += 1) {
      var weekOffset = (currentWeek - 1) * 7;
      var date = new Date(year, month, startDate + weekOffset);
      var weekNumber = (0, _dates.getWeekNumber)(date, 'Hebrew');
      expect(weekNumber).toBe(currentWeek);
    }
  });
  it('returns proper week number for a sample week 52 (Hebrew)', function () {
    var year = 2016;
    var month = 11;
    var startDate = 26;

    for (var currentDate = startDate; currentDate < startDate + 7; currentDate += 1) {
      var date = new Date(year, month, currentDate);
      var weekNumber = (0, _dates.getWeekNumber)(date, 'Hebrew');
      expect(weekNumber).toBe(52);
    }
  });
  it('returns proper week number for a sample week 53 (Hebrew)', function () {
    var year = 2015;
    var month = 11;
    var startDate = 28;

    for (var currentDate = startDate; currentDate < startDate + 7; currentDate += 1) {
      var date = new Date(year, month, currentDate);
      var weekNumber = (0, _dates.getWeekNumber)(date, 'Hebrew');
      expect(weekNumber).toBe(53);
    }
  });
});
describe('getRange', function () {
  it('returns proper century range', function () {
    var date = new Date(2017, 0, 1);
    var beginOfCenturyDate = new Date(2001, 0, 1);
    var endOfCenturyDate = new Date(2100, 11, 31, 23, 59, 59, 999);
    var centuryRange = (0, _dates.getRange)('century', date);
    expect(centuryRange).toHaveLength(2);
    expect(centuryRange).toEqual([beginOfCenturyDate, endOfCenturyDate]);
  });
  it('returns proper decade range', function () {
    var date = new Date(2017, 0, 1);
    var beginOfDecadeDate = new Date(2011, 0, 1);
    var endOfDecadeDate = new Date(2020, 11, 31, 23, 59, 59, 999);
    var decadeRange = (0, _dates.getRange)('decade', date);
    expect(decadeRange).toHaveLength(2);
    expect(decadeRange).toEqual([beginOfDecadeDate, endOfDecadeDate]);
  });
  it('returns proper year range', function () {
    var date = new Date(2017, 0, 1);
    var beginOfYearDate = new Date(2017, 0, 1);
    var endOfYearDate = new Date(2017, 11, 31, 23, 59, 59, 999);
    var yearRange = (0, _dates.getRange)('year', date);
    expect(yearRange).toHaveLength(2);
    expect(yearRange).toEqual([beginOfYearDate, endOfYearDate]);
  });
  it('returns proper month range', function () {
    var date = new Date(2017, 0, 1);
    var beginOfMonthDate = new Date(2017, 0, 1);
    var endOfMonthDate = new Date(2017, 0, 31, 23, 59, 59, 999);
    var monthRange = (0, _dates.getRange)('month', date);
    expect(monthRange).toHaveLength(2);
    expect(monthRange).toEqual([beginOfMonthDate, endOfMonthDate]);
  });
  it('returns proper day range', function () {
    var date = new Date(2017, 0, 1);
    var beginOfDayDate = new Date(2017, 0, 1);
    var endOfDayDate = new Date(2017, 0, 1, 23, 59, 59, 999);
    var dayRange = (0, _dates.getRange)('day', date);
    expect(dayRange).toHaveLength(2);
    expect(dayRange).toEqual([beginOfDayDate, endOfDayDate]);
  });
  it('throws an error when given unrecognized range type', function () {
    var date = new Date(2017, 0, 1);
    expect(function () {
      return (0, _dates.getRange)('hamster', date);
    }).toThrow();
  });
});
describe('getBegin', function () {
  it('returns proper beginning of the century', function () {
    var date = new Date(2017, 0, 1);
    var beginOfCenturyDate = new Date(2001, 0, 1);
    var beginOfCentury = (0, _dates.getBegin)('century', date);
    expect(beginOfCentury).toEqual(beginOfCenturyDate);
  });
  it('returns proper beginning of the decade', function () {
    var date = new Date(2017, 0, 1);
    var beginOfDecadeDate = new Date(2011, 0, 1);
    var beginOfDecade = (0, _dates.getBegin)('decade', date);
    expect(beginOfDecade).toEqual(beginOfDecadeDate);
  });
  it('returns proper beginning of the year', function () {
    var date = new Date(2017, 0, 1);
    var beginOfYearDate = new Date(2017, 0, 1);
    var beginOfYear = (0, _dates.getBegin)('year', date);
    expect(beginOfYear).toEqual(beginOfYearDate);
  });
  it('returns proper beginning of the month', function () {
    var date = new Date(2017, 0, 1);
    var beginOfMonthDate = new Date(2017, 0, 1);
    var monthRange = (0, _dates.getBegin)('month', date);
    expect(monthRange).toEqual(beginOfMonthDate);
  });
  it('returns proper beginning of the day', function () {
    var date = new Date(2017, 0, 1);
    var beginOfDayDate = new Date(2017, 0, 1);
    var beginOfDay = (0, _dates.getBegin)('day', date);
    expect(beginOfDay).toEqual(beginOfDayDate);
  });
  it('throws an error when given unrecognized range type', function () {
    var date = new Date(2017, 0, 1);
    expect(function () {
      return (0, _dates.getBegin)('hamster', date);
    }).toThrow();
  });
});
describe('getBeginPrevious', function () {
  it('returns proper beginning of the previous century', function () {
    var date = new Date(2017, 0, 1);
    var beginOfCenturyDate = new Date(1901, 0, 1);
    var beginOfCentury = (0, _dates.getBeginPrevious)('century', date);
    expect(beginOfCentury).toEqual(beginOfCenturyDate);
  });
  it('returns proper beginning of the previous decade', function () {
    var date = new Date(2017, 0, 1);
    var beginOfDecadeDate = new Date(2001, 0, 1);
    var beginOfDecade = (0, _dates.getBeginPrevious)('decade', date);
    expect(beginOfDecade).toEqual(beginOfDecadeDate);
  });
  it('returns proper beginning of the previous year', function () {
    var date = new Date(2017, 0, 1);
    var beginOfYearDate = new Date(2016, 0, 1);
    var beginOfYear = (0, _dates.getBeginPrevious)('year', date);
    expect(beginOfYear).toEqual(beginOfYearDate);
  });
  it('returns proper beginning of the previous month', function () {
    var date = new Date(2017, 0, 1);
    var beginOfMonthDate = new Date(2016, 11, 1);
    var monthRange = (0, _dates.getBeginPrevious)('month', date);
    expect(monthRange).toEqual(beginOfMonthDate);
  });
  it('throws an error when given unrecognized range type', function () {
    var date = new Date(2017, 0, 1);
    expect(function () {
      return (0, _dates.getBeginPrevious)('hamster', date);
    }).toThrow();
  });
});
describe('getBeginNext', function () {
  it('returns proper beginning of the next century', function () {
    var date = new Date(2017, 0, 1);
    var beginOfCenturyDate = new Date(2101, 0, 1);
    var beginOfCentury = (0, _dates.getBeginNext)('century', date);
    expect(beginOfCentury).toEqual(beginOfCenturyDate);
  });
  it('returns proper beginning of the next decade', function () {
    var date = new Date(2017, 0, 1);
    var beginOfDecadeDate = new Date(2021, 0, 1);
    var beginOfDecade = (0, _dates.getBeginNext)('decade', date);
    expect(beginOfDecade).toEqual(beginOfDecadeDate);
  });
  it('returns proper beginning of the next year', function () {
    var date = new Date(2017, 0, 1);
    var beginOfYearDate = new Date(2018, 0, 1);
    var beginOfYear = (0, _dates.getBeginNext)('year', date);
    expect(beginOfYear).toEqual(beginOfYearDate);
  });
  it('returns proper beginning of the next month', function () {
    var date = new Date(2017, 0, 1);
    var beginOfMonthDate = new Date(2017, 1, 1);
    var monthRange = (0, _dates.getBeginNext)('month', date);
    expect(monthRange).toEqual(beginOfMonthDate);
  });
  it('throws an error when given unrecognized range type', function () {
    var date = new Date(2017, 0, 1);
    expect(function () {
      return (0, _dates.getBeginNext)('hamster', date);
    }).toThrow();
  });
});
describe('getBeginPrevious2', function () {
  it('returns proper beginning of the decade 10 decades ago', function () {
    var date = new Date(2017, 0, 1);
    var beginOfPreviousCenturyDate = new Date(1911, 0, 1);
    var beginOfPreviousCentury = (0, _dates.getBeginPrevious2)('decade', date);
    expect(beginOfPreviousCentury).toEqual(beginOfPreviousCenturyDate);
  });
  it('returns proper beginning of the year 10 years ago', function () {
    var date = new Date(2017, 0, 1);
    var beginOfPreviousDecadeDate = new Date(2007, 0, 1);
    var beginOfPreviousDecade = (0, _dates.getBeginPrevious2)('year', date);
    expect(beginOfPreviousDecade).toEqual(beginOfPreviousDecadeDate);
  });
  it('returns proper beginning of the month 1 year ago', function () {
    var date = new Date(2017, 0, 1);
    var beginOfPreviousYearDate = new Date(2016, 0, 1);
    var beginOfPreviousYear = (0, _dates.getBeginPrevious2)('month', date);
    expect(beginOfPreviousYear).toEqual(beginOfPreviousYearDate);
  });
  it('throws an error when given unrecognized range type', function () {
    var date = new Date(2017, 0, 1);
    expect(function () {
      return (0, _dates.getBeginPrevious2)('hamster', date);
    }).toThrow();
  });
});
describe('getBeginNext2', function () {
  it('returns proper beginning of the decade 10 decades ahead', function () {
    var date = new Date(2017, 0, 1);
    var beginOfNextCenturyDate = new Date(2111, 0, 1);
    var beginOfNextCentury = (0, _dates.getBeginNext2)('decade', date);
    expect(beginOfNextCentury).toEqual(beginOfNextCenturyDate);
  });
  it('returns proper beginning of the year 10 years ahead', function () {
    var date = new Date(2017, 0, 1);
    var beginOfNextDecadeDate = new Date(2027, 0, 1);
    var beginOfNextDecade = (0, _dates.getBeginNext2)('year', date);
    expect(beginOfNextDecade).toEqual(beginOfNextDecadeDate);
  });
  it('returns proper beginning of the month 1 year ahead', function () {
    var date = new Date(2017, 0, 1);
    var beginOfNextYearDate = new Date(2018, 0, 1);
    var beginOfNextYear = (0, _dates.getBeginNext2)('month', date);
    expect(beginOfNextYear).toEqual(beginOfNextYearDate);
  });
  it('throws an error when given unrecognized range type', function () {
    var date = new Date(2017, 0, 1);
    expect(function () {
      return (0, _dates.getBeginNext2)('hamster', date);
    }).toThrow();
  });
});
describe('getEnd', function () {
  it('returns proper end of the century', function () {
    var date = new Date(2017, 0, 1);
    var endOfCenturyDate = new Date(2100, 11, 31, 23, 59, 59, 999);
    var endOfCentury = (0, _dates.getEnd)('century', date);
    expect(endOfCentury).toEqual(endOfCenturyDate);
  });
  it('returns proper end of the decade', function () {
    var date = new Date(2017, 0, 1);
    var endOfDecadeDate = new Date(2020, 11, 31, 23, 59, 59, 999);
    var endOfDecade = (0, _dates.getEnd)('decade', date);
    expect(endOfDecade).toEqual(endOfDecadeDate);
  });
  it('returns proper end of the year', function () {
    var date = new Date(2017, 0, 1);
    var endOfYearDate = new Date(2017, 11, 31, 23, 59, 59, 999);
    var endOfYear = (0, _dates.getEnd)('year', date);
    expect(endOfYear).toEqual(endOfYearDate);
  });
  it('returns proper end of the month', function () {
    var date = new Date(2017, 0, 1);
    var endOfMonthDate = new Date(2017, 0, 31, 23, 59, 59, 999);
    var monthRange = (0, _dates.getEnd)('month', date);
    expect(monthRange).toEqual(endOfMonthDate);
  });
  it('returns proper end of the day', function () {
    var date = new Date(2017, 0, 1);
    var endOfDayDate = new Date(2017, 0, 1, 23, 59, 59, 999);
    var endOfDay = (0, _dates.getEnd)('day', date);
    expect(endOfDay).toEqual(endOfDayDate);
  });
  it('throws an error when given unrecognized range type', function () {
    var date = new Date(2017, 0, 1);
    expect(function () {
      return (0, _dates.getEnd)('hamster', date);
    }).toThrow();
  });
});
describe('getEndPrevious', function () {
  it('returns proper end of the previous century', function () {
    var date = new Date(2017, 0, 1);
    var endOfCenturyDate = new Date(2000, 11, 31, 23, 59, 59, 999);
    var endOfCentury = (0, _dates.getEndPrevious)('century', date);
    expect(endOfCentury).toEqual(endOfCenturyDate);
  });
  it('returns proper end of the previous decade', function () {
    var date = new Date(2017, 0, 1);
    var endOfDecadeDate = new Date(2010, 11, 31, 23, 59, 59, 999);
    var endOfDecade = (0, _dates.getEndPrevious)('decade', date);
    expect(endOfDecade).toEqual(endOfDecadeDate);
  });
  it('returns proper end of the previous year', function () {
    var date = new Date(2017, 0, 1);
    var endOfYearDate = new Date(2016, 11, 31, 23, 59, 59, 999);
    var endOfYear = (0, _dates.getEndPrevious)('year', date);
    expect(endOfYear).toEqual(endOfYearDate);
  });
  it('returns proper end of the previous month', function () {
    var date = new Date(2017, 0, 1);
    var endOfMonthDate = new Date(2016, 11, 31, 23, 59, 59, 999);
    var monthRange = (0, _dates.getEndPrevious)('month', date);
    expect(monthRange).toEqual(endOfMonthDate);
  });
  it('throws an error when given unrecognized range type', function () {
    var date = new Date(2017, 0, 1);
    expect(function () {
      return (0, _dates.getEndPrevious)('hamster', date);
    }).toThrow();
  });
});
describe('getEndPrevious2', function () {
  it('returns proper end of the decade 10 decades ago', function () {
    var date = new Date(2017, 0, 1);
    var endOfPreviousCenturyDate = new Date(1920, 11, 31, 23, 59, 59, 999);
    var endOfPreviousCentury = (0, _dates.getEndPrevious2)('decade', date);
    expect(endOfPreviousCentury).toEqual(endOfPreviousCenturyDate);
  });
  it('returns proper end of the year 10 years ago', function () {
    var date = new Date(2017, 0, 1);
    var endOfPreviousDecadeDate = new Date(2007, 11, 31, 23, 59, 59, 999);
    var endOfPreviousDecade = (0, _dates.getEndPrevious2)('year', date);
    expect(endOfPreviousDecade).toEqual(endOfPreviousDecadeDate);
  });
  it('returns proper end of the month 1 year ago', function () {
    var date = new Date(2017, 0, 1);
    var endOfPreviousYearDate = new Date(2016, 0, 31, 23, 59, 59, 999);
    var endOfPreviousYear = (0, _dates.getEndPrevious2)('month', date);
    expect(endOfPreviousYear).toEqual(endOfPreviousYearDate);
  });
  it('throws an error when given unrecognized range type', function () {
    var date = new Date(2017, 0, 1);
    expect(function () {
      return (0, _dates.getEndPrevious2)('hamster', date);
    }).toThrow();
  });
});
describe('getValueRange', function () {
  it('returns an array of dates given two ordered dates', function () {
    var date1 = new Date(2018, 0, 1);
    var date2 = new Date(2018, 6, 1);
    var range = (0, _dates.getValueRange)('day', date1, date2);
    expect(range).toEqual([(0, _dates.getBeginOfDay)(date1), (0, _dates.getEndOfDay)(date2)]);
  });
  it('returns an array of dates given two unordered dates', function () {
    var date1 = new Date(2018, 6, 1);
    var date2 = new Date(2018, 0, 1);
    var range = (0, _dates.getValueRange)('day', date1, date2);
    expect(range).toEqual([(0, _dates.getBeginOfDay)(date2), (0, _dates.getEndOfDay)(date1)]);
  });
});
describe('getDaysInMonth', function () {
  it('returns proper number of days in a month', function () {
    var date = new Date(2017, 0, 1);
    var daysInMonth = (0, _dates.getDaysInMonth)(date);
    expect(daysInMonth).toBe(31);
  });
});
describe('getCenturyLabel', function () {
  it('returns proper label for the century a given date is in', function () {
    var date = new Date(2017, 0, 1);
    var centuryLabel = (0, _dates.getCenturyLabel)(date);
    expect(centuryLabel).toBe('2001 – 2100');
  });
});
describe('getDecadeLabel', function () {
  it('returns proper label for the decade a given date is in', function () {
    var date = new Date(2017, 0, 1);
    var decadeLabel = (0, _dates.getDecadeLabel)(date);
    expect(decadeLabel).toBe('2011 – 2020');
  });
});
describe('isWeekend', function () {
  /* eslint-disable indent */
  describe('returns proper flag (ISO 8601)', function () {
    it.each(_templateObject(), new Date(2016, 11, 30), false, new Date(2016, 11, 31), true, new Date(2017, 0, 1), true, new Date(2017, 0, 2), false)('returns $flag for $date', function (_ref) {
      var date = _ref.date,
          flag = _ref.flag;
      expect((0, _dates.isWeekend)(date, 'ISO 8601')).toBe(flag);
    });
  });
  describe('returns proper flag (US)', function () {
    it.each(_templateObject2(), new Date(2016, 11, 30), false, new Date(2016, 11, 31), true, new Date(2017, 0, 1), true, new Date(2017, 0, 2), false)('returns $flag for $date', function (_ref2) {
      var date = _ref2.date,
          flag = _ref2.flag;
      expect((0, _dates.isWeekend)(date, 'US')).toBe(flag);
    });
  });
  describe('returns proper flag (Arabic)', function () {
    it.each(_templateObject3(), new Date(2016, 11, 30), true, new Date(2016, 11, 31), true, new Date(2017, 0, 1), false, new Date(2017, 0, 2), false)('returns $flag for $date', function (_ref3) {
      var date = _ref3.date,
          flag = _ref3.flag;
      expect((0, _dates.isWeekend)(date, 'Arabic')).toBe(flag);
    });
  });
  describe('returns proper flag (Hebrew)', function () {
    it.each(_templateObject4(), new Date(2016, 11, 30), true, new Date(2016, 11, 31), true, new Date(2017, 0, 1), false, new Date(2017, 0, 2), false)('returns $flag for $date', function (_ref4) {
      var date = _ref4.date,
          flag = _ref4.flag;
      expect((0, _dates.isWeekend)(date, 'Hebrew')).toBe(flag);
    });
  });
  describe('returns proper flag (default)', function () {
    it.each(_templateObject5(), new Date(2016, 11, 30), false, new Date(2016, 11, 31), true, new Date(2017, 0, 1), true, new Date(2017, 0, 2), false)('returns $flag for $date', function (_ref5) {
      var date = _ref5.date,
          flag = _ref5.flag;
      expect((0, _dates.isWeekend)(date)).toBe(flag);
    });
  });
  /* eslint-enable indent */
});
describe('getISOLocalMonth', function () {
  it('returns proper ISO month', function () {
    var date = new Date(Date.UTC(2017, 0, 1));
    var ISOMonth = (0, _dates.getISOLocalMonth)(date);
    expect(ISOMonth).toBe('2017-01');
  });
  it('returns nothing when given nothing', function () {
    expect((0, _dates.getISOLocalMonth)()).toBeUndefined();
  });
  it('throws an error when given nonsense data', function () {
    var text = 'wololo';

    var fn = function fn() {};

    expect(function () {
      return (0, _dates.getISOLocalMonth)(text);
    }).toThrow();
    expect(function () {
      return (0, _dates.getISOLocalMonth)(fn);
    }).toThrow();
  });
});
describe('getISOLocalDate', function () {
  it('returns proper ISO date', function () {
    var date = new Date(Date.UTC(2017, 0, 1));
    var ISODate = (0, _dates.getISOLocalDate)(date);
    expect(ISODate).toBe('2017-01-01');
  });
  it('returns nothing when given nothing', function () {
    expect((0, _dates.getISOLocalDate)()).toBeUndefined();
  });
  it('throws an error when given nonsense data', function () {
    var text = 'wololo';

    var fn = function fn() {};

    expect(function () {
      return (0, _dates.getISOLocalDate)(text);
    }).toThrow();
    expect(function () {
      return (0, _dates.getISOLocalDate)(fn);
    }).toThrow();
  });
});