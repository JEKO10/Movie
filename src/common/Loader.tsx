import styled, { keyframes } from "styled-components";

import { primaryColor, secondaryColor } from "../assets/style/GlobalStyles";

const loader = keyframes`
 to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 50%;
  border: 3px solid ${secondaryColor};
  border-top-color: ${primaryColor};
  animation: ${loader} 0.6s linear infinite;
`;
