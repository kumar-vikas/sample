import React, { Component } from 'react';
import "./activity.css";
import "./theme.css";
import pencilImg from "../images/pencil-big.png"
import animationImg from "../images/animation.png"
import infoBtn from "../images/info-btn.png";
import gameImg from "../images/games.png";
import printImg from "../images/print-btn.png";
import { NavLink } from 'react-router-dom';

class Precursive extends Component{

    constructor(props){
        super(props);
		this.vid = null;
        //this.videoRef = React.createRef();
        this.state = {
            src:this.props.src,
            visible:'none',
			name:this.props.location.name
        }

		console.log(props)
    }

    /* playVideo = () => {
        this.setState({visible:"flex" })
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
	} */
    
	componentDidMount(){
		//console.log(this.props.state," -----------------")
		this.props.setVisibility(this.props.history);
	}

	/* componentDidUpdate(){
		if(this.state.name !== this.props.state.name){
			this.props.updateActiveTab(this.state.name);
		}		

		console.log(this.props.state," *************** ", this.state.name)
	} */

	componentWillReceiveProps(props, state){
		if(props.location.name != null){
			console.log(this.state.name, " ============", props.location.name);
			if(this.state.name != props.state.activeTab){
				props.updateActiveTab(this.state.name);
				console.log(props," *------------------------------- ")
			}
		}
	}

