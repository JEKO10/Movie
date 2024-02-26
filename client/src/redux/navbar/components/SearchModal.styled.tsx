import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import {
  flexMixin,
  secondaryColor,
  tertiaryColor
} from "../../../assets/style/GlobalStyles";

type SearchedDataProps = {
  isLogOpen: boolean;
};

export const SearchedData = styled.section<SearchedDataProps>`
  background-color: rgb(19, 24, 28);
  position: absolute;
  top: ${({ isLogOpen }) => (isLogOpen ? "20rem" : "4.5rem")};
  right: ${({ isLogOpen }) => (isLogOpen ? "30.85rem" : "27rem")};
  height: fit-content;
  width: ${({ isLogOpen }) => (isLogOpen ? "588px" : "524px")};
  max-height: 260px;
  overflow-x: hidden;
  border-bottom: 0.1px solid ${secondaryColor};
  border-radius: ${({ isLogOpen }) => (isLogOpen ? "3px" : "10px")};
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
    padding: 20px 10px;
    text-align: center;
  }
`;

export const SingleMovie = styled(Link)<SearchedDataProps>`
  ${flexMixin({ justify: "flex-start", align: "center" })};
  color: #fff;
  text-decoration: none;
  position: relative;
  border: 0.1px solid ${tertiaryColor};
  cursor: pointer;

  img {
    width: 50px;
  }

  ${({ isLogOpen }) =>
    isLogOpen &&
    css`
      div {
        display: flex;
        width: 100%;
        padding: 10px 0;
      }
    `}

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
