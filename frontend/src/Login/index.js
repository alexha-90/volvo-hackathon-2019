import React, { Component } from 'react'
import { loginUser } from "../api";
import "./index.css";
//============================================================================//


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = () => {
    loginUser(this.state.email, this.state.password)
      .then(res => { res.json()
        .then(data => {
          this.props.receiveAccountInfo(data);
        })
      })
  };

  render() {
    return (
      <div style={{width:"400px", margin: "0 auto", textAlign: "center"}}>
        <br/>
        <h2>Volvo Employee Pool Car</h2>
        <h3>reservation system</h3>
        <br/>
        <label
          style={{width: "120px"}}
          htmlFor="email">Volvo Email:</label>
        <input
          type="text" id="email" name="email" onChange={(e) => this.onChange(e)} required/>
        <br/>
        <br/>
        <label
          style={{width: "120px"}}
          htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={(e) => this.onChange(e)} required/>
        <br/>
        <button
          className="ctaButton"
          onClick={this.onSubmit}>Login</button>
      </div>
    )
  }
}

export default Login;
