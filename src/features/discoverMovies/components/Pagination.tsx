import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { getDiscoverMovies } from "../discoverMoviesSlice";

type PaginationProps = {
  id: string | undefined;
};

const Pagination: React.FC<PaginationProps> = ({ id }) => {
  const { totalPages = 1 } = useAppSelector((store) => store.discoverMovies);
  const pages = [];
  const dispatch = useAppDispatch();

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    console.log(totalPages);
  }, []);

  return (
    <section>
      {pages
        // .slice(
        //   ...(page === 2
        //     ? [page - 1, page + 4]
        //     : page === 1
        //     ? [page, page + 5]
        //     : [page - 2, page + 3])
        // )
        .map((page: number) => {
          return (
            <p
              key={page}
              onClick={() => dispatch(getDiscoverMovies({ id, page }))}
            >
              {page}
            </p>
          );
        })}
    </section>
  );
};

export default Pagination;
