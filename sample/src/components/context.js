import React, {Component} from "react";
import bgImgA from "../images/BG-images/pre-cur-a-bg-2.png"
import bgImgA2 from "../images/BG-images/pre-cur-a-bg-5.png"
import bgImgA3 from "../images/BG-images/pre-cur-a-bg-7.png"
import bgImgA4 from "../images/BG-images/pre-cur-a-bg-8.png"

import bgImgB from "../images/BG-images/pre-cur-b-bg-2.png"
import bgImgB2 from "../images/BG-images/pre-cur-b-bg-5.png"
import bgImgB3 from "../images/BG-images/pre-cur-b-bg-7.png"
import bgImgB4 from "../images/BG-images/pre-cur-b-bg-8.png"

import bgImgC from "../images/BG-images/pre-cur-c-bg-2.png"
import bgImgC2 from "../images/BG-images/pre-cur-c-bg-5.png"
import bgImgC3 from "../images/BG-images/pre-cur-c-bg-7.png"
import bgImgC4 from "../images/BG-images/pre-cur-c-bg-8.png"

import bgImgD from "../images/BG-images/pre-cur-d-bg-2.png"
import bgImgD2 from "../images/BG-images/pre-cur-d-bg-5.png"
import bgImgD3 from "../images/BG-images/pre-cur-d-bg-7.png"
import bgImgD4 from "../images/BG-images/pre-cur-d-bg-8.png"

import cursiveA from "../images/BG-images/cursiveBG/cur-a-bg-2.png"
import cursiveA2 from "../images/BG-images/cursiveBG/cur-a-bg-5.png"
import cursiveA3 from "../images/BG-images/cursiveBG/cur-a-bg-7.png"
import cursiveA4 from "../images/BG-images/cursiveBG/cur-a-bg-8.png"
import cursiveA5 from "../images/BG-images/cursiveBG/cur-a-bg-11.png"

import cursiveB from "../images/BG-images/cursiveBG/cur-b-bg-2.png"
import cursiveB2 from "../images/BG-images/cursiveBG/cur-b-bg-5.png"
import cursiveB3 from "../images/BG-images/cursiveBG/cur-b-bg-7.png"
import cursiveB4 from "../images/BG-images/cursiveBG/cur-b-bg-8.png"
import cursiveB5 from "../images/BG-images/cursiveBG/cur-b-bg-11.png"

import cursiveC from "../images/BG-images/cursiveBG/cur-c-bg-2.png"
import cursiveC2 from "../images/BG-images/cursiveBG/cur-c-bg-5.png"
import cursiveC3 from "../images/BG-images/cursiveBG/cur-c-bg-7.png"
import cursiveC4 from "../images/BG-images/cursiveBG/cur-c-bg-8.png"
import cursiveC5 from "../images/BG-images/cursiveBG/cur-c-bg-11.png"

import cursiveD from "../images/BG-images/cursiveBG/cur-d-bg-2.png"
import cursiveD2 from "../images/BG-images/cursiveBG/cur-d-bg-5.png"
import cursiveD3 from "../images/BG-images/cursiveBG/cur-d-bg-7.png"
import cursiveD4 from "../images/BG-images/cursiveBG/cur-d-bg-8.png"
import cursiveD5 from "../images/BG-images/cursiveBG/cur-d-bg-11.png"

import cursiveE from "../images/BG-images/cursiveBG/cur-e-bg-2.png"
import cursiveE2 from "../images/BG-images/cursiveBG/cur-e-bg-5.png"
import cursiveE3 from "../images/BG-images/cursiveBG/cur-e-bg-7.png"
import cursiveE4 from "../images/BG-images/cursiveBG/cur-e-bg-8.png"
import cursiveE5 from "../images/BG-images/cursiveBG/cur-e-bg-11.png"

import cursiveF from "../images/BG-images/cursiveBG/cur-f-bg-2.png"
import cursiveF2 from "../images/BG-images/cursiveBG/cur-f-bg-5.png"
import cursiveF3 from "../images/BG-images/cursiveBG/cur-f-bg-7.png"
import cursiveF4 from "../images/BG-images/cursiveBG/cur-f-bg-8.png"
import cursiveF5 from "../images/BG-images/cursiveBG/cur-f-bg-11.png"


const MyContext = React.createContext()
export const MyConsumer = MyContext.Consumer

class MyProvider extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: props.data,
      activeTab:null,
      func: this.updateContextTab,

      getImg: {
        PreCursiveA:{a1: bgImgA, a2:bgImgA2, a3:bgImgA3, a4:bgImgA4},
        PreCursiveB:{a1: bgImgB, a2:bgImgB2, a3:bgImgB3, a4:bgImgB4},
        PreCursiveC:{a1: bgImgC, a2:bgImgC2, a3:bgImgC3, a4:bgImgC4},
        PreCursiveD:{a1: bgImgD, a2:bgImgD2, a3:bgImgD3, a4:bgImgD4},

        CursiveA:{a1: cursiveA, a2:cursiveA2, a3:cursiveA3, a4:cursiveA4, a5:cursiveA5},
        CursiveB:{a1: cursiveB, a2:cursiveB2, a3:cursiveB3, a4:cursiveB4, a5:cursiveB5},
        CursiveC:{a1: cursiveC, a2:cursiveC2, a3:cursiveC3, a4:cursiveC4, a5:cursiveC5},
        CursiveD:{a1: cursiveD, a2:cursiveD2, a3:cursiveD3, a4:cursiveD4, a5:cursiveD5},
        CursiveE:{a1: cursiveE, a2:cursiveE2, a3:cursiveE3, a4:cursiveE4, a5:cursiveE5},
        CursiveF:{a1: cursiveF, a2:cursiveF2, a3:cursiveF3, a4:cursiveF4, a5:cursiveF5}
      }

    }    
  }

  updateContextTab = (_a) => {
    this.setState({activeTab:_a}, this.getState);
  }

  getState(){
    console.log(this.state);
  }
  
  render () {
    return (
       <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider;