"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Days = _interopRequireDefault(require("./MonthView/Days"));

var _Weekdays = _interopRequireDefault(require("./MonthView/Weekdays"));

var _WeekNumbers = _interopRequireDefault(require("./MonthView/WeekNumbers"));

var _propTypes2 = require("./shared/propTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MonthView =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MonthView, _PureComponent);

  function MonthView() {
    _classCallCheck(this, MonthView);

    return _possibleConstructorReturn(this, _getPrototypeOf(MonthView).apply(this, arguments));
  }

  _createClass(MonthView, [{
    key: "renderWeekdays",
    value: function renderWeekdays() {
      var _this$props = this.props,
          formatShortWeekday = _this$props.formatShortWeekday,
          locale = _this$props.locale;
      return _react.default.createElement(_Weekdays.default, {
        calendarType: this.calendarType,
        locale: locale,
        formatShortWeekday: formatShortWeekday
      });
    }
  }, {
    key: "renderWeekNumbers",
    value: function renderWeekNumbers() {
      var showWeekNumbers = this.props.showWeekNumbers;

      if (!showWeekNumbers) {
        return null;
      }

      var _this$props2 = this.props,
          activeStartDate = _this$props2.activeStartDate,
          onClickWeekNumber = _this$props2.onClickWeekNumber,
          showFixedNumberOfWeeks = _this$props2.showFixedNumberOfWeeks;
      return _react.default.createElement(_WeekNumbers.default, {
        activeStartDate: activeStartDate,
        calendarType: this.calendarType,
        onClickWeekNumber: onClickWeekNumber,
        showFixedNumberOfWeeks: showFixedNumberOfWeeks
      });
    }
  }, {
    key: "renderDays",
    value: function renderDays() {
      var _this$props3 = this.props,
          calendarType = _this$props3.calendarType,
          onClickWeekNumber = _this$props3.onClickWeekNumber,
          showWeekNumbers = _this$props3.showWeekNumbers,
          childProps = _objectWithoutProperties(_this$props3, ["calendarType", "onClickWeekNumber", "showWeekNumbers"]);

      return _react.default.createElement(_Days.default, _extends({
        calendarType: this.calendarType
      }, childProps));
    }
  }, {
    key: "render",
    value: function render() {
      var showWeekNumbers = this.props.showWeekNumbers;
      var className = 'react-calendar__month-view';
      return _react.default.createElement("div", {
        className: [className, showWeekNumbers ? "".concat(className, "--weekNumbers") : ''].join(' ')
      }, _react.default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'flex-end'
        }
      }, this.renderWeekNumbers(), _react.default.createElement("div", {
        style: {
          flexGrow: 1,
          width: '100%'
        }
      }, this.renderWeekdays(), this.renderDays())));
    }
  }, {
    key: "calendarType",
    get: function get() {
      var _this$props4 = this.props,
          calendarType = _this$props4.calendarType,
          locale = _this$props4.locale;

      if (calendarType) {
        return calendarType;
      }

      switch (locale) {
        case 'en-CA':
        case 'en-US':
        case 'es-AR':
        case 'es-BO':
        case 'es-CL':
        case 'es-CO':
        case 'es-CR':
        case 'es-DO':
        case 'es-EC':
        case 'es-GT':
        case 'es-HN':
        case 'es-MX':
        case 'es-NI':
        case 'es-PA':
        case 'es-PE':
        case 'es-PR':
        case 'es-SV':
        case 'es-VE':
        case 'pt-BR':
          return 'US';
        // ar-LB, ar-MA intentionally missing

        case 'ar':
        case 'ar-AE':
        case 'ar-BH':
        case 'ar-DZ':
        case 'ar-EG':
        case 'ar-IQ':
        case 'ar-JO':
        case 'ar-KW':
        case 'ar-LY':
        case 'ar-OM':
        case 'ar-QA':
        case 'ar-SA':
        case 'ar-SD':
        case 'ar-SY':
        case 'ar-YE':
        case 'dv':
        case 'dv-MV':
        case 'ps':
        case 'ps-AR':
          return 'Arabic';

        case 'he':
        case 'he-IL':
          return 'Hebrew';

        default:
          return 'ISO 8601';
      }
    }
  }]);

  return MonthView;
}(_react.PureComponent);

exports.default = MonthView;
MonthView.propTypes = {
  activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
  calendarType: _propTypes2.isCalendarType,
  formatShortWeekday: _propTypes.default.func,
  locale: _propTypes.default.string,
  maxDate: _propTypes2.isMaxDate,
  minDate: _propTypes2.isMinDate,
  onChange: _propTypes.default.func,
  onClickWeekNumber: _propTypes.default.func,
  setActiveRange: _propTypes.default.func,
  showFixedNumberOfWeeks: _propTypes.default.bool,
  showNeighboringMonth: _propTypes.default.bool,
  showWeekNumbers: _propTypes.default.bool,
  value: _propTypes2.isValue,
  valueType: _propTypes.default.string
};