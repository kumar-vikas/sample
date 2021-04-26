import React, { Component } from 'react';
import "./activity.css";
import "./theme.css";
import pencilImg from "../images/pencil-big.png"
import animationImg from "../images/animation.png"
import infoBtn from "../images/info-btn.png";

class Precursive extends Component{

    constructor(props){
        super(props);
		this.vid = null;
        //this.videoRef = React.createRef();
        this.state = {
            src:this.props.src,
            visible:'none'
        }
        this.playVideo = this.playVideo.bind(this);
    }

    playVideo = () => {
        this.setState({visible:"flex" })
        /* let videe = this.videoRef.current;
        alert(videe); */
        this.vid = document.getElementById("vidPlayer");
        console.log(this.vid)
        this.vid.src = "assets/animations/supercity_1.mp4"
        this.vid.play();

        console.log(" video playing")
    }

	closeVideo = () =>{
		this.setState({visible:"none" })
		this.vid.pause();
		console.log("close video")
	}
    
	componentDidMount(){
		console.log(" -----------------")
		this.props.setVisibility(this.props.history);
	}

    render() { 
        return (
            <div className="activity-base">
				<div style={{display: this.state.visible }} className="vidCont">
					<video controls id="vidPlayer" ref={this.videoRef} src=''></video>
					<button onClick={()=>this.closeVideo()} id="closeBtn">&#10008;</button>
				</div>

  	            
  	<div className="activity-base-inner">
	  <img src={pencilImg} className="pencile-image"/>
  		<div className="activity-head">
		  <a href="#" className="btn-icon oragnge-btn info-btn">
		    <img src={infoBtn}/>
		  </a>
		  <div className="activity-name-block">
		    <p className="activity-name">Pre-Cursive A</p>
		  </div>
		</div>
  		<div className="activity-folder">
  			<div className="activity-folder-bg activity-2-wrap">
  				<div className="activity-2">
  					<div className="activity-name-block type3">
					 	<p className="activity-name medium">Warm-Up</p>
					</div>
		  			<div className="activity-icon-wrap">
				      	<div className="activity-icon-block">
				        	<img src={animationImg}/>
				      	</div>
				      	<div className="activity-name-block type4" onClick={()=>this.playVideo()}>
				       		<p className="activity-name small">Animations</p>
				      	</div>
				    </div>
				    <div className="video-frame">
				    	<div className="video-frame-inner">
				    	</div>
				    </div>
				    <div className="activity-icon-wrap">
				      	<div className="activity-icon-block">
				        	<img src={animationImg}/>
				      	</div>
				      	<div className="activity-name-block type4">
				       		<p className="activity-name small">Video</p>
				      	</div>
				    </div>
				</div>
		  	</div>
		</div>
  	</div>
  </div>
        )
    }

}

export default Precursive;