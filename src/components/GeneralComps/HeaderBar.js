import React, { useState, useContext } from 'react';
import ProfilePic from "../../assets/ProfilePic.jpg";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Store from '../Store'
import Home from '../Home'
import "./GeneralComps.css"
import { UserContext } from './UserContext'

function HeaderBar() {

  const logSomething = () => {
    console.log('hey it is kind of working')
  }

  const msg = useContext(UserContext)
  
  return (
    <Router>
      <div className="header-wrapper-ele">
        <Switch>
          <div onClick={logSomething} className="home-button col-start-1 col-span-1 IconLocation">
            <Route path="/" component={Home}>
              Home
            </Route>
          </div>
          <div className="store-button">
            <Route path="/store" component={Store}>
              Store
            </Route>
          </div>
        </Switch>
          <div
            className="profile-pic"
            src={ProfilePic}
          >
        </div>
      </div>
      {msg}
    </Router>
  );
}

export default HeaderBar
