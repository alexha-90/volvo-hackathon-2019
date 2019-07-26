import React, { Component } from 'react';
import "./index.css";
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
      vehicles.push(
        <li style={{marginBottom: "10px"}} key={index} className="vehicle-li">
          <div className="heading"><span>{vehicle.Year}</span> Volvo {vehicle.Model} - {vehicle.Trim} {vehicle.Engine}</div>
          <div className="vin">VIN: {vehicle.Vin}</div>
          <img width="200px" height= "100px" src={vehicle.Image} alt={vehicle.Model} />
          <br/>
          <button className="submit-button" onClick={() => this.onSubmit(vehicle)}>Submit request for this vehicle</button>
        </li>
      )
    }
    return (
      <>
        <ul className="vehicle-ul">
          {vehicles}
        </ul>
      </>
    )
  }
}

export default VehiclePicker;