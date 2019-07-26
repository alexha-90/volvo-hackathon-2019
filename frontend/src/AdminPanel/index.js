import React, { Component } from 'react'
import Users from "./Users"
import Bookings from "./Bookings";
import Vehicles from "./Vehicles";
import { getUsers } from "../api";
//============================================================================//


class AdminPanel extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      contentToDisplay: ""
    }
  }

  componentDidMount() {
    getUsers()
      .then(users => {users.json()
        .then(users => {
          this.setState({ users: users });
          // return strapi.getEntries("reservations");
        })
        // .then(reservationData => {
        //   this.setState({ reservationData: reservationData, loadingReservationData: false });
        // })
      })
      .catch(err => {
        console.error(err);
        this.setState({globalError: true, loadingReservationData: false });
      })
  }

  onToggleDisplayRadio = (e) => {
    this.setState({ contentToDisplay: e.target.value})
  };

  showContent = () => {
    if (this.state.contentToDisplay === "bookings") {
      return (<Bookings/>)
    } else if (this.state.contentToDisplay === "vehicles") {
      return (<Vehicles/>)
    } else if (this.state.contentToDisplay === "users") {
      return (<Users users={this.state.users}/>)
    }
  };

  render() {
    return (
      <>
        <form>
          <input type="radio" id="bookings" name="content"
                 value="bookings" onChange={(e) => this.onToggleDisplayRadio(e)}/>
          <label htmlFor="bookings" style={{marginRight: "20px"}}>Bookings</label>
          <input type="radio" id="vehicles" name="content"
                 value="vehicles" onChange={(e) => this.onToggleDisplayRadio(e)}/>
          <label htmlFor="vehicles" style={{marginRight: "20px"}}>Vehicles</label>
          <input type="radio" id="users" name="content"
                 value="users" onChange={(e) => this.onToggleDisplayRadio(e)}/>
          <label htmlFor="users" style={{marginRight: "20px"}}>Users</label>
        </form>
        {this.showContent()}
      </>
    )
  }
}

export default AdminPanel;
