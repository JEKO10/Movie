import React, { useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";

import { PosterModal } from "../../../../assets/style/Modals.styled";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
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

  useEffect(() => {
    const toggleBodyScroll = (isOpen: boolean) => {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    };

    const clickOutside = (e: MouseEvent) => {
      if (posterRef.current && !posterRef.current.contains(e.target as Node)) {
        dispatch(togglePoster(false));
      }
    };

    toggleBodyScroll(isPosterOpen);

    document.addEventListener("click", clickOutside, true);

    return () => {
      document.removeEventListener("click", clickOutside, true);
      toggleBodyScroll(false);
    };
  }, [isPosterOpen]);

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
