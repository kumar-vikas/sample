/* import logo from './logo.svg'; */
import './App.css';
import FirstScr from "./components/FirstScr";
import Precursive from "./components/precursive";
import VideoComp from "./components/videoComp";
import Warmup from "./components/Warmup";
import PreWriting from "./components/PreWriting";
import ActivityComp from "./components/ActivityComp";
import GameComponent from "./components/GameComponent";
import PrintableComponent from "./components/PrintableComponent";
import PreWritingPractice from "./components/PreWritingPractice";
import LetterFormation from './components/LetterFormation';
import LetterFormPractice from './components/LetterFormPractice';
import { BrowserRouter as Router, withRouter, Redirect, Route, Switch } from "react-router-dom";
import {useState} from "react";
import React from 'react';
import backBtn from "./images/play-btn.png"
import homeBtn from "./images/home-btn.png";
import Provider from "./components/context"

function App(props) {
  const [state, setState] = useState({visible:false, history:null,
    nameList:[
      {"name":"A", "video":"path"},
      {"name":"B"},
      {"name":"C"},
      {"name":"D"},
      /* {"name":"E"},
      {"name":"F"},
      {"name":"G"},
      {"name":"H"},
      {"name":"I"},
      {"name":"J"},
      {"name":"K"},
      {"name":"L"},
      {"name":"M"},
      {"name":"N"},
      {"name":"O"},
      {"name":"P"},
      {"name":"Q"},
      {"name":"R"},
      {"name":"S"},
      {"name":"T"},
      {"name":"U"},
      {"name":"V"},
      {"name":"W"},
      {"name":"X"},
      {"name":"Y"},
      {"name":"Z"} */
    ],
    subList:[
      {"name":"A", "video":"path"},
      {"name":"B"},
      {"name":"C"},
      {"name":"D"},
      {"name":"E"},
      {"name":"F"}
    ],
    activeTab: null
  });

  function setVisibility(history){

    setState({
      ...state,
      visible:true,
      history
    });
  }

  function updateActiveTab(_a){
    	setState({...state, activeTab:_a});
  }

  function gotoBack(){
    setState({...state, visible:false})
    state.history.goBack()
  }

  function gotoHome(){
    setState({...state, visible:false})
    state.history.push("./")
  }

  return (
    
    <div className="App">
      
      {state.visible ?  <div id="backBtn">
          <div className="btn-icon oragnge-btn play-btn" onClick={()=> gotoBack()}>
            <img alt="" src={backBtn}/>
          </div>
          <div className="btn-icon red-btn home-btn" onClick={()=> gotoHome()}>
            <img alt="" src={homeBtn}/>
          </div>
      </div>: ''}

      <Router>
      <Switch>
        <Route 
          path={"/"}
            exact={true}
            render = {(props)=>{
            props.setVisibility = setVisibility;
            props.state = state;
            props.updateActiveTab = updateActiveTab;
            return <FirstScr {...props}/>
            }}
            /* component={FirstScr} */
        />

        <Route 
          path={"/precursive"}
            exact={true}
            render = {(props)=>{
              props.setVisibility = setVisibility;
              props.state = state;
              props.updateActiveTab = updateActiveTab;
              return <Precursive {...props}/>
              }}
            /* component={Precursive} */
        />

        <Route 
          path={"/videoComp"}
            exact={true}
            render = {(props)=>{
              props.setVisibility = setVisibility;
              props.state = state;
              props.updateActiveTab = updateActiveTab;
              return <VideoComp {...props}/>
              }}
            /* component={Precursive} */
        />

        <Route 
          path={"/Warmup"}
            exact={true}
            render = {(props)=>{
              props.setVisibility = setVisibility;
              props.state = state;
              props.updateActiveTab = updateActiveTab;
              return <Warmup {...props}/>
              }}
            /* component={Precursive} */
        />

        <Route 
          path={"/PreWriting"}
            exact={true}
            render = {(props)=>{
              props.setVisibility = setVisibility;
              props.state = state;
              props.updateActiveTab = updateActiveTab;
              return <PreWriting {...props}/>
              }}
            /* component={Precursive} */
        />

        <Route 
          path={"/ActivityComp"}
            exact={true}
            render = {(props)=>{
              props.setVisibility = setVisibility;
              props.state = state;
              props.updateActiveTab = updateActiveTab;
              return <ActivityComp {...props}/>
              }}
            /* component={Precursive} */
        />

        <Route 
          path={"/PreWritingPractice"}
            exact={true}
            render = {(props)=>{
              props.setVisibility = setVisibility;
              props.state = state;
              props.updateActiveTab = updateActiveTab;
              return <PreWritingPractice {...props}/>
              }}
            /* component={Precursive} */
        />

        <Route 
          path={"/LetterFormPractice"}
            exact={true}
            render = {(props)=>{
              props.setVisibility = setVisibility;
              props.state = state;
              props.updateActiveTab = updateActiveTab;
              return <LetterFormPractice {...props}/>
              }}
            /* component={Precursive} */
        />

        <Route 
          path={"/LetterFormation"}
            exact={true}
            render = {(props)=>{
              props.setVisibility = setVisibility;
              props.state = state;
              props.updateActiveTab = updateActiveTab;
              return <LetterFormation {...props}/>
              }}
            /* component={Precursive} */
        />

        <Route 
          path={"/GameComponent"}
            exact={true}
            render = {(props)=>{
              props.setVisibility = setVisibility;
              props.state = state;
              props.updateActiveTab = updateActiveTab;
              return <GameComponent {...props}/>
              }}
            /* component={Precursive} */
        />

        <Route 
          path={"/PrintableComponent"}
            exact={true}
            render = {(props)=>{
              props.setVisibility = setVisibility;
              props.state = state;
              props.updateActiveTab = updateActiveTab;
              return <PrintableComponent {...props}/>
              }}
            /* component={Precursive} */
        />

      </Switch>
      </Router>

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
