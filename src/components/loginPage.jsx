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
    handleLoginIn(){
        console.log('Login clicked');
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
    }
});

export default LoginPage;