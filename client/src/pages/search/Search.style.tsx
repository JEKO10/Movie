import styled from "styled-components";

import {
  devices,
  flexMixin,
  paragraphColor,
  secondaryColor,
  tertiaryColor
} from "../../assets/style/GlobalStyles";

export const SearchContainer = styled.section`
  max-width: 70vw;
  margin: 0 auto;

  @media ${devices.laptopL} {
    max-width: 80vw;
  }

  @media ${devices.laptopS} {
    max-width: 90vw;
  }

  > p {
    color: ${tertiaryColor};
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 2px;
    word-spacing: 5px;

    margin-top: 1rem;

    @media ${devices.mobile} {
      text-align: center;
    }
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

        @media ${devices.mobile} {
          line-height: 25px;
        }

        span {
          color: ${secondaryColor};
          margin-left: 1rem;
        }
      }

      p {
        color: ${paragraphColor};
        font-weight: 100;

        margin: 0.5rem 0 1rem;
      }

      h4 {
        font-weight: 100;

        @media ${devices.mobile} {
          display: flex;
          flex-direction: column;
        }

        span {
          background-color: ${tertiaryColor};

          margin-left: 0.2rem;
          padding: 2px 5px;
          border-radius: 3px;

          @media ${devices.mobile} {
            width: max-content;

            margin-left: 0;
          }
        }
      }
    }
  }
`;
