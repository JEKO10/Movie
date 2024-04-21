import styled from "styled-components";

import {
  flexMixin,
  paragraphColor,
  secondaryColor,
  tertiaryColor
} from "../../assets/style/GlobalStyles";

export const SearchContainer = styled.section`
  max-width: 70vw;
  margin: 0 auto;

  > p {
    color: ${tertiaryColor};
    text-transform: uppercase;
    font-weight: 100;
    letter-spacing: 2px;
    word-spacing: 5px;
    margin-top: 1rem;
  }

  article {
    ${flexMixin({ justify: "flex-start", align: "flex-start" })};
    flex-direction: column;

    img {
      height: 105px;
      width: 70px;
      margin-right: 1rem;
      border-radius: 5px;
    }

    a {
      ${flexMixin({ justify: "flex-start", align: "flex-start" })};
      color: #fff;
      text-decoration: none;
      margin-bottom: 1rem;

      h3 {
        font-size: 1.5rem;
        font-weight: 100;
        line-height: 20px;

        span {
          margin-left: 1rem;
          color: ${secondaryColor};
        }
      }

      p {
        color: ${paragraphColor};
        font-weight: 100;
        margin: 0.5rem 0 1rem;
      }

      h4 {
        font-weight: 100;

        span {
          background-color: ${tertiaryColor};
          padding: 2px 5px;
          border-radius: 3px;
          margin-left: 0.2rem;
        }
      }
    }
  }
`;
