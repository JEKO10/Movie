import styled from "styled-components";

import { flexMixin, tertiaryColor } from "../assets/style/GlobalStyles";

export const LogModal = styled.section`
  ${flexMixin({ justify: "center", align: "center" })};
  flex-direction: column;
  background-color: ${tertiaryColor};
  color: #fff;
  height: 145px;
  width: 668px;
  position: relative;

  form {
    ${flexMixin({ justify: "center", align: "flex-start" })};
    flex-direction: column;
  }

  svg {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
  }
`;
