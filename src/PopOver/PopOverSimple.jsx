import { useState } from "react";
import cn from "Utils/cn";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

const PopOverSimple = ({ header, content, className }) => {
  const [showPopover, setShowPopover] = useState(false);

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  return (
    <ClickAwayListener onClickAway={() => setShowPopover(false)}>
      <div className="relative group inline-block">
        <button type="submit" className="group px-2" onClick={togglePopover}>
          {header}
        </button>

        {showPopover && (
          <div
            className={cn(
              "absolute z-10 right-0 mt-[45px] top-0 w-60 bg-white border border-gray-300 rounded-lg shadow-lg text-primary",
              className,
            )}
          >
            {content}
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default PopOverSimple;
