import styled from "styled-components";

import {
  flexMixin,
  primaryColor,
  primaryFont,
  secondaryColor,
  tertiaryColor
} from "../../assets/style/GlobalStyles";

type ProfileMenuProps = {
  isModalOpen: boolean;
};

export const Nav = styled.nav`
  ${flexMixin({ justify: "space-between", align: "center" })};
  padding: 20px 50px;

  a {
    color: #fff;
    text-decoration: none;

    h1 {
      font-size: 40px;
      font-weight: 200;

      cursor: pointer;

      span {
        text-transform: uppercase;
        color: ${secondaryColor};
      }
    }
  }

  > ul {
    ${flexMixin({ justify: "center", align: "center" })};
    list-style: none;

    li {
      color: #dedede;
      font-size: 1.1rem;
      letter-spacing: 1px;
      line-height: 17px;
      text-transform: uppercase;

      margin: 0 2.5rem;

      transition: all 200ms ease;
      cursor: pointer;

      &:hover {
        color: #fff;
      }
    }
  }

  article button {
    background-color: ${secondaryColor};
    color: #fff;
    font-size: 30px;
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
`;

export const Input = styled.div`
  position: relative;

  input {
    background-color: ${primaryColor};
    color: #fff;
    font-size: 1.5rem;
    font-family: ${primaryFont};

    height: 52px;
    width: 524px;

    padding: 0 20px;
    /* border-radius: 10px; */
    outline: none;
  }

  svg {
    color: ${tertiaryColor};
    font-size: 2rem;

    position: absolute;
    top: 0.6rem;
    right: 1rem;

    cursor: pointer;
  }
`;

// type NavProps = {
//   query: string;
//   isVisible: boolean;
//   scrollTop: number;
// };

// type InputProps = {
//   isSearchOpen: boolean;
// };

// type NavMenuItemProps = {
//   active: boolean;
// };

// export const Nav = styled.nav<NavProps>`
//   ${flexMixin({ justify: "space-between", align: "center" })};
//   color: #99aabb;
//   background-color: ${({ scrollTop, query }) =>
//     scrollTop === 0 && query === "singleMovie"
//       ? "rgba(17, 22, 29, 0)"
//       : "rgba(17, 22, 29, 0.95)"};
//   padding: 20px 50px;
//   width: 100%;
//   display: ${({ query }) => (query === "error" ? "none" : "flex")};
//   position: fixed;
//   top: ${({ isVisible }) => (isVisible ? "0" : "-95px")};
//   left: 0;
//   z-index: 1;
//   transition: all 500ms ease;

//   img {
//     height: 50px;
//     cursor: pointer;
//   }
// `;

// export const NavMenu = styled.ul`
//   ${flexMixin({ justify: "flex-end", align: "center" })};
//   list-style-type: none;
//   width: 100%;
// `;

// export const NavMenuItem = styled.li<NavMenuItemProps>`
//   font-family: ${primaryFont};
//   text-transform: uppercase;
//   font-weight: 900;
//   font-size: 0.8rem;
//   letter-spacing: 1.5px;
//   margin: 0 30px;
//   cursor: pointer;
//   transition: all 200ms ease;

//   a {
//     color: #99aabb;
//     text-decoration: none;
//     ${({ active }) =>
//       active &&
//       css`
//         color: #fff;
//       `}

//     &:hover,
//     &.active {
//       color: #fff;
//     }
//   }

//   &:last-of-type {
//     ${flexMixin({ justify: "center", align: "center" })};
//     margin: 0;
//   }
// `;

// export const Input = styled.input<InputProps>`
//   background-color: #2c3440;
//   color: ${primaryColor};
//   font-family: ${primaryFont};
//   padding: 5px 10px;
//   border: none;
//   border-radius: 5px;
//   transition: all 500ms ease;
//   transform: ${({ isSearchOpen }) =>
//     isSearchOpen ? "translate(0, -5%)" : "translateX(300px)"};
//   width: ${({ isSearchOpen }) => (isSearchOpen ? "200px" : "0")};

//   &::placeholder {
//     color: ${secondaryColor};
//     letter-spacing: 1px;
//   }

//   &:is(:focus, :hover) {
//     outline: 2px solid ${primaryColor};
//     box-shadow: -2px 2px 5px ${primaryColor};
//   }
// `;

// export const IconWrapper = styled.div`
//   font-size: 1rem;
//   color: #99aabb;
//   margin-right: 20px;
//   transform: translate(0%, 10%);

//   &:hover {
//     color: ${primaryColor};
//   }
// `;
