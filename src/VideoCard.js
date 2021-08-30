import React from "react";
import { Avatar } from "@material-ui/core";
import "./videocard.css";

function VideoCard(props) {
  return (
    <div className="videocard">
      <img src="https://picsum.photos/270/140" alt="" className="thumnbnail" />
      <div className="videocard_info">
        <Avatar className="videocard_avatar" />
        <div className="videocard_text">
          <h4 className="video_title">{props.title}</h4>
          <p className="video_channel">{props.channel}</p>
          <p className="video_date">
            {props.views} &bull; {props.date}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
