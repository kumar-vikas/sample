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

			<div className="activity-base">
				{console.log(this.props.state)}
  	<img alt="" src={pencilImg} className="pencile-image"/>
  	<div className="dailoug-block-img">
	 	<img alt="" src="assets/images/dialog-1.png"/>
	</div>
  	<div className="activity-base-inner">
  		<div className="activity-head">
		  <a className="btn-icon oragnge-btn info-btn">
		    <img alt="" src={infoBtn}/>
		  </a>
		  <div className="activity-name-block">
		    <p className="activity-name">Pre-Cursive {this.state.name}</p>
		  </div>
		  {/* <a href="#" className="btn-icon oragnge-btn play-btn">
		    <img alt="" src="assets/images/play-btn.png"/>
		  </a>
		  <a href="#" className="btn-icon red-btn home-btn">
		    <img alt="" src="assets/images/home-btn.png"/>
		  </a> */}
		</div>
  		<div className="activity-folder">
  			<div className="activity-folder-bg activity-1-wrap">
  				<div className="flex activity-1">
		  			<div className="activity-assets">
					  {/* <div className="activity-bubble left">
						<NavLink to="/videoComp">
							<div className="activity-icon-wrap">
							<div className="activity-icon-block">
								<img alt="" src={animationImg}/>
							</div>
							<div className="activity-name-block type4">
								<p className="activity-name small">Animations</p>
							</div>
							</div>
							</NavLink>
					  </div> */}
					  <div className="activity-assets-block">
					    <div className="activity-bubble circle text">
					      <div className="">
					       <img alt="" src="assets/images/act-1.png"/>
					      </div>
					    </div>
						<NavLink to="PreWriting">
					    <div className="activity-name-block type2">
					      <p className="activity-name medium">Pre-Writing</p>
					    </div>
						</NavLink>
					  </div>
					  {/* <div className="activity-bubble right">
					  <NavLink to="ActivityComp">
					    <div className="activity-icon-wrap">
					      <div className="activity-icon-block">
					         <img alt="" src={activityImg}/>
					      </div>
					      <div className="activity-name-block type4">
					        <p className="activity-name small">Activities</p>
					      </div>
					    </div>
						</NavLink>
					  </div> */}
					</div>
					<NavLink to="/Warmup">
					<div className="activity-assets-block top">
						<div className="activity-name-block type3">
						  <p className="activity-name medium">Warm-Up</p>
						</div>
					    <div className="activity-bubble circle text">
					      <div className="">
					       <p>Warm-up Video to follow!</p>
					      </div>
					    </div>
					</div>
					</NavLink>
					<div className="activity-assets">
					  {/* <div className="activity-bubble left">
					    <div className="activity-icon-wrap">
					      <div className="activity-icon-block">
					         <img alt="" src={animationImg}/>
					      </div>
					      <div className="activity-name-block type4">
					        <p className="activity-name small">Animations</p>
					      </div>
					    </div>
					  </div> */}
					  <div className="activity-assets-block">
					    <div className="activity-bubble circle text">
					      <div className="">
					       <img alt="" src="assets/images/act-2.png"/>
					      </div>
					    </div>
					    <div className="activity-name-block type2">
					      <p className="activity-name medium">Letter Formation</p>
					    </div>
					  </div>
					  {/* <div className="activity-bubble right">
					    <div className="activity-icon-wrap">
					      <div className="activity-icon-block">
					         <img alt="" src={activityImg}/>
					      </div>
					      <div className="activity-name-block type4">
					        <p className="activity-name small">Activities</p>
					      </div>
					    </div>
					  </div> */}
					</div>
				</div>
				<div className="activity-footer">
					<NavLink to="/GameComponent">
					<div className="activity-icon-wrap">
				      <div className="activity-icon-block type2">
				         <img alt="" src={gameImg}/>
				      </div>
				      <div className="activity-name-block type2">
				        <p className="activity-name medium">Game</p>
				      </div>
				    </div>
					</NavLink>

					<NavLink to="/PrintableComponent">
				    <div className="activity-icon-wrap">
				      <div className="activity-icon-block type2">
				         <img alt="" src={printImg}/>
				      </div>
				      <div className="activity-name-block type2">
				        <p className="activity-name medium">Printables</p>
				      </div>
				    </div>
					</NavLink>

				</div>
			</div>
  		</div>
  	</div>
  </div>
  );
    }

}

export default Precursive;