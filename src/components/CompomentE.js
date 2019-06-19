import React, { Component } from 'react';
import ComponentF from './CompomentF';
import UserContext from './userContext';

export class CompomentE extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF />
      </div>
    )
  }
}

export default CompomentE
