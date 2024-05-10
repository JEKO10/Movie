import React from "react";

import { ToggleMenu as Container } from "./Settings.styled";

const ToggleMenu = () => {
  return (
    <Container>
      <ul>
        <li>Profile</li>
        <li>Auth</li>
        <li>Avatar</li>
      </ul>
    </Container>
  );
};

export default ToggleMenu;
