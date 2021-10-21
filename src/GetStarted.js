import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowForwardIos } from "@mui/icons-material";
import tagicon from "../src/images/tagicon.PNG";
import bracketsicon from "../src/images/bracketsicon.PNG";
import Bounce from "react-reveal/Bounce";
const useStyles = makeStyles((theme) => ({
  ArrowSize: {
    fontSize: "14px !important",
  },
  getStarted: {
    [theme.breakpoints.up("md")]: {
      display: "flex !important",
    },
  },
  paymentsButton: {
    borderRadius: "20px !important",
    backgroundColor: "#635bff !important",
    [theme.breakpoints.up("up")]: {
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  ButtonDiv: {
    display: "flex",
  },
  textGrid: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "125px !important",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "70px !important",
    },
  },
  whatYouPay: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "34px",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "47px",
      paddingTop: "35px",
    },
  },
  yourIntegration: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: "47px",
      paddingTop: "35px",
    },
  },
}));
const GetStarted = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2} pt={14} pb={10}>
        <Grid item xs={12} md={6} className={classes.textGrid}>
          <Typography
            variant="h4"
            component="div"
            sx={{ fontWeight: "700 !important" }}
          >
            Ready to get started?
          </Typography>
          ;
          <Typography
            variant="body2"
            component="div"
            sx={{
              fontWeight: "400",
              color: "#798692",
              lineHeight: "1.6",
              fontSize: "20px",
            }}
          >
            Explore Stripe Payments, or create an account <br /> instantly and
            start accepting payments. You can
            <br /> also contact us to design a custom package for
            <br /> your business.
          </Typography>
          <div className={classes.ButtonDiv}>
            <Bounce left>
              <Button
                variant="contained"
                className={classes.paymentsButton}
                sx={{
                  marginTop: "23px",
                }}
              >
                Start now
                <ArrowForwardIos className={classes.ArrowSize} />
              </Button>
            </Bounce>
            <Bounce right>
              <Button
                className={classes.contactButton}
                sx={{ paddingTop: "31px !important" }}
              >
                Contact sales
                <ArrowForwardIos className={classes.ArrowSize} />
              </Button>
            </Bounce>
          </div>
        </Grid>
        <Grid item xs={12} md={6} pl={4}>
          <Box className={classes.getStarted}>
            <Grid pr={7} className={classes.whatYouPay}>
              <Bounce left>
                {" "}
                <img src={tagicon} alt="" />
              </Bounce>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  fontWeight: "500",
                  paddingLeft: "10px",
                  paddingTop: "10px",
                }}
              >
                Always know what you pay
              </Typography>
              <Typography
                variant="body2"
                component="div"
                sx={{
                  fontWeight: "450",
                  color: "#798692",
                  paddingTop: "10px",
                  paddingLeft: "10px",
                }}
              >
                Integrated per-transaction <br /> pricing with no hidden fees.
              </Typography>
            </Grid>
            <Grid className={classes.yourIntegration}>
              <Bounce right>
                <img src={bracketsicon} alt="" />
              </Bounce>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  fontWeight: "500",
                  paddingLeft: "10px",
                  paddingTop: "10px",
                }}
              >
                Start your integration
              </Typography>
              <Typography
                variant="body2"
                component="div"
                sx={{
                  fontWeight: "450",
                  color: "#798692",
                  paddingTop: "10px",
                  paddingLeft: "10px",
                }}
              >
                Get up and running with Stripe <br /> in as little as 10
                minutes.
              </Typography>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default GetStarted;
