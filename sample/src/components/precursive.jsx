import React, { Component } from 'react';
import "./activity.css";
import "./theme.css";
import bgImgA from "../images/BG-images/pre-cur-a-bg-2.png"
import bgImgB from "../images/BG-images/pre-cur-b-bg-2.png"
import bgImgC from "../images/BG-images/pre-cur-c-bg-2.png"
import bgImgD from "../images/BG-images/pre-cur-d-bg-2.png"
import act1 from "../images/act-1.png";
import act2 from "../images/act-2.png";
import infoBtn from "../images/info-btn.png";
import gameImg from "../images/games.png";
import printImg from "../images/print-btn.png";
import { NavLink } from 'react-router-dom';
import info143 from "../images/info-i143.png";
import { MyConsumer } from './context';

class Precursive extends Component{

    constructor(props){
        super(props);
		this.func = null;
		this.actTab = null;
        //this.videoRef = React.createRef();
        this.state = {
            src:this.props.src,
			name:this.props.location.name,

			help:"If you need help. Click on the information button.",
			infDiagVis:'none'
        }

		this.getImg = {
			A:bgImgA,
			B:bgImgB,
			C:bgImgC,
			D:bgImgD
		}
    }
    
	componentDidMount(){
		this.props.setVisibility(this.props.history);
		
		if(this.state.name) this.func(this.state.name);
		
		console.log(this.actTab, " -*-*-*-*-*-*-")
		//if(this.actTab) document.getElementsByClassName("activity-base")[0].style.backgroundImage = "url("+this.getImg[this.actTab]+")";
	}

	componentWillReceiveProps(props, state){
		if(props.location.name != null){
			if(this.state.name != props.state.activeTab){
				props.updateActiveTab(this.state.name);
			}
		}
	}

	openDialog=()=>{
		this.vis = this.vis=="flex" ? "none" : "flex";
		this.setState({infDiagVis:this.vis})
	}

	abc(){
		return <MyConsumer>
		  {
		  (a) => {
				this.func = a.func;
				this.actTab = a.activeTab;
			  return <p className="activity-name">Pre-Cursive {a.activeTab}</p>
		  }
		}
		</MyConsumer>
	  }

    render() {
        return (

			<div className="activity-base" style={{backgroundImage: "url("+this.getImg[this.actTab]+")"}}>
  	<div className="dailoug-block-img">
	 	<img alt="" src="assets/images/dialog-1.png"/>
	</div>
  	<div className="activity-base-inner">
  		<div className="activity-head">
		  <a className="btn-icon oragnge-btn info-btn" onClick={this.openDialog}>
		    <img alt="" src={infoBtn}/>
		  </a>
		  <div className="activity-name-block">
			  {this.abc()}
		    {/* <p className="activity-name">Pre-Cursive {this.state.name}</p> */}
		  </div>
		  {/* <a href="#" className="btn-icon oragnge-btn play-btn">
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
  			<div className="activity-folder-bg activity-1-wrap">
  				<div className="flex activity-1">
		  			<div className="activity-assets">						
						<div className="activity-assets-block">

						<NavLink to="PreWriting">
							<div className="activity-bubble circle text">
							<div className="">
							<img alt="" src={act1}/>
							</div>
							</div>								
							<div className="activity-name-block type2">
							<p className="activity-name medium">Pre-Writing</p>
							</div>
						</NavLink>

						</div>					  					  
					</div>

					<div className="activity-assets-block top">
						<NavLink to="/Warmup">
							<div className="activity-name-block type3">
							<p className="activity-name medium">Warm-Up</p>
							</div>
							<div className="activity-bubble circle text">
							<div className="">
							<p>Warm-up Video to follow!</p>
							</div>
							</div>
						</NavLink>
					</div>
					
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
						<NavLink to="/LetterFormation">
							<div className="activity-bubble circle text">
								<div className="">
								<img alt="" src={act2}/>
								</div>
							</div>
							<div className="activity-name-block type2">
								<p className="activity-name medium">Letter Formation</p>
							</div>
						</NavLink>
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