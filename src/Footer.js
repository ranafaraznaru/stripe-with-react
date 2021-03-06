import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import SmsFailedSharpIcon from "@mui/icons-material/SmsFailedSharp";
import CopyrightSharpIcon from "@mui/icons-material/CopyrightSharp";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  MainDiv: {
    backgroundColor: "#F6F9FC",
    [theme.breakpoints.up("md")]: {
      paddingLeft: "138px",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "48px",
    },
  },
  footerIcon: {
    [theme.breakpoints.up("md")]: {
      paddingTop: "374px",
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: "50px",
    },
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <div className={`${classes.MainDiv} `}>
        <Grid pb={14} container spacing={2} sx={{ paddingTop: "80px" }}>
          <Grid item xs={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Stripe
            </Typography>
            <Box sx={{ display: "flex" }} pt={1} pb={1}>
              <TelegramIcon fontSize="small" />

              <Typography
                variant="body1"
                pl={1}
                sx={{ fontWeight: 500, color: "#3E5469" }}
              >
                United states
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <SmsFailedSharpIcon fontSize="small" />

              <Typography
                pl={1}
                variant="body1"
                sx={{ fontWeight: 500, color: "#3E5469" }}
              >
                English (United states)
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }} className={classes.footerIcon}>
              <CopyrightSharpIcon
                fontSize="small"
                pt={2}
                sx={{ marginTop: "6px", color: "#3E5469" }}
              />

              <Typography variant="h6" sx={{ color: "#3E5469" }} pl={1}>
                Stripe
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3} sx={{ paddingTop: "27px" }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "600", color: "#3E5469", paddingTop: "6px" }}
            >
              Products
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Atlas
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Billing
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Capital
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Climate
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Connect
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Corporate Card
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Identity
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Issuing
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Payments
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Payouts
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Pricing
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Radar
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Revenue Recognition
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Sigma
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Tax
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Terminal
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Treasury
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} sx={{ paddingTop: "23px" }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "600", color: "#3E5469", paddingTop: "6px" }}
            >
              Developers
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Documentation
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              API reference
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              API status
            </Typography>

            <Typography
              pt={4}
              variant="body1"
              sx={{ fontWeight: "600", color: "#3E5469" }}
            >
              Company
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              About
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Customers
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Enterprise
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Partners
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Jobs
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Blog
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Newsroom
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Sessions
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} sx={{ paddingTop: "23px" }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "600", color: "#3E5469", paddingTop: "9px" }}
            >
              Use cases
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              SaaS
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Platforms
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Marketplaces
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Ecommerce
            </Typography>
            <Typography
              pt={4}
              variant="body1"
              sx={{ fontWeight: "600", color: "#3E5469" }}
            >
              Resources
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Support
            </Typography>
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Contact
            </Typography>{" "}
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Guides
            </Typography>{" "}
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Privacy & terms
            </Typography>{" "}
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Licenses
            </Typography>{" "}
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              COVID-19
            </Typography>{" "}
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Sitemap
            </Typography>{" "}
            <Typography
              pt={1}
              variant="body2"
              sx={{ fontWeight: 500, color: "#3E5469" }}
            >
              Cookie settings
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Footer;
