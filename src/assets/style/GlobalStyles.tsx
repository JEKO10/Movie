import React from "react";
import { createGlobalStyle, css } from "styled-components";

export const primaryColor = "#0f87be";
export const secondaryColor = "#a7a1ae";

export const GlobalStyles = React.memo(
  createGlobalStyle`${css`
    @import url("https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@100;200;300;400;500;600;700;800;900&display=swap");

    * {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
      font-family: "Hanken Grotesk", sans-serif;
    }

    body {
      background: #13181c;
      background: linear-gradient(
        0deg,
        rgba(19, 24, 28, 1) 70%,
        rgba(32, 38, 46, 1) 100%
      );
    }

    main {
      max-width: 75vw;
      margin: 0 auto;
      color: #fff;
    }
  `}`
);
