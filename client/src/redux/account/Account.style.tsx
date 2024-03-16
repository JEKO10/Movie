import styled from "styled-components";

import { flexMixin, secondaryColor } from "../../assets/style/GlobalStyles";
import { sharedButtonStyle } from "../logModal/Log.style";

type FormProps = {
  isStatus: string;
};

export const Form = styled.form<FormProps>`
  label {
    ${flexMixin({ justify: "center", align: "flex-start" })};
    flex-direction: column;
  }

  input {
    margin-top: 0.3rem;
  }

  button {
    ${sharedButtonStyle}
    font-size: 1rem;
    display: block;
    margin: 1rem 0 0 auto; /* top | right | bottom | left */
  }

  p {
    color: ${secondaryColor};
    font-size: 1.1rem;
    transition: opacity 200ms ease;
    opacity: ${({ isStatus }) => (isStatus ? 1 : 0)};
  }
`;
