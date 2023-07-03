import React from "react";

import { useAppSelector } from "../../../common/hooks";
import ListsModal from "./modals/ListsModal";
import ReviewModal from "./modals/ReviewModal";
import ShareModal from "./modals/ShareModal";

const Modals = () => {
  const { isReview, isLists, isShare } = useAppSelector(
    (store) => store.singleMovie
  );

  return (
    <section>
      {isReview && <ReviewModal />}
      {isLists && <ListsModal />}
      {isShare && <ShareModal />}
    </section>
  );
};

export default Modals;
