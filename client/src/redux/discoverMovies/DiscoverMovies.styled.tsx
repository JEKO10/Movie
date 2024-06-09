import styled from "styled-components";

import {
  devices,
  flexMixin,
  paragraphColor
} from "../../assets/style/GlobalStyles";

type MoviesListProps = {
  isCollection: boolean;
};

export const Discover = styled.section`
  max-width: 80vw;

  margin: 3rem auto;

  @media ${devices.laptopS} {
    max-width: 90vw;
  }
`;

export const MoviesList = styled.article<MoviesListProps>`
  display: grid;
  grid-template-columns: ${({ isCollection }) =>
    isCollection ? `repeat(8, 1fr)` : `repeat(12, 1fr)`};
  /* grid-template-columns: repeat(auto-fit, minmax(12, 1fr)); */
  grid-gap: 10px;

  @media ${devices.laptopL} {
    grid-template-columns: ${({ isCollection }) =>
      isCollection ? `repeat(6, 1fr)` : `repeat(8, 1fr)`};
  }

  @media ${devices.laptopS} {
    grid-template-columns: ${({ isCollection }) =>
      isCollection ? `repeat(5, 1fr)` : `repeat(6, 1fr)`};
  }

  @media ${devices.tablet} {
    grid-template-columns: ${({ isCollection }) =>
      isCollection ? `repeat(3, 1fr)` : `repeat(4, 1fr)`};
  }

  @media ${devices.mobile} {
    grid-template-columns: ${({ isCollection }) =>
      isCollection ? `repeat(1, 1fr)` : `repeat(2, 1fr)`};
  }

  > p {
    grid-area: 1/-1;

    font-size: 2rem;

    max-width: 100% !important;

    margin-top: 10rem;
  }

  img {
    width: 100%;
    height: 100%;

    border: 2px solid rgba(255, 255, 255, 0.6);
    border-radius: 5px;

    transition: all 200ms ease;

    &:hover {
      border: 2px solid #fff;
    }
  }
`;

export const Sorting = styled.article`
  > div {
    ${flexMixin({ justify: "space-between", align: "center" })};
  }

  h3,
  ul {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
  }

  p {
    background-color: #445566;
    color: #e1e1ff99;
    text-align: center;

    margin: 1rem 0;
    padding: 10px;
    border-radius: 5px;

    span {
      text-transform: lowercase;
      margin: 0 4px;
    }
  }

  h4 {
    color: ${paragraphColor};
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;

    margin-bottom: 3rem;
  }
`;

export const Underline = styled.div`
  background-color: ${paragraphColor};

  height: 2px;
  width: 100%;

  margin-bottom: 1rem;
`;

export const SortList = styled.ul`
  list-style-type: none;
  text-transform: none;
  width: max-content;

  li {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    cursor: pointer;

    svg {
      font-size: 1.5rem;
      transform: translateY(-1px);
    }

    &:hover {
      color: #fff;
    }
  }

  ul {
    background-color: #445566;
    position: absolute;

    padding: 5px 10px;

    li {
      margin: 5px 0;
    }
  }
`;
