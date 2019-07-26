import React, { Component } from 'react'

class BookingDetails extends Component {
  constructor() {
    super();
    this.state = {
      resultJSON: null
    }
  }

  componentDidMount() {
    const { booking } = this.props
    const jsonURL = `https://volvo-labs-development-uswest2.s3.amazonaws.com/${booking.Vehicle.Vin}/${booking.Id}/result.json`
    console.log(jsonURL)

    return fetch(jsonURL)
            .then(json => {
              console.log(json)
              this.setState({
                ...this.state,
                resultJSON: json
              })
            })
  }

  render() {
    const { booking } = this.props

    const outURL = `https://volvo-labs-development-uswest2.s3.amazonaws.com/${booking.Vehicle.Vin}/${booking.Id}/out.png`
    const inURL = `https://volvo-labs-development-uswest2.s3.amazonaws.com/${booking.Vehicle.Vin}/${booking.Id}/in.png`
    const resultURL = `https://volvo-labs-development-uswest2.s3.amazonaws.com/${booking.Vehicle.Vin}/${booking.Id}/result.png`
    const jsonURL = `https://volvo-labs-development-uswest2.s3.amazonaws.com/${booking.Vehicle.Vin}/${booking.Id}/result.json`

    return (
      <>
        <h2>Booking details for booking: {booking.Id}</h2>
        <div style={{
          flex: 'container',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          justifyContent: 'space-around',
          alignItems: 'center',
          alignContent: 'stretch',
          width: '100%'
        }}>
          <a href={outURL} target="_blank"><img src={outURL} style={{width: '60%'}} /></a>
          <a href={inURL} target="_blank"><img src={inURL} style={{width: '60%'}} /></a>
          <div>
            <a href={resultURL} target="_blank"><img src={resultURL} style={{width: '60%'}} /></a>
            <div>{this.state.resultJSON ? JSON.stringify(this.state.resultJSON) : "Confidence: unknown" }</div>
          </div>
        </div>
      </>
    )
  }
}

export default BookingDetails;
