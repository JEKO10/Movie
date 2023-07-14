import styled, { css } from "styled-components";

import {
  flexMixin,
  primaryColor,
  primaryFont,
  secondaryColor,
} from "./GlobalStyles";

type NavProps = {
  query: string;
  isVisible: boolean;
};

type InputProps = {
  isSearchOpen: boolean;
};

type ProfileMenuProps = {
  isModalOpen: boolean;
};

type NavMenuItemProps = {
  active: boolean;
};

export const Nav = styled.nav<NavProps>`
  ${flexMixin({ justify: "space-between", align: "center" })};
  color: #99aabb;
  background-color: ${({ query }) =>
    query === "singleMovie" ? `rgba(17, 22, 29, 0)` : `rgba(17, 22, 29, 0.95)`};
  padding: 20px 50px;
  width: 100%;
  position: fixed;
  top: ${({ isVisible }) => (isVisible ? "0" : "-95px")};
  left: 0;
  overflow: hidden;
  z-index: 1;
  transition: all 500ms ease;

  img {
    height: 50px;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  ${flexMixin({ justify: "flex-end", align: "center" })};
  list-style-type: none;
  width: 100%;
`;

export const NavMenuItem = styled.li<NavMenuItemProps>`
  font-family: ${primaryFont};
  text-transform: uppercase;
  font-weight: 900;
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  margin: 0 30px;
  cursor: pointer;
  transition: all 200ms ease;

  a {
    color: #99aabb;
    text-decoration: none;
    ${({ active }) =>
      active &&
      css`
        color: #fff;
      `}

    &:hover,
    &.active {
      color: #fff;
    }
  }

  &:last-of-type {
    ${flexMixin({ justify: "center", align: "center" })};
    margin: 0;
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

export const ProfileMenu = styled.li`
  position: relative;
`;

export const ProfileModal = styled.ul<ProfileMenuProps>`
  list-style-type: none;
  position: absolute;
  top: -5px;
  left: -10px;
  background-color: #8899aa;
  min-width: 110px;
  padding: 0 20px 5px 5px; // top right bottom left
  box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, 0.35), 0 0 10px #000;
  border-radius: 2px;

  li {
    margin: 5px;
    margin: 5px -20px 5px -5px;
    cursor: pointer;

    a {
      display: block;
      text-transform: none;
      font-weight: 500;
      padding: 5px 10px;
      color: rgba(0, 0, 0, 0.8);

      &:hover {
        color: #fff;
        background-color: #667788;
      }
    }

    &:first-of-type {
      padding: 0;
      padding-left: 10px;
      color: #fff;
      text-transform: uppercase;
      font-size: 0.8rem;
      letter-spacing: 1.5px;

      &:hover {
        background-color: #8899aa;
      }
    }

    &:last-of-type {
      display: block;
      margin: 5px -20px 3px -5px;
    }
  }
`;
