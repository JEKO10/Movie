import styled from "styled-components";

import { primaryColor, primaryFont, secondaryColor } from "./GlobalStyles";

type NavProps = {
  query: string;
};

type InputProps = {
  isSearchOpen: boolean;
};

export const Nav = styled.nav<NavProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-color: ${({ query }) =>
    query === "singleMovie" ? `rgba(19, 24, 28, 0)` : `rgba(19, 24, 28, 1)`};
  padding: 20px 50px;

  img {
    height: 50px;
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    li {
      font-family: ${primaryFont};
      text-transform: uppercase;
      font-weight: 900;
      font-size: 0.8rem;
      letter-spacing: 1.5px;
      margin: 0 20px;
      cursor: pointer;
      transition: all 200ms ease;

      a {
        color: #99aabb;
        text-decoration: none;

        &:hover,
        &.active {
          color: #fff;
        }
      }

      &:last-of-type {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export const Input = styled.input<InputProps>`
  background-color: #2c3440;
  color: ${primaryColor};
  font-family: ${primaryFont};
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  width: ${({ isSearchOpen }) => (isSearchOpen ? "100%" : "0")};
  overflow: hidden;
  transition: width 0.3s ease;

  &:is(:focus, :hover) {
    outline: 2px solid ${primaryColor};
    box-shadow: -2px 2px 5px ${primaryColor};
  }

  &::placeholder {
    color: ${secondaryColor};
    letter-spacing: 1px;
  }
`;

export const IconWrapper = styled.div`
  font-size: 1rem;
  color: #99aabb;
  margin-right: 1rem;
  transform: translate(0%, 15%);

  &:hover {
    color: ${primaryColor};
  }
`;
