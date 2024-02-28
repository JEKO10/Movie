import styled, { keyframes } from "styled-components";

import {
  flexMixin,
  primaryFont,
  secondaryColor,
  tertiaryColor
} from "../../assets/style/GlobalStyles";

type LogModalProps = {
  isClosing?: boolean;
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const FixedContainer = styled.div`
  ${flexMixin({ justify: "center", align: "center" })};
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 5;
`;

export const LogModal = styled.section<LogModalProps>`
  ${flexMixin({ justify: "center", align: "flex-start" })};
  flex-direction: column;
  position: relative;
  top: -5rem;
  background-color: #292929;
  color: #fff;
  width: 668px;
  font-family: ${primaryFont};
  padding: 20px;
  border-radius: 3px;
  animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.3s;

  h3 {
    text-transform: uppercase;
    font-weight: 200;
    letter-spacing: 1px;
  }

  form {
    ${flexMixin({ justify: "center", align: "flex-start" })};
    flex-direction: column;

    label {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    input {
      font-family: ${primaryFont};
      color: ${tertiaryColor};
      width: 588px;
      font-size: 1.1rem;
      padding: 10px;
      border: none;
      border-radius: 3px;
      outline: none;
      box-shadow:
        inset 0 1px 0 hsla(0, 0%, 100%, 0.35),
        0 0 10px #000;

      &:focus {
        background-color: #ccddee;
      }
    }
  }

  svg {
    font-size: 2rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;

    &:hover {
      color: ${secondaryColor};
    }
  }
`;

export const MovieModal = styled.section``;
