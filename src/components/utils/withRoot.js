import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
//import green from '@material-ui/core/colors/green';
import CssBaseline from "@material-ui/core/CssBaseline";

// A theme with custom primary and secondary color.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ff6f60",
      main: "#DE6262",
      dark: "#ab000d"
    },
    secondary: {
      light: "#e5ffff",
      main: "#b2dfdb",
      dark: "#82ada9"
    }
  },
  typography: {
    useNextVariants: true
  }
});

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
