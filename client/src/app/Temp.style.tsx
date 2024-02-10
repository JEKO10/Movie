import styled from "styled-components";

import {
  flexMixin,
  primaryColor,
  tertiaryColor,
} from "../assets/style/GlobalStyles";

export const Side = styled.aside`
  width: fit-content;
  padding: 15px 50px;

  h3 {
    color: #949494;
    font-weight: 200;
  }

  div {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    width: fit-content;
    margin-bottom: 0.8rem;
    cursor: pointer;

    &:hover p {
      color: #fff;
    }

    img {
      margin-right: 0.8rem;
    }

    p {
      font-size: 20px;
      color: #949494;
    }
  }
`;

export const Features = styled.section`
  max-width: 75vw;
  margin: 1rem auto;

  h2 {
    font-size: 40px;
    font-weight: 200;
    margin-bottom: 1rem;
  }

  article {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    background-color: ${primaryColor};
    margin-bottom: 2rem;
    padding: 20px;
    border-radius: 10px;
    box-shadow: inset 0 1px 0 #000, 0 0 10px #000;
    cursor: pointer;

    img {
      margin-right: 2rem;
    }

    p {
      color: ${tertiaryColor};
      font-size: 30px;
      text-transform: uppercase;
      max-width: 550px;
    }
  }
`;

export const Oscar = styled.section`
  max-width: 75vw;
  margin: 1rem auto;

  h2 {
    font-size: 40px;
    font-weight: 200;
    margin-bottom: 1rem;
  }

  article {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

    img {
      border-radius: 13px;
    }
  }
`;
