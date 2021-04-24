/* import logo from './logo.svg'; */
import './App.css';
import FirstScr from "./components/FirstScr";
import Precursive from "./components/precursive"
import { BrowserRouter as Router, withRouter, Redirect, Route, Switch } from "react-router-dom";
import {useState} from "react";
import React from 'react';

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

  return (
    
    <div className="App">
      
      {state.visible ?  <div id="backBtn" onClick={()=> gotoBack()}>BACK BTN</div>: ''}

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
