import * as React from "react";
import { makeStyles } from "@mui/styles";
import { ArrowForwardIos } from "@mui/icons-material";
import { Grid, Toolbar, Typography, Button } from "@mui/material";
import mob1 from "../src/images/mob1.jpg";
import mob2 from "../src/images/mob2.jpg";
import HeadShake from "react-reveal/HeadShake";
import Zoom from "react-reveal/Zoom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  mob2Img: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      left: 317,
      top: 57,
    },
  },
  startnowButton: {
    borderRadius: "20px !important",
    backgroundColor: "#0A2540 !important",

    [theme.breakpoints.up("md")]: {
      marginLeft: "38px !important",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "15px !important",
    },
  },
  contactButton: {
    marginLeft: "10px !important",
    color: "#0a2540 !important",
    fontWeight: "600 !important",
  },
  bgGradient: {
    background:
      "linear-gradient(150deg, #a960ee 15%, #ff333d 70%, #90e0ff 94%, #ffcb57 80%) !important",
    // width: "100%",
    // height: "100vh",
    // position: "relative",
    // clipPath: "polygon(0% 0%, 100% 0%, 100% 30%, 0% 100%)",
  },
  mainHeading: {
    text: "bold !important",
    fontWeight: "600 !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem !important",
      paddingLeft: "32px !important",
    },
  },
  subText: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: "32px !important",
    },
  },
  ArrowSize: {
    [theme.breakpoints.down("md")]: {
      fontSize: "15px !important",
    },
  },
}));

const MainPage = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div container className={classes.bgGradient}>
      <Grid container>
        <Grid item xs={12} md={7}>
          <div>
            <Zoom delay={1000}>
              <Typography
                xs={12}
                variant="h1"
                component="div"
                gutterBottom
                pl={8}
                pt={16}
                className={classes.mainHeading}
              >
                Payments infrastructure for the internet
              </Typography>
            </Zoom>

            <Zoom delay={1000}>
              <Typography
                className={classes.subText}
                xs={12}
                variant="h6"
                pl={8}
                sx={{
                  color: "#85919d",
                  fontWeight: "400",
                  lineHeight: "1.3",
                }}
              >
                Millions of companies of all sizes—from startups to Fortune
                <br /> 500s—use Stripe’s software and APIs to accept payments,
                <br /> send payouts, and manage their businesses online.
              </Typography>
            </Zoom>

            <Toolbar sx={{ marginTop: "20px" }}>
              <HeadShake>
                <Button variant="contained" className={classes.startnowButton}>
                  Start now
                  <ArrowForwardIos className={classes.ArrowSize} />
                </Button>
                <Button className={classes.contactButton}>
                  Contact sales
                  <ArrowForwardIos className={classes.ArrowSize} />
                </Button>
              </HeadShake>
            </Toolbar>
          </div>
        </Grid>
        {!isSmallScreen ? (
          <Grid item xs={12} md={5} pt={4}>
            <Toolbar>
              <Zoom delay={1000}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  order={{ xs: 1, sm: 1 }}
                  pt={5}
                >
                  <img src={mob1} alt="" />
                </Grid>
              </Zoom>
              <Grid item xs={12} sm={12} md={6} order={{ xs: 2, sm: 2 }}>
                <Zoom delay={2000}>
                  <img src={mob2} className={classes.mob2Img} alt="" />
                </Zoom>
              </Grid>
            </Toolbar>
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
};
export default MainPage;
// "start": "react-scripts start",
// "start": "webpack-dev-server --env.ENVIRONMENT=development --content-base src/ --mode development --watch --watch-poll",
