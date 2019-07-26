import React, { Component } from 'react'

class BookingDetails extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <h2>Booking details for booking: {this.props.booking.Id}</h2>
    )
  }
}

export default BookingDetails;
