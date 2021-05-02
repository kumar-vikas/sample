import React, {Component} from "react";

class VideoComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            src:this.props.src
        }
    }

    render(){
        return(
            <div>
                <video width="100%" controls src={this.state.src}></video>
            </div>
        );
    }
}

export default VideoComponent;