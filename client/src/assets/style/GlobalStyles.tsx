import React from "react";
import { createGlobalStyle, css } from "styled-components";

export const primaryColor = "#0f87be";
export const secondaryColor = "#a7a1ae";
export const primaryFont = "Jockey One, sans-serif";

interface IFlexMixin {
  justify:
    | "center"
    | "space-between"
    | "space-evenly"
    | "space-around"
    | "flex-start"
    | "flex-end"
    | "stretch";
  align:
    | "center"
    | "flex-start"
    | "flex-end"
    | "stretch"
    | "self-start"
    | "self-end";
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

      ::-webkit-scrollbar {
        width: 5px;

        &-track {
          background: #555;
        }

        &-thumb {
          background: ${secondaryColor};

          &:hover {
            background: ${primaryColor};
          }
        }
      }
    }

    body {
      background-color: #222222;
      color: #fff;
      /* background: linear-gradient(to bottom, #1f232a, #11161d); */
      font-family: ${primaryFont};
    }

    main {
      background: url("../images/onceAmerica.jpg") center/cover no-repeat;
      max-width: 75vw;
      margin: 0 auto;
      padding-top: 70px;
      color: #fff;
    }
  `}`
);
