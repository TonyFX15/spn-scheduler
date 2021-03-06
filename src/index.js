//run with server or default npm start
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Admin from './Admin.js';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import EditReservations from "./EditReservations";
import Login from "./Login";

try {
        ReactDOM.render(
            <Router>
                    <Route exact path="/" render={() => (
                        <Redirect to="/login"/>
                    )}/>
                    <Route exact path="/calendar" component={App}/>
                    <Route path="/myreservations" component={EditReservations}/>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/login" component={Login}/>
            </Router>, document.getElementById('root')
        );
}
catch {
        alert('Unable to locate server...')
}

//Testing
//ReactDOM.render(<Login />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
