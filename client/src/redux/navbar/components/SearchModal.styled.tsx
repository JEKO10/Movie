import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  flexMixin,
  secondaryColor,
  tertiaryColor,
} from "../../../assets/style/GlobalStyles";

export const SearchedData = styled.section`
  background-color: rgb(19, 24, 28);

  position: absolute;
  top: 24rem;
  right: 30.85rem;

  height: fit-content;
  width: 588px;
  max-height: 260px;

  border-bottom: 0.1px solid ${secondaryColor};

  overflow-x: hidden;
  z-index: 10;

  &::-webkit-scrollbar {
    width: 1px;
    background-color: rgba(0, 0, 0, 0);

    &-thumb {
      background-color: ${secondaryColor};
    }
  }

  > p {
    color: ${secondaryColor};
    line-height: 20px;
    text-align: center;

    padding: 20px 10px;
  }
`;

export const SingleMovie = styled(Link)`
  ${flexMixin({ justify: "flex-start", align: "center" })};

  color: #fff;
  text-decoration: none;

  position: relative;

  border: 0.1px solid ${tertiaryColor};

  cursor: pointer;

  img {
    width: 50px;
  }

  div {
    display: flex;

    width: 100%;

    padding: 10px 0;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const MovieInfo = styled.p`
  padding: 0 10px;
  white-space: nowrap;

  &:last-of-type {
    color: ${secondaryColor};
  }
`;

export const Categories = styled.section`
  position: absolute;
  top: 4.6rem;
  right: 26.8rem;

  width: 524px;

  article {
    ${flexMixin({ justify: "space-between", align: "center" })};

    p {
      text-align: center;

      width: 25%;

      border: 1px solid ${secondaryColor};

      user-select: none;
      transition: all 100ms ease;
      cursor: pointer;

      &:hover {
        background-color: ${secondaryColor};
      }
    }
  }
`;
