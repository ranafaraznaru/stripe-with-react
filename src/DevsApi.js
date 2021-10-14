import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowForwardIos } from "@mui/icons-material";
import terminalicon from "../src/images/terminalicon.png";
import boxicon from "../src/images/boxicon.png";
import codeimg from "../src/images/codeimg.PNG";
import outputimg from "../src/images/outputimg.PNG";
const useStyles = makeStyles({
  ArrowSize: {
    fontSize: "14px !important",
    color: "black",
  },
  paymentsButton: {
    borderRadius: "20px !important",
    backgroundColor: "#02bcf5 !important",
    color: "#0a2540 !important",
  },
  seelibButton: {
    color: "#02bcf5 !important",
  },
  ArrowlibButton: {
    fontSize: "14px !important",

    color: "#02bcf5 !important",
  },
  IconsDiv: {
    display: "flex",
  },
});
const DevsApi = () => {
  const classes = useStyles();

  return (
    <>
      <Grid pb={16} container spacing={2} sx={{ backgroundColor: "#0a2540" }}>
        <Grid
          item
          xs={6}
          sx={{
            paddingLeft: "150px !important",
            paddingTop: "90px !important",
          }}
        >
          <Typography variant="h6" component="div" sx={{ color: "#00d4ff" }}>
            Designed for developers
          </Typography>
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontWeight: "600",
              color: "white",
              lineHeight: "1.4",
              paddingTop: "20px",
            }}
          >
            The world’s most powerful <br /> and easy-to-use APIs
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{
              fontWeight: "400",
              color: "#8396a8",
              lineHeight: "1.6",
              fontSize: "20px",
              paddingTop: "25px",
            }}
          >
            We agonize over the right abstractions so your teams <br /> don’t
            need to stitch together disparate systems or <br /> spend months
            integrating payments functionality.
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
            Read the docs
            <ArrowForwardIos className={classes.ArrowSize} />
          </Button>
          <div className={classes.IconsDiv}>
            <Grid item sx={{ paddingTop: "50px" }}>
              <img src={terminalicon} alt="" />
              <Typography
                variant="h6"
                component="div"
                sx={{ color: "white", fontSze: "1rem" }}
              >
                Tools for every stack
                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    fontWeight: "400",
                    color: "#8396a8",
                    lineHeight: "1.3",
                    fontSize: "17px",
                  }}
                >
                  We offer client and server <br /> libraries in everything from{" "}
                  <br /> React and PHP to .NET and iOS.
                </Typography>
              </Typography>
              <Button
                className={classes.seelibButton}
                sx={{ paddingTop: "15px" }}
              >
                See libraries
                <ArrowForwardIos className={classes.ArrowlibButton} />
              </Button>
            </Grid>
            <Grid item pl={4} sx={{ paddingTop: "50px" }}>
              <img src={boxicon} alt="" />
              <Typography variant="h6" component="div" sx={{ color: "white" }}>
                Prebuilt integrations
                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    fontWeight: "400",
                    color: "#8396a8",
                    lineHeight: "1.3",
                    fontSize: "17px",
                  }}
                >
                  Use integrations for systems <br /> like Shopify, WooCommerce,{" "}
                  <br /> NetSuite, and more.
                </Typography>
              </Typography>
              <Button
                className={classes.seelibButton}
                sx={{ paddingTop: "18px" }}
              >
                Explore partners
                <ArrowForwardIos className={classes.ArrowlibButton} />
              </Button>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={6} sx={{ paddingTop: "95px !important" }}>
          <img src={codeimg} alt="" />
          <img src={outputimg} alt="" />
        </Grid>
      </Grid>
    </>
  );
};
export default DevsApi;
