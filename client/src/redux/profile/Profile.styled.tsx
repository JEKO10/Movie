import styled from "styled-components";

import {
  flexMixin,
  primaryColor,
  primaryFont,
  secondaryColor
} from "../../assets/style/GlobalStyles";

type WrongInfoProps = {
  invalidCredentials: boolean;
};

export const ProfileForm = styled.article`
  max-width: 80vw;
  margin: 0 auto 3rem;

  h2 {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 300;
    margin: 1rem 0;
  }

  > p {
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
  }

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
    font-family: ${primaryFont};
    font-weight: 600;
    margin-top: 0.2rem;
    background-color: #2c3440;
    color: #89a;
    width: 100%;
    padding: 9px 9px 8px;
    border: none;
    outline: none;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #456;
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
