import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./videorow.css";

function VideoRow(props) {
  return (
    <div className="videoRow">
      <img src="https://picsum.photos/360/202" alt="" />
      <div className="videoRow_text">
        <h4>{ props.title}</h4>
        <p className="videoRow_headline"> {props.view} &bull; {props.date} </p>
        <div className="videoRow_channel">
          <AccountCircleIcon className="videoRow_avatar" />
          <p>{props.channel}</p>
        </div>
        <p className="videoRow_description">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default VideoRow;
