import styled, { css } from "styled-components";

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

type HeaderSlidesProps = {
  slide: number;
};

const sharedSectionStyle = css`
  margin: 1rem 50px 3rem 15vw; /* top | right | bottom | left */

  h2 {
    font-size: 40px;
    font-weight: 200;

    margin-bottom: 1rem;
  }
`;

export const Header = styled.header`
  ${sharedSectionStyle};
  max-width: 55vw;
  margin: 1rem 455px 3rem auto;

  position: relative;

  article:first-of-type {
    ${flexMixin({ justify: "space-between", align: "center" })};
    background-color: ${primaryColor};

    margin-bottom: 3rem;
    border-radius: 12px;

    h3 {
      font-size: 2.6rem;
      font-weight: 100;
      text-transform: uppercase;
      line-height: 40px;

      margin-bottom: 0.5rem;
    }

    h4 {
      font-weight: 100;
    }

    h5 {
      color: ${paragraphColor};
      font-size: 1.1rem;
      font-weight: 100;

      margin-top: 0.5rem;
    }

    button {
      background-color: ${secondaryColor};

      font-size: 1.5rem;
      font-family: ${primaryFont};
      text-transform: uppercase;

      margin-top: 0.5rem;
      padding: 5px 20px;
      border-radius: 12px;

      cursor: pointer;

      a {
        color: #fff;
        text-decoration: none;
      }

      &:hover {
        background-color: #fff;

        a {
          color: ${secondaryColor};
        }
      }
    }

    img {
      height: 100%;
      border-radius: 0 12px 12px 0;
    }

    > div:first-of-type {
      padding: 20px;

      > p {
        color: ${paragraphColor};
        font-size: 1.1rem;
        line-height: 22px;
      }
    }
  }

  article:last-of-type {
    ${flexMixin({ justify: "space-between", align: "center" })};

    img {
      height: 160px;
      width: 96px;

      margin-right: 1rem;
    }

    div {
      ${flexMixin({ justify: "flex-start", align: "flex-start" })};
      background-color: ${primaryColor};

      width: 245px;

      padding: 10px;
      border-radius: 12px;

      cursor: pointer;

      &:last-of-type {
        flex-direction: column;
      }
    }

    h4 {
      color: ${paragraphColor};
      font-size: 1.5rem;
      font-weight: 100;
    }

    p {
      font-size: 1.4rem;
      line-height: 30px;
    }

    ul {
      ${flexMixin({ justify: "flex-start", align: "center" })};
      flex-wrap: wrap;
      gap: 5px;

      list-style-type: none;

      li {
        font-size: 1.4rem;
        line-height: 25px;
      }
    }
  }
`;

export const HeaderRating = styled.div`
  background-color: ${secondaryColor};
  color: #fff;

  position: absolute;
  top: 1rem;
  right: 1rem;

  padding: 5px 10px;
  border-radius: 4px;

  p {
    color: #fff;
  }
`;

export const HeaderSlides = styled.div<HeaderSlidesProps>`
  ${flexMixin({ justify: "flex-start", align: "center" })};
  margin-top: 1rem;

  div {
    background-color: ${tertiaryColor};

    height: 6px;
    width: 33px;

    margin-right: 0.5rem;
    border-radius: 12px;

    cursor: pointer;

    &:nth-child(${({ slide }) => slide + 1}) {
      background-color: ${secondaryColor};
    }
  }
`;

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
  ${sharedSectionStyle};

  div {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    background-color: ${primaryColor};

    width: 845px;

    margin-bottom: 2rem;
    padding: 20px;
    border-radius: 10px;

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
  ${sharedSectionStyle};

  article {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    img {
      width: 162px;

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
  ${sharedSectionStyle};

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

export const FriendsActivity = styled.section`
  ${sharedSectionStyle};

  article {
    ${flexMixin({ justify: "space-between", align: "center" })};

    > div {
      background-color: ${primaryColor};
      width: 330px;

      padding: 10px;
      border-radius: 12px;

      cursor: pointer;

      div {
        ${flexMixin({ justify: "space-between", align: "center" })};
        padding: 0 5px;

        p {
          font-size: 2rem;
        }

        span {
          margin-bottom: -1rem;
        }

        svg {
          color: ${tertiaryColor};
          font-size: 1.5rem;

          margin: 0 0.5rem;
        }
      }
    }

    ul {
      ${flexMixin({ justify: "flex-start", align: "center" })};
      list-style-type: none;

      border-radius: 12px;

      li {
        margin-right: -5rem;

        img {
          height: 185px;
          width: 137px;

          border: 2px solid ${secondaryColor};
          border-radius: 12px;

          box-shadow:
            inset 0 1px 0 #000,
            0 0 10px #000;
        }
      }
    }
  }
`;
