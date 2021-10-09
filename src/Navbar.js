import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";
import { ArrowForwardIos } from "@mui/icons-material";
const useStyles = makeStyles({
  signinButton: {
    borderRadius: "25px !important",
    backgroundColor: "hsla(0,0%,100%,0.2) !important",
  },
  ArrowSize: {
    fontSize: "14px !important",
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Stripe
          </Typography>

          <Button variant="contained" className={classes.signinButton}>
            Sign in
            <ArrowForwardIos className={classes.ArrowSize} />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
