import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import SessionActions from './actions/SessionActions';
import SessionStore from './stores/SessionStore';
import LoginPage from './components/loginPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import LoggedInLayout from './components/LoggedInLayout.jsx';
import api from './API';
import TaskPage from './components/TasksPage.jsx';
import TasklistsPage from './components/TasklistsPage.jsx';

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
                     <Route component={LoggedInLayout}>
                         <Route path='/about' component={AboutPage} />
                         <Route path='/lists' component={TasklistsPage}>
                             <Route path='/lists/:id' component={TasksPage} />
                         </Route>
                     </Route>
            </Route>
        </Router>,
        document.getElementById('root')
    );
}
