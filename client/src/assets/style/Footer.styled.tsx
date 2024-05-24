import styled from "styled-components";

import { flexMixin, primaryColor, secondaryColor } from "./GlobalStyles";

export const Footer = styled.footer`
  ${flexMixin({ justify: "space-between", align: "center" })};
  background-color: ${primaryColor};

  padding: 20px;

  ul {
    ${flexMixin({ justify: "center", align: "center" })};
    list-style: none;

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
  }
`;
