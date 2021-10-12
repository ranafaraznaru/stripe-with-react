import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import OurClients from "./OurClients";
const App = () => {
  return (
    <>
      <Navbar />
      <OurClients />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
