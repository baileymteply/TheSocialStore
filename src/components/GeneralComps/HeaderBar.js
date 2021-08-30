import React, { useState } from 'react';
import ProfilePic from "../../assets/ProfilePic.jpg";
import "../../styles/HeaderBar.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Store from '../Store'
import Home from '../Home'

function HeaderBar() {

  const logSomething = () => {
    console.log('hey it is kind of working')
  }
  
  return (
    <Router>
      <div className="text-7sb text-white grid grid-cols-8 h-1/6 shadow-2xl">
        <Switch>
          <button onClick={logSomething} className="col-start-1 col-span-1 IconLocation">
            <Route path="/" component={Home}>
              Home
            </Route>
          </button>
          <button className="col-start-2 col-span-1 IconLocation">
            <Route path="/store" component={Store}>
              Store
            </Route>
          </button>
        </Switch>
        {/*<div className="col-start-3 col-span-1 IconLocation">
        <h1 className="">About</h1>
      </div> */}
        <div className="col-start-8 IconLocation">
          <img
            src={ProfilePic}
            className="mx-8 w-20 h-20 rounded-full border-2 border-white"
            alt=""
          />
        </div>
      </div>
    </Router>
  );
}

export default HeaderBar
