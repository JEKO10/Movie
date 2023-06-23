import React from "react";

import { useAppSelector } from "../../../common/hooks";
import ReviewModal from "./modals/ReviewModal";

const Modals = () => {
  const { review, list, share } = useAppSelector((store) => store.singleMovie);

  return (
    <section>
      {review && <ReviewModal />}
      {list && <article>Add to lists</article>}
      {share && <article>Share</article>}
    </section>
  );
};

export default Modals;
