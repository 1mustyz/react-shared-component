/* eslint-disable no-unneeded-ternary */
import logo from "Assets/logo.png";
import cn from "../Utils/cn";

const Logo = ({ className = "", image = null }) => {
  return (
    <img
      className={cn(
        "h-[60px] w-[150px]",
        `${image && "h-[60px] w-[70px]"}`,
        className,
      )}
      src={image ? image : logo}
      alt=""
      srcSet=""
    />
  );
};

export default Logo;
