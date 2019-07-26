import React, { Component } from 'react'
import { submitApprovedReservation } from "../api";

//============================================================================//


class Bookings extends Component {
  constructor() {
    super();
    this.state = {}
  }

  onClickDeny = (reservation) => {
    // TBD
  };

  onClickApprove = (reservation) => {


    submitApprovedReservation(reservation)
  };

  render() {
    if (this.props.reservationData.length > 0) {
      const reservations = [];
      for (const [index, reservation] of this.props.reservationData.entries()) {
        reservations.push(
          <li style={{marginBottom: "10px"}} key={index}>
            <div>Name: {reservation.name}</div>
            <div>Start date: {reservation.start_time}</div>
            <div>Start time of day: {reservation.start_time_of_day}</div>
            <div>End date: {reservation.end_time}</div>
            <div>End time of day: {reservation.end_time_of_day}</div>
            <div>Email: {reservation.end_time} {reservation.end_time_of_day}</div>
            <button onClick={() => this.onClickDeny(reservation)}>Deny</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => this.onClickApprove(reservation)}>Approve</button>
          </li>
        )
      }
      return (
        <>
          <ul>
            {reservations}
          </ul>
        </>
      )
    } else {
      return null;
    }
  }
}

export default Bookings;
