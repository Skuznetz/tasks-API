import React from 'react';

import SessionStore from '../stores/SessionStore';
import SessionActions from '../actions/SessionActions';
import './LoginPage.less';
function getStateFromFlux() {
    return {
        isLoggedIn: SessionStore.isLoggedIn()
    };
}

const LoginPage = React.createClass({
      getInitialState() {
        return getStateFromFlux();
    },
    componentDidMount() {
        SessionStore.addChangeListener(this._onChange);
    },

    componentWillUpdate(nextProps, nextState) {
        if (nextState.isLoggedIn) {
            this.contex.router.replace('/about');  
        }
    },

    componentWillUnmount() {
        SessionStore.removeChangeListener(this._onChange);
    },
    handleLoginIn(){
                SessionActions.authorize();
    },
    render(){
        return (
            <div className='LoginPage'>
                <div className='LoginPage__banner'>
                    <div className='LoginPage__text'>
                        <h1>Serg task</h1>
                        <p>123</p>
                        <button 
                            className='login-button'
                            label='Log in'
                            onClick={this.handleLogIn} />

                    </div>
                    <img
                        src='/img/'
                        className='LoginPage__image' />
                </div>
            </div>
        );
    },
     _onChange() {
        this.setState(getStateFromFlux());
    }
});

export default LoginPage;