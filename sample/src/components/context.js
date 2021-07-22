import React, {Component} from "react";
import bgImgA from "../images/BG-images/pre-cur-a-bg-2.png"
import bgImgA2 from "../images/BG-images/pre-cur-a-bg-5.jpg"

import bgImgB from "../images/BG-images/pre-cur-b-bg-2.png"
import bgImgB2 from "../images/BG-images/pre-cur-b-bg-5.png"

import bgImgC from "../images/BG-images/pre-cur-c-bg-2.png"
import bgImgC2 from "../images/BG-images/pre-cur-c-bg-2.png"

import bgImgD from "../images/BG-images/pre-cur-d-bg-2.png"
import bgImgD2 from "../images/BG-images/pre-cur-d-bg-2.png"


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
        A:{a1: bgImgA, a2:bgImgA2},
        B:{a1: bgImgB, a2:bgImgB2},
        C:{a1: bgImgC, a2:bgImgC2},
        D:{a1: bgImgD, a2:bgImgD2},
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