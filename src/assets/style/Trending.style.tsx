import { Link } from "react-router-dom";
import styled from "styled-components";

import { primaryFont } from "./GlobalStyles";

export const Trend = styled.section`
  margin: 5rem 0 8rem 0;
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.2rem;

  h2,
  select {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
  }

  select {
    margin-left: 0.3rem;
    background: none;
    border: none;
    outline: none;
    font-family: ${primaryFont};
    cursor: pointer;

    option {
      background-color: #445566;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const TrendInfo = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 140px 10px;
`;

export const TrendLink = styled(Link)`
  width: 180px;
  color: #fff;
  text-decoration: none;
  box-shadow: 7px 10px 2px 1px rgba(0, 0, 0, 0.8);
  cursor: pointer;
  transition: all 500ms ease;

  &:hover {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 1);
  }

  img {
    height: 250px;
    width: 100%;
    border: solid 2px;
    border-image: linear-gradient(rgba(225, 225, 255, 0.6), rgb(19, 24, 28)) 1 /
      200px;
    border-bottom: none;
    transition: all 500ms ease;

    &:hover {
      border-image: linear-gradient(rgba(225, 225, 255, 1), rgb(19, 24, 28)) 1 /
        200px;
    }
  }

  > div {
    position: relative;
    background: #445566;
    margin-top: -0.3rem;
    padding: 5px;
    white-space: nowrap;
    overflow: hidden;
    border: solid 2px;
    border-image: linear-gradient(to top, rgba(225, 225, 255, 0.6), #000) 1;
    border-top: none;

    > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 90%,
        rgba(68, 85, 102, 1) 100%
      );
    }
  }
`;
