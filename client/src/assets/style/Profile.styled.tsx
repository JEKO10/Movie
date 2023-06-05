import styled from "styled-components";

import { flexMixin, primaryColor, primaryFont } from "./GlobalStyles";

export const ProfileWrapper = styled.section`
  min-height: 88vh;

  h2 {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 300;
    margin: 2rem 0;
  }
`;

export const FormContainer = styled.section`
  ${flexMixin({ justify: "space-between", align: "flex-start" })}

  > p {
    color: rgba(255, 255, 255, 0.7);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
  }
`;

export const ProfileForm = styled.article`
  width: 30%;

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
      color: yellow;
    }
  }
`;

export const ProfileName = styled.div`
  ${flexMixin({ justify: "space-between", align: "center" })};

  label {
    width: 48%;
  }
`;
