import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import "./App.css";
import Recommendation from "./Recommendation";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <div className="app_row">
        {" "}
        <SideBar />
        <Recommendation />
      </div>

      {/* SideBar */}

      {/* Recommendation */}
    </div>
  );
}

export default App;
