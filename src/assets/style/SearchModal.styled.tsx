import styled from "styled-components";

import { flexMixin, secondaryColor } from "./GlobalStyles";

export const SearchedData = styled.section`
  background-color: rgb(19, 24, 28);
  width: 200px;
  border-radius: 5px;
  position: absolute;
  top: 4rem;
  right: 3.1rem;
`;

export const SingleMovie = styled.article`
  ${flexMixin({ justify: "flex-start", align: "center" })};
  position: relative;
  overflow: hidden;
  border: 0.1px solid ${secondaryColor};
  cursor: pointer;

  img {
    width: 50px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:is(:last-of-type, :first-of-type) {
    border-radius: 5px;
  }
`;

export const MovieInfo = styled.p`
  padding: 0 10px;
  white-space: nowrap;

  &:last-of-type {
    color: ${secondaryColor};
  }
`;
