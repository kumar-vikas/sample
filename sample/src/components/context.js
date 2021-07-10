import React, {Component} from "react";

const MyContext = React.createContext()
export const MyConsumer = MyContext.Consumer

class MyProvider extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: props.data,
      activeTab:null,
      func: this.updateContextTab
    }
  }

  updateContextTab = (_a) => {
    this.setState({activeTab:_a}, this.getState);    
  }

  getState(){
    console.log(this.state)
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