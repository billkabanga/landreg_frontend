import React, { Component } from 'react';
import AuthForm from '../common/AuthForm';
import postData from '../../services/api';
import { withRouter } from "react-router-dom";
import notify from 'msg-notify';

class LoginComponent extends Component {
  state = {
    phone_number: '',
    password: '',
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { password, phone_number} = this.state;
    const data = { password, phone_number }
    const successMessage = 'login successful';
    const errorMessage = 'Please check credentials provided';
    const loginResponse = await postData('auth/login/', data)
    if (loginResponse.data) {
      notify(successMessage, 'success');
      this.props.history.push("/home");
    } else {
      notify(errorMessage, 'error');
    }

  }

  render () {
    return (
      <div>
        <AuthForm handleInput={this.handleInputChange} handleClick={this.handleSubmit} />
      </div>
    )
  }
}

export default withRouter(LoginComponent);
