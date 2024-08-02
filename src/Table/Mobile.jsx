import { CircularProgress } from "@mui/material";

import cn from "../Utils/cn";

export const MobileTableWrapper = ({ children, className }) => {
  return (
    <div className={cn("lg:hidden flex flex-col gap-5 mb-10", className)}>
      {children}
    </div>
  );
};

export const MobileTRow = ({
  title,
  text,
  withBorder = true,
  actionTrigger,
  className,
  children,
}) => {
  return (
    <tr className={cn("w-full", withBorder && "border-b-1", className)}>
      <td className="py-[8px]">{title}:</td>
      {!children && <td className="pl-4 py-[8px]">{text}</td>}
      <td className="pl-4 py-[8px]">{children}</td>
      {actionTrigger && <td>{actionTrigger}</td>}
    </tr>
  );
};

export const MobileTableNoData = ({ className }) => {
  return (
    <div className={cn("flex justify-center mt-3 text-[14px]", className)}>
      No data
    </div>
  );
};

export const MobileTableLoader = ({ className }) => {
  return (
    <div className={cn("hidden sm:flex justify-center mt-3 w-full", className)}>
      <CircularProgress />
    </div>
  );
};
