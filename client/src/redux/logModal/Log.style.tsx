import styled, { css, keyframes } from "styled-components";

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

const sharedModalStyle = css<LogModalProps>`
  ${flexMixin({ justify: "flex-start", align: "flex-start" })};
  flex-direction: column;
  position: relative;
  top: -4rem;
  background-color: #292929;
  color: #fff;
  width: 668px;
  font-family: ${primaryFont};
  padding: 20px;
  border-radius: 3px;
  animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.3s;
`;

const sharedButtonStyle = css`
  background-color: ${tertiaryColor};
  color: #fff;
  font-family: ${primaryFont};
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${secondaryColor};
  }
`;

const sharedInputStyle = css`
  background-color: #ccddee;
  color: ${tertiaryColor};
  font-size: 1.1rem;
  font-family: ${primaryFont};
  border: none;
  border-radius: 3px;
  outline: none;

  &:focus {
    background-color: #fff;
    box-shadow:
      inset 0 1px 0 hsla(0, 0%, 100%, 0.35),
      0 0 10px #000;
  }
`;

const sharedCheckboxStyle = css`
  background-color: ${secondaryColor};
  height: 20px;
  width: 20px;
  font-size: 1rem;
  border-radius: 3px;

  &:focus {
    background-color: #fff;
  }
`;

const sharedCheckboxLabelStyle = css`
  position: relative;
  cursor: pointer;

  svg {
    color: #000;
    position: absolute;
    bottom: 0.2rem;
    left: 0.1rem;
    font-size: 1.1rem;
    font-weight: 100;
  }

  input[type="checkbox"] {
    display: none;
  }

  span {
    font-size: 1.1rem;
    margin-left: 1.7rem;
    user-select: none;
  }

  &:before {
    ${sharedCheckboxStyle}
    content: "";
    display: inline-block;
    background-color: #ccddee;

    position: absolute;
    left: 0;
    bottom: 3px;
    transition: all 200ms ease;
  }

  &:hover {
    &:before {
      background-color: #fff;
    }
  }
`;

const sharedCloseStyle = css`
  font-size: 2rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  opacity: 0.6;
  cursor: pointer;

  &:hover {
    color: ${secondaryColor};
    opacity: 1;
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
  ${sharedModalStyle};

  > svg {
    ${sharedCloseStyle}
  }

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
      ${sharedInputStyle}
      width: 588px;
      padding: 10px;
      box-shadow:
        inset 0 1px 0 hsla(0, 0%, 100%, 0.35),
        0 0 10px #000;
    }
  }
`;

export const MovieModal = styled.section<LogModalProps>`
  ${sharedModalStyle};
  /* height: 383px; */
  width: 800px;
  padding-right: 70px;

  > svg {
    ${sharedCloseStyle}
  }

  section {
    ${flexMixin({ justify: "flex-start", align: "flex-start" })};
    width: 100%;
  }

  img {
    height: 225px;
    width: 150px;
    box-shadow:
      inset 0 1px 0 hsla(0, 0%, 100%, 0.35),
      0 0 10px #000;
    border-radius: 5px;
    margin-right: 2rem;
  }
`;

export const BackButton = styled.button`
  ${sharedButtonStyle};
  margin-bottom: 1rem;
  box-shadow:
    inset 0 1px 0 hsla(0, 0%, 100%, 0.35),
    0 0 10px #000;
`;

export const LogHeader = styled.header`
  margin-top: -3rem;

  h2,
  h3,
  h4 {
    font-weight: 200;
  }

  div {
    ${flexMixin({ justify: "flex-start", align: "flex-end" })};
  }

  h2 {
    font-size: 1.5rem;
    line-height: 35px;
    margin-right: 1rem;
  }

  h3 {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }

  h4 {
    color: ${secondaryColor};
    font-size: 1.5rem;
  }
`;

export const Review = styled.div`
  ${flexMixin({ justify: "center", align: "flex-start" })};
  flex-direction: column;
  margin-top: 0.5rem;

  div {
    ${flexMixin({ justify: "space-between", align: "center" })};
    width: 100%;

    label {
      ${sharedCheckboxLabelStyle}
    }
  }

  textarea {
    height: 100px;
    width: 100%;
    background-color: #ccddee;
    color: ${tertiaryColor};
    font-size: 1.1rem;
    font-family: ${primaryFont};
    margin: 1rem 0;
    padding: 5px 10px;
    border: none;
    outline: none;
    border-radius: 3px;
    resize: none;

    &:focus {
      background-color: #fff;
      box-shadow:
        inset 0 1px 0 hsla(0, 0%, 100%, 0.35),
        0 0 10px #000;
    }
  }
`;

export const Rating = styled.div`
  ${flexMixin({ justify: "space-between", align: "center" })};

  p {
    margin-bottom: 0.3rem;
    letter-spacing: 1px;
  }

  div {
    svg {
      font-size: 2.5rem;
      cursor: pointer;
    }

    input {
      ${sharedInputStyle}
      padding: 5px 10px;
    }
  }
`;

export const Tags = styled.div`
  ${flexMixin({ justify: "flex-start", align: "center" })};
  flex-wrap: wrap;
  gap: 5px;

  p {
    ${flexMixin({ justify: "center", align: "center" })};
    background-color: ${tertiaryColor};
    width: fit-content;
    margin-top: 0.2rem;
    padding: 0 5px;
    border-radius: 3px;
    user-select: none;
    cursor: default;

    span {
      opacity: 0.6;
      transition: all 200ms ease;

      svg {
        font-size: 13px;
        margin: 0 0 -1px 2px; /* top | right | bottom | left */
      }
    }

    &:hover {
      span {
        opacity: 1;
      }
    }
  }
`;

export const Submit = styled.div`
  ${flexMixin({ justify: "space-between", align: "center" })};
  margin-top: 1rem;

  label {
    ${sharedCheckboxLabelStyle}
    ${flexMixin({ justify: "flex-start", align: "center" })};
  }

  button {
    ${sharedButtonStyle};
  }
`;
