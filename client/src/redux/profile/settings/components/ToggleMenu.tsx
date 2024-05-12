import React, { useState } from "react";

import { useAppDispatch } from "../../../../common/hooks";
import { Underline } from "../../../singleMovie/SingleMovie.styled";
import { setSettingsType } from "../../profileSlice";
import { ToggleMenu as Container } from "../Settings.styled";

const ToggleMenu = () => {
  const [active, setActive] = useState("profile");
  const dispatch = useAppDispatch();

  const handleClick = (value: string) => {
    setActive(value);

    dispatch(setSettingsType(value));
  };

  return (
    <Container>
      <ul>
        <li
          onClick={() => handleClick("profile")}
          className={active === "profile" ? "active" : ""}
        >
          Profile
          {active === "profile" && (
            <Underline
              width={"100%"}
              margin="0"
              style={{ background: "#fff" }}
            />
          )}
        </li>
        <li
          onClick={() => handleClick("auth")}
          className={active === "auth" ? "active" : ""}
        >
          Auth
          {active === "auth" && (
            <Underline
              width={"100%"}
              margin="0"
              style={{ background: "#fff" }}
            />
          )}
        </li>
        <li
          onClick={() => handleClick("avatar")}
          className={active === "avatar" ? "active" : ""}
        >
          Avatar
          {active === "avatar" && (
            <Underline
              width={"100%"}
              margin="0"
              style={{ background: "#fff" }}
            />
          )}
        </li>
      </ul>
      <Underline width={"100%"} margin="-.06rem 0 0" />
    </Container>
  );
};

export default ToggleMenu;
