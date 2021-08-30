import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import "./App.css";
import Recommendation from "./Recommendation";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/search/:searchterm">
            <div className="app_row"> 
              <SideBar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app_row">
              <SideBar />
              <Recommendation />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
