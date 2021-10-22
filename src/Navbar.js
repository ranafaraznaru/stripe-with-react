import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import Bounce from "react-reveal/Bounce";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { ArrowForwardIos } from "@mui/icons-material";
import Zoom from "react-reveal/Zoom";
// import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  signinButton: {
    borderRadius: "20px !important",
    backgroundColor: "hsla(0,0%,100%,0.2) !important",
  },
  ArrowSize: {
    fontSize: "14px !important",
  },

  Nav: {
    background:
      "linear-gradient(150deg, #a960ee 15%, #ff333d 70%, #90e0ff 94%) !important",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <AppBar className={classes.Nav} position="static">
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

              {!isSmallScreen ? (
                <Box sx={{ flexGrow: 1, display: "flex" }}>
                  <Zoom>
                    <Box
                      sx={{ pt: 2, px: 2, font: "caption", fontWeight: "bold" }}
                    >
                      Products
                    </Box>
                  </Zoom>
                  <Zoom>
                    <Box
                      sx={{ pt: 2, px: 2, font: "caption", fontWeight: "bold" }}
                    >
                      Use cases
                    </Box>
                  </Zoom>
                  <Zoom>
                    <Box
                      sx={{ pt: 2, px: 2, font: "caption", fontWeight: "bold" }}
                    >
                      Developers
                    </Box>
                  </Zoom>
                  <Zoom>
                    <Box
                      sx={{ pt: 2, px: 2, font: "caption", fontWeight: "bold" }}
                    >
                      Company
                    </Box>
                  </Zoom>
                  <Zoom>
                    <Box
                      sx={{ pt: 2, px: 2, font: "caption", fontWeight: "bold" }}
                    >
                      Pricing
                    </Box>
                  </Zoom>
                </Box>
              ) : null}

              <Box sx={{ p: 1 }}>
                {" "}
                <Bounce right>
                  <Button
                    variant="contained"
                    className={classes.signinButton}
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    Sign in
                    {/* <Link to="/signin">Sign in</Link> */}
                    <ArrowForwardIos className={classes.ArrowSize} />
                  </Button>
                </Bounce>
              </Box>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
