import styled from "styled-components";

import {
  flexMixin,
  primaryColor,
  primaryFont,
  secondaryColor,
  tertiaryColor
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
      color: ${secondaryColor};
    }

    svg {
      transform: translateX(-5px);
      font-size: 1.3rem;
      font-weight: 800;
      color: ${tertiaryColor};
      margin-right: 0.5rem;
    }

    p {
      font-size: 20px;
      color: #949494;
    }
  }
`;

export const Features = styled.section`
  ${flexMixin({ justify: "space-between", align: "flex-end" })};
  max-width: 83vw;
  margin: 1rem 50px 1rem auto; /* top | right | bottom | left */

  h2 {
    font-size: 40px;
    font-weight: 200;
    margin-bottom: 1rem;
  }

  div {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    background-color: ${primaryColor};
    width: 801px;
    margin-bottom: 2rem;
    padding: 20px;
    border-radius: 10px;
    box-shadow:
      inset 0 1px 0 #000,
      0 0 10px #000;
    cursor: pointer;

    & {
      :hover p {
        color: ${secondaryColor};
      }

      :last-of-type {
        margin-bottom: 0;
      }
    }

    svg {
      font-size: 5rem;
      color: ${tertiaryColor};
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
  max-width: 83vw;
  margin: 1rem 50px 1rem auto;

  h2 {
    font-size: 40px;
    font-weight: 200;
    margin-bottom: 1rem;
  }

  article {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    img {
      border: 2px solid transparent;
      border-radius: 15px;
      cursor: pointer;

      &:hover {
        border: 2px solid ${secondaryColor};
      }
    }
  }
`;

export const RatePopUp = styled.aside`
  background-color: rgba(0, 175, 81, 0.2);
  width: 324px;
  padding: 25px 0;
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
    transition: all 300ms ease;
    cursor: pointer;

    &:hover {
      background-color: ${primaryColor};
      color: ${secondaryColor};
    }
  }
`;

export const TrendingMovies = styled.section`
  max-width: 73vw;
  margin: 0 auto;

  h2 {
    font-size: 40px;
    font-weight: 200;
    margin-bottom: 1rem;
  }

  article {
    ${flexMixin({ justify: "space-between", align: "center" })};

    > div {
      ${flexMixin({ justify: "space-between", align: "flex-start" })};
      flex-direction: column;
      background-color: #292929;
      position: relative;
      height: 325px;
      width: 245px;
      padding: 10px 10px;
      border-radius: 12px;
      transition: all 200ms ease;
      cursor: pointer;

      &:hover {
        box-shadow:
          inset 0 1px 0 #292929,
          0 0 10px #000;
        transform: translateY(-10px);
      }

      h2 {
        max-width: 150px;
        font-size: 30px;
        text-transform: uppercase;
        line-height: 30px;
        margin-bottom: 5px;
      }

      img {
        position: absolute;
        bottom: 0;
        right: 0;
      }

      h3 {
        font-size: 30px;
        color: ${secondaryColor};
        position: absolute;
        top: 0;
        right: 10px;
      }

      p {
        max-width: 108px;
        color: #fff;
        font-size: 20px;
        line-height: 20px;
        opacity: 0.5;
      }

      button {
        background-color: ${secondaryColor};
        color: #fff;
        font-size: 40px;
        font-family: ${primaryFont};
        text-transform: uppercase;
        padding: 0 30px;
        border-radius: 10px;
        cursor: pointer;
        z-index: 2;
      }
    }
  }
`;
