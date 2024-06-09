import styled from "styled-components";

import {
  devices,
  flexMixin,
  primaryFont,
  secondaryColor
} from "../../assets/style/GlobalStyles";

export const ContactPage = styled.section`
  ${flexMixin({ justify: "flex-start", align: "flex-start" })};
  flex-direction: column;

  max-width: 80vw;

  margin: 3rem auto;

  @media ${devices.laptopS} {
    max-width: 90vw;
  }

  @media ${devices.tablet} {
    justify-content: center;
  }

  h2 {
    color: ${secondaryColor};
    font-weight: 100;

    margin-bottom: 2rem;
  }

  > article {
    ${flexMixin({ justify: "space-between", align: "flex-start" })};
    width: 100%;

    @media ${devices.tablet} {
      justify-content: center;
    }
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

export const ContactForm = styled.form`
  @media ${devices.tablet} {
    width: 100%;
  }

  label {
    ${flexMixin({ justify: "center", align: "flex-start" })};
    flex-direction: column;

    color: ${secondaryColor};

    width: 100%;

    margin-bottom: 1rem;

    input,
    textarea {
      background-color: #2c3440;
      color: #89a;
      font-family: ${primaryFont};
      font-weight: 100;

      max-height: 200px;
      width: 350px;

      margin-top: 0.5rem;
      padding: 9px 9px 8px;

      border: none;
      border-radius: 3px;
      outline: none;

      box-shadow: inset 0 -1px 0 #456;
      resize: vertical;

      @media ${devices.tablet} {
        font-size: 1.2rem;

        width: 100%;
      }
    }
  }

  button {
    background-color: #2c3440;
    color: #89a;
    font-family: ${primaryFont};
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 2px;

    width: 350px;

    margin-top: 2rem;
    padding: 9px 9px 8px;
    border-radius: 3px;

    box-shadow: inset 0 -1px 0 #456;
    transition: all 200ms ease;
    cursor: pointer;

    @media ${devices.tablet} {
      font-size: 1.2rem;

      width: 100%;
    }

    &:hover {
      color: #f4fcf0;
    }
  }

  p {
    color: ${secondaryColor};
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 1px;

    margin-top: 1rem;
  }
`;
