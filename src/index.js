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
import Cards from "./Cards";
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <OurClients />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <PaymentsProducts />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <DevsApi />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <WhyStripe />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <Cards />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <GetStarted />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
