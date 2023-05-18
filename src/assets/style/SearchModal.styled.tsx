import styled from "styled-components";

import { flexMixin, secondaryColor } from "./GlobalStyles";

export const SearchedData = styled.section`
  background-color: rgb(19, 24, 28);
  overflow-x: hidden;
  height: 307px;
  width: 200px;
  position: absolute;
  top: 4rem;
  right: 3.1rem;

  &::-webkit-scrollbar {
    width: 2px;
    background-color: rgba(0, 0, 0, 0);

    &-thumb {
      background-color: ${secondaryColor};
    }
  }
`;

export const SingleMovie = styled.article`
  ${flexMixin({ justify: "flex-start", align: "center" })};
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
