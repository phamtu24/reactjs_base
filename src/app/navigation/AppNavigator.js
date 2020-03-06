import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';
import MainScreen from '../screens/MainScreen';
import ROUTER from '../constants/Constant';

export class AppNavigator extends Component {

    render() {
        return (
            <Router>
                <Route path='/' exact component={MainScreen} />
                <Route path='/home' exact component={HomeScreen} />
                <Route path='/user' exact component={UserScreen} />
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
