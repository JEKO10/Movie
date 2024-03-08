import styled from "styled-components";

import { secondaryColor } from "../../assets/style/GlobalStyles";
import { sharedButtonStyle } from "../logModal/Log.style";

type FormProps = {
  isLogInStatus: boolean;
};

export const Form = styled.form<FormProps>`
  input {
    margin-top: 0.3rem;
  }

  button {
    ${sharedButtonStyle}
    font-size: 1rem;
    display: block;
    margin: 1rem 40px 0 auto; /* top | right | bottom | left */
  }

  p {
    color: ${secondaryColor};
    font-size: 1.1rem;
    transition: opacity 200ms ease;
    opacity: ${({ isLogInStatus }) => (isLogInStatus ? 1 : 0)};
  }
`;
