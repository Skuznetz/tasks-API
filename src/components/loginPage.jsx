import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
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