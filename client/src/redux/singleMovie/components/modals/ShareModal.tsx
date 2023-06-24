import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import { Modal } from "../../../../assets/style/Modals.styled";
import { useAppDispatch } from "../../../../common/hooks";
import { toggleShare } from "../../singleMovieSlice";

const ShareModal = () => {
  const dispatch = useAppDispatch();

  return (
    <Modal>
      <h3 onClick={() => dispatch(toggleShare(false))}>Close</h3>
      <p>https://Moviexd.com/movie/id</p>
      <BsTwitter />
      <BsFacebook />
      <BsInstagram />
    </Modal>
  );
};

export default ShareModal;
