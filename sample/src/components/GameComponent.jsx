import React, { Component } from 'react';
import animationImg from "../images/animation.png"
import infoBtn from "../images/info-btn.png";
import game129 from "../images/game129.png";
import { NavLink } from 'react-router-dom';
import { MyConsumer } from './context';

class GameComponent extends Component{
    constructor(props){
        super(props);				
    }

	componentDidMount(){
		this.props.setVisibility(this.props.history);
	}
	componentWillReceiveProps(props, state){
		if(props.location.name != null){
			if(this.state.name != props.state.activeTab){
				props.updateActiveTab(this.state.name);
			}
		}
	}
		
	getTabName(){
		var tname="";
		try{
			tname = this.props.state.activeTab.replace("-", "").replace(" ","");
		}catch(err){
			
		}
		return tname;
	}
    render(){
			var gamePath = "assets/Game/"+this.getTabName()+"/index.html";
			return(
    	<div className="activity-base" id="act-base-letterForm">
			<div className="activity-base-inner">
				<div className="activity-head">
				<a className="btn-icon oragnge-btn info-btn">
					<img alt="" src={infoBtn}/>
				</a>
				<div className="activity-name-block">
					<p className="activity-name">Pre-Cursive A</p>
				</div>
				</div>
				<div className="gameIcon">
					<img width="110" src={game129} alt="" />
				</div>
				<div className="activity-folder">
					<div className="activity-folder-bg activity-2-wrap">
						<div className="activity-2" id="gameBG">
							<div className="activity-name-block type5">
								<p className="activity-name medium">Game</p>
							</div>
							
							<div className="game-frame-inner">
								<iframe className="gameIfrm" src={gamePath} frameborder="0"></iframe>
								{/* <button onClick={()=>this.closeVideo()} id="closeBtn">&#10008;</button> */}
							</div>
							
						</div>
					</div>
				</div>
			</div>
  </div>
        )
    }
}

export default GameComponent;