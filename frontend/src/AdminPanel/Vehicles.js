import React, { Component } from 'react'
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
        <li style={{marginBottom: "10px"}} key={index}>
          <div>{vehicle.Year} {vehicle.Model} {vehicle.Trim} {vehicle.Engine}</div>
          <div>VIN: {vehicle.Vin}</div>
          <img width="100px" height= "100px" src={vehicle.Image} alt={vehicle.Model} />
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