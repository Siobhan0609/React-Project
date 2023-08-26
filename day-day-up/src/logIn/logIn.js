import React from "react";
import SignInHeader from "./signInHeader";
import SignInBox from "./signInBox";
import SignInFooter from "./signInFooter";

function LogIn() {
  return (
      <div>
        <SignInHeader></SignInHeader>
        <SignInBox></SignInBox>
        <SignInFooter></SignInFooter>
      </div>
  )
}

export default LogIn;