import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {ApplicationList} from './ApplicationStatus';
import {newLogin} from './Login';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import { Header } from "./Header";
import { logOut } from './logout';

// let Auth;



// Auth = sessionStorage.getItem("auth");



ReactDOM.render((
  <BrowserRouter> 
  <Switch>
    <React.Fragment>
      <div id="screensize">
        <App />
        <Header />
        <div className="container">
        <Route path="/ApplicationStatus" component={ApplicationList} />
        <Route path="/newlogin" component={newLogin} />
        <Route path="/logout" component={logOut} />
        </div>
        </div> 
      </React.Fragment>
    </Switch>
  </BrowserRouter>
  ), 
  document.getElementById('root')
)
