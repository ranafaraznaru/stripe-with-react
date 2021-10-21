import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowForwardIos } from "@mui/icons-material";
import terminalicon from "../src/images/terminalicon.png";
import boxicon from "../src/images/boxicon.png";
import codeimg from "../src/images/codeimg.PNG";
import outputimg from "../src/images/outputimg.PNG";
import RubberBand from "react-reveal/RubberBand";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
const useStyles = makeStyles((theme) => ({
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
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  Prebuilt: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "32px",
    },
  },
  CodeImg: {
    [theme.breakpoints.down("md")]: {
      width: "410px",
    },
  },
  OutputImg: {
    [theme.breakpoints.down("md")]: {
      width: "410px",
    },
  },
  DevsApi: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "150px !important",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "70px !important",
    },
  },
}));
const DevsApi = () => {
  const classes = useStyles();
  return (
    <>
      <Grid pb={16} container spacing={2} sx={{ backgroundColor: "#0a2540" }}>
        <Grid
          className={classes.DevsApi}
          item
          xs={12}
          md={6}
          sx={{
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
              Read the docs
              <ArrowForwardIos className={classes.ArrowSize} />
            </Button>
          </Zoom>
          <div className={classes.IconsDiv}>
            <Grid xs={12} md={6} item sx={{ paddingTop: "50px" }}>
              <RubberBand>
                <img src={terminalicon} alt="" />
              </RubberBand>
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
              <Bounce left>
                <Button
                  className={classes.seelibButton}
                  sx={{ paddingTop: "15px" }}
                >
                  See libraries
                  <ArrowForwardIos className={classes.ArrowlibButton} />
                </Button>
              </Bounce>
            </Grid>
            <Grid
              xs={12}
              md={6}
              item
              sx={{ paddingTop: "50px" }}
              className={classes.Prebuilt}
            >
              <RubberBand>
                <img src={boxicon} alt="" />
              </RubberBand>
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
              <Bounce right>
                <Button
                  className={classes.seelibButton}
                  sx={{ paddingTop: "18px" }}
                >
                  Explore partners
                  <ArrowForwardIos className={classes.ArrowlibButton} />
                </Button>
              </Bounce>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={12} md={6} sx={{ paddingTop: "95px !important" }}>
          <img src={codeimg} alt="" className={classes.CodeImg} />
          <img src={outputimg} alt="" className={classes.OutputImg} />
        </Grid>
      </Grid>
    </>
  );
};
export default DevsApi;
