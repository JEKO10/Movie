import { AiTwotoneCloseCircle } from "react-icons/ai";
import styled from "styled-components";

import {
  flexMixin,
  primaryColor,
  primaryFont,
  secondaryColor,
} from "../../../assets/style/GlobalStyles";

type WrongInfoProps = {
  invalidCredentials: boolean;
};

type FavoriteFilmProps = {
  background: string;
};

export const SettingsContainer = styled.section`
  max-width: 70vw;
  margin: 0 auto 3rem;

  > div {
    ${flexMixin({ justify: "space-between", align: "flex-start" })};
  }

  h2 {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.5rem;
    font-weight: 100;
    text-transform: capitalize;

    margin: 1rem 0 2rem;
  }

  > p {
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
  }
`;

export const ToggleMenu = styled.article`
  margin: 1rem 0 1.5rem;

  ul {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    list-style-type: none;

    li {
      color: ${secondaryColor};
      text-transform: uppercase;
      letter-spacing: 1.5px;

      margin-right: 1rem;

      cursor: pointer;
      transition: all 200ms ease;

      & {
        &:hover {
          color: #fff;
        }

        &.active {
          color: #fff;
        }
      }
    }
  }
`;

export const ProfileForm = styled.article`
  width: 40%;

  label {
    ${flexMixin({ justify: "flex-start", align: "flex-start" })};
    flex-direction: column;

    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;

    margin: 0 0 1rem;
  }

  input,
  textarea,
  button {
    background-color: ${primaryColor};

    color: ${secondaryColor};
    font-family: ${primaryFont};
    font-weight: 100;
    letter-spacing: 1px;

    max-height: 180px;
    width: 100%;

    margin-top: 0.2rem;
    padding: 9px 9px 8px;
    border: none;
    border-radius: 3px;
    outline: none;

    box-shadow: inset 0 -1px 0 #456;
    resize: vertical;
  }

  button {
    background-color: ${primaryColor};

    color: #f4fcf0;
    text-transform: uppercase;
    letter-spacing: 2px;

    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
    cursor: pointer;

    &:hover {
      color: ${secondaryColor};
    }
  }
`;

export const ProfileName = styled.div`
  ${flexMixin({ justify: "space-between", align: "center" })};

  label {
    width: 48%;
  }
`;

export const FavoriteFilms = styled.article`
  margin-top: -0.5rem;

  ul {
    ${flexMixin({ justify: "space-between", align: "center" })};
    list-style-type: none;
  }

  h3 {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
    font-weight: 100;

    margin-bottom: 0.3rem;
  }
`;

export const FavoriteFilm = styled.li<FavoriteFilmProps>`
  ${flexMixin({ justify: "center", align: "center" })};

  background-color: #2c3641;
  background: ${({ background }) => `url(${background})`};
  background-size: 100%;

  position: relative;

  height: 165px;
  width: 110px;

  margin-right: 1rem;
  border-radius: 4px;

  box-shadow:
    inset 0 1px 0 hsla(0, 0%, 100%, 0.35),
    0 0 10px #000;
  cursor: pointer;

  svg {
    color: #5c5b5b;
    font-size: 2rem;
    text-align: center;

    border-radius: 50%;

    transition: all 200ms ease;
  }

  &:hover svg {
    color: #fff;
    box-shadow:
      inset 0 1px 0 hsla(0, 0%, 100%, 0.35),
      0 0 10px #000;
  }
`;

export const RemoveMovie = styled(AiTwotoneCloseCircle)`
  font-size: 1.5rem !important;

  position: absolute;
  top: -0.5rem;
  right: -0.5rem;

  box-shadow: none !important;

  &:hover {
    background: ${secondaryColor};
  }
`;

export const WrongInfo = styled.p<WrongInfoProps>`
  color: #ff0000;
  opacity: ${({ invalidCredentials }) => (invalidCredentials ? 1 : 0)};

  margin-top: 1rem;

  transition: opacity 0.3s ease-in-out;
`;

export const Auth = styled.article`
  ${flexMixin({ justify: "center", align: "flex-start" })};
  flex-direction: column;

  label {
    ${flexMixin({ justify: "center", align: "flex-start" })};
    flex-direction: column;

    span {
      margin-bottom: 0.2rem;
    }

    input {
      background-color: ${primaryColor};
      color: #fff;
      font-size: 1.5rem;
      font-family: ${primaryFont};

      margin-bottom: 0.5rem;
      padding: 0 20px;
      border-radius: 5px;
      outline: none;
    }
  }

  button {
    margin-top: 1rem;
  }
`;
