import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxCross1, RxPlus } from "react-icons/rx";

import {
  AddToList,
  Modal,
  ModalLists,
  PublicToggle,
  Submit,
} from "../../../../assets/style/Modals.styled";
import { Underline } from "../../../../assets/style/SingleMovie.styled";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { toggleList } from "../../singleMovieSlice";

const ListsModal = () => {
  const [isPublic, setIsPublic] = useState(true);

  const { movieInfo, isLists } = useAppSelector((store) => store.singleMovie);
  const dispatch = useAppDispatch();
  const listsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (listsRef.current && !listsRef.current.contains(e.target as Node)) {
        dispatch(toggleList(false));
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
    <Modal isShare={false} isReview={false} isLists={isLists}>
      <ModalLists ref={listsRef}>
        <RxCross1 onClick={() => dispatch(toggleList(false))} />
        <h2>Add ‘{movieInfo.title}’ to lists</h2>
        <div>
          <PublicToggle onClick={() => setIsPublic(true)} isPublic={isPublic}>
            Public
          </PublicToggle>
          <PublicToggle onClick={() => setIsPublic(false)} isPublic={!isPublic}>
            Private
          </PublicToggle>
        </div>
        <Underline margin={`0 -40px`} width="calc(100% + 80px)" />
        <AddToList>
          <div>
            <RxPlus />
            <p>New list...</p>
          </div>
          <label>
            <input type="text" placeholder="Search..." />
            <FaSearch />
          </label>
        </AddToList>
        <Submit>
          <button onClick={() => dispatch(toggleList(false))}>Add</button>
        </Submit>
      </ModalLists>
    </Modal>
  );
};

export default ListsModal;
