/* import logo from './logo.svg'; */
import './App.css';
import FirstScr from "./components/FirstScr";
import Precursive from "./components/precursive";
import VideoComp from "./components/videoComp"
import { BrowserRouter as Router, withRouter, Redirect, Route, Switch } from "react-router-dom";
import {useState} from "react";
import React from 'react';
import backBtn from "./images/play-btn.png"
import homeBtn from "./images/home-btn.png"

function App(props) {
  const [state, setState] = useState({visible:false, history:null});

  function setVisibility(history){

    setState({
      visible:true,
      history
    });
  }

  function gotoBack(){
    setState({visible:false})
    state.history.goBack()
  }

  function gotoHome(){
    setState({visible:false})
    state.history.push("./")
  }

  return (
    
    <div className="App">
      
      {state.visible ?  <div id="backBtn">
          <div className="btn-icon oragnge-btn play-btn" onClick={()=> gotoBack()}>
            <img src={backBtn}/>
          </div>
          <div className="btn-icon red-btn home-btn" onClick={()=> gotoHome()}>
            <img src={homeBtn}/>
          </div>
      </div>: ''}

      <Router>
      <Switch>
        <Route 
          path={"/"}
            exact={true}
            render = {(props)=>{
            props.setVisibility = setVisibility;
            return <FirstScr {...props}/>
            }}
            /* component={FirstScr} */
        />

        <Route 
          path={"/precursive"}
            exact={true}
            render = {(props)=>{
              props.setVisibility = setVisibility;
              return <Precursive {...props}/>
              }}
            /* component={Precursive} */
        />

        <Route 
          path={"/videoComp"}
            exact={true}
            render = {(props)=>{
              props.setVisibility = setVisibility;
              return <VideoComp {...props}/>
              }}
            /* component={Precursive} */
        />
      </Switch>
      </Router>

      {/* <VideoComponent src="assets/animations/supercity_1.mp4"/> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
