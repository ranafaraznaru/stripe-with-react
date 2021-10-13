import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import OurClients from "./OurClients";
import PaymentsProducts from "./PaymentsProducts";
import DevsApi from "./DevsApi";
import WhyStripe from "./WhyStripe";
import GetStarted from "./GetStarted";
const App = () => {
  return (
    <>
      <Navbar />
      <OurClients />
      <PaymentsProducts />
      <DevsApi />
      <WhyStripe />
      <GetStarted />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
