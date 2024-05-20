import React from "react";

import { Avatar as Container } from "../Settings.styled";

const Avatar = () => {
  return (
    <Container>
      <div>
        <button>Select new avatar</button>
        <p>Remove</p>
      </div>
    </Container>
  );
};

export default Avatar;
