import styled from "styled-components";

import { flexMixin, primaryColor, secondaryColor } from "./GlobalStyles";

export const PaginationList = styled.ul`
  ${flexMixin({ justify: "center", align: "center" })}
  list-style-type: none;
  margin-bottom: 4rem;
  flex-wrap: wrap;

  li {
    margin: 10px 5px;
    padding: 10px 15px;
    border: 1px solid #000;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${primaryColor};

    &:hover {
      background-color: ${secondaryColor};
      color: #fff;
    }
  }
`;
