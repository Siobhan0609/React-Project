import React from "react";
import './logIn.scss'
import {Avatar, Box, Typography} from "@mui/material";
import {AssignmentInd} from "@mui/icons-material";

function SignInHeader() {
  return (
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
          <Avatar sx={{
            bgcolor: '#9c27b0'
          }}>
            <AssignmentInd/>
          </Avatar>
         <Typography variant='h5'>Sign in</Typography>
        </Box>
  )

}

export default SignInHeader;
