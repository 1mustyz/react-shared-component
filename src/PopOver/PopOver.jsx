import { useState, useCallback } from "react";
import cn from "Utils/cn";
import { Popper } from "@mui/material";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

const PopOver = ({ header, content, className = "" }) => {
  const [openPopover, setPopover] = useState(false);

  const id = openPopover ? "simple-popper" : undefined;

  const handleOpenPopover = useCallback((e) => {
    setPopover(openPopover ? null : e.currentTarget);
  });
  const handleClosePopover = useCallback(() => {
    setPopover(null);
  });

  return (
    <ClickAwayListener onClickAway={handleClosePopover}>
      <div className="group inline-block">
        <button
          type="submit"
          className="group px-2"
          onClick={handleOpenPopover}
        >
          {header}
        </button>

        <Popper
          className={cn(
            "w-60 text-[12px] bg-white border border-gray-300 rounded-lg shadow-lg text-primary",
            className,
          )}
          id={id}
          open={Boolean(openPopover)}
          anchorEl={openPopover}
          onClose={handleClosePopover}
          placement={"bottom-start"}
        >
          {content}
        </Popper>
      </div>
    </ClickAwayListener>
  );
};

export default PopOver;
