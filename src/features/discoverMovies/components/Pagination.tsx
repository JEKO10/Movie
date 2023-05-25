import React, { useEffect } from "react";

import { PaginationList } from "../../../assets/style/Pagination.styled";
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
    <PaginationList>
      {pages.map((page: number) => {
        return (
          <li
            key={page}
            onClick={() => dispatch(getDiscoverMovies({ id, page }))}
          >
            {page}
          </li>
        );
      })}
    </PaginationList>
  );
};

export default Pagination;
