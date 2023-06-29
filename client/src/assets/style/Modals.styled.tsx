import styled, { css } from "styled-components";

import { flexMixin, primaryColor, primaryFont } from "./GlobalStyles";

type PosterModalProps = {
  isModalOpen: boolean;
};

type PublicToggle = {
  isPublic: boolean;
};

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
  background-color: #445566;
  min-width: 600px;
  max-width: 600px;
  padding: 20px 40px;
  border-radius: 5px;

  > svg:first-child {
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
    margin-bottom: 1rem;
    text-align: start;
  }

  > div {
    ${flexMixin({ justify: "space-between", align: "center" })};
    width: 100%;
    margin-bottom: 1rem;
    background-color: #334455;
    padding: 2px;
    border-radius: 50px;

    p {
      cursor: pointer;
    }
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
`;

export const PublicToggle = styled.p<PublicToggle>`
  background-color: ${({ isPublic }) => isPublic && "#99AABB"};
  color: ${({ isPublic }) =>
    isPublic ? "#334455" : "rgba(225, 225, 225, 0.5)"};
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  width: 50%;
  padding: 2px 15px;
  border: 2px solid transparent;
  border-radius: 50px;
  transition: all 500ms ease;

  &:hover {
    color: ${({ isPublic }) => !isPublic && "#fff"};
    border: ${({ isPublic }) => !isPublic && "2px solid #445566"};
  }
`;

export const AddToList = styled.div`
  background: transparent !important;
  color: #e1e1ff99;

  div {
    ${flexMixin({ justify: "flex-start", align: "center" })};

    svg {
      margin-right: 0.3rem;
    }

    &:hover {
      color: #fff;
    }

    p {
      font-weight: 600;
    }
  }

  label {
    ${flexMixin({ justify: "center", align: "center" })};

    input {
      background: none;
      color: #fff;
      font-family: ${primaryFont};
      text-align: right;
      margin-right: 0.5rem;
      outline: none;

      &::placeholder {
        color: #e1e1ff99;
      }

      &:is(:hover, :active)::placeholder {
        color: #fff;
      }
    }
  }
`;
