import * as React from "react";
import { Typography, Grid, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import visacard1 from "../src/images/visacard1.png";
import { ArrowForwardIos } from "@mui/icons-material";
import pay from "../src/images/pay.PNG";
import mobpay from "../src/images/mobpay.png";
import howtopay from "../src/images/howtopay.png";
import graphpay from "../src/images/graphpay.PNG";
import Zoom from "react-reveal/Zoom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  ArrowSize: {
    fontSize: "14px !important",
  },
  paymentsButton: {
    borderRadius: "20px !important",
    backgroundColor: "#635bff !important",
  },
  PaymentsProducts: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: "30px",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "110px",
    },
  },
  Payimg: {
    [theme.breakpoints.down("md")]: {
      width: "330px",
    },
  },
  HowTopPay: {
    [theme.breakpoints.up("md")]: {
      position: "relative",
      top: "-120px",
      left: "50px",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "45px",
      paddingTop: "55px",
      paddingLeft: "28px",
    },
  },
  MobPay: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "32px",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "28px",
      paddingTop: "35px",
    },
  },
}));
const PaymentsProducts = () => {
  const theme = useTheme();

  const classes = useStyles();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid
        container
        spacing={2}
        className={classes.PaymentsProducts}
        sx={{
          backgroundColor: "#F6F9FC",
          paddingTop: "100px",
          marginTop: "90px",
        }}
      >
        <Grid item xs={12} md={6}>
          <div order={{ xs: 1 }}>
            <Typography variant="h6" component="div" sx={{ color: "blue" }}>
              Unified platform
            </Typography>
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontWeight: "600",
                color: "#0a2540",
                lineHeight: "1.4",
                paddingTop: "20px",
              }}
            >
              A fully integrated suite of <br /> payments products
            </Typography>
            <Typography
              variant="body2"
              component="div"
              sx={{
                fontWeight: "400",
                color: "#002c59",
                lineHeight: "1.6",
                fontSize: "20px",
                paddingTop: "25px",
              }}
            >
              We bring together everything that’s required to build <br />
              websites and apps that accept payments and send payouts <br />
              globally. Stripe’s products power payments for online and <br />
              in-person retailers, subscriptions businesses, software <br />
              platforms and marketplaces, and everything in between.
            </Typography>
          </div>
          <div order={{ xs: 1 }}>
            <Zoom>
              <Button
                variant="contained"
                className={classes.paymentsButton}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "23px",
                }}
              >
                Start with payments
                <ArrowForwardIos className={classes.ArrowSize} />
              </Button>
            </Zoom>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div order={{ xs: 2 }}>
            <Typography
              variant="body2"
              component="div"
              sx={{
                fontWeight: "400",
                color: "#002c59",
                lineHeight: "1.6",
                fontSize: "20px",
                paddingTop: "171px",
              }}
            >
              We also help companies beat fraud, send invoices, <br /> issue
              virtual and physical cards, get financing,
              <br /> manage business spend, and much more.
            </Typography>
          </div>
        </Grid>
        <Box mt={14} pr={4}>
          <img src={visacard1} alt="" />
        </Box>

        <Box mt={14}>
          <img src={pay} alt="" className={classes.Payimg} />
        </Box>
        <Box className={classes.MobPay}>
          <img src={mobpay} alt="" />
        </Box>
        <Box className={classes.HowTopPay}>
          <img src={howtopay} alt="" />
        </Box>
        {!isSmallScreen ? (
          <Box sx={{ paddingLeft: "80px", paddingTop: "55px" }}>
            <img src={graphpay} alt="" />
          </Box>
        ) : null}
      </Grid>
    </>
  );
};

export default PaymentsProducts;
