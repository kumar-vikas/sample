import { useEffect } from 'react';
import Test from "./Test";
import "./practice.css";
import pencilImg from "../images/pencil-big.png"
import animationImg from "../images/animation.png"
import infoBtn from "../images/info-btn.png";
import gameImg from "../images/games.png";
import printImg from "../images/print-btn.png";
import penIcon from "../images/pencil-2.png"
import bgImg from "../images/activity-bg-image-2.jpg"

function PreWritingPractice(props){	
	var baseStyle = {
		backgroundImage: 2
	}
	/* useEffect(()=>{
		props.setVisibility(props.history);		
	}, []) */


    return(
        <div className="activity-base">
  	<img alt="" src={pencilImg} class="pencile-image"/>
  	<div className="dailoug-block-img">
	 	<img alt="" src="assets/images/dialog-1.png"/>
	</div>
  	<div className="activity-base-inner">
  		<div className="activity-head">
		  <a className="btn-icon oragnge-btn info-btn">
		    <img alt="" src={infoBtn}/>
		  </a>
		  <div className="activity-name-block">
		    <p className="activity-name">Pre-Cursive</p>
		  </div>
		</div>

		<div id="vidCont">
			<video autoPlay id="vidPlayer" src="assets/Pre-Writing/Copy of Bubble_page 4_normal.mp4"></video>
		</div>

  		
          <Test canprops={{width:"1075", height:"200", marginTop:100, "iconI": penIcon}} className="drawingTool"/>
  	</div>
  </div>
    )
}

export default PreWritingPractice;