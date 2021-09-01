import React, { useState } from 'react';
import ProfilePic from "../../assets/ProfilePic.jpg";
import "../../styles/HeaderBar.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Store from '../Store'
import Home from '../Home'
import { Wrapper, HomeButton, StoreButton, ProfilePicture } from './GeneralCompStyles/HeaderBar.styles'

function HeaderBar() {

  const logSomething = () => {
    console.log('hey it is kind of working')
  }
  
  return (
    <Router>
      <Wrapper>
        <Switch>
          <HomeButton onClick={logSomething} className="col-start-1 col-span-1 IconLocation">
            <Route path="/" component={Home}>
              Home
            </Route>
          </HomeButton>
          <StoreButton>
            <Route path="/store" component={Store}>
              Store
            </Route>
          </StoreButton>
        </Switch>
          <ProfilePicture
            src={ProfilePic}
          >
        </ProfilePicture>
      </Wrapper>
    </Router>
  );
}

export default HeaderBar
