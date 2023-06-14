import React from "react";

type ModalsProsp = {
  review: boolean;
  list: boolean;
  share: boolean;
};

const Modals: React.FC<ModalsProsp> = ({ review, list, share }) => {
  return (
    <section>
      {review && <article>Add a review</article>}
      {list && <article>Add to lists</article>}
      {share && <article>Share</article>}
    </section>
  );
};

export default Modals;
