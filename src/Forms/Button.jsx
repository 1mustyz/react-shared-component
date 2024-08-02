import { CircularProgress } from "@mui/material";
import cn from "../Utils/cn";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "flex gap-2 items-center justify-center hover:bg-opacity-[0.7] px-2 py-1 rounded-sm",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        outline: "bg-white text-[black] border-1 border-primary",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

const Button = ({
  title = "",
  className = "",
  Icon,
  isLoading = false,
  handleSubmit = () => {},
  disabled = false,
  variant = "default",
}) => {
  return (
    <button
      disabled={isLoading || disabled}
      type="button"
      onClick={handleSubmit}
      className={cn(
        buttonVariants({ variant, className }),
        `${(isLoading || disabled) && "bg-opacity-[0.7]"}`,
      )}
    >
      {Icon && Icon}
      {!isLoading ? <div>{title}</div> : <CircularProgress size={24} />}
    </button>
  );
};

export default Button;
