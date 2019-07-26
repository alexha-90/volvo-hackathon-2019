import React, { Component } from 'react'
import { loginUser } from "../api";
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
          this.props.receiveAdminAccounts(data);
        })
      })
  };

  render() {
    console.log(this.state);
    return (
      <>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" onChange={(e) => this.onChange(e)} required/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={(e) => this.onChange(e)} required/>
        <button onClick={this.onSubmit}>Login</button>
      </>
    )
  }
}

export default Login;
