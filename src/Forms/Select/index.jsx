import Proptypes from "prop-types";

import DesktopSelect from "./components/DesktopSelect";
import MobileSelect from "./components/MobileSelect";
import SelectScreen from "./components/SelectScreen";
import useSelect from "./hooks/useSelect";
import cn from "../../Utils/cn";

const Select = ({
  data,
  value = { label: "Select", value: "null" },
  onChangeOption = () => {},
  className = "",
  optionClass = "",
  dropdownTitleClass = "",
  mainContainerStyle = "",
  trimtext = false,
  withLabel = true,
  label = "",
  labelClass = "",
  smallLabelClassName = "",
  trimLength = 10,
  disabled = false,
  isLoading,
  selectMultiple = false,
}) => {
  const {
    windowWidth,
    id,
    openDropdown,
    handleCloseDropdown,
    parentWidth,
    handleOpenDropDown,
    handleSelectedOption,
    handleSelectedMulitpleOption,
    selected,
    parentContainerRef,
  } = useSelect(onChangeOption, value, selectMultiple, disabled);

  return (
    <div
      className={cn("text-[14px] ", mainContainerStyle)}
      ref={parentContainerRef}
    >
      {withLabel && (
        <label htmlFor="inputId" className={cn("sm:text-[12px]", labelClass)}>
          {label}
        </label>
      )}
      <SelectScreen
        className={className}
        handleOpenDropDown={handleOpenDropDown}
        dropdownTitleClass={dropdownTitleClass}
        disabled={disabled}
        isLoading={isLoading}
        value={value}
        trimLength={trimLength}
        trimText={trimtext}
        handleSelectedMulitpleOption={handleSelectedMulitpleOption}
        label={label}
      />

      {!isLoading && windowWidth > 639 && (
        <DesktopSelect
          optionClass={optionClass}
          labelClass={labelClass}
          smallLabelClassName={smallLabelClassName}
          selectMultiple={selectMultiple}
          id={id}
          openDropdown={openDropdown}
          handleCloseDropdown={handleCloseDropdown}
          parentWidth={parentWidth}
          handleSelectedMulitpleOption={handleSelectedMulitpleOption}
          handleSelectedOption={handleSelectedOption}
          data={data}
          selected={selected}
        />
      )}

      {windowWidth <= 639 && !isLoading && (
        <MobileSelect
          smallLabelClassName={smallLabelClassName}
          selectMultiple={selectMultiple}
          openDropdown={openDropdown}
          parentWidth={parentWidth}
          handleSelectedMulitpleOption={handleSelectedMulitpleOption}
          handleSelectedOption={handleSelectedOption}
          data={data}
          selected={selected}
          handleCloseDropdown={handleCloseDropdown}
        />
      )}
    </div>
  );
};

export default Select;

Select.proptype = {
  data: Proptypes.arrayOf({
    value: Proptypes.string.isRequired,
    label: Proptypes.string.isRequired,
  }).isRequired,
  value: Proptypes.string.isRequired,
  onChangeOption: Proptypes.func.isRequired,
};
