import React from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  whyStripe: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "110px",
      paddingTop: "110px",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "54px",
    },
  },
}));
const WhyStripe = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2} className={classes.whyStripe}>
        <Grid item xs={12}>
          <Typography variant="h6" component="div" sx={{ color: "#635bff" }}>
            Why Stripe
          </Typography>
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontWeight: "600",
              lineHeight: "1.4",
              paddingTop: "20px",
            }}
          >
            A technology-first approach to payments <br /> and finance
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default WhyStripe;
