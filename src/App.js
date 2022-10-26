import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import styled from "styled-components";

import Home from "./components/Home";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";
import Login from "./components/Login";

import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from "./firebase";


function App() {

  const [user, loading] = useAuthState(auth)

  return (
    <div className="app">
      <Router>
        {
          !user? (

            <Login></Login>
          ):(

        <>
          <Home></Home>
          <AppBody>
            <SideBar></SideBar>
            <Switch>
              
              <Chat></Chat>
            </Switch>
          </AppBody>
        </>
          )
        }
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
