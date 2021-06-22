import { useEffect } from "react";
import MemoTest from "./Test";
import "./practice.css";
import pencilImg from "../images/pencil-big.png";
import infoBtn from "../images/info-btn.png";
import penIcon from "../images/pencil-2.png";
import wPage from "../images/w-page.png";
import vidIcon538 from "../images/vidIcon-538.png";

function LetterFormPractice(props) {
  const [pattern, speed] = props.location.path
    ? props.location.path.split("$")
    : ["pat-1", ""];

  var obj = {
    "g": "assets/Letter Writing/Small Letters/Copy of g_small_new fast VO.mp4",
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

  return (
    <div className="activity-base" id="act-base-prePrac">
      <img alt="" src={pencilImg} className="pencile-image" />
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

        <div className="letterFormbodyTxt">Letter Formation</div>
        <div id="letterFormvidCont">
          <div>
            <span>
              <img src={vidIcon538} alt="" />
            </span>
          </div>
          <video
            loop
            autoPlay
            controls
            id="vidPlayer-pre"
            src={obj["g"]}
          ></video>
        </div>

        <MemoTest
          canprops={{
            width: "550",
            height: "480",
            marginLeft: 625,
            marginTop: -173,
            backImg: wPage,
            backColor: "#fff",
          }}
          className="drawingTool"
        />
      </div>
    </div>
  );
}

export default LetterFormPractice;
