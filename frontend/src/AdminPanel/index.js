import React, { Component } from 'react'
import Users from "./Users"
import Bookings from "./Bookings";
import Vehicles from "./Vehicles";
//============================================================================//


class AdminPanel extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <>
        admin apnel palceholder
        <Users/>
        <Bookings/>
        <Vehicles/>
      </>
    )
  }
}

export default AdminPanel;
