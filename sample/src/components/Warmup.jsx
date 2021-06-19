import React, {Component} from "react";
import animationImg from "../images/animation.png";
import pencilImg from "../images/pencil-big.png";
import infoBtn from "../images/info-btn.png";
import info143 from "../images/info-i143.png"

class Warmup extends Component{
    constructor(props){
        super(props);
        
		this.state = {
            src:this.props.src,
            visible:'none',

			help:"If you need help. Click on the information button.",
			infDiagVis:'none'
        }
    }

	componentDidMount(){
		this.props.setVisibility(this.props.history);
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

	openDialog=()=>{
		this.vis = this.vis=="flex" ? "none" : "flex";
		this.setState({infDiagVis:this.vis})
	}

    render(){
        return(
            <div className="activity-base" id="act-base-letterForm">
  	
  	<div className="activity-base-inner">
  		<div className="activity-head">
		  <a className="btn-icon oragnge-btn info-btn" onClick={this.openDialog}>
		    <img alt="" src={infoBtn}/>
		  </a>
		  <div className="activity-name-block">
		    <p className="activity-name">Pre-Cursive A</p>
		  </div>
		 {/*  <a href="#" className="btn-icon oragnge-btn play-btn">
		    <img alt="" src="assets/images/play-btn.png"/>
		  </a>
		  <a href="#" className="btn-icon red-btn home-btn">
		    <img alt="" src="assets/images/home-btn.png"/>
		  </a> */}
		</div>
  		<div className="activity-folder">
		  <div className="info-dialog" style={{display:this.state.infDiagVis}}>
		  		<div>
		  			<img src={info143} alt="" />
				  </div>
				  <div>
		  				{this.state.help}
				  </div>
			  </div>

  			<div className="activity-folder-bg activity-2-wrap">
  				<div className="activity-2">
  					<div className="activity-name-block type3">
					 	<p className="activity-name medium">Warm-Up</p>
					</div>
		  			<div className="activity-icon-wrap" onClick={()=>this.playVideo(0)}>
				      	<div className="activity-icon-block">
				        	<img alt="" src={animationImg}/>
				      	</div>
				      	<div className="activity-name-block type4">
				       		<p className="activity-name small">Song</p>
				      	</div>
				    </div>
				    <div className="video-frame">
				    	<div className="video-frame-inner">
						<div style={{display: this.state.visible }} className="vidCont">
							<video controls id="vidPlayer" ref={this.videoRef} src=''></video>
							{/* <button onClick={()=>this.closeVideo()} id="closeBtn">&#10008;</button> */}
						</div>
				    	</div>
				    </div>
				    <div className="activity-icon-wrap" onClick={()=>this.playVideo(1)}>
				      	<div className="activity-icon-block">
				        	<img alt="" src={animationImg}/>
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

export default Warmup;