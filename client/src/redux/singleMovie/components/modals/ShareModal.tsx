import React, { useEffect, useRef, useState } from "react";
import { BsFacebook, BsInstagram, BsSnapchat, BsTwitter } from "react-icons/bs";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

import {
  CopyModal,
  Modal,
  ModalShare,
} from "../../../../assets/style/Modals.styled";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { toggleShare } from "../../singleMovieSlice";

const ShareModal = () => {
  const [isCopied, setIsCopied] = useState(false);

  const { isShare } = useAppSelector((store) => store.singleMovie);
  const dispatch = useAppDispatch();
  const shareRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLParagraphElement>(null);

  const handleClick = () => {
    if (linkRef.current) {
      const text = linkRef.current.innerText;

      // Create a temporary textarea element
      const tempTextArea = document.createElement("textarea");
      tempTextArea.value = text;

      // Append the textarea element to the body
      document.body.appendChild(tempTextArea);

      // Select the text in the textarea
      tempTextArea.select();

      // Copy the selected text to the clipboard
      document.execCommand("copy");

      // Remove the temporary textarea element
      document.body.removeChild(tempTextArea);

      console.log("Paragraph text:", text);
    }

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

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
          <p ref={linkRef}>https://Moviexd.com/movie/id</p>
          <HiOutlineClipboardCopy onClick={handleClick} />
        </div>
        <BsTwitter />
        <BsFacebook />
        <BsInstagram />
        <BsSnapchat />
      </ModalShare>
      <CopyModal isCopied={isCopied}>Link copied to clipboard!</CopyModal>
    </Modal>
  );
};

export default ShareModal;
