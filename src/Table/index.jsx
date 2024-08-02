import { CircularProgress } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";

import cn from "../Utils/cn";

export const TableWrapper = ({ children, className }) => {
  return (
    <div
      className={cn(
        "w-full sm:hidden max-h-[70vh] overflow-y-auto rounded-t-lg shadow-sm",
        className,
      )}
      style={{ scrollbarWidth: "thin" }}
    >
      {children}
    </div>
  );
};

export const THead = ({ children, className, ...props }) => {
  return (
    <tr
      className={cn(
        " font-semibold sticky top-0 bg-white text-[13px] z-[12] ",
        className,
      )}
      {...props}
    >
      {children}
    </tr>
  );
};

export const TRow = ({ children, className, ...props }) => {
  return (
    <tr
      className={cn(
        "odd:bg-[#f7f6f6] even:bg-white text-[12px] hover:bg-blue-100 ",
        className,
      )}
      {...props}
    >
      {children}
    </tr>
  );
};

export const TableLoader = ({ className, colSpan = 5 }) => {
  return (
    <tr>
      <td colSpan={colSpan} className={cn("py-5 w-full", className)}>
        <div className="flex justify-center mt-3">
          <CircularProgress />
        </div>
      </td>
    </tr>
  );
};

export const TableNoData = ({ className, colSpan = 5 }) => {
  return (
    <tr>
      <td colSpan={colSpan} className={cn("py-5 w-full", className)}>
        <div className="flex justify-center mt-3 text-[14px]">No data</div>
      </td>
    </tr>
  );
};

export const ActionTriggerIcon = () => {
  return (
    <p>
      <span className="sm:hidden">...</span>

      <span>
        <BsThreeDotsVertical className="lg:hidden text-[20px]" />
      </span>
    </p>
  );
};
