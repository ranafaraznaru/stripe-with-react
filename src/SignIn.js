import * as React from "react";
import CopyrightSharpIcon from "@mui/icons-material/CopyrightSharp";
import {
  Container,
  Typography,
  Box,
  Grid,
  Link,
  Checkbox,
  FormControlLabel,
  TextField,
  CssBaseline,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  forgotPassword: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: "115px !important",
    },
  },
  Sso: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "38px !important",
    },
  },
}));
const SignIn = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="xl" sx={{ backgroundColor: "#f7fafc" }}>
        <Typography
          variant="body1"
          sx={{ fontSize: "20px", fontWeight: "bolder", paddingLeft: "428px" }}
        >
          Stripe
        </Typography>
        <Container
          component="main"
          maxWidth="xs"
          sx={{ backgroundColor: "white" }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{ fontWeight: "bold" }}
              pt={6}
              pb={2}
            >
              Sign in to your account
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Email
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Box sx={{ display: "flex" }} pt={2}>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  Password
                </Typography>

                <Link
                  className={classes.forgotPassword}
                  href="#"
                  variant="body2"
                  // pl={27}
                  sx={{
                    color: "#635bff",
                    fontWeight: "bold",
                    textDecoration: "none",
                    paddingLeft: "216px",
                  }}
                >
                  Forgot password?
                </Link>
              </Box>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    defaultChecked
                    size="small"
                    color="primary"
                  />
                }
                label="Stay tuned for a week"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Continue
              </Button>
              <Button
                className={classes.Sso}
                variant="text"
                sx={{
                  paddingLeft: "109px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#635bff",
                  paddingBottom: "40px",
                }}
              >
                Use single sign-on (SSO) instead
              </Button>
            </Box>
          </Box>
          <Grid item container>
            <Grid
              item
              sx={{
                paddingTop: "30px !important",
              }}
            >
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: "#635bff",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Grid container pt={2}>
            <Grid item>
              <CopyrightSharpIcon
                fontSize="small"
                sx={{ color: "#697386", fontSize: "18px" }}
              />
              <Link
                href="#"
                variant="body2"
                sx={{
                  textDecoration: "none",
                  color: "#697386",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
                pr={4}
              >
                {"Stripe"}
              </Link>
              <Link
                href="#"
                variant="body2"
                sx={{
                  textDecoration: "none",
                  color: "#697386",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {"Contact"}
              </Link>
              <Link
                href="#"
                variant="body2"
                sx={{
                  textDecoration: "none",
                  color: "#697386",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
                pl={4}
              >
                {"Privacy & terms"}
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};
export default SignIn;
