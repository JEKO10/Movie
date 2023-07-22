import styled, { css } from "styled-components";

import casablanca from "../images/Casablanca.webp";
import onceAmerica from "../images/onceAmerica.jpg";
import wonder from "../images/w.jpg";
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

export const ErrorPage = styled.section`
  ${commonStyles};
  background: url(${casablanca}) center/cover no-repeat;
`;

export const ErrorPageA = styled.section`
  ${commonStyles};
  background: url(${onceAmerica}) center/cover no-repeat;
`;

export const ErrorPageB = styled.section`
  ${commonStyles};
  background: url(${wonder}) center/cover no-repeat;
`;

const getRandomStyle = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  switch (randomIndex) {
    case 0:
      return ErrorPage;
    case 1:
      return ErrorPageA;
    case 2:
      return ErrorPageB;
    default:
      return ErrorPage;
  }
};

const RandomStyledError = getRandomStyle();

export default RandomStyledError;
