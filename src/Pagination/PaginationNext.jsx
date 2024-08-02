import React from "react";
import PropTypes from "prop-types";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const PaginationNext = ({ onClick, disabled }) => (
  <button
    className="next flex items-center gap-[6px] px-[16px] text-[14px] disabled:cursor-not-allowed"
    onClick={onClick}
    disabled={disabled}
    type="button"
  >
    {"Next"}
    <HiOutlineArrowSmallRight />
  </button>
);

PaginationNext.prototype = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

PaginationNext.defaultProps = {
  onClick: () => {},
  disabled: false,
};

export default PaginationNext;
