import React, { Component } from 'react'
import "./users.css";
//============================================================================//


class Users extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    if (this.props.users.length > 0) {
      const users = [];
      for (const [index, user] of this.props.users.entries()) {
        if (index > 0) { // FIXME: hack since first entry is blank
          users.push(
            <tr style={{marginBottom: "10px"}} key={index}>
              <td>Name: {user.Name}</td>
              <td>Email: {user.userEmail}</td>
            </tr>
          )
        }
      }
      return (
        <>
          <table>
            <tr style={{backgroundColor: "lightblue", color: "white"}}>
              <th>Name</th>
              <th>Email</th>
            </tr>
            <tbody>
              {users}
            </tbody>
          </table>
        </>
      )
    } else {
      return null;
    }
  }
}

export default Users;
