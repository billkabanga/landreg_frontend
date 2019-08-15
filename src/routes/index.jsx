import React from 'react';
import { BrowserRouter, Route, Switch }from 'react-router-dom';
import Home from '../components/Home';
import SignUpView from '../views/auth/SignUp';
import LoginView from '../views/auth/Login';
import LandingPage from '../components/LandingPage';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} exact/>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={LoginView}/>
        <Route path="/signup" component={SignUpView}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
