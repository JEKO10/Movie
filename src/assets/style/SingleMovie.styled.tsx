import styled from "styled-components";

import { flexMixin } from "./GlobalStyles";

type BannerProps = {
  posterUrl: string;
  backdrop_path: string;
};

export const Movie = styled.section`
  ${flexMixin({ justify: "flex-start", align: "center" })};
  flex-direction: column;
  margin-bottom: 3rem;
  background: #13181c;
  width: 100vw;
  max-width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export const Banner = styled.div<BannerProps>`
  width: 75vw;
  height: 650px;
  position: relative;
  background-image: ${({ posterUrl, backdrop_path }) =>
    backdrop_path
      ? `url(${posterUrl + backdrop_path})`
      : `url(https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png)`};
  background-position: ${({ backdrop_path }) => !backdrop_path && `0 -410px`};
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
        0deg,
        #13181c 0,
        rgba(20, 24, 29, 0.986) 0.97%,
        rgba(20, 24, 29, 0.945) 2.07833333%,
        rgba(20, 24, 29, 0.883) 3.29666667%,
        rgba(20, 24, 29, 0.803) 4.60166667%,
        rgba(20, 24, 29, 0.711) 5.96666667%,
        rgba(20, 24, 29, 0.61) 7.365%,
        rgba(20, 24, 29, 0.504) 8.77166667%,
        rgba(20, 24, 29, 0.398) 10.16%,
        rgba(20, 24, 29, 0.296) 11.505%,
        rgba(20, 24, 29, 0.203) 12.78%,
        rgba(20, 24, 29, 0.122) 13.95833333%,
        rgba(20, 24, 29, 0.059) 15.01666667%,
        rgba(20, 24, 29, 0.016) 15.92833333%,
        rgba(20, 24, 29, 0) 16.66666667%,
        rgba(20, 24, 29, 0) 83.33333333%,
        rgba(20, 24, 29, 0.016) 84.07166667%,
        rgba(20, 24, 29, 0.059) 84.98333333%,
        rgba(20, 24, 29, 0.122) 86.04166667%,
        rgba(20, 24, 29, 0.203) 87.22%,
        rgba(20, 24, 29, 0.296) 88.495%,
        rgba(20, 24, 29, 0.398) 89.84%,
        rgba(20, 24, 29, 0.504) 91.22833333%,
        rgba(20, 24, 29, 0.61) 92.635%,
        rgba(20, 24, 29, 0.711) 94.03333333%,
        rgba(20, 24, 29, 0.803) 95.39833333%,
        rgba(20, 24, 29, 0.883) 96.70333333%,
        rgba(20, 24, 29, 0.945) 97.92166667%,
        rgba(20, 24, 29, 0.986) 99.03%,
        #13181c
      ),
      linear-gradient(
        90deg,
        #13181c 0,
        rgba(20, 24, 29, 0.986) 0.97%,
        rgba(20, 24, 29, 0.945) 2.07833333%,
        rgba(20, 24, 29, 0.883) 3.29666667%,
        rgba(20, 24, 29, 0.803) 4.60166667%,
        rgba(20, 24, 29, 0.711) 5.96666667%,
        rgba(20, 24, 29, 0.61) 7.365%,
        rgba(20, 24, 29, 0.504) 8.77166667%,
        rgba(20, 24, 29, 0.398) 10.16%,
        rgba(20, 24, 29, 0.296) 11.505%,
        rgba(20, 24, 29, 0.203) 12.78%,
        rgba(20, 24, 29, 0.122) 13.95833333%,
        rgba(20, 24, 29, 0.059) 15.01666667%,
        rgba(20, 24, 29, 0.016) 15.92833333%,
        rgba(20, 24, 29, 0) 16.66666667%,
        rgba(20, 24, 29, 0) 83.33333333%,
        rgba(20, 24, 29, 0.016) 84.07166667%,
        rgba(20, 24, 29, 0.059) 84.98333333%,
        rgba(20, 24, 29, 0.122) 86.04166667%,
        rgba(20, 24, 29, 0.203) 87.22%,
        rgba(20, 24, 29, 0.296) 88.495%,
        rgba(20, 24, 29, 0.398) 89.84%,
        rgba(20, 24, 29, 0.504) 91.22833333%,
        rgba(20, 24, 29, 0.61) 92.635%,
        rgba(20, 24, 29, 0.711) 94.03333333%,
        rgba(20, 24, 29, 0.803) 95.39833333%,
        rgba(20, 24, 29, 0.883) 96.70333333%,
        rgba(20, 24, 29, 0.945) 97.92166667%,
        rgba(20, 24, 29, 0.986) 99.03%,
        #13181c
      ),
      linear-gradient(
        180deg,
        #13181c 0,
        rgba(24, 29, 35, 0.986) 0.97%,
        rgba(24, 29, 35, 0.945) 2.07833333%,
        rgba(24, 29, 35, 0.883) 3.29666667%,
        rgba(24, 29, 35, 0.803) 4.60166667%,
        rgba(24, 29, 35, 0.711) 5.96666667%,
        rgba(24, 29, 35, 0.61) 7.365%,
        rgba(24, 29, 35, 0.504) 8.77166667%,
        rgba(24, 29, 35, 0.398) 10.16%,
        rgba(24, 29, 35, 0.296) 11.505%,
        rgba(24, 29, 35, 0.203) 12.78%,
        rgba(24, 29, 35, 0.122) 13.95833333%,
        rgba(24, 29, 35, 0.059) 15.01666667%,
        rgba(24, 29, 35, 0.016) 15.92833333%,
        rgba(24, 29, 35, 0) 16.66666667%,
        rgba(24, 29, 35, 0) 79.33333333%,
        rgba(24, 29, 35, 0.016) 80.07166667%,
        #13181c
      );
  }
`;

export const Wrapper = styled.article`
  ${flexMixin({ justify: "space-between", align: "flex-start" })};
  width: 70vw;
  margin-top: -2rem;
  margin-bottom: 4rem;
  z-index: 2;
`;

export const Info = styled.article`
  ${flexMixin({ justify: "flex-start", align: "flex-start" })};
  flex-direction: column;
  flex: 2;
  height: 345px;
  width: 100%;
  margin: 0 2rem;
`;

export const Name = styled.div`
  ${flexMixin({ justify: "flex-start", align: "flex-end" })};
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 1rem;

  > * {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2rem;
    line-height: 32px;
  }

  h4 {
    color: #e1e1ff99;
    font-weight: 400;
    font-size: 1.2rem;

    a {
      color: rgba(255, 255, 255, 0.8);
      margin-left: 0.5rem;
    }
  }
`;

export const Overview = styled.div`
  color: #e1e1ff99;
  display: flex;
  flex-direction: column;
  height: 100%;

  h4 {
    margin-bottom: 1rem;
    font-weight: 400;
    text-transform: uppercase;
  }

  p {
    line-height: 25px;
    margin-bottom: 2rem;
  }

  h3 {
    font-weight: 400;
    font-size: 1rem;
    margin-top: auto;
  }
`;

export const Collection = styled.article`
  p {
    font-weight: 700;
    margin-bottom: 1rem;
  }
`;

export const Poster = styled.img`
  width: 230px;
  height: 345px;
  border: 1.5px solid #e1e1ff99;
  border-radius: 5px;
  cursor: pointer;
`;
