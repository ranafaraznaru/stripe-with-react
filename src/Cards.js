import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, Box } from "@mui/material";
import circleicon from "../src/images/circleicon.PNG";
import playicon from "../src/images/playicon.PNG";
import tradingicon from "../src/images/tradingicon.PNG";
import settingicon from "../src/images/settingicon.PNG";
import RubberBand from "react-reveal/RubberBand";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  Cards: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-evenly",
    },
  },
}));
const Cards = () => {
  const classes = useStyles();

  return (
    <>
      <Box
        className={classes.Cards}
        sx={{
          paddingLeft: "50px",
        }}
      >
        <Card sx={{ minWidth: 275, marginBottom: "20px" }}>
          <CardContent>
            <RubberBand>
              <img src={circleicon} alt="" />
            </RubberBand>
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
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 275, marginBottom: "20px" }}>
          <CardContent>
            <RubberBand>
              <img src={playicon} alt="" />
            </RubberBand>
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
              We release hundreds of features <br /> and improvements each year
              to
              <br />
              help you stay ahead of industry
              <br /> shifts. (On average, we deploy
              <br />
              our production API 16x per day.)
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 275, marginBottom: "20px" }}>
          <CardContent>
            <RubberBand>
              <img src={tradingicon} alt="" />
            </RubberBand>
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
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 275, marginBottom: "20px" }}>
          <CardContent>
            <RubberBand>
              <img src={settingicon} alt="" />
            </RubberBand>

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
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Cards;
