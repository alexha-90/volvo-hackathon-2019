import React, { Component } from 'react';
//============================================================================//

class VehiclePicker extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  
  onSubmit = (vehicle) => {
    this.props.submitReservation(vehicle);
  };

  render() {
    const vehicles = [];
    for (const [index, vehicle] of this.props.availableVehicles.entries()) {
      console.log(index, vehicle);
      vehicles.push(
        <li style={{marginBottom: "10px"}} key={vehicle.Vin}>
          <div>{vehicle.Year} {vehicle.Model} {vehicle.Trim} {vehicle.Engine}</div>
          <div>VIN: {vehicle.Vin}</div>
          <button onClick={() => this.onSubmit(vehicle)}>Submit request for this vehicle</button>
        </li>
      )
    }
    return (
      <>
        <ul>
          {vehicles}
        </ul>
      </>
    )
  }



}

export default VehiclePicker;