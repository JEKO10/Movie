import styled from "styled-components";

import { flexMixin } from "./GlobalStyles";

export const CategoriesSection = styled.section`
  width: 70vw;
  margin: 2rem 0 5rem 0;

  > div {
    ${flexMixin({ justify: "flex-start", align: "flex-start" })};
    flex-direction: column;
    flex-wrap: wrap;

    width: 40%;

    margin: 2rem 0;

    > div {
      margin: 0 2rem 1rem 0;
    }

    p {
      color: #e1e1ff99;
      text-transform: uppercase;

      margin: 0 1rem 0.5rem 0;
    }

    ul {
      list-style-type: none;

      li {
        display: inline-block;

        background-color: #303840;
        color: #e1e1ff99;
        font-size: 0.9rem;

        margin: 5px 5px 5px 0;
        border-radius: 5px;

        cursor: pointer;

        a {
          display: inline-block;

          color: #e1e1ff99;
          text-decoration: none;

          padding: 5px 10px;

          &:hover {
            color: #fff;
          }
        }

        &:hover {
          color: #fff;
        }
      }
    }
  }
`;

export const CategoriesOption = styled.ul`
  ${flexMixin({ justify: "flex-start", align: "center" })};
  list-style-type: none;

  color: #dda804;

  li {
    text-transform: uppercase;
    margin-right: 20px;
    cursor: pointer;

    &:hover {
      border-bottom: 2px solid #dda804;
    }

    &.active {
      color: #fff;
      border-bottom: 2px solid #fff;
    }
  }
`;

export const Details = styled.div`
  ul li {
    padding: 5px 10px;
  }
`;
