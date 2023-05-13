import React, { useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";

import { PosterModal } from "../../../assets/style/PosterModal.styled";
import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { toggleModal } from ".././singleMovieSlice";

type ModalProps = {
  id?: string;
  posterUrl: string;
  poster_path: string;
};

const ImageModal: React.FC<ModalProps> = ({ id, posterUrl, poster_path }) => {
  const { isModalOpen } = useAppSelector((store) => store.singleMovie);
  const dispatch = useAppDispatch();
  const posterRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    document.addEventListener("click", clickOutside, true);
  }, [id]);

  const clickOutside = (e: MouseEvent) => {
    if (!posterRef.current?.contains(e.target as Node)) {
      dispatch(toggleModal(false));
    } else {
      dispatch(toggleModal(true));
    }
  };

  return (
    <PosterModal className={`${isModalOpen ? "open" : ""} posterModal`}>
      <RxCross2 onClick={() => dispatch(toggleModal(false))} />
      <img
        src={poster_path ? posterUrl + poster_path : import.meta.env.VITE_IMG}
        alt="POSTER"
        ref={posterRef}
      />
    </PosterModal>
  );
};

export default ImageModal;
