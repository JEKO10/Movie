import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useEffect, useRef, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../app/store";

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

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
};
