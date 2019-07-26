import React, { Component } from 'react';
import "./vehicles.css";
//============================================================================//


class VehiclePicker extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    const vehicles = [];
    for (const [index, vehicle] of this.props.vehicles.entries()) {
      vehicles.push(
        <li className="vehicle-item-admin" key={index}>
          <div className="vehicle-heading-admin">
            <h3 style={{display: "inline"}}>{index+1}.&nbsp;</h3>
            {vehicle.Year} Volvo {vehicle.Model} {vehicle.Trim} - {vehicle.Engine}
          </div>
          <div className="vehicle-vin-admin">VIN: {vehicle.Vin}</div>
          <img
            className="vehicle-image-admin"
            width="120px" height= "60px" src={vehicle.Image} alt={vehicle.Model} />
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