import styled from "styled-components";

import {
  flexMixin,
  primaryColor,
  primaryFont,
  secondaryColor
} from "../../../assets/style/GlobalStyles";

type WrongInfoProps = {
  invalidCredentials: boolean;
};

export const SettingsContainer = styled.section`
  max-width: 70vw;
  margin: 0 auto 3rem;

  > div {
    ${flexMixin({ justify: "space-between", align: "flex-start" })};
  }

  h2 {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 100;
    margin: 1rem 0 2rem;
  }

  > p {
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
  }
`;

export const ProfileForm = styled.article`
  width: 40%;

  label {
    ${flexMixin({ justify: "flex-start", align: "flex-start" })};
    flex-direction: column;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    margin: 0 0 1rem;
  }

  input,
  textarea,
  button {
    background-color: ${primaryColor};
    color: ${secondaryColor};
    width: 100%;
    font-family: ${primaryFont};
    font-weight: 100;
    letter-spacing: 1px;
    margin-top: 0.2rem;
    padding: 9px 9px 8px;
    border: none;
    outline: none;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #456;
    resize: vertical;
  }

  button {
    background-color: ${primaryColor};
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #f4fcf0;
    cursor: pointer;

    &:hover {
      color: ${secondaryColor};
    }
  }
`;

export const FavoriteFilms = styled.article`
  margin-top: -0.5rem;

  div {
    ${flexMixin({ justify: "space-between", align: "center" })};

    img {
      height: 165px;
      width: 110px;
      margin-right: 1rem;
      border-radius: 4px;
      box-shadow:
        inset 0 1px 0 hsla(0, 0%, 100%, 0.35),
        0 0 10px #000;
      cursor: pointer;
    }
  }

  h3 {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
    font-weight: 100;
    margin-bottom: 0.3rem;
  }
`;

export const ProfileName = styled.div`
  ${flexMixin({ justify: "space-between", align: "center" })};

  label {
    width: 48%;
  }
`;

export const WrongInfo = styled.p<WrongInfoProps>`
  margin-top: 1rem;
  color: #ff0000;
  opacity: ${({ invalidCredentials }) => (invalidCredentials ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;
