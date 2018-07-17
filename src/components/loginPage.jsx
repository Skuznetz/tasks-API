import React from 'react';
import './LoginPage.less';
const LoginPage = React.createClass({
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