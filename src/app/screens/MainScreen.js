import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import { ROUTER } from '../constants/Constant';
import { requestHomeData } from '../../app/constants/Api';
import Axios from 'axios';
import reactotron from '../../ReactotronConfig';
export default class UserScreen extends Component {

    async getData() {
        reactotron.log("hello")
        try {
            let res = await requestHomeData();
            reactotron.log(res)
        } catch (err) {
            reactotron.log(err)
        }

    }

    render() {
        this.getData()
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Link to={ROUTER.HOME} >
                        <a
                            className="App-link"
                        >
                            HOME SCREEN
                        </a>
                    </Link>
                    <Link to={ROUTER.USER} >
                        <a
                            className="App-link"
                        >
                            USER SCREEN
                        </a>
                    </Link>
                </header>
            </div>
        )
    }
}
