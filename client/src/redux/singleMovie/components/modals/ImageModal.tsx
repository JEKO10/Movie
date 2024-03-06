import React, { useRef } from "react";
import { RxCross2 } from "react-icons/rx";

import { PosterModal } from "../../../../assets/style/Modals.styled";
import {
  useAppDispatch,
  useAppSelector,
  useOutsideClick
} from "../../../../common/hooks";
import { togglePoster } from "../../singleMovieSlice";

type ModalProps = {
  id?: string;
  posterUrl: string;
  poster_path: string;
};

const ImageModal: React.FC<ModalProps> = ({ posterUrl, poster_path }) => {
  const { isPosterOpen } = useAppSelector((store) => store.singleMovie);
  const dispatch = useAppDispatch();
  const posterRef = useRef<HTMLImageElement>(null);

  useOutsideClick(posterRef, dispatch, togglePoster);

  return (
    <PosterModal isPosterOpen={isPosterOpen}>
      <RxCross2 onClick={() => dispatch(togglePoster(false))} />
      <img
        src={poster_path ? posterUrl + poster_path : import.meta.env.VITE_IMG}
        alt="POSTER"
        ref={posterRef}
      />
    </PosterModal>
  );
};

export default ImageModal;
