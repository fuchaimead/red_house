import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Menu from './Menu';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import wallpaper from '../images/Wallpaper.jpg'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <img src={wallpaper} alt='wallpaper' />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/menu' component={Menu} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
        <Footer /> 
      </div>
    );
  }
}

export default App;
