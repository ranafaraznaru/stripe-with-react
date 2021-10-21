import * as React from "react";
import { Grid } from "@mui/material";
import instacart from "../src/images/instacartlogo.png";
import salesforce from "../src/images/salesforcelogo.png";
import amazon from "../src/images/amazonlogo.png";
import slack from "../src/images/slacklogo.png";
import shopify from "../src/images/shopifylogo.png";
import google from "../src/images/googlelogo.png";
import lya from "../src/images/lyalogo.png";
import zoom from "../src/images/zoomlogo.png";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Bounce from "react-reveal/Bounce";
const useStyles = makeStyles((theme) => ({
  FirstRow: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: "35px",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "128px",
    },
  },
  SecondRow: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: "35px",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "128px",
    },
  },
}));
const OurClients = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <Bounce>
        <Grid container spacing={2} pt={12} className={classes.FirstRow}>
          <Grid item xs={6} md={3}>
            <img src={instacart} alt="" />
          </Grid>
          <Grid item xs={6} md={3}>
            <img src={salesforce} alt="" />
          </Grid>
          <Grid item xs={6} md={3}>
            <img src={amazon} alt="" />
          </Grid>
          <Grid item xs={6} md={3}>
            <img src={slack} alt="" />
          </Grid>
        </Grid>
        <Grid container spacing={2} pt={4} className={classes.SecondRow}>
          <Grid item xs={6} md={3}>
            <img src={shopify} alt="" />
          </Grid>
          <Grid item xs={6} md={3}>
            <img src={google} alt="" />
          </Grid>
          <Grid item xs={6} md={3}>
            <img src={lya} alt="" />
          </Grid>
          <Grid item xs={6} md={3}>
            <img src={zoom} alt="" />
          </Grid>
        </Grid>
      </Bounce>
    </>
  );
};

export default OurClients;
