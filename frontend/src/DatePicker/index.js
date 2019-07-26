import React, { Component } from 'react'
import moment from "moment"
import { Calendar, momentLocalizer } from "react-big-calendar";

import 'react-big-calendar/lib/sass/styles.scss'
import './styles.scss';
import './prism.scss';
import './index.css';

import { myEventsList } from "./newEvents";
//============================================================================//


class DatePicker extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      reservation: {
        start: {
          date: null,
          timeOfDay: ""
        },
        end: {
          date: null,
          timeOfDay: ""
        }
      },
      startDate: "",
      endDate: "",
      tooManyDaysWarning: false
    }
  }

  onSelectSlots = (e) => {
    return this.setState({
      reservation: {
        start: {
          ...this.state.reservation.start,
          date: e.slots[0],
        },
        end: {
          ...this.state.reservation.end,
          date: e.slots[e.slots.length - 1]
        }
      },
      startDate: JSON.stringify(e.slots[0]),
      endDate: JSON.stringify(e.slots[e.slots.length - 1]),
      tooManyDaysWarning: e.slots.length > 4
    })
  };

  onClickSubmit = () => {
    this.props.onSelectCalendarDates(this.state.reservation);
  };

  // FIXME: can be combined
  onToggleStartTimeOfDay = (e) => {
    this.setState({ reservation: {
        start: {
          ...this.state.reservation.start,
          timeOfDay: e.target.value
        },
        end: {
          ...this.state.reservation.end
        }
    }});
  };

  // FIXME: can be combined
  onToggleEndTimeOfDay = (e) => {
    this.setState({ reservation: {
        start: {
          ...this.state.reservation.start
        },
        end: {
          ...this.state.reservation.end,
          timeOfDay: e.target.value
        }
      }});
  };


  render() {
    const localize = momentLocalizer(moment);
    const startDate = this.state.startDate.length > 0 ? this.state.startDate.slice(1, this.state.startDate.indexOf("T")) : "";
    const endDate = this.state.endDate.length > 0 ? this.state.endDate.slice(1, this.state.endDate.indexOf("T")) : "";

    return (
      <>
        <div className="examples">
          <div className="example">
            <Calendar
              selectable={true}
              onSelectSlot={(e) => this.onSelectSlots(e)}
              views={['month']}
              localizer={localize}
              events={myEventsList}
              startAccessor="start"
              endAccessor="end"
            />
            <h6>Tip: hold mouse down and drag across multiple cells</h6>
            <br/>
            <ul className="reservation-list">
              <li>
                Selected start date: {startDate}
                <div>
                  <div className="radio-button">
                    <input type="radio" id="morningStart" name="start-time-of-day"
                           value="morning" onChange={(e) => this.onToggleStartTimeOfDay(e)}/>
                      <label htmlFor="morningStart">Morning</label>
                  </div>
                  <div className="radio-button">
                    <input type="radio" id="afternoonStart" name="start-time-of-day"
                           value="afternoon" onChange={(e) => this.onToggleStartTimeOfDay(e)}/>
                      <label htmlFor="afternoonStart">Afternoon</label>
                  </div>
                </div>
              </li>
              <li>
                Selected end date: {endDate}
                <div>
                  <div className="radio-button">
                    <input type="radio" id="morningEnd" name="end-time-of-day"
                           value="morning" onChange={(e) => this.onToggleEndTimeOfDay(e)}/>
                    <label htmlFor="morningEnd">Morning</label>
                  </div>
                  <div className="radio-button">
                    <input type="radio" id="afternoonEnd" name="end-time-of-day"
                           value="afternoon" onChange={(e) => this.onToggleEndTimeOfDay(e)}/>
                    <label htmlFor="afternoonEnd">Afternoon</label>
                  </div>
                </div>
              </li>
            </ul>
            <span style={{color: "orange"}}>
            {this.state.tooManyDaysWarning ?
              "You Selected more than the limited four consecutive (4) days. Must be exception case. Proceed w/ caution"
              : ""}
            </span>
            <button
              className="see-vehicles-btn"
              disabled={
                !this.state.reservation.start.date ||
                !this.state.reservation.start.timeOfDay ||
                !this.state.reservation.end.date ||
                !this.state.reservation.end.timeOfDay
              }
              onClick={() => this.onClickSubmit()}>See available vehicles for selected date(s)
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default DatePicker;