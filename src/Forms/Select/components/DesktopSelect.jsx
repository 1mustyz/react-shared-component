import { IoIosCheckmark } from "react-icons/io";
import * as Popover from "@radix-ui/react-popover";

import cn from "Utils/cn";

const DesktopSelect = ({
  optionClass = "",
  labelClass = "",
  smallLabelClassName = "",
  selectMultiple = false,
  openDropdown,
  handleCloseDropdown,
  parentWidth,
  data,
  handleSelectedOption,
  handleSelectedMulitpleOption,
  selected,
}) => {
  return (
    <div className="sm:hidden">
      <Popover.Root
        open={Boolean(openDropdown)}
        onOpenChange={handleCloseDropdown}
      >
        <Popover.Anchor />
        <Popover.Portal>
          <Popover.Content
            className={cn(
              "shadow-select sm:hidden max-h-[300px] overflow-y-auto bg-white mt-1",
              optionClass
            )}
            style={{ width: `${parentWidth}px` }}
          >
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() =>
                  !selectMultiple
                    ? handleSelectedOption(item)
                    : handleSelectedMulitpleOption(item)
                }
                className={cn(
                  "px-[14px] py-[5px] hover:bg-5A5 hover:text-white flex items-center cursor-pointer justify-between",
                  `${
                    selectMultiple &&
                    selected.length > 0 &&
                    selected?.find((x) => x?.value === item?.value) &&
                    "bg-5A5"
                  }`
                )}
              >
                <p className={`text-[14px] ${labelClass}`}>
                  {item.label}{" "}
                  {item.smallLabel !== undefined && (
                    <span className={`text-[10px] ${smallLabelClassName}`}>
                      {item?.smallLabel}
                    </span>
                  )}{" "}
                </p>
                {selectMultiple &&
                  selected.length > 0 &&
                  selected?.find((x) => x?.value === item?.value) && (
                    <IoIosCheckmark />
                  )}
              </div>
            ))}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

export default DesktopSelect;
