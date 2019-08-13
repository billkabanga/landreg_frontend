import React, { Component } from 'react';
import AuthForm from '../common/AuthForm';
import postData from '../../services/api';
import { withRouter } from "react-router-dom";
import { compose } from 'recompose';
import 'msg-notify/dist/notify.css';
import notify from 'msg-notify';

class SignUpComponent extends Component {
  state = {
    username: '',
    phone_number: '',
    password: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { username, password, phone_number } = this.state;
    const data = { username, password, phone_number }
    const successMessage = 'Thank you for registering...';
    const errorMessage = 'Please check credentials provided';
    const newUserResponse = await postData('auth/signup/', data)
    if (newUserResponse.data) {
      notify(successMessage, 'success');
      this.props.history.push("/login");
    } else if (newUserResponse.errorMessage) {
      notify(errorMessage, 'error');
    }
  }

  render () {
    return (
      <div>
        <AuthForm handleInput={this.handleInputChange} handleClick={this.handleSubmit} signup/>
      </div>
    )
  }
}

export default compose(withRouter)(SignUpComponent);
