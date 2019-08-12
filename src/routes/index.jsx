import React from 'react';
import { BrowserRouter, Route, Switch }from 'react-router-dom';
import Home from '../components/Home';
import SignUpView from '../views/auth/SignUp';
import LoginView from '../views/auth/Login';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={LoginView}/>
        <Route path="/signup" component={SignUpView}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
