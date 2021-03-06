import React from 'react';

//import {Route} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import PropertiesByZip from './region/zipcode_container';

import HomeContainer from './home/home_container.js';


const App = () => {
    return(   
    <div>
        <NavBarContainer />
        
        <Switch>
            <ProtectedRoute path='/zipcode/:zipcode' component={PropertiesByZip} />
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/home" component={HomeContainer} />
        </Switch>
    </div>
    )
};

export default App;