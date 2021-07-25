import { useEffect } from 'react';
import MemoTest from "./Test";
import "./practice.css";
import infoBtn from "../images/info-btn.png";
import penIcon from "../images/pencil-621.png";
import { NavLink } from 'react-router-dom';
import { MyConsumer } from './context';

function LetterFormation(props){
	var actImg = null;
	const [pattern, speed] = props.location.path ? props.location.path.split("$") : ["pat-1", ""];
	var func = null;
	
	var letterArrsmall = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

	useEffect(()=>{
		props.setVisibility(props.history);
		document.getElementsByClassName("activity-base")[0].style.backgroundImage = "url("+actImg+")";
	}, [])

	function abc(){
		return <MyConsumer>
		  {
		  (a) => {
				func = a.func;
				if(a.activeTab != null){
					var cc = a.activeTab.replace(" ", "");
					if(cc.includes("-")){
						cc = cc.replace("-", "");
					}
					actImg = a.getImg[cc].a3;
				}
			  return <p className="activity-name">{a.activeTab}</p>
		  }
		}
		</MyConsumer>
	}

	function getLetterCase(_cur){
		return <MyConsumer>
		  {
		  (a) => {
			_cur = props.location.case == "upper" ? _cur.toUpperCase() : _cur
			return _cur;
		  }
		}
		</MyConsumer>
	}

    return(
        <div className="activity-base">
  	{/* <img alt="" src={pencilImg} className="pencile-image"/> */}
  	<div className="dailoug-block-img">
	 	<img alt="" src="assets/images/dialog-1.png"/>
	</div>
  	<div className="activity-base-inner">
  		<div className="activity-head">
		  <a className="btn-icon oragnge-btn info-btn">
		    <img alt="" src={infoBtn}/>
		  </a>
		  <div className="activity-Title">
			  {abc()}
		    {/* <p className="activity-name">Pre-Cursive</p> */}
		  </div>
		</div>

		<div className="letterFormText">Letter Formation - Lower Case</div>
		<div id="letterCont">

			{/* {
				letterArrsmall.map(
					(cur)=>(
						<NavLink key={cur} to={{pathname:"/LetterFormPractice", curLetter:cur, case:props.location.case}}>
							<button className="letterBtn">
								{cur}
								<img src={penIcon} alt="" />
							</button>
						</NavLink>
					)
				)
			} */}
			{
				letterArrsmall.map(
					(cur)=>(
						<NavLink key={cur} to={{pathname:"/LetterFormPractice", curLetter:cur, case:props.location.case}}>
							<button className="letterBtn">
								{getLetterCase(cur)}
								<img src={penIcon} alt="" />
							</button>
						</NavLink>
					)
				)

			}
			
			
		</div>

  	</div>
  </div>
    )
}

export default LetterFormation;