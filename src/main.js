import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import LoginPage from './components/loginPage.jsx';
import api from './Api';

import App from './App.jsx';
window.handleGoogleApiLoaded = () => {
    console.log('API loaded');
    api.authorize({immediate: false});
};

renderApp();
function renderApp(){
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                 <Route path='/login' component={LoginPage} /> 
            </Route>
        </Router>,
        document.getElementById('root')
    );
}
