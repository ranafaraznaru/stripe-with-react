import * as React from "react";
import { makeStyles } from "@mui/styles";
import { ArrowForwardIos } from "@mui/icons-material";
import { Grid, AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import mob1 from "../src/images/mob1.jpg";
import mob2 from "../src/images/mob2.jpg";
const useStyles = makeStyles({
  signinButton: {
    borderRadius: "20px !important",
    backgroundColor: "hsla(0,0%,100%,0.2) !important",
  },
  ArrowSize: {
    fontSize: "14px !important",
  },
  mob2Img: {
    position: "absolute",
    left: 317,
    top: 57,
  },
  startnowButton: {
    borderRadius: "20px !important",
    backgroundColor: "#0A2540 !important",
    marginLeft: "38px !important",
  },
  contactButton: {
    marginLeft: "10px !important",
    color: "#0a2540 !important",
    fontWeight: "600 !important",
  },
  bgGradient: {
    // background:
    //   "linear-gradient(150deg, #a960ee 15%, #ff333d 70%, #90e0ff 94%, #ffcb57 80%) !important",
    // width: "100%",
    // height: "100vh",
    // position: "relative",
    // clipPath: "polygon(0% 0%, 100% 0%, 100% 30%, 0% 100%)",
  },
  // Nav: {
  //   background:
  //     "linear-gradient(150deg, #a960ee 15%, #ff333d 70%, #90e0ff 94%) !important",
  // },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <div container className={classes.bgGradient}>
      <AppBar className={classes.Nav}>
        <Toolbar>
          <div style={{ width: "100%" }}>
            <Box sx={{ display: "flex", p: 1 }}>
              <Box sx={{ p: 1, flexGrow: 1 }}>
                {" "}
                <Typography
                  variant="h3"
                  component="div"
                  sx={{
                    font: "caption",
                    fontWeight: "bold",
                    fontSize: "27px",
                  }}
                >
                  Stripe
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 1, display: "flex" }}>
                <Box sx={{ pt: 2, px: 2, font: "caption", fontWeight: "bold" }}>
                  Products
                </Box>
                <Box sx={{ pt: 2, px: 2, font: "caption", fontWeight: "bold" }}>
                  Use cases
                </Box>
                <Box sx={{ pt: 2, px: 2, font: "caption", fontWeight: "bold" }}>
                  Developers
                </Box>
                <Box sx={{ pt: 2, px: 2, font: "caption", fontWeight: "bold" }}>
                  Company
                </Box>
                <Box sx={{ pt: 2, px: 2, font: "caption", fontWeight: "bold" }}>
                  Pricing
                </Box>
              </Box>
              <Box sx={{ p: 1 }}>
                {" "}
                <Button
                  variant="contained"
                  className={classes.signinButton}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  Sign in
                  <ArrowForwardIos className={classes.ArrowSize} />
                </Button>
              </Box>
            </Box>
          </div>
        </Toolbar>
      </AppBar>

      <Grid container>
        <Grid item xs={12} md={7}>
          <div>
            <Typography
              variant="h1"
              component="div"
              gutterBottom
              pl={8}
              pt={16}
              sx={{ text: "bold", fontWeight: "600" }}
            >
              Payments infrastructure for the internet
            </Typography>
            <Typography
              variant="h6"
              pl={8}
              sx={{ color: "#85919d", fontWeight: "400", lineHeight: "1.3" }}
            >
              Millions of companies of all sizes—from startups to Fortune
              <br /> 500s—use Stripe’s software and APIs to accept payments,
              <br /> send payouts, and manage their businesses online.
            </Typography>
            <Toolbar sx={{ marginTop: "20px" }}>
              <Button variant="contained" className={classes.startnowButton}>
                Start now
                <ArrowForwardIos className={classes.ArrowSize} />
              </Button>
              <Button className={classes.contactButton}>
                Contact sales
                <ArrowForwardIos className={classes.ArrowSize} />
              </Button>
            </Toolbar>
          </div>
        </Grid>
        <Grid item xs={12} md={5} pt={4}>
          <Toolbar>
            <Grid item xs={6} pt={5}>
              <img src={mob1} alt="" />
            </Grid>

            <Grid item xs={6}>
              <img src={mob2} className={classes.mob2Img} alt="" />
            </Grid>
          </Toolbar>
        </Grid>{" "}
      </Grid>
    </div>
  );
};
export default Navbar;
// "start": "react-scripts start",
// "start": "webpack-dev-server --env.ENVIRONMENT=development --content-base src/ --mode development --watch --watch-poll",
