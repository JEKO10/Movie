import styled from "styled-components";

import { devices, flexMixin, paragraphColor } from "../../assets/style/GlobalStyles";

export const Person = styled.section`
  ${flexMixin({ justify: "space-between", align: "flex-start" })};
  color: ${paragraphColor};

  max-width: 80vw;
  margin: 3rem auto;

  @media ${devices.laptopL} {
    max-width: 90vw;
  }

  article:first-of-type {
    grid-template-columns: repeat(5, 1fr);
    margin-right: 5rem;

    @media ${devices.laptopS} {
      grid-template-columns: repeat(4, 1fr);
      margin-right: 2rem;
    }

    @media ${devices.tablet} {
      grid-template-columns: repeat(3, 1fr);
    }

    @media ${devices.mobile} {
      grid-template-columns: repeat(1, 1fr);
    }

    img {
      border: none;

      &:hover {
        border: 2px solid #fff;
      }
    }
  }

  h2 {
    margin: 0.5rem 0;
    color: #fff;

    @media ${devices.tablet} {
      line-height: 25px;
    }
  }

  h4 {
    margin: 0.2rem 0;

    @media ${devices.tablet} {
      font-weight: 100;
      line-height: 20px;

      margin: 0.5rem 0;
    }
  }

  p {
    margin-top: 1rem;
    max-width: 280px;
  }
`;

export const PersonImg = styled.img`
  width: 200px;

  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 5px;

  transition: all 200ms ease;

  @media ${devices.laptopS} {
    width: 170px;
  }

  @media ${devices.tablet} {
    width: 120px;
  }

  &:hover {
    border: 2px solid #fff;
  }
`;

export const FullBio = styled.h5`
  display: inline-block;

  color: #fff;
  font-size: 1rem;
  text-decoration: underline;

  margin-top: 1rem;

  cursor: pointer;

  &:hover {
    color: #40bcf4;
  }
`;
