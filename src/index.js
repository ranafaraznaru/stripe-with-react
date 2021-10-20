import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import MainPage from "./MainPage";
import OurClients from "./OurClients";
import PaymentsProducts from "./PaymentsProducts";
import DevsApi from "./DevsApi";
import WhyStripe from "./WhyStripe";
import GetStarted from "./GetStarted";
import Footer from "./Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/Theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
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
