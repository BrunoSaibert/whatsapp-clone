import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: Arial, Helvetica, sans-serif;
  }

  body{
    background-color: var(--primary);
  }

  :root {
    --primary: #d2dbdc;
    --secondary: #ddd;
    --tertiary: #ededed;
    --quaternary: #eee;
    --quinary: #f6f6f6;
    --senary: #828386;
    
 
    --white: #fff;
    --light-gray: #999;
    --gray: #8a8c90;
    --black: #000;
    --symbol: #919191;
 
    --notification: #f84a4b;
    --whatsapp: #6e86d6;
  }
`;
