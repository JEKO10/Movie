import { Link } from "react-router-dom";
import styled from "styled-components";

import { flexMixin, secondaryColor } from "./GlobalStyles";

export const SearchedData = styled.section`
  background-color: rgb(19, 24, 28);
  overflow-x: hidden;
  height: fit-content;
  max-height: 260px;
  width: 200px;
  border-bottom: 0.1px solid ${secondaryColor};
  position: absolute;
  top: 4rem;
  right: 3.1rem;
  z-index: 2;

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

export const SingleMovie = styled(Link)`
  ${flexMixin({ justify: "flex-start", align: "center" })};
  color: #fff;
  text-decoration: none;
  position: relative;
  border: 0.1px solid ${secondaryColor};
  cursor: pointer;

  img {
    width: 50px;
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
