import React from "react";

import transparent from "../../../../assets/images/transparent.jpg";
import { Avatar as Container } from "../Settings.styled";

const Avatar = () => {
  return (
    <Container>
      <div>
        <img src={transparent} alt="transparentImg" />
        <div>
          <button>Select new avatar</button>
          <p>Remove</p>
        </div>
      </div>
      <p>Avatars must be JPEG or PNG format with maximum dimensions of Xpx.</p>
    </Container>
  );
};

export default Avatar;
