import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../app/store";
import { setIsLoggedIn } from "../redux/profile/profileSlice";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useOutsideClick = <T>(
  callback?: ActionCreatorWithPayload<T, string>,
  handleExit?: () => void
) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (callback) dispatch(callback(false as T));
        if (handleExit) handleExit();
      }
    };

    document.addEventListener("mousedown", handleClickOutside, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [ref, callback, handleExit]);

  return { ref };
};

export const useCapsLock = () => {
  const [isCapsOn, setIsCapsOn] = useState(false);

  const handleCapsLock = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const capsLockOn: boolean = event.getModifierState("CapsLock");

    if (capsLockOn) {
      setIsCapsOn(true);
    } else {
      setIsCapsOn(false);
    }
  };

  return { isCapsOn, handleCapsLock, setIsCapsOn };
};

export const useResize = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return innerWidth;
};

export const useGetUsername = () => {
  const [user, setUser] = useState({ username: "" });
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/profile`, { withCredentials: true })
      .then((response) => {
        if (response.data.user.length !== 0) {
          setUser(response.data.user[0]);
          dispatch(setIsLoggedIn(true));
        } else {
          dispatch(setIsLoggedIn(false));
          setUser({ username: "" });
        }
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
      });
  }, []);

  return user;
};
