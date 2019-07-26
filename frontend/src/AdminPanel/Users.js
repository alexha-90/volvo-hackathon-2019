import React, { Component } from 'react'
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
        users.push(
          <li style={{marginBottom: "10px"}} key={index}>
            <div>Name: {user.Name}</div>
            <div>Email: {user.userEmail}</div>
          </li>
        )
      }
      return (
        <>
          <ul>
            {users}
          </ul>
        </>
      )
    } else {
      return null;
    }
  }
}

export default Users;
