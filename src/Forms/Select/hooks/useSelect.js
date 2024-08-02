import { useState, useEffect, useRef } from "react";

import useWindowScreen from "../../../Utils/useWindowScreen";

const useSelect = (onChangeOption, value, selectMultiple, disabled) => {
  const parentContainerRef = useRef(null);
  const [openDropdown, setDropdown] = useState(false);
  const [selected, setSelected] = useState(value);

  const { windowWidth } = useWindowScreen();

  useEffect(() => {
    if (value.length === 0 && selectMultiple) {
      setSelected([]);
    }
  }, []);

  const id = openDropdown ? "simple-popper" : undefined;

  const handleOpenDropDown = () => {
    if (!disabled) {
      setDropdown(!openDropdown);
    }
  };

  const handleSelectedOption = (val) => {
    onChangeOption(val);
    setDropdown(false);
  };

  const handleSelectedMulitpleOption = (val) => {
    if (selected.find((x) => x.value === val.value)) {
      setSelected(selected.filter((x) => x.value !== val.value));
      onChangeOption(selected.filter((x) => x.value !== val.value));
      return;
    }
    setSelected([...selected, val]);
    onChangeOption([...selected, val]);
  };

  const handleCloseDropdown = () => {
    setDropdown(false);
  };

  const parentWidth = parentContainerRef.current
    ? parentContainerRef.current.clientWidth
    : 0;

  return {
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
  };
};

export default useSelect;
