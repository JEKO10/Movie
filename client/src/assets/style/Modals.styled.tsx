import styled, { css } from "styled-components";

import { flexMixin, primaryColor, primaryFont } from "./GlobalStyles";

type PosterModalProps = {
  isModalOpen: boolean;
};

type ModalProps = {
  isShare: boolean;
  isReview: boolean;
  isLists: boolean;
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
    z-index: 1;
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

export const Modal = styled.section<ModalProps>`
  ${flexMixin({ justify: "center", align: "center" })};
  height: 100%;
  width: 100%;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  transition: all 500ms ease;

  ${({ isShare, isReview, isLists }) =>
    isShare || isReview || isLists
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}

  svg {
    cursor: pointer;
  }
`;

export const ModalShare = styled.article`
  background-color: #445566;
  min-width: 500px;
  max-width: 600px;
  padding: 20px 40px;
  border-radius: 5px;
  z-index: 1;

  svg:first-child {
    font-size: 2rem;
    margin: 0;
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
    background-color: #667788;
    width: min-content;
    margin: 0 auto 2rem;
    border-radius: 5px;
    box-shadow: inset 0 1.5px 0 #e1e1ff99;
    transition: all 200ms ease;

    p {
      background-color: #2c3440;
      padding: 5px 10px;
      user-select: none;
    }

    svg {
      font-size: 1.5rem;
      margin: 0 0.5rem;

      &:hover {
        color: #fff;
      }
    }

    &:hover {
      background-color: #708191;
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
  min-width: 500px;
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

export const Submit = styled.article`
  background-color: #334455;
  width: calc(100% + 80px);
  margin: 0 -40px -20px;
  border-radius: 0 0 5px 5px;
  text-align: end;

  button {
    background-color: ${primaryColor};
    color: #e1e1ff99;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 15px 35px;
    padding: 8px 25px;
    border-radius: 5px;
    box-shadow: inset 0 -1px 0 #456;
    cursor: pointer;
    transition: all 200ms ease;

    &:hover {
      color: #fff;
      box-shadow: inset 0 1px 0 #fff;
    }
  }
`;

export const ModalReview = styled.article`
  ${flexMixin({ justify: "space-between", align: "flex-start" })};
  background-color: #445566;
  min-width: 500px;
  padding: 20px 40px;
  border-radius: 5px;
  z-index: 1;

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
    span {
      color: #e1e1ff99;
      font-weight: 400;
      font-size: 1.1rem;
      margin: 0 0.5rem;
    }
  }

  > div {
    text-align: start;

    > * {
      padding: 10px 0;
    }

    > div {
      ${flexMixin({ justify: "space-between", align: "center" })};

      label {
        ${flexMixin({ justify: "flex-start", align: "flex-start" })};
        color: #ccddee;
        font-size: 0.9rem;
        user-select: none;

        input[type="checkbox"] {
          font-size: 22rem;
          height: 18px;
          width: 20px;
          border-radius: 5px;
          margin-right: 0.5rem;
          accent-color: #ccddee;
          cursor: pointer;
        }
      }
    }

    textarea {
      font-family: ${primaryFont};
      background-color: #ccddee;
      color: #556677;
      min-height: 50px;
      max-height: 300px;
      font-size: 0.8rem;
      margin: 0.2rem 0;
      padding: 10px;
      border-radius: 5px;
      outline: none;
      resize: vertical;
      transition: all 500ms ease;

      &:focus {
        background-color: #fff;
        box-shadow: -1px 2px 5px #000;
      }
    }
  }

  img {
    height: 230px;
    width: 160px;
    border-radius: 5px;
    margin-right: 2rem;
    border: 3px solid transparent;
    transition: all 500ms ease;
    cursor: pointer;

    &:hover {
      border: 3px solid #fff;
    }
  }
`;
