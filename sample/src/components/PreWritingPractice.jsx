import { useEffect } from "react";
import MemoTest from "./Test";
import "./practice.css";
import infoBtn from "../images/info-btn.png";
import vidIcon538 from "../images/vidIcon-538.png";
import pat1 from "../images/pat-1-bg.png";
import pat2 from "../images/pat-2-bg.png";
import pat3 from "../images/pat-3-bg.png";
import pat4 from "../images/pat-4-bg.png";
import pat5 from "../images/pat-5-bg.png";

import { MyConsumer } from "./context";

function PreWritingPractice(props) {
  const [pattern, speed] = props.location.path ? props.location.path.split("$") : ["pat-1", ""];
  const bgimgs = [pat1, pat2, pat3, pat4, pat5];
  var bgimg = bgimgs[parseInt(pattern.split("-")[1]) - 1];
  console.log(bgimg);
  var obj = {
    "pat-1$slow": "assets/Pre-Writing/Copy of Bubble_page 4_slow.mp4",
    "pat-1$fast": "assets/Pre-Writing/Copy of Bubble_page 4_normal.mp4",
    "pat-2$slow": "assets/Pre-Writing/Copy of Chimney_page 6_slow.mp4",
    "pat-2$fast": "assets/Pre-Writing/Copy of Chimney_page 6_normal.mp4",
    "pat-3$slow": "assets/Pre-Writing/Copy of Bee_slow.mp4",
    "pat-3$fast": "assets/Pre-Writing/Copy of Bee_Normal.mp4",
    "pat-4$slow": "assets/Pre-Writing/Copy of Snail page_12 slow.mp4",
    "pat-4$fast": "assets/Pre-Writing/Copy of Snail page_12_normal.mp4",
    "pat-5$slow": "assets/Pre-Writing/Copy of Butterfly_slow.mp4",
    "pat-5$fast": "assets/Pre-Writing/Copy of Butterfly_normal.mp4",
  };

  useEffect(() => {
    props.setVisibility(props.history);
  }, []);

  function fetchVideo(e) {
    var cc = e.target;
    let cPath = pattern + "$" + cc.innerHTML.toLowerCase();

    var vid = document.getElementById("vidPlayer-pre");
    vid.src = obj[cPath];
    vid.play();

    console.log(cPath, " ========================");
  }

  function abc() {
    return (
      <MyConsumer>{(a) => <p className="activity-name">Pre-Cursive {a.activeTab}</p>}</MyConsumer>
    );
  }

  return (
    <div className="activity-base" id="act-base-prePrac">
      <div className="dailoug-block-img">
        <img alt="" src="assets/images/dialog-1.png" />
      </div>
      <div className="activity-base-inner">
        <div className="activity-head">
          <a className="btn-icon oragnge-btn info-btn">
            <img alt="" src={infoBtn} />
          </a>
          <div className="activity-name-block">
            {abc()}
            {/* <p className="activity-name">Pre-Cursive</p> */}
          </div>
        </div>

        <div className="bodyTxt">Pre-Writing</div>
        <div id="vidCont">
          <div>
            <button onClick={fetchVideo}>Slow</button>
            <span>
              <img src={vidIcon538} alt="" />
            </span>
            <button onClick={fetchVideo}>Fast</button>
          </div>
          <video autoPlay loop controls id="vidPlayer-pre" src={obj[pattern + "$" + speed]}></video>
        </div>

        <MemoTest
          canprops={{
            width: "1070",
            height: "280",
            marginLeft: 100,
            marginTop: 25,
            backColor: "#fff",
          }}
          bgImg={bgimg}
          className="drawingTool"
        />
      </div>
    </div>
  );
}

export default PreWritingPractice;
