import { RxHamburgerMenu } from "react-icons/rx";
import styled from "styled-components";

import {
  devices,
  flexMixin,
  primaryColor,
  primaryFont,
  secondaryColor,
  tertiaryColor,
} from "../../assets/style/GlobalStyles";

type ProfileMenuProps = {
  isModalOpen: boolean;
};

export const Nav = styled.nav`
  ${flexMixin({ justify: "space-between", align: "center" })};
  padding: 20px 50px;

  margin-bottom: 20rem;

  @media ${devices.desktopS} {
    padding: 20px 30px;
  }

  @media ${devices.laptopL} {
    padding: 20px;
  }

  @media ${devices.mobile} {
    padding: 10px 20px;
  }

  a {
    color: #fff;
    text-decoration: none;

    h1 {
      font-size: 2.5rem;
      font-weight: 200;

      cursor: pointer;

      @media ${devices.laptopS} {
        font-size: 2rem;

        margin-bottom: 0.3rem;
      }

      span {
        text-transform: uppercase;
        color: ${secondaryColor};
      }
    }
  }

  > ul {
    ${flexMixin({ justify: "center", align: "center" })};
    list-style: none;

    @media ${devices.tablet} {
      display: none;
    }

    li {
      color: #dedede;
      font-size: 1.1rem;
      letter-spacing: 1px;
      line-height: 17px;
      text-transform: uppercase;

      margin: 0 2rem;

      transition: all 200ms ease;
      cursor: pointer;

      &:hover {
        color: #fff;
      }

      /* top | right | bottom | left */
      @media ${devices.desktopS} {
        margin: 0 0 0 2rem;
      }

      @media ${devices.laptopL} {
        margin: 0 0 0 1.5rem;
      }
    }
  }

  article button {
    background-color: ${secondaryColor};
    color: #fff;
    font-size: 1.5rem;
    font-family: ${primaryFont};
    text-transform: uppercase;

    margin-left: 1rem;
    padding: 5px 40px;
    border-radius: 10px;

    cursor: pointer;
  }
`;

export const ProfileHeader = styled.header`
  ${flexMixin({ justify: "space-between", align: "center" })};
  background-color: ${primaryColor};

  min-width: 155px;

  padding: 10px 15px;
  border-radius: 10px;

  transition: background-color 200ms ease;
  cursor: pointer;

  svg {
    font-size: 1.8rem;
    color: ${tertiaryColor};
  }

  p {
    font-size: 25px;
    margin: 0 0.5rem;
  }

  &:hover {
    background-color: ${secondaryColor};
  }
`;

export const ProfileMenu = styled.section`
  position: relative;
`;

export const ProfileModal = styled.ul<ProfileMenuProps>`
  background-color: ${primaryColor};
  list-style-type: none;

  min-width: 155px;

  position: absolute;
  top: 55px;
  left: 0;

  padding: 0 20px 5px 5px; // top right bottom left
  border-radius: 5px;

  box-shadow:
    inset 0 1px 0 hsla(0, 0%, 100%, 0.35),
    0 0 10px #000;
  z-index: 3;

  li {
    margin: 5px;
    margin: 5px -20px 5px -5px;

    cursor: pointer;

    a {
      display: block;

      color: #fff;
      font-weight: 500;
      text-decoration: none;

      padding: 5px 10px;

      &:hover {
        color: #fff;
        background-color: ${tertiaryColor};
      }
    }

    &:last-of-type {
      margin: 5px -20px 3px -5px;
    }
  }
`;

export const LogButton = styled.button`
  background-color: ${primaryColor};
  color: #fff;
  font-size: 30px;
  font-family: ${primaryFont};
  text-transform: uppercase;

  padding: 5px 40px;
  border-radius: 10px;

  transition: background-color 200ms ease;
  cursor: pointer;

  &:hover {
    background-color: ${secondaryColor};
  }

  @media ${devices.tablet} {
    display: none;
  }
`;

export const Input = styled.div`
  position: relative;

  margin-left: 2rem;

  @media ${devices.laptopS} {
    margin-left: 0;

    order: 3;
  }

  input {
    background-color: ${primaryColor};
    color: #fff;
    font-size: 1.5rem;
    font-family: ${primaryFont};

    height: 52px;
    width: 524px;

    padding: 0 20px;
    border-radius: 5px;
    outline: none;

    @media ${devices.laptopL} {
      width: 400px;
    }

    @media ${devices.laptop} {
      width: 350px;
    }

    @media ${devices.laptopS} {
      font-size: 1.1rem;

      height: 35px;
      width: 200px;

      padding: 0 10px;
    }

    @media ${devices.tablet} {
      display: none;
    }
  }

  svg {
    color: ${tertiaryColor};
    font-size: 2rem;

    position: absolute;
    top: 0.6rem;
    right: 1rem;

    cursor: pointer;

    @media ${devices.laptopS} {
      font-size: 1.3rem;

      top: 0.35rem;
      right: 0.5rem;

      margin-top: 0.1rem;
    }

    @media ${devices.tablet} {
      font-size: 1.5rem;

      position: static;
    }
  }
`;

export const MenuButton = styled(RxHamburgerMenu)`
  color: ${tertiaryColor};
  font-size: 2rem;

  display: none;

  cursor: pointer;

  @media ${devices.tablet} {
    display: block;
  }
`;
