import styled from "styled-components";

import {
  flexMixin,
  primaryColor,
  primaryFont,
  secondaryColor,
  tertiaryColor,
} from "../assets/style/GlobalStyles";

type SidebarProp = {
  isScrolled: boolean;
};

export const FixedSidebar = styled.aside<SidebarProp>`
  position: fixed;
  transform: ${({ isScrolled }) =>
    isScrolled ? " translateY(-80px)" : " translateY(0)"};
  transition: transform 200ms ease;
`;

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

export const Features = styled.section`
  max-width: 70vw;
  margin: 1rem auto;

  h2 {
    font-size: 40px;
    font-weight: 200;
    margin-bottom: 1rem;
  }

  article {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    background-color: ${primaryColor};
    width: 801px;
    margin-bottom: 2rem;
    padding: 20px;
    border-radius: 10px;
    box-shadow: inset 0 1px 0 #000, 0 0 10px #000;
    cursor: pointer;

    img {
      margin-right: 2rem;
    }

    p {
      color: ${tertiaryColor};
      font-size: 30px;
      text-transform: uppercase;
      max-width: 550px;
    }
  }
`;

export const Oscar = styled.section`
  max-width: 70vw;
  margin: 1rem auto;

  h2 {
    font-size: 40px;
    font-weight: 200;
    margin-bottom: 1rem;
  }

  article {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

    img {
      border-radius: 13px;
    }
  }
`;

export const RatePopUp = styled.aside`
  background-color: rgba(0, 175, 81, 0.2);
  width: 324px;
  padding: 30px 0;
  border-radius: 12px;
  text-align: center;

  p {
    font-size: 28px;
    text-transform: uppercase;
    max-width: 260px;
    margin: 1rem auto 2rem;
    text-align: center;
  }

  button {
    background-color: ${secondaryColor};
    color: #fff;
    font-size: 30px;
    font-family: ${primaryFont};
    text-transform: uppercase;
    margin-left: 1rem;
    padding: 5px 60px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
