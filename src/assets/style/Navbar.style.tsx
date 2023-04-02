import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 20px 50px;
  font-family: "Hanken Grotesk", sans-serif;

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
      font-family: $primaryFont;
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
    }
  }
`;
