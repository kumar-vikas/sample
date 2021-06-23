import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./cover.css";
import logo1 from "../images/logo-1.png";
import playBtn from "../images/play-btn.png";

class FirstScr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subToc: false,
    };
  }

  fetchContent = () => {
    return (
      this.props.state.subList &&
      this.props.state.subList.map((cur) => (
        <NavLink
          to={{
            pathname: "/precursive",
            name: cur.name,
            updateActiveTab: this.props.updateActiveTab,
          }}
        >
          <div className="chaper-name small">
            Cursive {cur.name}
            <span className="btn-icon small oragnge-btn">
              <img alt="" src={playBtn} />
            </span>
          </div>
        </NavLink>
      ))
    );

    console.log(" *-*-*--*-* ");
  };

  setToState = (e) => {
    try {
      document.getElementsByClassName("selected-topic")[0]
        .classList.remove("selected-topic");
    } catch (err) {}
    e.currentTarget.parentNode.children[0].classList.add("selected-topic");
    
    this.setState({ subToc: true });
  };

  render() {
    return (
      <div className="cover-base">
        <div className="cover-logo">
          <img alt="" src={logo1} />
        </div>
        <div className="toc-list">
          <div className="toc-cont">
            <div className="lftToc">
              {this.props.state.nameList &&
                this.props.state.nameList.map((curVal) => (
                  <div className="btn-wrappper">
                    <a className="chaper-name">Pre-Cursive {curVal.name}</a>
                    <a
                      className="btn-icon blue-btn"
                      onClick={(e) => this.setToState(e)}
                    >
                      <img alt="" src={playBtn} />
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
                ))}
            </div>
            <div className="subToc">
              {this.fetchContent() /* this.state.subToc ? this.fetchContent() : "" */}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default FirstScr;
