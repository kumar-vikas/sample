import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./cover.css";
import logo1 from '../images/logo-1.png';
import playBtn from "../images/play-btn.png";

class FirstScr extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }


    render() {
        return (
	
        <div className="cover-base">
  	<div className="cover-logo">
  		<img alt="" src={logo1}/>
  	</div>
    <div className="toc-list">
    	<ul>
    		<li>
    			<a className="chaper-name">Junior infants</a>
    			<div className="btn-wrappper">
    				<a className="btn-icon blue-btn">
					  <img alt="" src={playBtn}/>
					</a>
					<div className="small-btn-wrap">
						<p  className="chaper-name small">
							<NavLink to="/precursive">
								<span className="btn-icon small blue-btn">
									<img alt="" src={playBtn}/>
								</span> Pre-Cursive
							</NavLink>
						</p>
						<p  className="chaper-name small">
							<a className="btn-icon small oragnge-btn">
							  <img alt="" src={playBtn}/>
							</a> Cursive
						</p>
					</div>
    			</div>
    		</li>

    		<li>
    			<a className="chaper-name">Senior infants</a>
    			<div className="btn-wrappper">
    				<a className="btn-icon blue-btn">
					  <img alt="" src={playBtn}/>
					</a>
					<div className="small-btn-wrap">
						<p  className="chaper-name small">
							<a className="btn-icon small blue-btn">
							  <img alt="" src={playBtn}/>
							</a> Pre-Cursive
						</p>
						<p  className="chaper-name small">
							<a className="btn-icon small oragnge-btn">
							  <img alt="" src={playBtn}/>
							</a> Cursive
						</p>
					</div>
    			</div>
    		</li>

    		<li>
    			<a className="chaper-name">First Class</a>
    			<div className="btn-wrappper">
    				<a className="btn-icon blue-btn">
					  <img alt="" src={playBtn}/>
					</a>
					<div className="small-btn-wrap">
						<p  className="chaper-name small">
							<a className="btn-icon small blue-btn">
							  <img alt="" src={playBtn}/>
							</a> Pre-Cursive
						</p>
						<p  className="chaper-name small">
							<a className="btn-icon small oragnge-btn">
							  <img alt="" src={playBtn}/>
							</a> Cursive
						</p>
					</div>
    			</div>
    		</li>

    		<li>
    			<a className="chaper-name">Second Class</a>
    			<div className="btn-wrappper">
    				<a className="btn-icon blue-btn">
					  <img alt="" src={playBtn}/>
					</a>
					<div className="small-btn-wrap">
						<p  className="chaper-name small">
							<a className="btn-icon small blue-btn">
							  <img alt="" src={playBtn}/>
							</a> Pre-Cursive
						</p>
						<p  className="chaper-name small">
							<a className="btn-icon small oragnge-btn">
							  <img alt="" src={playBtn}/>
							</a> Cursive
						</p>
					</div>
    			</div>
    		</li>

    		<li>
    			<a className="chaper-name">Third and<br/>Fourth Class</a>
    			<div className="btn-wrappper">
    				<a className="btn-icon blue-btn">
					  <img alt="" src={playBtn}/>
					</a>
					<div className="small-btn-wrap">
						<p  className="chaper-name small">
							<a className="btn-icon small blue-btn">
							  <img alt="" src={playBtn}/>
							</a> Pre-Cursive
						</p>
						<p  className="chaper-name small">
							<a className="btn-icon small oragnge-btn">
							  <img alt="" src={playBtn}/>
							</a> Cursive
						</p>
					</div>
    			</div>
    		</li>
    	</ul>
    </div>
  </div>
		);
    }
}
 
export default FirstScr;