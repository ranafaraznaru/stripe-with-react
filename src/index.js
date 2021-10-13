import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import OurClients from "./OurClients";
import PaymentsProducts from "./PaymentsProducts";
import DevsApi from "./DevsApi";
const App = () => {
  return (
    <>
      <Navbar />
      <OurClients />
      <PaymentsProducts />
      <DevsApi />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
