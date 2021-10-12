import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import instacart from "../src/images/instacartlogo.png";
import salesforce from "../src/images/salesforcelogo.png";
import amazon from "../src/images/amazonlogo.png";
import slack from "../src/images/slacklogo.png";
import shopify from "../src/images/shopifylogo.png";
import google from "../src/images/googlelogo.png";
import lya from "../src/images/lyalogo.png";
import zoom from "../src/images/zoomlogo.png";

const OurClients = () => {
  return (
    <>
      <Grid container spacing={2} pl={16} pt={12}>
        <Grid item xs={12} md={3}>
          <img src={instacart} />
        </Grid>
        <Grid item xs={12} md={3}>
          <img src={salesforce} />
        </Grid>
        <Grid item xs={12} md={3}>
          <img src={amazon} />
        </Grid>
        <Grid item xs={12} md={3}>
          <img src={slack} />
        </Grid>
      </Grid>
      <Grid container spacing={2} pl={16} pt={4}>
        <Grid item xs={12} md={3}>
          <img src={shopify} />
        </Grid>
        <Grid item xs={12} md={3}>
          <img src={google} />
        </Grid>
        <Grid item xs={12} md={3}>
          <img src={lya} />
        </Grid>
        <Grid item xs={12} md={3}>
          <img src={zoom} />
        </Grid>
      </Grid>
    </>
  );
};

export default OurClients;
