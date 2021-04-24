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
  		<img src={logo1}/>
  	</div>
    <div className="toc-list">
    	<ul>
    		<li>
    			<a href="#"className="chaper-name">Junior infants</a>
    			<div className="btn-wrappper">
    				<a href="#" className="btn-icon blue-btn">
					  <img src={playBtn}/>
					</a>
					<div className="small-btn-wrap">
						<p  className="chaper-name small">
							<NavLink to="/precursive">
								<a href="#" className="btn-icon small blue-btn">
								<img src={playBtn}/>
								</a> Pre-Cursive
							</NavLink>							
						</p>
						<p  className="chaper-name small">
							<a href="#" className="btn-icon small oragnge-btn">
							  <img src={playBtn}/>
							</a> Cursive
						</p>
					</div>
    			</div>
    		</li>

    		<li>
    			<a href="#"className="chaper-name">Senior infants</a>
    			<div className="btn-wrappper">
    				<a href="#" className="btn-icon blue-btn">
					  <img src={playBtn}/>
					</a>
					<div className="small-btn-wrap">
						<p  className="chaper-name small">
							<a href="#" className="btn-icon small blue-btn">
							  <img src={playBtn}/>
							</a> Pre-Cursive
						</p>
						<p  className="chaper-name small">
							<a href="#" className="btn-icon small oragnge-btn">
							  <img src={playBtn}/>
							</a> Cursive
						</p>
					</div>
    			</div>
    		</li>

    		<li>
    			<a href="#"className="chaper-name">First Class</a>
    			<div className="btn-wrappper">
    				<a href="#" className="btn-icon blue-btn">
					  <img src={playBtn}/>
					</a>
					<div className="small-btn-wrap">
						<p  className="chaper-name small">
							<a href="#" className="btn-icon small blue-btn">
							  <img src={playBtn}/>
							</a> Pre-Cursive
						</p>
						<p  className="chaper-name small">
							<a href="#" className="btn-icon small oragnge-btn">
							  <img src={playBtn}/>
							</a> Cursive
						</p>
					</div>
    			</div>
    		</li>

    		<li>
    			<a href="#"className="chaper-name">Second Class</a>
    			<div className="btn-wrappper">
    				<a href="#" className="btn-icon blue-btn">
					  <img src={playBtn}/>
					</a>
					<div className="small-btn-wrap">
						<p  className="chaper-name small">
							<a href="#" className="btn-icon small blue-btn">
							  <img src={playBtn}/>
							</a> Pre-Cursive
						</p>
						<p  className="chaper-name small">
							<a href="#" className="btn-icon small oragnge-btn">
							  <img src={playBtn}/>
							</a> Cursive
						</p>
					</div>
    			</div>
    		</li>

    		<li>
    			<a href="#"className="chaper-name">Third and<br/>Fourth Class</a>
    			<div className="btn-wrappper">
    				<a href="#" className="btn-icon blue-btn">
					  <img src={playBtn}/>
					</a>
					<div className="small-btn-wrap">
						<p  className="chaper-name small">
							<a href="#" className="btn-icon small blue-btn">
							  <img src={playBtn}/>
							</a> Pre-Cursive
						</p>
						<p  className="chaper-name small">
							<a href="#" className="btn-icon small oragnge-btn">
							  <img src={playBtn}/>
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