import React from "react";
import "./sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <div className="side_home">
          <HomeIcon className="side_icon" />
          <h3 className="side_text">Home</h3>
        </div>
        <div className="side_home">
          <ExploreIcon className="side_icon" />
          <h3 className="side_text">Explore</h3>
        </div>
        <div className="side_home">
          <SubscriptionsIcon className="side_icon" />
          <h3 className="side_text">Subscription</h3>
        </div>
      </div>

      <div className="sidebar_bw">
        <div className="side_home">
          <VideoLibraryIcon className="side_icon" />
          <h3 className="side_text">Library</h3>
        </div>
        <div className="side_home">
          <HistoryIcon className="side_icon" />
          <h3 className="side_text">History</h3>
        </div>
        <div className="side_home">
          <PlayArrowIcon className="side_icon" />
          <h3 className="side_text">Your Videos</h3>
        </div>
        <div className="side_home">
          <WatchLaterIcon className="side_icon" />
          <h3 className="side_text">Watch Later</h3>
        </div>
        <div className="side_home">
          <ThumbUpIcon className="side_icon" />
          <h3 className="side_text">Liked Videos</h3>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p className="subscribe">SUBSCRIPTIONS</p>
      </div>
    </div>
  );
}

export default SideBar;
