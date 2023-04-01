import styled from "styled-components";

export const Nav = styled.nav`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: rgb(19, 24, 28);
  color: #fff;
  padding: 20px 50px;

  img {
    height: 50px;
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
  }

  ul li {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.7rem;
    letter-spacing: 1.5px;
    margin: 0 10px;
    cursor: pointer;
    -webkit-transition: all 200ms ease;
    transition: all 200ms ease;
  }

  ul li a {
    color: #99aabb;
    text-decoration: none;
  }

  ul li a:hover,
  ul li a.active {
    color: #fff;
  }
`;

// export const NavList = styled.ul`
//   list-style-type: none;
//   display: flex-end;
//   align-items: center;
//   width: 100%;

//   li {
//     text-transform: uppercase;
//     font-weight: 900;
//     font-size: 0.8rem;
//     letter-spacing: 1.5px;
//     margin: 0 20px;
//     cursor: pointer;
//     transition: all 200ms ease;

//     a {
//       color: #99aabb;
//       text-decoration: none;

//       &:hover,
//       &.active {
//         color: #fff;
//       }
//     }
//   }
// `;
