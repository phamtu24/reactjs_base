import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';
import MainScreen from '../screens/MainScreen';
import AuthLoading from '../screens/Auth/AuthLoading';
import PrivateRoute from './PrivateRoute'

export class AppNavigator extends Component {

    render() {
        return (
            <Router>
                <Route path='/Login' exact component={AuthLoading} />
                <Route path='/main' exact component={MainScreen} />
                <Route path='/home' exact component={HomeScreen} />
                <PrivateRoute path='/user' exact Component={UserScreen} />
                {/* <PrivateRoute path="/" Component={MailData} /> */}
            </Router>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator)
