import styled from "styled-components";

import { flexMixin, tertiaryColor } from "../../assets/style/GlobalStyles";

export const SearchContainer = styled.section`
  max-width: 70vw;
  margin: 0 auto;

  > p {
    color: ${tertiaryColor};
    text-transform: uppercase;
    font-weight: 100;
    letter-spacing: 2px;
    word-spacing: 5px;
  }

  article {
    ${flexMixin({ justify: "flex-start", align: "flex-start" })};
    flex-direction: column;

    img {
      height: 105px;
      width: 70px;
      border-radius: 5px;
    }
  }
`;
