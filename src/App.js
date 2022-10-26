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

import Spinner from "react-spinkit";

function App() {

  const [user, loading] = useAuthState(auth)

  if(loading){

    return (
      <AppLoading>
        <AppLoadingContents>
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111615.png" alt=""></img>

          <Spinner
            name='ball-spin-fade-loader'
            color='green'
            fadeIn='none'
          ></Spinner>

        </AppLoadingContents>
      </AppLoading>
    )
  }

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

const AppLoading = styled.div`
  
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;

`

const AppLoadingContents = styled.div`

  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
> img {
    height: 100px;
    padding: 20px;
    margin-bottom: 50px;
    

  }

`