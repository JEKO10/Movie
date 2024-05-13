import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

import { AppDispatch } from "../../app/store";

export type ModalProps = {
  isClosing: boolean;
  setIsClosing: React.Dispatch<React.SetStateAction<boolean>>;
};

export const handleExit = <T>(
  setIsClosing: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: AppDispatch,
  setIsModalOpen: ActionCreatorWithPayload<T, string>
) => {
  setIsClosing(true);

  setTimeout(() => {
    dispatch(setIsModalOpen(false as T));

    setIsClosing(false);
  }, 300);
};

export const handleBack = (
  setIsClosing: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: AppDispatch,
  setIsMovieModalOpen: ActionCreatorWithPayload<
    {
      isOpen: boolean;
      id: number;
    },
    "navbar/setIsMovieModalOpen"
  >,
  setIsLogOpen: ActionCreatorWithPayload<boolean, "navbar/setIsLogOpen">,
  setInputValue: ActionCreatorWithPayload<string, "navbar/setInputValue">,
  title: string
) => {
  setIsClosing(true);

  setTimeout(() => {
    dispatch(setIsMovieModalOpen({ isOpen: false, id: 0 }));
    dispatch(setIsLogOpen(true));
    dispatch(setInputValue(title));
    setIsClosing(false);
  }, 300);
};

export const handleKeyDown = (
  event: React.KeyboardEvent<HTMLInputElement>,
  tags: string[],
  setTags: React.Dispatch<React.SetStateAction<string[]>>
) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const inputElement = event.target as HTMLInputElement;
    const newTag = inputElement.value;

    if (newTag && !tags.includes(newTag) && newTag) {
      setTags([...tags, newTag]);
    }

    inputElement.value = "";
  }
};

export const handleCheckboxChange = (
  checkboxes: {
    isWatched: boolean;
    isRewatch: boolean;
    isSpoiler: boolean;
  },
  setCheckboxes: React.Dispatch<
    React.SetStateAction<{
      isWatched: boolean;
      isRewatch: boolean;
      isSpoiler: boolean;
    }>
  >,
  checkboxName: keyof typeof checkboxes
) => {
  setCheckboxes(() => ({
    ...checkboxes,
    [checkboxName]: !checkboxes[checkboxName],
  }));
};

export const handleDelete = (
  clickedTag: string,
  tags: string[],
  setTags: React.Dispatch<React.SetStateAction<string[]>>
) => {
  setTags((prevTags) => prevTags.filter((tag) => tag !== clickedTag));
};
