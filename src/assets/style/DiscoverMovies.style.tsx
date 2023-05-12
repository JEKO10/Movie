import styled from "styled-components";

import { flexMixin } from "./GlobalStyles";

export const Discover = styled.section`
  margin: 3rem 0;
`;

export const MoviesList = styled.article`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  /* grid-template-columns: repeat(auto-fit, minmax(12, 1fr)); */
  grid-gap: 5px 10px;

  img {
    width: 100%;
    border: 2px solid rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    transition: all 200ms ease;

    &:hover {
      border: 2px solid #fff;
    }
  }
`;

export const Sorting = styled.article`
  > div {
    ${flexMixin({ justify: "space-between", align: "center" })};
  }

  h3,
  ul {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
  }

  p {
    text-align: center;
    background-color: #445566;
    color: #e1e1ff99;
    padding: 10px;
    border-radius: 5px;
    margin: 1rem 0;

    span {
      text-transform: lowercase;
      margin: 0 4px;
    }
  }
`;

export const Underline = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1rem;
`;

export const SortList = styled.ul`
  list-style-type: none;
  text-transform: none;
  width: 200px;

  li {
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }

  ul {
    position: absolute;
    background-color: #445566;
    padding: 5px 10px;

    li {
      margin: 5px 0;
    }
  }
`;
