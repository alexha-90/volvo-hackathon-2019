import React, { Component } from 'react'
import moment from "moment"
import { Calendar, momentLocalizer } from "react-big-calendar";

import 'react-big-calendar/lib/sass/styles.scss'
import './styles.scss'
import './prism.scss'

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
      startDate: null,
      endDate: null,
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
    console.log(this.state);
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
            <h4>Tip: hold mouse down and drag across multiple cells</h4>
            <ul>
              <li>
                Selected start date: {this.state.startDate}
                <div>
                  <div>
                    <input type="radio" id="morningStart" name="start-time-of-day"
                           value="morning" onChange={(e) => this.onToggleStartTimeOfDay(e)}/>
                      <label htmlFor="morningStart">Morning</label>
                  </div>
                  <div>
                    <input type="radio" id="afternoonStart" name="start-time-of-day"
                           value="afternoon" onChange={(e) => this.onToggleStartTimeOfDay(e)}/>
                      <label htmlFor="afternoonStart">Afternoon</label>
                  </div>
                </div>
              </li>
              <li>
                Selected end date: {this.state.endDate}
                <div>
                  <div>
                    <input type="radio" id="morningEnd" name="end-time-of-day"
                           value="morning" onChange={(e) => this.onToggleEndTimeOfDay(e)}/>
                    <label htmlFor="morningEnd">Morning</label>
                  </div>
                  <div>
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