import styled from "styled-components";

import { devices, flexMixin, primaryColor } from "./GlobalStyles";

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
  overflow-y: auto;

  @media ${devices.tablet} {
    display: flex;
  }

  ul {
    ${flexMixin({ justify: "flex-start", align: "flex-start" })};
    flex-direction: column;
    flex-wrap: wrap;
    list-style-type: none;

    margin: 3rem 0;

    > ul {
      background-color: ${primaryColor};
      list-style-type: none;

      margin: 0;
      border-radius: 5px;

      li {
        font-size: 1rem;
        text-transform: uppercase;
        text-align: center;

        width: 100%;

        margin: 0;
        padding: 0.5rem 20px;

        &:last-of-type {
          padding-bottom: 0.7rem;
        }
      }
    }
  }

  li {
    font-size: 1.5rem;
    text-transform: uppercase;

    margin: 1.5rem 0;

    cursor: pointer;
  }
`;
