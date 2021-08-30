import React from "react";
import TuneIcon from "@material-ui/icons/Tune";
import VideoRow from "./VideoRow";
import "./searchpage.css";

function SearchPage() {
  return (
    <div className="searchpage">
      <div className="filter">
        <TuneIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <VideoRow />
      <VideoRow />
      <VideoRow />
      <VideoRow />
      <VideoRow />
    </div>
  );
}

export default SearchPage;
