import React, { Component } from 'react';
import pencilImg from "../images/pencil-big.png"
import printable from "../images/printable-icon.png";
import printIcon from "../images/printIcon-932.png";
import infoBtn from "../images/info-btn.png";

class PrintableComponent extends Component{
    constructor(props){
        super(props)

		this.state={
			printIms: ["1 Worksheet: the letter a","2 Worksheet: the letter b","3 Worksheet: the letter c","4 Worksheet: the letter d"]
		}
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
				<div className="gameIcon">
					<img width="110" src={printable} alt="" />
				</div>
				<div className="activity-folder">
					<div className="activity-folder-bg activity-2-wrap">
						<div className="activity-2" id="gameBG">
							<div className="activity-name-block type5">
								<p className="activity-name medium">Printables</p>
							</div>
							
							<div className="print-frame-inner">

								{
									this.state.printIms.map((nam)=>(
										<div className="printablesBtn">
											<div className="print-inner">{nam}</div>
											<img width="60" src={printIcon} alt="" />
										</div>
									))
								}
								<div></div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
  </div>
        )
    }
}

export default PrintableComponent;