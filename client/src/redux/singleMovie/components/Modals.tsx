import React from "react";

import { useAppSelector } from "../../../common/hooks";
import ListsModal from "./modals/ListsModal";
import ReviewModal from "./modals/ReviewModal";
import ShareModal from "./modals/ShareModal";

const Modals = () => {
  const { review, list, share } = useAppSelector((store) => store.singleMovie);

  return (
    <section>
      {review && <ReviewModal />}
      {list && <ListsModal />}
      {share && <ShareModal />}
    </section>
  );
};

export default Modals;
