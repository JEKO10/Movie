import { useEffect, useRef } from "react";
import { toggleModal } from ".././singleMovieSlice";
import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { RxCross2 } from "react-icons/rx";

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

  const clickOutside = (e) => {
    if (!posterRef.current?.contains(e.target)) {
      dispatch(toggleModal(false));
    } else {
      dispatch(toggleModal(true));
    }
  };

  return (
    <div className={`${isModalOpen ? "open" : ""} posterModal`}>
      <RxCross2 onClick={() => dispatch(toggleModal(false))} />
      <img src={posterUrl + poster_path} alt="POSTER" ref={posterRef} />
    </div>
  );
};

export default ImageModal;
