import React, { Component } from 'react';
import { UserConsumer } from './userContext';

export class CompomentF extends Component {
  render() {
    return (
      <UserConsumer>
        {username => {
          return <div>Hello {username}</div>
        }}
      </UserConsumer>
    )
  }
}

export default CompomentF

