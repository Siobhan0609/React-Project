import React from "react";
import {
  Checkbox,
  Link,
  Input,
  Button,
  TextField,
  Box,
  Container, FormControlLabel, Grid
} from "@mui/material";

const handleSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const email = data.get('email');
  const password = data.get('password');

}

function SignInBox() {
  return (
      <div>
        <Container component="main" maxWidth="xs">
          <Box  sx={{mt:4}} onSubmit={handleSubmit}>
        <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            required
            fullWidth
        />
        <TextField
            sx={{mt:4, mb:1}}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            required
            fullWidth
        />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
            <Button
                type='submit'
                sx={{mt:3, mb:2}}
                variant="contained"
                fullWidth
            >SIGN IN</Button>
            <Grid container sx={{mb:8}}>
              <Grid item xs>
        <Link
            href='baidu.com'
            variant="body2"
        >{'Forgot Password?'}</Link>
              </Grid>
              <Grid item>
        <Link href='google.com'
              variant="body2"
        >{'Sign Up'}</Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
  );
}

export default SignInBox;