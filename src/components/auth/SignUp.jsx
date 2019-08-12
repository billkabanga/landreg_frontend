import React, { Component } from 'react';
import AuthForm from '../common/AuthForm';

class SignUpComponent extends Component {
  render () {
    return (
      <div>
        <AuthForm signup/>
      </div>
    )
  }
}

export default SignUpComponent;
