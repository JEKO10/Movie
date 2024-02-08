import styled from "styled-components";

import {
  flexMixin,
  primaryFont,
  secondaryColor,
} from "../../assets/style/GlobalStyles";

export const ContactPage = styled.section`
  ${flexMixin({ justify: "flex-start", align: "flex-start" })};
  flex-direction: column;
  min-height: 90vh;
  padding-top: 70px;

  h2 {
    margin-bottom: 2rem;
    color: ${secondaryColor};
  }

  > article {
    ${flexMixin({ justify: "space-between", align: "flex-start" })};
    width: 100%;
  }
`;

export const ContactPoster = styled.article`
  img {
    height: 410px;
    border: 1.5px solid #e1e1ff99;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const ContactForm = styled.article`
  label {
    ${flexMixin({ justify: "center", align: "flex-start" })};
    flex-direction: column;
    width: 100%;
    color: ${secondaryColor};
    margin-bottom: 1rem;

    input,
    textarea {
      background-color: #2c3440;
      color: #89a;
      width: 150%;
      max-height: 200px;
      margin-top: 0.5rem;
      padding: 9px 9px 8px;
      font-family: ${primaryFont};
      font-weight: 600;
      border: none;
      outline: none;
      border-radius: 3px;
      box-shadow: inset 0 -1px 0 #456;
      resize: vertical;
    }
  }

  button {
    background-color: #2c3440;
    width: 150%;
    color: #89a;
    margin-top: 2rem;
    padding: 9px 9px 8px;
    font-family: ${primaryFont};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #456;
    transition: all 200ms ease;
    cursor: pointer;

    &:hover {
      color: #f4fcf0;
    }
  }
`;
