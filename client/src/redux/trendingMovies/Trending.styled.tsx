import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  devices,
  flexMixin,
  paragraphColor,
  primaryFont,
  secondaryColor,
} from "../../assets/style/GlobalStyles";

type TitleProps = {
  time: string;
};

export const Trend = styled.section`
  margin: 5rem 0 8rem 0;
`;

export const Title = styled.div<TitleProps>`
  ${flexMixin({ justify: "flex-start", align: "center" })};
  margin-bottom: 0.2rem;

  h2,
  select {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
  }

  select {
    font-family: ${primaryFont};

    width: ${({ time }) => (time === "day" ? "80px" : "120px")};

    margin-left: 0.3rem;
    background: none;
    border: none;
    outline: none;

    cursor: pointer;

    option {
      background-color: #445566;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const TrendInfo = styled.article`
  ${flexMixin({ justify: "space-between", align: "center" })};
  gap: 140px 10px;
`;

export const TrendLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  width: 180px;

  box-shadow: 7px 10px 2px 1px rgba(0, 0, 0, 0.8);
  cursor: pointer;
  transition: all 500ms ease;

  &:hover {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 1);
  }

  img {
    height: 250px;
    width: 100%;

    border: solid 2px;
    border-image: linear-gradient(rgba(225, 225, 255, 0.6), rgb(19, 24, 28)) 1 /
      200px;
    border-bottom: none;

    transition: all 500ms ease;

    &:hover {
      border-image: linear-gradient(rgba(225, 225, 255, 1), rgb(19, 24, 28)) 1 /
        200px;
    }
  }

  > div {
    position: relative;
    background: #445566;

    margin-top: -0.3rem;
    padding: 5px;

    white-space: nowrap;
    overflow: hidden;

    border: solid 2px;
    border-top: none;
    border-image: linear-gradient(to top, rgba(225, 225, 255, 0.6), #000) 1;
  }
`;

export const TrendingMovies = styled.section`
  max-width: 55vw;
  margin: 1rem 455px 3rem auto;

  @media ${devices.desktopS} {
    max-width: none;

    margin: 1rem 50px 3rem 15vw;
  }

  @media ${devices.laptopS} {
    margin: 1rem 10vw 3rem 10vw;
  }

  @media ${devices.tablet} {
    margin: 1rem 5vw 3rem 5vw;
  }

  h2 {
    font-size: 40px;
    font-weight: 200;

    margin-bottom: 1rem;
  }

  > h2 {
    @media ${devices.mobile} {
      text-align: center;
    }
  }

  article {
    ${flexMixin({ justify: "space-between", align: "center" })};

    @media ${devices.laptopS} {
      gap: 10px;
    }

    @media ${devices.tablet} {
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px 30px;
    }

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

      @media ${devices.desktopS} {
        margin-right: 2rem;
      }

      @media ${devices.laptopS} {
        margin-right: 0;
      }

      &:hover {
        box-shadow:
          inset 0 1px 0 #292929,
          0 0 10px #000;
        transform: translateY(-10px);
      }

      h2 {
        font-size: 30px;
        text-transform: uppercase;
        line-height: 30px;

        max-width: 150px;

        margin-bottom: 5px;
      }

      img {
        position: absolute;
        bottom: 0;
        right: 0;

        @media ${devices.laptopS} {
          height: 250px;
        }

        @media ${devices.tablet} {
          height: initial;
        }
      }

      h3 {
        color: ${secondaryColor};
        font-size: 30px;

        position: absolute;
        top: 0;
        right: 10px;
      }

      p {
        color: ${paragraphColor};
        font-size: 20px;
        line-height: 20px;

        max-width: 108px;
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
