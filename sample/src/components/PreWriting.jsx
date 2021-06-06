import React, { Component } from 'react';
import pencilImg from "../images/pencil-big.png"
import animationImg from "../images/animation.png"
import infoBtn from "../images/info-btn.png";

class PreWriting extends Component{
    constructor(props){
        super(props)
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
  			<div className="activity-folder-bg activity-3-wrap">
  				<div className="activity-3">
  					<div className="activity-name-block type3">
					 	<p className="activity-name medium">Pre-Writing</p>
					</div>
  					<div className="act-3-bubble">
  						<div className="activity-name-block type2">
				        	<p className="activity-name medium">Pattern 1</p>
				      	</div>
				      	<div className="activity-bubble circle text">
					      <div className="">
					       <img alt="" src="assets/images/act-1.png"/>
					      </div>
					    </div>
				      	<div className="activity-name-block type4 first">
						  <div className="activity-small-icon">
						    <img alt="" src={animationImg}/>
						  </div>
						  <p className="activity-name small">Slow</p>
						</div>

				      	<div className="activity-name-block type4 second">
						  <div className="activity-small-icon">
						    <img alt="" src="assets/images/activity.png"/>
						  </div>
						  <p className="activity-name small">Practice</p>
						</div>

				      	<div className="activity-name-block type4 third">
						  <div className="activity-small-icon">
						    <img alt="" src={animationImg}/>
						  </div>
						  <p className="activity-name small">Fast</p>
						</div>
  					</div>
  					<div className="act-3-bubble">
  						<div className="activity-name-block type2">
				        	<p className="activity-name medium">Pattern 2</p>
				      	</div>
				      	<div className="activity-bubble circle text">
					      <div className="">
					       <img alt="" src="assets/images/act-1.png"/>
					      </div>
					    </div>
				      	<div className="activity-name-block type4 first">
						  <div className="activity-small-icon">
						    <img alt="" src={animationImg}/>
						  </div>
						  <p className="activity-name small">Slow</p>
						</div>

				      	<div className="activity-name-block type4 second">
						  <div className="activity-small-icon">
						    <img alt="" src="assets/images/activity.png"/>
						  </div>
						  <p className="activity-name small">Practice</p>
						</div>

				      	<div className="activity-name-block type4 third">
						  <div className="activity-small-icon">
						    <img alt="" src={animationImg}/>
						  </div>
						  <p className="activity-name small">Fast</p>
						</div>
  					</div>
  					<div className="act-3-bubble">
  						<div className="activity-name-block type2">
				        	<p className="activity-name medium">Pattern 3</p>
				      	</div>
				      	<div className="activity-bubble circle text">
					      <div className="">
					       <img alt="" src="assets/images/act-1.png"/>
					      </div>
					    </div>
				      	<div className="activity-name-block type4 first">
						  <div className="activity-small-icon">
						    <img alt="" src={animationImg}/>
						  </div>
						  <p className="activity-name small">Slow</p>
						</div>

				      	<div className="activity-name-block type4 second">
						  <div className="activity-small-icon">
						    <img alt="" src="assets/images/activity.png"/>
						  </div>
						  <p className="activity-name small">Practice</p>
						</div>

				      	<div className="activity-name-block type4 third">
						  <div className="activity-small-icon">
						    <img alt="" src={animationImg}/>
						  </div>
						  <p className="activity-name small">Fast</p>
						</div>
  					</div>
  					<div className="act-3-bubble">
  						<div className="activity-name-block type2">
				        	<p className="activity-name medium">Exercise 4</p>
				      	</div>
				      	<div className="activity-bubble circle text">
					      <div className="">
					       <img alt="" src="assets/images/act-1.png"/>
					      </div>
					    </div>
				      	<div className="activity-name-block type4 first">
						  <div className="activity-small-icon">
						    <img alt="" src={animationImg}/>
						  </div>
						  <p className="activity-name small">Slow</p>
						</div>

				      	<div className="activity-name-block type4 second">
						  <div className="activity-small-icon">
						    <img alt="" src="assets/images/activity.png"/>
						  </div>
						  <p className="activity-name small">Practice</p>
						</div>

				      	<div className="activity-name-block type4 third">
						  <div className="activity-small-icon">
						    <img alt="" src={animationImg}/>
						  </div>
						  <p className="activity-name small">Fast</p>
						</div>
  					</div>
  					<div className="act-3-bubble">
  						<div className="activity-name-block type2">
				        	<p className="activity-name medium">Exercise 5</p>
				      	</div>
				      	<div className="activity-bubble circle text">
					      <div className="">
					       <img alt="" src="assets/images/act-1.png"/>
					      </div>
					    </div>
				      	<div className="activity-name-block type4 first">
						  <div className="activity-small-icon">
						    <img alt="" src={animationImg}/>
						  </div>
						  <p className="activity-name small">Slow</p>
						</div>

				      	<div className="activity-name-block type4 second">
						  <div className="activity-small-icon">
						    <img alt="" src="assets/images/activity.png"/>
						  </div>
						  <p className="activity-name small">Practice</p>
						</div>

				      	<div className="activity-name-block type4 third">
						  <div className="activity-small-icon">
						    <img alt="" src={animationImg}/>
						  </div>
						  <p className="activity-name small">Fast</p>
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

export default PreWriting;