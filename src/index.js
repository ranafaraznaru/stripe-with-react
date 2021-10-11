import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import MainPage from "./MainPage"
import Demo from "./Demo"
const App = () => {
  return (
   <>
    <MainPage/>
      <Navbar />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
