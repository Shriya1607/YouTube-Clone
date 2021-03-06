import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  const [Input, setInput] = useState("");
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon className="header_icon1" />
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png"
            alt=""
            className="header_yticon"
          />
        </Link>
      </div>
      <div className="header_bw">
        <input
          onChange={(e) => setInput(e.target.value)} //e is the search bar, e.target.value is what we type inside input field
          type="text"
          placeholder="Search"
          className="header_input"
        />
        <Link to={`/search/${Input}`}>
          <SearchIcon className="header_icon2" />
        </Link>
        <IconButton>
          <MicIcon className="header_icon3" />
        </IconButton>
      </div>
      <div className="header-right">
        <VideoCallIcon className="header_icon4" />
        <AppsIcon className="header_icon5" />
        <NotificationsIcon className="header_icon6" />
        <Avatar className="header_avatar" />
      </div>
    </div>
  );
}

export default Header;
