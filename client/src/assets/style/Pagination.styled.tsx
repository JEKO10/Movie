import styled from "styled-components";

import { flexMixin, primaryColor } from "./GlobalStyles";

export const PaginationList = styled.ul`
  ${flexMixin({ justify: "center", align: "center" })}
  flex-wrap: wrap;
  list-style-type: none;

  margin: 2rem 0;

  li {
    background-color: ${primaryColor};

    margin: 10px 5px;
    padding: 10px 15px;
    border: 1px solid #000;
    border-radius: 5px;

    cursor: pointer;

    svg {
      transform: translateY(11%);
    }

    &:hover {
      background-color: #fff !important;
      color: ${primaryColor};
    }
  }
`;
