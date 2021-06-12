import { useEffect } from 'react';
import MemoTest from "./Test";
import "./practice.css";
import pencilImg from "../images/pencil-big.png"
import animationImg from "../images/animation.png"
import infoBtn from "../images/info-btn.png";
import gameImg from "../images/games.png";
import printImg from "../images/print-btn.png";
import penIcon from "../images/pencil-2.png";
import vidIcon538 from "../images/vidIcon-538.png"

function PreWritingPractice(props){

	var cPath = props.location.path.split("$");

	var obj = {
		"pat-1slow":"assets/Pre-Writing/Copy of Bubble_page 4_slow.mp4",
		"pat-1fast":"assets/Pre-Writing/Copy of Bubble_page 4_normal.mp4",
		"pat-2slow":"assets/Pre-Writing/Copy of Chimney_page 6_slow.mp4",
		"pat-2fast":"assets/Pre-Writing/Copy of Chimney_page 6_normal.mp4",
		"pat-3slow":"assets/Pre-Writing/Copy of Bee_slow.mp4",
		"pat-3fast":"assets/Pre-Writing/Copy of Bee_Normal.mp4",
		"pat-4slow":"assets/Pre-Writing/Copy of Snail page_12 slow.mp4",
		"pat-4fast":"assets/Pre-Writing/Copy of Snail page_12_normal.mp4",
		"pat-5slow":"assets/Pre-Writing/Copy of Butterfly_slow.mp4",
		"pat-5fast":"assets/Pre-Writing/Copy of Butterfly_normal.mp4"
	}

	useEffect(()=>{
		props.setVisibility(props.history);
	}, [])


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
			<div>
				<button>Slow</button>
				<span><img src={vidIcon538} alt="" /></span>
				<button>fast</button>
			</div>
			<video autoPlay controls id="vidPlayer-pre" src={obj[cPath]}></video>
		</div>

  		
          <MemoTest canprops={{width:"1075", height:"200", marginTop:100, "iconI": penIcon}} className="drawingTool"/>
  	</div>
  </div>
    )
}

export default PreWritingPractice;