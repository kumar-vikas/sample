import { useEffect } from "react";
import MemoTest from "./Test";
import "./practice.css";
import pencilImg from "../images/pencil-big.png";
import infoBtn from "../images/info-btn.png";
import penIcon from "../images/pencil-2.png";
import vidIcon538 from "../images/vidIcon-538.png";
import bee from "../images/bee.png";

function PreWritingPractice(props) {
  const [pattern, speed] = props.location.path
    ? props.location.path.split("$")
    : ["pat-1", ""];

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

  return (
    <div className="activity-base" id="act-base-prePrac">
      <img alt="" src={pencilImg} class="pencile-image" />
      <div className="dailoug-block-img">
        <img alt="" src="assets/images/dialog-1.png" />
      </div>
      <div className="activity-base-inner">
        <div className="activity-head">
          <a className="btn-icon oragnge-btn info-btn">
            <img alt="" src={infoBtn} />
          </a>
          <div className="activity-name-block">
            <p className="activity-name">Pre-Cursive</p>
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
          <video
            autoPlay
            loop
            controls
            id="vidPlayer-pre"
            src={obj[pattern + "$" + speed]}
          ></video>
        </div>

        <MemoTest
          canprops={{
            width: "1070",
            height: "200",
            marginLeft: 100,
            marginTop: 100,
            backImg: bee,
            backColor: "#fff",
          }}
          className="drawingTool"
        />
      </div>
    </div>
  );
}

export default PreWritingPractice;
