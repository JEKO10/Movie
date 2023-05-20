import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { getCollection } from "../discoverMoviesSlice";

const Collection = () => {
  const { collection } = useAppSelector((store) => store.discoverMovies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCollection(230));

    console.log(collection);
  }, []);

  return <section>Collection</section>;
};

export default Collection;
