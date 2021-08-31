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
      <VideoRow
        title="How to Start Coding | Programming for Beginners | Learn Coding | Intellipaat"
        view="3.3M views"
        date="1 year ago"
        channel="Intellipat"
        description="If you've enjoyed this how to start coding video, Like us and Subscribe to our channel for more similar informative videos and free ..."
      />
      <VideoRow
        title="Introduction to Programming and Computer Science - Full Course"
        view="1.9M views"
        date="1 year ago"
        channel="freeCodeCamp"
        description="In this course, you will learn basics of computer programming and computer science. The concepts you learn apply to any and all ..."
      />
      <VideoRow
        title="How to Learn Coding for Beginners [ Sharing My Experience ]"
        view="2.1M views"
        date="2 year ago"
        channel="Technology Gyan"
        description=" hu ki mene kis tarah se coding sikhe aur coding sikhne ke liye expert banne ke liye kya kya karna chahiye kaise coding skills ko ..."
      />
      <VideoRow
        title="Top 5 Programming Languages to Learn to Get a Job at Google, Facebook, Microsoft, etc."
        view="2.7M views"
        date="3 years ago"
        channel="CS Dojo"
        description="Which programming language to learn first? Watch this video to find out! In this video, I talk about the top 5 programming .."
      />
      <VideoRow
        title="Learn Go Programming - Golang Tutorial for Beginners"
        view="1.1M views"
        date="2 years ago"
        channel="freeCode"
        description="Learn the Go programming language (Golang) in this step-by-step tutorial course for beginners. Go is an open source ..."
      />
    </div>
  );
}

export default SearchPage;
