import React from "react";

import { ProfileForm as Container, ProfileName } from "../Settings.styled";

const ProfileForm = () => {
  return (
    <Container>
      <label>
        Username
        <input type="text" />
      </label>
      <ProfileName>
        <label>
          Name
          <input type="text" />
        </label>
        <label>
          Last name
          <input type="text" />
        </label>
      </ProfileName>
      <label>
        Email address
        <input type="email" />
      </label>
      <ProfileName>
        <label>
          Location
          <input type="text" />
        </label>
        <label>
          Website
          <input type="text" />
        </label>
      </ProfileName>
      <label>
        Bio
        <textarea cols={30} rows={10} />
      </label>
      <button type="submit">Save changes</button>
    </Container>
  );
};

export default ProfileForm;
