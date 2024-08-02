import { IoIosCheckmark } from "react-icons/io";

import CustomModal from "../../CustomModal";
import cn from "Utils/cn";

const MobileSelect = ({
  smallLabelClassName = "",
  selectMultiple = false,
  openDropdown,
  data,
  handleSelectedOption,
  handleSelectedMulitpleOption,
  handleCloseDropdown,
  selected,
}) => {
  return (
    <CustomModal
      open={openDropdown}
      handleClose={handleCloseDropdown}
      title="Select Options"
      className="overflow-y-auto"
    >
      <div>
        {data.map((item) => (
          <div
            onClick={() =>
              !selectMultiple
                ? handleSelectedOption(item)
                : handleSelectedMulitpleOption(item)
            }
            className={cn(
              "px-2 py-3 border-b-1 hover:bg-5A5 hover:text-white flex items-center justify-between",
              `${
                selectMultiple &&
                selected.find((x) => x.value === item.value) &&
                "bg-5A5"
              }`
            )}
          >
            <p className={`text-[20px]`}>
              {item.label}{" "}
              {item.smallLabel !== undefined && (
                <span className={`text-[9px] ${smallLabelClassName}`}>
                  {item?.smallLabel}
                </span>
              )}{" "}
            </p>
            {selectMultiple && selected.find((x) => x.value === item.value) && (
              <IoIosCheckmark />
            )}
          </div>
        ))}
      </div>
    </CustomModal>
  );
};

export default MobileSelect;
