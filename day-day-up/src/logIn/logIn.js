import React from "react";
import SignInHeader from "./signInHeader";
import SignInBox from "./signInBox";
import SignInFooter from "./signInFooter";
import {createTheme, ThemeProvider} from "@mui/material";

function LogIn() {
  return (
      <ThemeProvider theme={createTheme}>
        <SignInHeader></SignInHeader>
        <SignInBox></SignInBox>
        <SignInFooter></SignInFooter>
      </ThemeProvider>
  )
}

export default LogIn;