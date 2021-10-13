import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import OurClients from "./OurClients";
import PaymentsProducts from "./PaymentsProducts";
const App = () => {
  return (
    <>
      <Navbar />
      <OurClients />
      <PaymentsProducts />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
