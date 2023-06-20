import styled from "styled-components";

import {
  flexMixin,
  primaryColor,
  primaryFont,
  secondaryColor,
} from "./GlobalStyles";

type NavProps = {
  query: string;
};

type InputProps = {
  isSearchOpen: boolean;
};

export const Nav = styled.nav<NavProps>`
  ${flexMixin({ justify: "space-between", align: "center" })};
  color: #99aabb;
  background-color: ${({ query }) =>
    query === "singleMovie" ? `rgba(17, 22, 29, 0)` : `rgba(17, 22, 29, 1)`};
  padding: 20px 50px;
  overflow: hidden;

  img {
    height: 50px;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  ${flexMixin({ justify: "flex-end", align: "center" })};
  list-style-type: none;
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
      ${flexMixin({ justify: "center", align: "center" })};
      margin: 0;
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
  transition: all 500ms ease;
  transform: ${({ isSearchOpen }) =>
    isSearchOpen ? "translate(0, -5%)" : "translateX(300px)"};
  width: ${({ isSearchOpen }) => (isSearchOpen ? "200px" : "0")};

  &::placeholder {
    color: ${secondaryColor};
    letter-spacing: 1px;
  }

  &:is(:focus, :hover) {
    outline: 2px solid ${primaryColor};
    box-shadow: -2px 2px 5px ${primaryColor};
  }
`;

export const IconWrapper = styled.div`
  font-size: 1rem;
  color: #99aabb;
  margin-right: 20px;
  transform: translate(0%, 10%);

  &:hover {
    color: ${primaryColor};
  }
`;

export const ProfileModal = styled.ul`
  list-style-type: none;
  ${flexMixin({ justify: "flex-start", align: "flex-start" })};
  flex-direction: column;
  position: absolute;
  top: 4rem;
  left: 63%;
  background-color: #667788;
  padding: 5px 20px 5px 5px;
  border-radius: 2px;

  li {
    color: #000;
    width: 100%;
    margin: 5px;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: ${secondaryColor};
    }
  }
`;
