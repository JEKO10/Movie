import styled from "styled-components";

import { flexMixin } from "../assets/style/GlobalStyles";

export const Side = styled.aside`
  width: fit-content;
  padding: 15px 50px;

  h3 {
    color: #949494;
    font-weight: 200;
  }

  div {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    width: fit-content;
    margin-bottom: 0.8rem;
    cursor: pointer;

    &:hover p {
      color: #fff;
    }

    img {
      margin-right: 0.8rem;
    }

    p {
      font-size: 20px;
      color: #949494;
    }
  }
`;
