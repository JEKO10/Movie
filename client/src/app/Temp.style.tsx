import styled from "styled-components";
import { flexMixin } from "../assets/style/GlobalStyles";

export const Nav = styled.nav`
  ${flexMixin({ justify: "space-between", align: "center" })};
  padding: 20px 50px;

  h1 {
    span {
      text-transform: uppercase;
      color: #00b051;
    }
  }

  article:first-of-type {
    ${flexMixin({ justify: "space-between", align: "center" })};
    background-color: #292929;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;

    img {
      margin-right: 0.5rem;
    }

    p {
      font-weight: 800;
    }
  }

  div {
    position: relative;

    input {
      background-color: #292929;
      height: 52px;
      width: 524px;
      font-size: 1.5rem;
      padding: 0 10px;
      border-radius: 10px;
      outline: none;
      color: #fff;
    }

    img {
      position: absolute;
      top: 0.6rem;
      right: 1rem;
    }
  }

  button {
    background-color: #00b051;
    color: #fff;
    font-weight: 800;
    margin: 0 2rem;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
