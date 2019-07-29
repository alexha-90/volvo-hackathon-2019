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
          <tr style={{marginBottom: "10px"}} key={index}>
            <td>{reservation.name}</td>
            <td>{reservation.model}</td>
            <td>{reservation.startTime.slice(0,10)}</td>
            <td>{reservation.start_time_of_day}</td>
            <td>{reservation.endTime.slice(0,10)}</td>
            <td>{reservation.end_time_of_day}</td>
            <td>{reservation.email}</td>
            <td><button onClick={() => this.onClickDeny(reservation)} style={{display: "inline"}}>Deny</button>
            <button onClick={() => this.onClickApprove(reservation)} style={{display: "inline"}}>Approve</button>
            </td>
          </tr>
        )
      }
    } else {
      reservations.push(<p>No booking requests at this time</p>)
    }

    const bookings = [];
    if (this.props.bookingData && this.props.bookingData.length > 0) {
      for (const booking of this.props.bookingData) {
        bookings.push(
          <tr style={{marginBottom: "10px"}} key={booking.Id}>
            <td><a onClick={() => this.onClickBooking(booking)}>{booking.Id}</a></td>
            <td>{booking.Vehicle.Vin}</td>
            <td>{booking.User.Name}</td>
            <td>{booking.startTime}</td>
            <td>{booking.endTime}</td>
            <td>{Math.floor(booking.Vehicle.Odometer * 0.000621371)} miles</td>
            <td><span style={{color: booking.health}}>{booking.health}</span></td>
          </tr>
        )
      }
    } else {
      bookings.push(<p>No booking history at this time</p>)
    }

    return (
      <>
        <h2>Booking requests</h2>
        <table>
          <tr style={{backgroundColor: "lightblue", color: "white"}}>
            <th>Name</th>
            <th>Model</th>
            <th>Start time:</th>
            <th>Start ToD:</th>
            <th>End time:</th>
            <th>End ToD:</th>
            <th>Email:</th>
            <th>Action:</th>
          </tr>
          <tbody>
          {reservations}
          </tbody>
        </table>
        <h2>Booking history</h2>
        <table>
          <tr style={{backgroundColor: "orange", color: "white"}}>
            <th>ID</th>
            <th>Car</th>
            <th>Reserved by:</th>
            <th>Checked out:</th>
            <th>Returned:</th>
            <th>Odometer:</th>
            <th>Health:</th>
          </tr>
          <tbody>
            {bookings}
          </tbody>
        </table>
      </>
    )
  }
}

export default Bookings;
