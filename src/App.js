/* import "./styles/HeaderBar.css";
import HeaderBar from "./components/Header/HeaderBar.js"
import PageLayout from "./components/Page/PageLayout.js" */
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import { AppContainer } from './App.styles';
import Profile from './components/Profile';

function App() {
  const adminUser = {
    email: "user@user.com",
    password: "password"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details.name);

    if (details.email == adminUser.email && details.password === adminUser.password) {
      console.log("Logged In")
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      console.log("details do not match!")
      setError("Details do not match")
    }

  }

  const Logout = () => {
    /* console.log("Logout"); */
    setUser({ name: "", email: "" });
  }

  return (
    <Router>
      <div className="App">
        {(user.email !== "user@user.com") ? (
          <AppContainer>
            <Switch>
              <Route path="/">
                <Profile/>
                {/* <Home/> */}
              </Route>
            </Switch>
            {/* <h2>Welcome, <span>{user.name}</span></h2> */}
          </AppContainer>
        ) : ( 
            <LoginForm Login={Login} error={error} />
        )}
      </div>
    </Router>
  );
}

export default App;


/* import "./styles/HeaderBar.css";
import HeaderBar from "./components/Header/HeaderBar.js"
import PageLayout from "./components/Page/PageLayout.js"

function App() {
  return (
    <div className="border-2 relative h-screen">
        <HeaderBar></HeaderBar>
        <PageLayout></PageLayout>
    </div>
  );
}

export default App; */
