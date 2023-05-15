import styled from "styled-components";

import { flexMixin } from "./GlobalStyles";

export const Person = styled.section`
  ${flexMixin({ justify: "space-between", align: "flex-start" })};
  color: rgba(255, 255, 255, 0.5);
  margin: 3rem 0;

  article:first-of-type {
    grid-template-columns: repeat(5, 1fr);
    margin: 0 1rem;

    img {
      border: none;
    }
  }

  h2 {
    margin: 0.5rem 0;
    color: #fff;
  }

  h4 {
    margin: 0.2rem 0;
  }

  p {
    margin-top: 1rem;
    max-width: 280px;
  }
`;

export const PersonImg = styled.img`
  width: 200px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  transition: all 200ms ease;

  &:hover {
    border: 2px solid #fff;
  }
`;

export const FullBio = styled.h5`
  display: inline-block;
  font-size: 1rem;
  color: #fff;
  text-decoration: underline;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    color: #40bcf4;
  }
`;
