import styled, { css } from "styled-components";

import { flexMixin, primaryColor } from "./GlobalStyles";

type PosterModalProps = {
  isModalOpen: boolean;
};

type ToggleOptionProps = {
  active: boolean;
}

export const PosterModal = styled.div<PosterModalProps>`
  height: 100%;
  width: 100%;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  visibility: hidden;
  opacity: 0;
  transition: all 500ms ease;

  ${({ isModalOpen }) =>
    isModalOpen &&
    css`
      visibility: visible;
      opacity: 1;
    `}

  img {
    position: relative;
    height: 95vh;
    margin-top: 1rem;
    border: 1.5px solid #e1e1ff99;
    border-radius: 5px;
    z-index: 4;
  }

  svg {
    font-size: 2rem;
    position: absolute;
    top: 15px;
    right: 20px;
    color: #e1e1ff99;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }
`;

export const Modal = styled.section`
  ${flexMixin({ justify: "center", align: "center" })};
  height: 100%;
  width: 100%;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  /* visibility: hidden;
  opacity: 0; */
  transition: all 500ms ease;

  svg {
    cursor: pointer;
  }
`;

export const ModalShare = styled.article`
  padding: 20px 40px;
  background-color: gray;

  svg:first-child {
    font-size: 2rem;
    position: absolute;
    top: 15px;
    right: 20px;
    color: #e1e1ff99;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }

  > div {
    ${flexMixin({ justify: "center", align: "center" })};
    width: 100%;
    margin-bottom: 2rem;
    background-color: #667788;

    p {
      background-color: black;
      flex-grow: 1;
      padding: 2px 0;
    }

    svg {
      font-size: 1.5rem;
      margin-left: 0.5rem;
      margin-right: 0;
    }
  }

  svg {
    color: #fff;
    font-size: 2rem;
    margin: 0 2rem;
    transition: all 200ms ease;

    &:hover {
      color: #e1e1ff99;
    }
  }
`;


export const ModalLists = styled.article`
  background-color: gray;
  min-width: 700px;
  padding: 20px;
  border-radius: 5px;

  svg:first-child {
    font-size: 2rem;
    position: absolute;
    top: 15px;
    right: 20px;
    color: #e1e1ff99;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 3rem;
    text-align: start;
  }

  > div {
    ${flexMixin({ justify: "space-between", align: "center" })};
    width: 100%;
    margin-bottom: 2rem;
    background-color: #667788;
    padding: 5px 25px;
    border-radius: 50px;
  }

  button {
    background-color: ${primaryColor};
    padding: 10px 15px;
    text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;
    transition: all 200ms ease;

    &:hover {
      color: #fff;
    }
  }
`

// export const ToggleOption = styled.p<ToggleOptionProps>`
//   background-color: ${({ active }) => (active ? "blue" : "none")};
//   color: #fff;
//   cursor: pointer;
//   transition: all 200ms ease;

//   &:hover {
//     color: #e1e1ff99;
//   }
  
//   ${({ active }) => active && `
//     font-weight: bold;
//     text-decoration: underline;
//   `}
// `;

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #52c41a;
  }

  &:focus + span {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }

  &:checked + span:before {
    transform: translateX(16px);
  }
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f0f0f0;
  transition: 0.2s;

  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.2s;
  }
`;

export const ToggleText = styled.span`
  margin-left: 8px;
`;