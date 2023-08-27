import React from "react";
import {Typography, Link} from "@mui/material";
import './logIn.scss';

// const currentDate = new Date();
// const year = currentDate.getFullYear();    // 获取年份
// const month = currentDate.getMonth();      // 获取月份 (0 到 11，0 表示一月)
// const day = currentDate.getDate();         // 获取日期 (1 到 31)
// const hours = currentDate.getHours();      // 获取小时 (0 到 23，24 小时制)
// const minutes = currentDate.getMinutes();  // 获取分钟 (0 到 59)
// const seconds = currentDate.getSeconds();  // 获取秒数 (0 到 59)

function SignInFooter() {

  const Year = new Date().getFullYear().toString().concat('.');
  return (
        <Typography variant='body2' color='text.secondary' align='center'>
          {'Copyright ©'}
          <Link color='inherit' href="https://mui.com/">{' Your Website'}</Link>{' '}
          {Year}
        </Typography>
  );
}

export default SignInFooter;