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
          views="895000 views"
          channel="KSIClips"
          date="Aug 29,2021"
        />
        <VideoCard
          className="recommend_video"
          title="Dua Lipa - Levitating (Lyrics)"
          views="36,781,031 views"
          channel="Escape Music"
          date="27 Mar 2020"
        />
        <VideoCard
          className="recommend_video"
          title="Items you can ask for on the plane FOR FREE! "
          views="8,305,905 views"
          channel="Jeenie.Weenie"
          date="1 Jun 2021"
        />
        <VideoCard
          className="recommend_video"
          title="Explore The Conjuring Universe: Behind The Scenes Documentary | Warner Bros. UK"
          views="2,460,283 views"
          channel="Warner Bros. UK Horror"
          date="24 Oct 2020"
        />
        <VideoCard
          className="recommend_video"
          title="Kota Factory 2 | Official Teaser | TVF | Netflix India"
          views="3,324,443 views"
          channel="Netflix India"
          date="30 Aug 2021"
        />
        <VideoCard
          className="recommend_video"
          title="Roommate - Stand Up Comedy Ft. Anubhav Singh Bassi"
          views="31,013,912 views"
          channel="Anubhav Singh Bassi"
          date="6 Apr 2021"
        />
        <VideoCard
          className="recommend_video"
          title="What teachers don't want students to know"
          views="5,000,119 views"
          channel="BuzzFeedVideos"
          date="26 Apr 2021
"
        />
        <VideoCard
          className="recommend_video"
          title="The Best Brownies You'll Ever Eat"
          views="18,438,891 views"
          channel="Tasty"
          date="1 Jul 2018"
        />
      </div>
    </div>
  );
}

export default Recommendation;
