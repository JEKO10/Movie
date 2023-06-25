import React from "react";
import { BsFacebook, BsInstagram, BsSnapchat, BsTwitter } from "react-icons/bs";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

import { Modal, ModalShare } from "../../../../assets/style/Modals.styled";
import { useAppDispatch } from "../../../../common/hooks";
import { toggleShare } from "../../singleMovieSlice";

const ShareModal = () => {
  const dispatch = useAppDispatch();

  return (
    <Modal>
      <ModalShare>
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
