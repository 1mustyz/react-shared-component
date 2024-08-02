/* eslint-disable no-plusplus */

import { useEffect, useState } from "react";
import PaginationPrevious from "./PaginationPrevious";
import PaginationNext from "./PaginationNext";
import PropTypes from "prop-types";

const Pagination = ({
  onPageChange,
  pageTotal,
  initialPage,
  maxVisiblePages,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const pageNumbers = Array.from({ length: pageTotal }, (_, i) => i + 1);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onPageChange(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < pageTotal) {
      setCurrentPage(currentPage + 1);
      onPageChange(currentPage + 1);
    }
  };

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage]);

  // Function to generate a subset of page numbers with ellipsis
  const renderPageNumbers = () => {
    const totalPages = pageNumbers.length;

    // Calculate the range of page numbers to display
    const start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const end = Math.min(totalPages, start + maxVisiblePages - 1);

    const result = [];

    // Always display the first page number
    if (start > 1) {
      result.push(
        <button
          type="submit"
          key={1}
          className={`px-[16px] text-[14px] ${
            currentPage === 1 ? "text-[#41AE49]" : ""
          }`}
          onClick={() => {
            setCurrentPage(1);
            onPageChange(1);
          }}
          disabled={currentPage === 1}
        >
          1
        </button>,
      );
    }

    if (start > 2) {
      result.push(
        <span key="ellipsis-start" className="px-[16px] text-[14px]">
          ...
        </span>,
      );
    }

    for (let i = start; i <= end; i++) {
      result.push(
        <button
          type="submit"
          key={i}
          className={`px-[16px] text-[14px] ${
            currentPage === i ? "text-[#41AE49]" : ""
          }`}
          onClick={() => {
            setCurrentPage(i);
            onPageChange(i);
          }}
          disabled={currentPage === i}
        >
          {i}
        </button>,
      );
    }

    if (end < totalPages - 1) {
      result.push(
        <span key="ellipsis-end" className="px-[16px] text-center text-[14px]">
          ...
        </span>,
      );
    }

    // Always display the last page number
    if (end < totalPages) {
      result.push(
        <button
          type="submit"
          key={totalPages}
          className={`px-[16px] text-[14px] ${
            currentPage === totalPages ? "text-[#41AE49]" : ""
          }`}
          onClick={() => {
            setCurrentPage(totalPages);
            onPageChange(totalPages);
          }}
          disabled={currentPage === totalPages}
        >
          {totalPages}
        </button>,
      );
    }

    return result;
  };

  // ...

  return (
    <div className="flex ">
      <PaginationPrevious onClick={prevPage} disabled={currentPage === 1} />
      {renderPageNumbers()}
      <PaginationNext onClick={nextPage} disabled={currentPage === pageTotal} />
    </div>
  );
};

Pagination.prototype = {
  onPageChange: PropTypes.func,
  pageTotal: PropTypes.number,
  initialPage: PropTypes.number,
  maxVisiblePages: PropTypes.number,
};

Pagination.defaultProps = {
  onPageChange: () => {},
  maxVisiblePages: 5,
};

export default Pagination;
