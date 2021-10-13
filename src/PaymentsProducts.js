import * as React from "react";
import { Typography, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { ArrowForwardIos } from "@mui/icons-material";
const useStyles = makeStyles({
  ArrowSize: {
    fontSize: "14px !important",
  },
  paymentsButton: {
    borderRadius: "20px !important",
    backgroundColor: "#635bff !important",
  },
});
const PaymentsProducts = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          paddingLeft: "110px",
          backgroundColor: "#F6F9FC",
          paddingTop: "100px",
          marginTop: "90px",
        }}
      >
        <Grid item xs={12} md={6}>
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
            We bring together everything that’s required to build <br />{" "}
            websites and apps that accept payments and send payouts <br />{" "}
            globally. Stripe’s products power payments for{" "}
            <span sx={{ backgroundColor: "pink !important" }}>
              {" "}
              online and <br /> in-person retailers, subscriptions businesses,
              software <br /> platforms and marketplaces,
            </span>{" "}
            and everything in between.
          </Typography>
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
        </Grid>
        <Grid item xs={12} md={6}>
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
        </Grid>
      </Grid>
    </>
  );
};

export default PaymentsProducts;