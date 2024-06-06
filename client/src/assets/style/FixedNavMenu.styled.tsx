import styled from "styled-components";

import { devices, flexMixin } from "./GlobalStyles";

export const FixedNavMenu = styled.section`
  ${flexMixin({ justify: "center", align: "flex-start" })};
  background-color: rgba(0, 0, 0, 0.9);
  display: none;

  height: 100%;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 2;

  @media ${devices.tablet} {
    display: flex;
  }

  ul {
    ${flexMixin({ justify: "flex-start", align: "flex-start" })};
    flex-direction: column;
    flex-wrap: wrap;
    list-style-type: none;

    margin-top: 8rem;

    @media ${devices.tablet} {
      margin-top: 5rem;
    }

    &:last-of-type {
      @media ${devices.tablet} {
        margin-top: 2rem;
      }

      @media ${devices.mobile} {
        margin-top: 1rem;
      }
    }
  }

  li {
    font-size: 2rem;
    text-transform: uppercase;

    margin: 0 2rem;

    @media ${devices.tablet} {
      font-size: 1.1rem;

      margin: 1rem 0.5rem;
    }

    @media ${devices.mobile} {
      font-size: 0.8rem;
    }

    @media ${devices.mobileS} {
      max-width: 110px;
    }
  }
`;
