import React, { useState } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

import { PaginationList } from "../../../assets/style/Pagination.styled";
import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { Loader, LoaderWrapper } from "../../../common/Loader";
import { getDiscoverMovies } from "../discoverMoviesSlice";

type PaginationProps = {
  id: string | undefined;
};

const Pagination: React.FC<PaginationProps> = ({ id }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { totalPages = 1, isLoading } = useAppSelector(
    (store) => store.discoverMovies
  );
  const pages = [];
  const dispatch = useAppDispatch();

  for (let i = 0; i <= totalPages - 5; i++) {
    pages.push(i);
  }

  const handlePageClick = (page: number) => {
    window.scrollTo(0, 0);
    dispatch(getDiscoverMovies({ id, page }));
  };

  if (isLoading) {
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>;
  }
  return (
    <PaginationList>
      <li
        onClick={() => {
          dispatch(getDiscoverMovies({ id, page: 1 }));
          setCurrentPage(1);
        }}
      >
        <MdKeyboardDoubleArrowLeft />
      </li>
      {pages
        .slice(
          ...(currentPage === 2
            ? [currentPage - 1, currentPage + 4]
            : currentPage === 1
            ? [currentPage, currentPage + 5]
            : [currentPage - 2, currentPage + 3])
        )
        .map((page: number) => {
          return (
            <li
              style={{
                background: currentPage === page ? "#dda824" : "",
              }}
              key={page}
              onClick={() => {
                handlePageClick(page);
                setCurrentPage(page);
              }}
            >
              {page}
            </li>
          );
        })}
      <li
        onClick={() => {
          dispatch(getDiscoverMovies({ id, page: pages.length - 1 }));
          setCurrentPage(pages.length - 1);
        }}
      >
        <MdKeyboardDoubleArrowRight />
      </li>
    </PaginationList>
  );
};

export default Pagination;
