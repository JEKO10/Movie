import styled from "styled-components";

type FadeProps = {
  isTrending: boolean;
};

export const Fade = styled.div<FadeProps>`
  background: ${({ isTrending }) =>
    isTrending
      ? "linear-gradient(to right, rgba(255, 255, 255, 0) 90%, rgba(68, 85, 102, 1) 100%)"
      : "linear-gradient(to right, rgba(255, 255, 255, 0) 80%, rgba(19, 24, 28, 1) 100%)"};

  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
`;
