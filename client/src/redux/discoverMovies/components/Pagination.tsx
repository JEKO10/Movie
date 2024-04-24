import React from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight
} from "react-icons/md";

import { useAppDispatch } from "../../../common/hooks";
import { getDiscoverMovies } from "../discoverMoviesSlice";
import { PaginationList } from "./Pagination.styled";

type PaginationProps = {
  totalItems: number | undefined;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
  id?: string | undefined;
};

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  id
}) => {
  let totalPages: number;
  let pages;
  if (totalItems) {
    totalPages = Math.ceil(totalItems / itemsPerPage);
    pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const dispatch = useAppDispatch();

  const handlePageClick = (page: number) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);

    if (itemsPerPage === 100) {
      dispatch(getDiscoverMovies({ id, page }));
    }
  };

  return (
    <PaginationList>
      <li onClick={() => handlePageClick(1)}>
        <MdKeyboardDoubleArrowLeft />
      </li>
      {pages?.map((page: number) => (
        <li
          key={page}
          style={{
            background: currentPage === page ? "#dda824" : ""
          }}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </li>
      ))}
      <li onClick={() => handlePageClick(totalPages)}>
        <MdKeyboardDoubleArrowRight />
      </li>
    </PaginationList>
  );
};

export default Pagination;