    render() { 
        return (

			<div class="activity-base">
				{console.log(this.props.state)}
  	<img alt="" src={pencilImg} class="pencile-image"/>
  	<div class="dailoug-block-img">
	 	<img alt="" src="assets/images/dialog-1.png"/>
	</div>
  	<div class="activity-base-inner">
  		<div class="activity-head">
		  <a class="btn-icon oragnge-btn info-btn">
		    <img alt="" src={infoBtn}/>
		  </a>
		  <div class="activity-name-block">
		    <p class="activity-name">Pre-Cursive {this.state.name}</p>
		  </div>
		  {/* <a href="#" class="btn-icon oragnge-btn play-btn">
		    <img alt="" src="assets/images/play-btn.png"/>
		  </a>
		  <a href="#" class="btn-icon red-btn home-btn">
		    <img alt="" src="assets/images/home-btn.png"/>
		  </a> */}
		</div>
  		<div class="activity-folder">
  			<div class="activity-folder-bg activity-1-wrap">
  				<div class="flex activity-1">
		  			<div class="activity-assets">
					  {/* <div class="activity-bubble left">
						<NavLink to="/videoComp">
							<div class="activity-icon-wrap">
							<div class="activity-icon-block">
								<img alt="" src={animationImg}/>
							</div>
							<div class="activity-name-block type4">
								<p class="activity-name small">Animations</p>
							</div>
							</div>
							</NavLink>
					  </div> */}
					  <div class="activity-assets-block">
					    <div class="activity-bubble circle text">
					      <div class="">
					       <img alt="" src="assets/images/act-1.png"/>
					      </div>
					    </div>
						<NavLink to="PreWriting">
					    <div class="activity-name-block type2">
					      <p class="activity-name medium">Pre-Writing</p>
					    </div>
						</NavLink>
					  </div>
					  {/* <div class="activity-bubble right">
					  <NavLink to="ActivityComp">
					    <div class="activity-icon-wrap">
					      <div class="activity-icon-block">
					         <img alt="" src={activityImg}/>
					      </div>
					      <div class="activity-name-block type4">
					        <p class="activity-name small">Activities</p>
					      </div>
					    </div>
						</NavLink>
					  </div> */}
					</div>
					<NavLink to="/Warmup">
					<div class="activity-assets-block top">
						<div class="activity-name-block type3">
						  <p class="activity-name medium">Warm-Up</p>
						</div>
					    <div class="activity-bubble circle text">
					      <div class="">
					       <p>Warm-up Video to follow!</p>
					      </div>
					    </div>
					</div>
					</NavLink>
					<div class="activity-assets">
					  {/* <div class="activity-bubble left">
					    <div class="activity-icon-wrap">
					      <div class="activity-icon-block">
					         <img alt="" src={animationImg}/>
					      </div>
					      <div class="activity-name-block type4">
					        <p class="activity-name small">Animations</p>
					      </div>
					    </div>
					  </div> */}
					  <div class="activity-assets-block">
					    <div class="activity-bubble circle text">
					      <div class="">
					       <img alt="" src="assets/images/act-2.png"/>
					      </div>
					    </div>
					    <div class="activity-name-block type2">
					      <p class="activity-name medium">Letter Formation</p>
					    </div>
					  </div>
					  {/* <div class="activity-bubble right">
					    <div class="activity-icon-wrap">
					      <div class="activity-icon-block">
					         <img alt="" src={activityImg}/>
					      </div>
					      <div class="activity-name-block type4">
					        <p class="activity-name small">Activities</p>
					      </div>
					    </div>
					  </div> */}
					</div>
				</div>
				<div class="activity-footer">
					<div class="activity-icon-wrap">
				      <div class="activity-icon-block type2">
				         <img alt="" src={gameImg}/>
				      </div>
				      <div class="activity-name-block type2">
				        <p class="activity-name medium">Game</p>
				      </div>
				    </div>
				    <div class="activity-icon-wrap">
				      <div class="activity-icon-block type2">
				         <img alt="" src={printImg}/>
				      </div>
				      <div class="activity-name-block type2">
				        <p class="activity-name medium">Printables</p>
				      </div>
				    </div>
				</div>
			</div>
  		</div>
  	</div>
  </div>
  );

			{/* <div className="activity-base">
  				<img alt="" src={pencilImg} className="pencile-image"/>
				<div className="activity-base-inner">
					<div className="activity-head">
						<a href="#" className="btn-icon oragnge-btn info-btn">
							<img alt="" src={infoBtn}/>
						</a>
						<div className="activity-name-block">
							<p className="activity-name">Pre-Cursive A</p>
						</div>
					</div>
  				<div class="activity-folder">
  					<div class="activity-folder-bg activity-3-wrap">
					<div class="activity-3">
						<div class="activity-name-block type3">
							<p class="activity-name medium">Warm-Up</p>
					</div>
  					<div class="act-3-bubble">
  						<div class="activity-name-block type2">
				        	<p class="activity-name medium">Exercise 1</p>
				      	</div>
				      	<div class="activity-bubble circle text">
					      <div class="">
					       <img alt="" src={act1}/>
					      </div>
					    </div>
				      	<div class="activity-name-block type4 first">
						  <div class="activity-small-icon">
						    <img alt="" src={animationImg}/>
						  </div>
						  <p class="activity-name small">Slow</p>
						</div>

				      	<div class="activity-name-block type4 second">
						  <div class="activity-small-icon">
						    <img alt="" src="assets/images/activity.png"/>
						  </div>
						  <p class="activity-name small">Practice</p>
						</div>

				      	<div class="activity-name-block type4 third">
						  <div class="activity-small-icon">
						    <img alt="" src={animationImg}/>
						  </div>
						  <p class="activity-name small">Fast</p>
						</div>
  					</div>
  					<div class="act-3-bubble">
  						<div class="activity-name-block type2">
				        	<p class="activity-name medium">Exercise 2</p>
				      	</div>
				      	<div class="activity-bubble circle text">
					      <div class="">
					       <img alt="" src={act1}/>
					      </div>
					    </div>
				      	<div class="activity-name-block type4 first">
						  <div class="activity-small-icon">
						    <img alt="" src={animationImg}/>
						  </div>
						  <p class="activity-name small">Slow</p>
						</div>

				      	<div class="activity-name-block type4 second">
						  <div class="activity-small-icon">
						    <img alt="" src="assets/images/activity.png"/>
						  </div>
						  <p class="activity-name small">Practice</p>
						</div>

				      	<div class="activity-name-block type4 third">
						  <div class="activity-small-icon">
						    <img alt="" src={animationImg}/>
						  </div>
						  <p class="activity-name small">Fast</p>
						</div>
  					</div>
  					<div class="act-3-bubble">
  						<div class="activity-name-block type2">
				        	<p class="activity-name medium">Exercise 3</p>
				      	</div>
				      	<div class="activity-bubble circle text">
					      <div class="">
					       <img alt="" src={act1}/>
					      </div>
					    </div>
				      	<div class="activity-name-block type4 first">
						  <div class="activity-small-icon">
						    <img alt="" src={animationImg}/>
						  </div>
						  <p class="activity-name small">Slow</p>
						</div>

				      	<div class="activity-name-block type4 second">
						  <div class="activity-small-icon">
						    <img alt="" src="assets/images/activity.png"/>
						  </div>
						  <p class="activity-name small">Practice</p>
						</div>

				      	<div class="activity-name-block type4 third">
						  <div class="activity-small-icon">
						    <img alt="" src={animationImg}/>
						  </div>
						  <p class="activity-name small">Fast</p>
						</div>
  					</div>
  					<div class="act-3-bubble">
  						<div class="activity-name-block type2">
				        	<p class="activity-name medium">Exercise 4</p>
				      	</div>
				      	<div class="activity-bubble circle text">
					      <div class="">
					       <img alt="" src={act1}/>
					      </div>
					    </div>
				      	<div class="activity-name-block type4 first">
						  <div class="activity-small-icon">
						    <img alt="" src={animationImg}/>
						  </div>
						  <p class="activity-name small">Slow</p>
						</div>

				      	<div class="activity-name-block type4 second">
						  <div class="activity-small-icon">
						    <img alt="" src="assets/images/activity.png"/>
						  </div>
						  <p class="activity-name small">Practice</p>
						</div>

				      	<div class="activity-name-block type4 third">
						  <div class="activity-small-icon">
						    <img alt="" src={animationImg}/>
						  </div>
						  <p class="activity-name small">Fast</p>
						</div>
  					</div>
  					<div class="act-3-bubble">
  						<div class="activity-name-block type2">
				        	<p class="activity-name medium">Exercise5</p>
				      	</div>
				      	<div class="activity-bubble circle text">
					      <div class="">
					       <img alt="" src={act1}/>
					      </div>
					    </div>
				      	<div class="activity-name-block type4 first">
						  <div class="activity-small-icon">
						    <img alt="" src={animationImg}/>
						  </div>
						  <p class="activity-name small">Slow</p>
						</div>

				      	<div class="activity-name-block type4 second">
						  <div class="activity-small-icon">
						    <img alt="" src="assets/images/activity.png"/>
						  </div>
						  <p class="activity-name small">Practice</p>
						</div>

				      	<div class="activity-name-block type4 third">
						  <div class="activity-small-icon">
						    <img alt="" src={animationImg}/>
						  </div>
						  <p class="activity-name small">Fast</p>
						</div>
  					</div>
				</div>
		  	</div>
		</div>
  	</div>
  </div> =============================================================*/}
	

            {/* <div className="activity-base">
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
  </div> */}

    }

}

export default Precursive;