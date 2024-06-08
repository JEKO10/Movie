import styled from "styled-components";

import { devices, flexMixin } from "./GlobalStyles";

export const FixedNavMenu = styled.section`
  ${flexMixin({ justify: "center", align: "flex-start" })};
  background-color: rgba(0, 0, 0, 0.9);
  display: none;

  height: 100%;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 2;

  @media ${devices.tablet} {
    display: flex;
  }

  ul {
    ${flexMixin({ justify: "flex-start", align: "flex-start" })};
    flex-direction: column;
    flex-wrap: wrap;
    list-style-type: none;

    margin-top: 8rem;
  }

  li {
    font-size: 1.5rem;
    text-transform: uppercase;

    margin: 1.5rem 0;

    cursor: pointer;
  }
`;
