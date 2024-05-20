import React from "react";

import { ProfileForm as Container } from "../Settings.styled";

const Auth = () => {
  return (
    <Container>
      <label>
        <span>Current password</span>
        <input type="password" />
      </label>
      <label>
        <span>New password</span>
        <input type="password" />
      </label>
      <label>
        <span>Confirm new password</span>
        <input type="password" />
      </label>
      <button>Change</button>
    </Container>
  );
};

export default Auth;
