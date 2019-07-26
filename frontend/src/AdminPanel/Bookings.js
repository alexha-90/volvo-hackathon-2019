import React, { Component } from 'react'
import BookingDetails from './BookingDetails'
import { submitApprovedReservation } from "../api";

//============================================================================//


class Bookings extends Component {
  constructor() {
    super();
    this.state = {
      selectedBooking: null
    }
  }

  onClickBooking = (booking) => {
    if (booking == null) {
      this.setState({
        ...this.state,
        selectedBooking: null
      })
    } else if (this.state.selectedBooking && this.state.selectedBooking.Id === booking.Id) {
      this.setState({
        ...this.state,
        selectedBooking: null
      })
    } else {
      this.setState({
        ...this.state,
        selectedBooking: booking
      })
    }
  }

  onClickDeny = (reservation) => {
    // TBD
  };

  onClickApprove = (reservation) => {
    const submitObj = {
      admin: reservation.admin,
      startTime: reservation.startTime,
      endTime: reservation.endTime,
      id: reservation.uuid,
      status: "approved",
      health: "green",
      user: {
        userEmail: reservation.email
      },
      vehicle: {
        vin: reservation.vin
      }
    };
    submitApprovedReservation(submitObj)
  };

  render() {
    if (this.state.selectedBooking) {
      return (
        <>
          <button onClick={() => this.onClickBooking(null)}>Return</button>
          <BookingDetails booking={this.state.selectedBooking} />
        </>
      )
    }

    const reservations = [];
    if (this.props.reservationData.length > 0) {
      for (const [index, reservation] of this.props.reservationData.entries()) {
        reservations.push(
          <li style={{marginBottom: "10px"}} key={index}>
            <div>Name: {reservation.name}</div>
            <div>Start time: {reservation.startTime}</div>
            <div>Start time of day: {reservation.start_time_of_day}</div>
            <div>End date: {reservation.endTime}</div>
            <div>End time of day: {reservation.end_time_of_day}</div>
            <div>Email: {reservation.email}</div>
            <button onClick={() => this.onClickDeny(reservation)}>Deny</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => this.onClickApprove(reservation)}>Approve</button>
          </li>
        )
      }
    } else {
      reservations.push(<p>No booking requests at this time</p>)
    }

    const bookings = [];
    if (this.props.bookingData && this.props.bookingData.length > 0) {
      for (const booking of this.props.bookingData) {
        bookings.push(
          <li style={{marginBottom: "10px"}} key={booking.Id}>
            <div>ID: <a onClick={() => this.onClickBooking(booking)}>{booking.Id}</a></div>
            <div>Car: {booking.Vehicle.Vin}</div>
            <div>Reserved by: {booking.User.Name}</div>
            <div>Checked out: {booking.startTime}</div>
            <div>Returned: {booking.endTime}</div>
            <div>Odometer: {Math.floor(booking.Vehicle.Odometer * 0.000621371)} miles</div>
            <div>Health: <span style={{color: booking.health}}>{booking.health}</span></div>
          </li>
        )
      }
    } else {
      bookings.push(<p>No booking history at this time</p>)
    }

    return (
      <>
        <h2>Booking requests</h2>
          <ul>
            {reservations}
          </ul>
        <h2>Booking history</h2>
          <ul>
            {bookings}
          </ul>
      </>
    )
  }
}

export default Bookings;
