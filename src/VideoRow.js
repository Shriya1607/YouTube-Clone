import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./videorow.css";

function VideoRow() {
  return (
    <div className="videoRow">
      <img src="https://picsum.photos/360/202" alt="" />
      <div className="videoRow_text">
        <h3>Title</h3>
        <p className="videoRow_headline"> views &bull; date </p>
        <div className="videoRow_channel">
          <AccountCircleIcon className="videoRow_avatar" />
          <p>Channel</p>
        </div>
        <p className="videoRow_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          dolore.
        </p>
      </div>
    </div>
  );
}

export default VideoRow;
