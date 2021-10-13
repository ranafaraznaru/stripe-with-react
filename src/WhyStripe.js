import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography, Box } from "@mui/material";
import circleicon from "../src/images/circleicon.PNG";
import playicon from "../src/images/playicon.PNG";
import tradingicon from "../src/images/tradingicon.PNG";
import settingicon from "../src/images/settingicon.PNG";

const WhyStripe = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ paddingLeft: "150px", paddingTop: "110px" }}
      >
        <Grid item xs={12}>
          <Typography variant="h6" component="div" sx={{ color: "#635bff" }}>
            Why Stripe
          </Typography>
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontWeight: "600",
              lineHeight: "1.4",
              paddingTop: "20px",
            }}
          >
            A technology-first approach to payments <br /> and finance
          </Typography>
          <Box
            sx={{
              display: "flex",
              paddingTop: "40px",
              justifyContent: "space-around",
              paddingRight: "178px",
            }}
          >
            <Box xs={3}>
              <img src={circleicon} alt="" />
              <Typography
                variant="h6"
                component="div"
                sx={{ paddingTop: "5px", color: "#637586" }}
              >
                Close to the metal
              </Typography>
              <Typography
                variant="body2"
                component="div"
                sx={{
                  fontWeight: "400",
                  color: "#798692",
                  lineHeight: "1.5",
                  fontSize: "17px",
                }}
              >
                From direct integrations with <br /> card networks and banks to{" "}
                <br /> checkout flows in the browser, <br /> we operate on and
                optimize at <br /> every level of the financial stack.
              </Typography>
            </Box>
            <Box xs={3} pl={4}>
              <img src={playicon} alt="" />

              <Typography
                variant="h6"
                component="div"
                sx={{ paddingTop: "7px", color: "#637586" }}
              >
                Fastest-improving platform
              </Typography>
              <Typography
                variant="body2"
                component="div"
                sx={{
                  fontWeight: "400",
                  color: "#798692",
                  lineHeight: "1.5",
                  fontSize: "17px",
                }}
              >
                We release hundreds of features <br /> and improvements each
                year to
                <br />
                help you stay ahead of industry
                <br /> shifts. (On average, we deploy
                <br />
                our production API 16x per day.)
              </Typography>
            </Box>
            <Box xs={3} pl={4}>
              <img src={tradingicon} alt="" />

              <Typography
                variant="h6"
                component="div"
                sx={{ paddingTop: "3px", color: "#637586" }}
              >
                Battle-tested reliability
              </Typography>
              <Typography
                variant="body2"
                component="div"
                sx={{
                  fontWeight: "400",
                  color: "#798692",
                  lineHeight: "1.5",
                  fontSize: "17px",
                }}
              >
                Our systems operate with <br /> 99.9%+ uptime and are highly{" "}
                <br /> scalable and redundant. Stripe <br /> is certified to the
                highest <br /> compliance standards.
              </Typography>
            </Box>
            <Box xs={3}>
              <img src={settingicon} alt="" />

              <Typography
                variant="h6"
                component="div"
                sx={{ paddingTop: "6px", color: "#637586" }}
              >
                Intelligent optimizations
              </Typography>
              <Typography
                variant="body2"
                component="div"
                sx={{
                  fontWeight: "400",
                  color: "#798692",
                  lineHeight: "1.5",
                  fontSize: "17px",
                }}
              >
                Our machine learning models <br /> train on billions of data
                points
                <br /> and help increase revenue
                <br /> across conversion, fraud,
                <br /> revenue recovery, and more.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default WhyStripe;
