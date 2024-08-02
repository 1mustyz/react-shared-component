import avartarImage from "../Assets/avatar.png";
import cn from "../Utils/cn";

const Avatar = ({ image, className }) => {
  return (
    <img
      src={image || avartarImage}
      alt="avatar"
      className={cn(
        "h-[25px] w-[25px] border-1 border-slate-200 bg-slate-400 rounded-full",
        className,
      )}
    />
  );
};

export default Avatar;
