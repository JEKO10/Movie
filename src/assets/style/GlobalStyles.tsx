import React from "react";
import { createGlobalStyle, css } from "styled-components";

export const primaryColor = "#0f87be";
export const secondaryColor = "#a7a1ae";
export const primaryFont = "Hanken Grotesk, sans-serif";

interface IFlexMixin {
  justify: string;
  align: string;
}

export const flexMixin = ({ justify, align }: IFlexMixin) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`;

export const GlobalStyles = React.memo(
  createGlobalStyle`${css`
    * {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background: #13181c;
      background: linear-gradient(
        0deg,
        rgba(19, 24, 28, 1) 70%,
        rgba(32, 38, 46, 1) 100%
      );
      font-family: ${primaryFont};
    }

    main {
      max-width: 75vw;
      margin: 0 auto;
      color: #fff;
    }
  `}`
);
