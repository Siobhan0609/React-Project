import React from "react";
import './logIn.scss'
import {Avatar} from "@mui/material";
import {AssignmentInd} from "@mui/icons-material";
import {deepPurple} from "@mui/material/colors";

function SignInHeader() {
  return (
      <div>
        <div>
          <Avatar sx={{bgcolor: deepPurple[500]}}>
            <AssignmentInd/>
          </Avatar>
        </div>
        <div className='headerText'>Sign in
        </div>
      </div>
  )

}

export default SignInHeader;
