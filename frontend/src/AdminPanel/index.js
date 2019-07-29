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
      contentToDisplay: "",
      globalError: false
    }
  }

  componentDidMount() {
    getUsers()
      .then(users => {users.json()
        .then(users => {
          this.setState({ users: users });
        })
        // .then(reservationData => {
        //   this.setState({ reservationData: reservationData, loadingReservationData: false });
        // })
      })
      .catch(err => {
        console.error(err);
        this.setState({globalError: true });
      })
  }

  onToggleDisplayRadio = (e) => {
    this.setState({ contentToDisplay: e.target.value})
  };

  showContent = () => {
    if (this.state.contentToDisplay === "bookings") {
      return (
        <div style={{width: "100%!important"}}>
          <Bookings reservationData={this.props.reservationData} bookingData={this.props.bookingData}/>
        </div>
      )
    } else if (this.state.contentToDisplay === "vehicles") {
      return (<Vehicles vehicles={this.props.vehicleData}/>)
    } else if (this.state.contentToDisplay === "users") {
      return (<Users users={this.state.users}/>)
    }
  };

  render() {
    if (this.state.globalError) {
      return <main>:( Error occurred while fetching information. Please try again later</main>
    } else {
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
}

export default AdminPanel;
