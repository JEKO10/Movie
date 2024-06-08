import styled from "styled-components";

import {
  devices,
  flexMixin,
  primaryColor,
  secondaryColor
} from "./GlobalStyles";

export const Footer = styled.footer`
  ${flexMixin({ justify: "space-between", align: "center" })};
  background-color: ${primaryColor};

  margin-top: 7rem;
  padding: 20px;

  @media ${devices.laptop} {
    flex-direction: column;
  }

  div {
    ${flexMixin({ justify: "space-between", align: "center" })};
  }

  ul {
    ${flexMixin({ justify: "center", align: "center" })};
    list-style: none;

    @media ${devices.laptop} {
      margin: 1rem 0 1.5rem;
    }

    @media ${devices.mobile} {
      flex-wrap: wrap;
      gap: 20px;
    }

    li {
      color: #dedede;
      font-size: 1.1rem;
      letter-spacing: 1px;
      line-height: 17px;
      text-transform: uppercase;

      margin: 0 2.5rem;

      transition: all 200ms ease;
      cursor: pointer;

      &:hover {
        color: #fff;
      }

      @media ${devices.tablet} {
        margin: 0 1rem;
      }
    }
  }

  a {
    color: #fff;
    text-decoration: none;

    h1 {
      font-size: 40px;
      font-weight: 200;

      cursor: pointer;

      span {
        text-transform: uppercase;
        color: ${secondaryColor};
      }
    }
  }

  svg {
    color: #303c48;
    font-size: 1.5rem;

    margin: 0 0.5rem;

    transition: color 300ms ease;
    cursor: pointer;

    &:hover {
      color: #fff;
    }

    @media ${devices.laptop} {
      font-size: 2rem;

      margin: 0 1rem;
    }
  }
`;
