import styled from "styled-components";

import {
  flexMixin,
  primaryFont,
  tertiaryColor
} from "../assets/style/GlobalStyles";

export const LogModal = styled.section`
  ${flexMixin({ justify: "center", align: "flex-start" })};
  flex-direction: column;
  background-color: #292929;
  color: #fff;
  width: 668px;
  font-family: ${primaryFont};
  padding: 20px;
  border-radius: 3px;
  position: relative;

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
  }
`;
