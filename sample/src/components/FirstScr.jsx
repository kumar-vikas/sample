import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./cover.css";
import logo1 from '../images/logo-1.png';
import playBtn from "../images/play-btn.png";

class FirstScr extends Component {
    constructor(props){
        super(props)
        this.state = {
			subToc: false
        }
    }


	fetchContent = () =>{
		return this.props.state.nameList && this.props.state.nameList.map((cur)=>(
			<p  className="chaper-name small">
			<NavLink to={{pathname:"/precursive", name:cur.name, updateActiveTab:this.props.updateActiveTab}}>
				<a className="btn-icon small oragnge-btn">
					<img alt="" src={playBtn}/>
				</a> Cursive {cur.name}
			</NavLink>
			</p>
			)
		)
		
		console.log(" *-*-*--*-* ");
	}

	setToState = ()=>{
		this.setState({subToc: true})
	}

    render() {
        return (
	
        <div className="cover-base">
  	<div className="cover-logo">
  		<img alt="" src={logo1}/>
  	</div>
    <div className="toc-list">

		<div className="toc-cont">
			<div className="lftToc">
				{
					this.props.state.nameList && this.props.state.nameList.map((curVal)=>(
							<div className="btn-wrappper">
								<a className="chaper-name">Pre-Cursive {curVal.name}</a>
								<a className="btn-icon blue-btn" onClick={()=>this.setToState()}>
									<img alt="" src={playBtn}/>
								</a>
								<div className="small-btn-wrap">
									
									{/* {
									this.props.state.nameList && this.props.state.nameList.map((cur)=>(
										<p  className="chaper-name small">
										<NavLink to={{pathname:"/precursive", name:cur.name, updateActiveTab:this.props.updateActiveTab}}>
											<a className="btn-icon small oragnge-btn">
												<img alt="" src={playBtn}/>
											</a> Cursive {cur.name}
										</NavLink>
										</p>
										)
									)
									} */}
								</div>
							</div>
					)
					)
				}
			</div>
			<div className="subToc">
				{this.state.subToc ? this.fetchContent() : ""}
			</div>
		</div>

    	{/* <ul>
			{console.log(this.props.nameList, " ===========")}
			{
				this.props.state.nameList && this.props.state.nameList.map((curVal)=>(
					<li>
						<a className="chaper-name">Pre-Cursive {curVal.name}</a>
						<div className="btn-wrappper">
							<a className="btn-icon blue-btn">
							<img alt="" src={playBtn}/>
							</a>
							<div className="small-btn-wrap">
								{
								this.props.state.nameList && this.props.state.nameList.map((cur)=>(
									<p  className="chaper-name small">
									<NavLink to={{pathname:"/precursive", name:cur.name, updateActiveTab:this.props.updateActiveTab}}>
										<a className="btn-icon small oragnge-btn">
											<img alt="" src={playBtn}/>
										</a> Cursive {cur.name}
									</NavLink>
									</p>
									)
								)
								}
							</div>
						</div>
    				</li>
				)
				)
			}
    	</ul> */}
    </div>
  </div>
		);
    }
}
 
export default FirstScr;