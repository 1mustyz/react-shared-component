import { AiOutlineCaretDown } from "react-icons/ai";
import { CircularProgress } from "@mui/material";
import { IoIosClose } from "react-icons/io";

import cn from "../../../Utils/cn";

import trimText from "../../../Utils/trimText";

const SelectScreen = ({
  className,
  handleOpenDropDown,
  dropdownTitleClass,
  disabled,
  isLoading,
  value,
  trimtext,
  trimLength,
  handleSelectedMulitpleOption,
  label,
}) => {
  return (
    <div
      id="inputId"
      onClick={handleOpenDropDown}
      className={cn(
        "border-1 border-main flex justify-between cursor-pointer items-center py-[9px] px-[10px]",
        className,
        disabled && "opacity-80 cursor-not-allowed",
      )}
    >
      <p
        className={cn(
          "text-grey-600 cursor-pointer text-[14px] sm:text-[12px] w-[80%]",
          dropdownTitleClass,
          disabled && "cursor-not-allowed",
        )}
      >
        {!Array.isArray(value) ? (
          <span className="flex items-center gap-2">
            {trimtext === true
              ? trimText(value?.label, trimLength, trimLength)
              : value?.label}
            {value?.smallLabel && (
              <span className="text-[11px] border-1 border-[#4f4fff] px-[2px] rounded-md">
                {value?.smallLabel}
              </span>
            )}
          </span>
        ) : (
          <div>
            {value.length >= 1 ? (
              <div className="flex gap-1 flex-wrap">
                {value?.map((item, index) => (
                  <span
                    key={index}
                    className="flex gap-2 items-center h-[22px] bg-[#EFEFF1] px-2 rounded-2xl"
                  >
                    <span className="text-[12px] text-primary-color font-medium capitalize cursor-default">
                      {item?.label?.toLowerCase()}{" "}
                      {item?.smallLabel && (
                        <span className="text-[10px] lowercase">
                          {item?.smallLabel}
                        </span>
                      )}
                    </span>
                    <p
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectedMulitpleOption(item);
                      }}
                      className="w-[14px] h-[14px] rounded-full bg-[#DAE0E6] flex justify-center items-center p-0"
                    >
                      <IoIosClose className="text-[12px] text-[#5F6D7E]" />
                    </p>
                  </span>
                ))}
              </div>
            ) : (
              <p>Select multiple {trimText(label, 10, 10)}</p>
            )}
          </div>
        )}
      </p>
      {!isLoading ? (
        <AiOutlineCaretDown className="text-[12px] text-gray-500" />
      ) : (
        <CircularProgress size={14} />
      )}
    </div>
  );
};

export default SelectScreen;
