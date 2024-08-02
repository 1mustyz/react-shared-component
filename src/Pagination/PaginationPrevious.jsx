import React from "react";
import PropTypes from "prop-types";
import { HiOutlineArrowLeft } from "react-icons/hi2";

const PaginationPrevious = ({ onClick, disabled }) => (
  <button
    className="prev flex items-center gap-[6px] px-[16px] text-[14px] disabled:cursor-not-allowed"
    onClick={onClick}
    disabled={disabled}
    type="submit"
  >
    <HiOutlineArrowLeft />
    {"Prev"}
  </button>
);

PaginationPrevious.prototype = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

PaginationPrevious.defaultProps = {
  onClick: () => {},
  disabled: false,
};

export default PaginationPrevious;
