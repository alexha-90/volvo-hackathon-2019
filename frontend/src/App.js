import React, { Component } from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import CarPicker from './VehiclePicker';
import { convertStrToDate } from './util/DateFormat';

import {getVehicles, submitReservation} from './api';
import DatePicker from "./DatePicker";
import AdminPanel from "./AdminPanel";
import Login from "./Login";
//============================================================================//

const strapi = new Strapi("http://localhost:1337");
const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor() {
    super();
    this.state = {
      adminAccounts: [],
      submittedLogin: false,
      loadingReservationData: true,
      vehicleData: [],
      reservationData: [],
      reservationRequest: [],
      globalError: false,
      availableVehicles: []
    }
  }

  componentDidMount() {
    getVehicles()
      .then(vehicles => {vehicles.json()
        .then(vehicleData => {
          this.setState({ vehicleData: vehicleData });
          return strapi.getEntries("reservations");
        })
        .then(reservationData => {
          this.setState({ reservationData: reservationData, loadingReservationData: false });
        })
      })
      .catch(err => {
        console.error(err);
        this.setState({globalError: true, loadingReservationData: false });
      })
  }

  receiveAdminAccounts = (accounts) => {
    this.setState({ adminAccounts: accounts, submittedLogin: true })
  };

  onSelectCalendarDates = (requested) => {
    let availableVehs;
    const { reservationData } = this.state;
    /*
    for (let i = 0; i < reservationData.length; i++) {
      const iStartDate = convertStrToDate(reservationData[i].start_time);
      const iEndDate = convertStrToDate(reservationData[i].end_time);

      // descr: requested START is ok if
      //    1) After iStartDate OR
      //    2) Same day as iStartDate, but in afternoon
      console.log(requested.start.date > iStartDate)
      console.log(requested.start.date === iStartDate)
      if (requested.start.date > iStartDate ||
        (requested.start.date === iStartDate && requested.start.timeOfDay === "afternoon")
      ) {
        debugger;
      } else {
        // invalid
        debugger;
      }

      // descr: requested END is ok if
      //    1) Before iStartDate OR
      //    2) Same day as iStartDate, but in morning
      if (requested.end.date < iStartDate ||
        (requested.end.date === iStartDate && requested.end.timeOfDay === "morning")
      ) {
        debugger;
      } else {
        // invalid
        debugger;
      }
      console.log(iStartDate, iEndDate);
      debugger;
      // availableVehs.push(reservationData[i])
    }
    */
    availableVehs = this.state.vehicleData;
    this.setState({ availableVehicles: availableVehs, reservationRequest: requested })
  };

  submitReservation = (vehicle) => {
    console.log(vehicle);
    const name = prompt("What is your full name?");
    const email = prompt("What is your email?");
    const submissionObj = {
      id: "string",
      start_time: this.state.reservationRequest.start.date,
      end_time: this.state.reservationRequest.end.date,
      admin: "ccs.testcars@gmail.com",
      health: "green",
      ongoing: true,
      user: {
        schema: {
          id: uuidv1(),
          email: email,
          name: name
        }
      },
      vehicle: {
        schema: {
          admin: "ccs.testcars@gmail.com",
          vin: vehicle.Vin,
          latitude: 0,
          longitude: 0,
          model: vehicle.Model,
          year: vehicle.Year
        }
      }
    };

    console.log(submissionObj);

    debugger;

    submitReservation(submissionObj);
  };


  showCarPicker = () => {
    if (this.state.availableVehicles.length > 0) {
      return <CarPicker
        availableVehicles={this.state.availableVehicles}
        submitReservation={this.submitReservation}
      />
    } else {
      return null;
      // return <div>No vehicles found for dates you provided :(</div>
    }
  };

  render() {
    console.log('reservationData: ', this.state.reservationData);
    console.log('vehicleData: ', this.state.vehicleData);
    if (1===1) {
      return <AdminPanel />
    }
    if (!this.state.submittedLogin) {
      return (
        <main className='content-container'>
          <Login receiveAdminAccounts={this.receiveAdminAccounts}/>
        </main>
      )
    } else if (this.state.loadingReservationData) {
      return <div>Loading reservation data...</div>
    } else if (this.state.globalError) {
      return <main>:( Error occurred while fetching information. Please try again later</main>
    } else {
      return (
        <main className='content-container'>
          <DatePicker onSelectCalendarDates={this.onSelectCalendarDates}/>
          {this.showCarPicker()}
        </main>
      );
    }
  }
}

export default App;