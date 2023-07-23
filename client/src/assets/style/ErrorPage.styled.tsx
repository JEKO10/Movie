import styled, { css } from "styled-components";

import casablanca from "../images/Casablanca.webp";
import onceAmerica from "../images/onceAmerica.jpg";
import wonderfulLife from "../images/wonderfulLife.jpg";
import { primaryColor, secondaryColor } from "./GlobalStyles";

const commonStyles = css`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  padding: 120px 70px;

  img {
    height: 80px;
  }

  p {
    font-size: 1.2rem;
    margin: 1rem 0;

    span {
      color: ${primaryColor};

      a {
        color: ${primaryColor};
        transition: all 200ms ease;

        &:hover {
          color: #8146c5;
        }
      }
    }
  }

  h3 {
    font-size: 1rem;
    margin: 1rem 0;
    font-weight: 400;

    a {
      color: ${primaryColor};
      transition: all 200ms ease;

      &:hover {
        color: #8146c5;
      }
    }
  }

  h4 {
    color: ${secondaryColor};
  }
`;

export const ErrorPageCasablanca = styled.section`
  ${commonStyles};
  background: url(${casablanca}) center/cover no-repeat;
`;

export const ErrorPageAmerica = styled.section`
  ${commonStyles};
  background: url(${onceAmerica}) center/cover no-repeat;
`;

export const ErrorPageWonderfulLife = styled.section`
  ${commonStyles};
  background: url(${wonderfulLife}) center/cover no-repeat;
`;

export const getRandomStyle = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  let movie: number;

  switch (randomIndex) {
    case 0:
      movie = 0;
      return { component: ErrorPageCasablanca, movie };
    case 1:
      movie = 1;
      return { component: ErrorPageAmerica, movie };
    case 2:
      movie = 2;
      return { component: ErrorPageWonderfulLife, movie };
    default:
      movie = 1;
      return { component: ErrorPageAmerica, movie };
  }
};

const RandomStyledError = getRandomStyle();

export default RandomStyledError;
