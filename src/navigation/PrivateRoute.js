import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookie from 'js-cookie';
import { requestGetUserInfo } from '../constants/Api'

export default class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            verified: true
        }
    }

    async getData() {
        try {
            await requestGetUserInfo()

        } catch (err) {
            if (err.code == 403) {

                this.setState({
                    verified: false
                })
                return
            }
        }
        let token = Cookie.get("SESSION_ID")
        this.setState({
            verified: token ? true : false
        })
    }

    componentWillMount() {
        this.getData()
    }

    render() {
        const { path, Component } = this.props;
        return (
            <Route path={path} exact
                render={(props) => (
                    this.state.verified == true ?
                        <Component {...props} /> :
                        <Redirect to='/auth/login' />
                )} />
        )
    }

}