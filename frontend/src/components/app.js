import React from 'react';
import {Route} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PropertiesByZip from './region/zipcode_container';

const App = () => {
    return(   
     <div>
        <NavBarContainer />
        
        <Switch>
            <Route path='/zipcode' component={PropertiesByZip} />
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
    )
};

export default App;