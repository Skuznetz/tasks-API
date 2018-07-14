import React from 'react';

const LoginPage = React.createClass({
    handleLoginIn(){
        console.log('Login clicked');
    },
    render(){
        return (
            <div className='LoginPage'>
                LoginPage
            </div>
        );
    }
});

export default LoginPage;