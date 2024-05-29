import React from "react";
import { createGlobalStyle, css } from "styled-components";

export const primaryColor = "#292929";
export const secondaryColor = "#00AF51";
export const tertiaryColor = "#606060";
export const paragraphColor = "#949494";
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
      font-family: ${primaryFont};

      /* background: linear-gradient(to bottom, #1f232a, #11161d); */
    }

    /* main {
      background: url("../images/onceAmerica.jpg") center/cover no-repeat;
      max-width: 75vw;
      margin: 0 auto;
      padding-top: 70px;
      color: #fff;
    } */
  `}`
);

const sizes = {
  mobileS: "375px",
  mobile: "480px",
  tablet: "768px",
  laptopS: "992px",
  laptop: "1024px",
  laptopL: "1200px",
  desktopS: "1440px",
  desktop: "1600px",
  desktopL: "1920px",
};

export const devices = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptopS: `(max-width: ${sizes.laptopS})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktopS: `(max-width: ${sizes.desktopS})`,
  desktop: `(max-width: ${sizes.desktop})`,
  desktopL: `(max-width: ${sizes.desktopL})`,
};
