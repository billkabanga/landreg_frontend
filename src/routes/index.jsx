import React from 'react';
import { BrowserRouter, Route, Switch }from 'react-router-dom';
import Home from '../components/Home';
import UserLogin from '../components/Login';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={UserLogin}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
