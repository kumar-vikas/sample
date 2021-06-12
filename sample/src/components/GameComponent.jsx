import React, { Component } from 'react';
import pencilImg from "../images/pencil-big.png"
import animationImg from "../images/animation.png"
import infoBtn from "../images/info-btn.png";
import activityImg from "../images/activity.png";
import { NavLink } from 'react-router-dom';

class GameComponent extends Component{
    constructor(props){
        super(props)
    }

	componentDidMount(){
		this.props.setVisibility(this.props.history);
	}

    render(){
        return(
    	<div className="activity-base">
  			<img alt="" src={pencilImg} className="pencile-image"/>
			<div className="activity-base-inner">
				<div className="activity-head">
				<a className="btn-icon oragnge-btn info-btn">
					<img alt="" src={infoBtn}/>
				</a>
				<div className="activity-name-block">
					<p className="activity-name">Pre-Cursive A</p>
				</div>

				</div>
				<div className="activity-folder">
					<div className="activity-folder-bg activity-2-wrap">
						<div className="activity-2" id="gameBG">
							<div className="activity-name-block type5">
								<p className="activity-name medium">Game</p>
							</div>
							
							<div className="game-frame-inner">
								<iframe className="gameIfrm" src="assets/Game/index.html" frameborder="0"></iframe>
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