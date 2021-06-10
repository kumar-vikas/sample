import React, { Component } from 'react';
import Test from "./Test";
import pencilImg from "../images/pencil-big.png"
import animationImg from "../images/animation.png"
import infoBtn from "../images/info-btn.png";
import gameImg from "../images/games.png";
import printImg from "../images/print-btn.png";

function PreWritingPractice(){
    
    return(
        <div className="activity-base">
				{/* {console.log(this.props.state)} */}
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
		    <p class="activity-name">Pre-Cursive</p>
		  </div>
		  {/* <a href="#" class="btn-icon oragnge-btn play-btn">
		    <img alt="" src="assets/images/play-btn.png"/>
		  </a>
		  <a href="#" class="btn-icon red-btn home-btn">
		    <img alt="" src="assets/images/home-btn.png"/>
		  </a> */}
		</div>
  		
          <Test canprops={{width:"1075", height:"200", marginTop:360}} className="drawingTool"/>
  	</div>
  </div>
    )
}

export default PreWritingPractice;