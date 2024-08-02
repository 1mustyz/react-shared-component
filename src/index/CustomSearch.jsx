import cn from "../Utils/cn";
import { CiSearch } from "react-icons/ci";

const CustomSearch = ({
  placeholderText = "",
  className = "",
  handleChange = () => {},
}) => {
  return (
    <div
      className={cn(
        "p-2 items-center bg-[#FAFAFA] rounded flex gap-1 sm:w-full sm:text-[12px]",
        className,
      )}
    >
      <CiSearch size={18} />
      <input
        id="inputId"
        type="text"
        placeholder={placeholderText}
        onChange={handleChange}
        className="outline-none w-full bg-transparent"
      />
    </div>
  );
};

export default CustomSearch;
