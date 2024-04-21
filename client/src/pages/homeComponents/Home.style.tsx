import styled from "styled-components";

import {
  flexMixin,
  paragraphColor,
  primaryColor,
  primaryFont,
  secondaryColor,
  tertiaryColor
} from "../../assets/style/GlobalStyles";

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
      font-size: 1.3rem;
      font-weight: 800;
      color: ${tertiaryColor};

      margin-right: 0.5rem;

      transform: translateX(-5px);
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

      transition: border 200ms ease;
      cursor: pointer;

      &:hover {
        border: 2px solid ${secondaryColor};
      }
    }
  }
`;

export const RatePopUp = styled.aside`
  background-color: rgba(0, 175, 81, 0.2);

  text-align: center;

  width: 324px;

  padding: 25px 0;
  border-radius: 12px;

  p {
    font-size: 28px;
    text-transform: uppercase;
    text-align: center;

    max-width: 260px;

    margin: 1rem auto 2rem;
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

export const News = styled.section`
  max-width: 72vw;
  margin: 3rem auto;

  h2 {
    font-size: 40px;
    font-weight: 200;

    margin-bottom: 1rem;
  }

  article {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    background-color: ${primaryColor};
    border-radius: 12px;

    img {
      border-radius: 12px;
      margin-right: 2rem;
    }

    h3 {
      font-weight: 100;
      font-size: 3rem;
    }

    p {
      font-size: 1.2rem;
      color: ${paragraphColor};
      line-height: 25px;

      max-width: 450px;
      margin: 1rem 0;
    }

    button {
      background: none;
      color: #fff;

      font-size: 1.5rem;
      font-family: ${primaryFont};
      text-transform: uppercase;

      cursor: pointer;
    }
  }
`;
