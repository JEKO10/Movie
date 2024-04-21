import styled from "styled-components";

import {
  flexMixin,
  primaryColor,
  secondaryColor
} from "../../assets/style/GlobalStyles";
import { sharedButtonStyle } from "../logModal/Log.style";

type FormProps = {
  isStatus: string;
};

export const Form = styled.form<FormProps>`
  label {
    ${flexMixin({ justify: "center", align: "flex-start" })};
    flex-direction: column;

    position: relative;

    svg {
      background-color: ${primaryColor};
      color: ${secondaryColor};
      font-size: 1.7rem;

      position: absolute;
      top: 2.4rem;
      right: 0.5rem;

      padding: 5px;
      border-radius: 3px;
    }
  }

  input {
    margin-top: 0.3rem;
  }

  button {
    ${sharedButtonStyle}
    display: block;

    font-size: 1rem;

    margin: 1rem 0 0 auto; /* top | right | bottom | left */
  }

  p {
    color: ${secondaryColor};
    font-size: 1.1rem;

    transition: opacity 200ms ease;
    opacity: ${({ isStatus }) => (isStatus ? 1 : 0)};
  }
`;
