import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import OurClients from "./OurClients";
import PaymentsProducts from "./PaymentsProducts";
import DevsApi from "./DevsApi";
import WhyStripe from "./WhyStripe";
import GetStarted from "./GetStarted";
import Footer from "./Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <OurClients />
      <PaymentsProducts />
      <DevsApi />
      <WhyStripe />
      <GetStarted />
      <Footer />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
