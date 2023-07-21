import styled from "styled-components";

import onceAmericaImage from "../images/onceAmerica.jpg";
import { primaryColor, secondaryColor } from "./GlobalStyles";

export const ErrorPage = styled.section`
  height: 100vh;
  background: url(${onceAmericaImage}) center/cover no-repeat;
  padding-top: 70px;

  img {
    height: 100px;
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
  }

  h4 {
    color: ${secondaryColor};
  }
`;
