import React, { useEffect, useRef } from "react";
import { BsFacebook, BsInstagram, BsSnapchat, BsTwitter } from "react-icons/bs";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

import { Modal, ModalShare } from "../../../../assets/style/Modals.styled";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { toggleShare } from "../../singleMovieSlice";

const ShareModal = () => {
  const { isShare } = useAppSelector((store) => store.singleMovie);
  const dispatch = useAppDispatch();
  const shareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(e.target as Node)) {
        dispatch(toggleShare(false));
        document.body.style.overflow = "auto";
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Modal isShare={isShare} isReview={false} isLists={false}>
      <ModalShare ref={shareRef}>
        <RxCross1 onClick={() => dispatch(toggleShare(false))} />
        <div>
          <p>https://Moviexd.com/movie/id</p>
          <HiOutlineClipboardCopy />
        </div>
        <BsTwitter />
        <BsFacebook />
        <BsInstagram />
        <BsSnapchat />
      </ModalShare>
    </Modal>
  );
};

export default ShareModal;
