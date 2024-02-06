import styled from "styled-components";
import { flexMixin, primaryFont } from "../assets/style/GlobalStyles";

export const Nav = styled.nav`
  ${flexMixin({ justify: "space-between", align: "center" })};
  padding: 20px 50px;

  h1 {
    font-size: 40px;
    font-weight: 200;

    span {
      text-transform: uppercase;
      color: #00b051;
    }
  }

  article:first-of-type {
    ${flexMixin({ justify: "space-between", align: "center" })};
    background-color: #292929;
    padding: 10px 15px;
    border-radius: 10px;
    cursor: pointer;

    p {
      font-size: 25px;
      margin: 0 0.5rem;
    }
  }

  div {
    position: relative;

    input {
      background-color: #292929;
      height: 52px;
      width: 524px;
      font-size: 1.5rem;
      font-family: ${primaryFont};
      padding: 0 20px;
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
    font-size: 30px;
    font-family: ${primaryFont};
    text-transform: uppercase;
    margin: 0 2rem;
    padding: 5px 40px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
