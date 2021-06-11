import React, {Component} from "react";
import animationImg from "../images/animation.png";
import pencilImg from "../images/pencil-big.png";
import infoBtn from "../images/info-btn.png";

class Warmup extends Component{
    constructor(props){
        super(props);
        
		this.state = {
            src:this.props.src,
            visible:'none'
        }
    }

	playVideo = (_id) => {
        this.setState({visible:"flex" })
        /* let videe = this.videoRef.current;
        alert(videe); */

		var src = "";
		if(_id == 0){
			src = "assets/animations/supercity_1.mp4"
		}else{
			console.log(" *********************")
			src = "assets/Letter Writing/Capital letter/Copy of G_capital_feedback3.mp4"
		}

        this.vid = document.getElementById("vidPlayer");
        console.log(this.vid)
        this.vid.src = src;
        this.vid.play();

        console.log(" video playing")
    }

	closeVideo = () =>{
		this.setState({visible:"none" })
		this.vid.pause();
		console.log("close video")
	}

    render(){
        return(
            <div class="activity-base">
  	<img alt="" src={pencilImg} class="pencile-image"/>
  	<div class="activity-base-inner">
  		<div class="activity-head">
		  <a class="btn-icon oragnge-btn info-btn">
		    <img alt="" src={infoBtn}/>
		  </a>
		  <div class="activity-name-block">
		    <p class="activity-name">Pre-Cursive A</p>
		  </div>
		 {/*  <a href="#" class="btn-icon oragnge-btn play-btn">
		    <img alt="" src="assets/images/play-btn.png"/>
		  </a>
		  <a href="#" class="btn-icon red-btn home-btn">
		    <img alt="" src="assets/images/home-btn.png"/>
		  </a> */}
		</div>
  		<div class="activity-folder">
  			<div class="activity-folder-bg activity-2-wrap">
  				<div class="activity-2">
  					<div class="activity-name-block type3">
					 	<p class="activity-name medium">Warm-Up</p>
					</div>
		  			<div class="activity-icon-wrap" onClick={()=>this.playVideo(0)}>
				      	<div class="activity-icon-block">
				        	<img alt="" src={animationImg}/>
				      	</div>
				      	<div class="activity-name-block type4">
				       		<p class="activity-name small">Song</p>
				      	</div>
				    </div>
				    <div class="video-frame">
				    	<div class="video-frame-inner">
						<div style={{display: this.state.visible }} className="vidCont">
							<video controls id="vidPlayer" ref={this.videoRef} src=''></video>
							{/* <button onClick={()=>this.closeVideo()} id="closeBtn">&#10008;</button> */}
						</div>
				    	</div>
				    </div>
				    <div class="activity-icon-wrap" onClick={()=>this.playVideo(1)}>
				      	<div class="activity-icon-block">
				        	<img alt="" src={animationImg}/>
				      	</div>
				      	<div class="activity-name-block type4">
				       		<p class="activity-name small">Video</p>
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

export default Warmup;