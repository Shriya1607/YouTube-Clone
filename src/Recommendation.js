import React from "react";
import "./recommendation.css";
import VideoCard from "./VideoCard";

function Recommendation() {
  return (
    <div className="recommendation">
      <div className="videos">
        <VideoCard
          className="recommend_video"
          title="KSI Brings Out Sidemen On Stage"
          views={895000}
          channel="KSIClips"
          date="Aug 29,2021"         
        />
        <VideoCard className="recommend_video" />
        <VideoCard className="recommend_video" />
        <VideoCard className="recommend_video" />
        <VideoCard className="recommend_video" />
        <VideoCard className="recommend_video" />
        <VideoCard className="recommend_video" />
        <VideoCard className="recommend_video" />
      </div>
    </div>
  );
}

export default Recommendation;
