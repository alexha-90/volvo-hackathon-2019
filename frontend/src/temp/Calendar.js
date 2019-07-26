import React, { Component } from 'react';
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
import './Calendar.css';
//============================================================================//

class CalendarComponent extends Component {
  state = {
    hasMadeSelection: false,
    date: [new Date(), new Date()]
  };

  onChange = date => {
    // const fourDays = 4 * (24*60*60*1000); // hours*minutes*seconds*milliseconds
    // if (Math.round(Math.abs((date[1].getTime() - date[0].getTime())/(fourDays+1)))) {
    //   alert('FIXME. Logic needs to account for 4th day. Should show calendar again' +
    //     ' Maximum rental is 4 consecutive days');
    //   return;
    // }
    this.setState({ date, hasMadeSelection: true });
  };

  onSubmit = () => {
    this.props.onSelectCalendarDates([this.state.date[0], this.state.date[1]])
  };

  render() {
    return (
      <>
        <DateTimeRangePicker
          minDate={new Date()}
          maxDate={new Date((+new Date()) + (3 * 2592000000))} // 3 months away. Assuming 30 days in month.
          isCalendarOpen={true} // display on initial load
          clearIcon={null}
          calendarClassName={'calendar-picker-extended-styles'}
          format={'MM/dd/y__h:mm a'}
          disableClock={true}
          onChange={this.onChange}
          value={this.state.date}
        />
        <hr />
        <button
          style={{marginTop: '300px'}}
          onClick={() => this.onSubmit()}
          disabled={!this.state.hasMadeSelection}
        >
          Submit
        </button>
      </>
    );
  }
}

export default CalendarComponent;