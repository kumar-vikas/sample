import React, {Component} from "react";

const MyContext = React.createContext()
export const MyConsumer = MyContext.Consumer

class MyProvider extends Component {
  state = {
    username: 'Crunchy Crunch',
    dateJoined: 'A',
    membershipLevel: 'Silver'
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