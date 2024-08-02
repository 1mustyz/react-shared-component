import { CircularProgress } from "@mui/material";

import { useField } from "formik";
import cn from "Utils/cn";

const Input = ({
  className = "",
  inputStyle = "",
  placeholder = "",
  labelStyle = "",
  withTitle = false,
  withAsterik = false,
  title = "",
  type = "text",
  name = "",
  showError = "true",
  disabled = false,
}) => {
  const [field, meta] = useField(name);

  return (
    <div
      className={cn(
        "flex flex-col w-full text-[14px] font-thin",
        className,
        disabled && "opacity-80"
      )}
    >
      {withTitle && (
        <p className={cn("sm:text-[12px] ", labelStyle)}>
          {title}{" "}
          {withAsterik && <span className="font-bold text-[red]">*</span>}
        </p>
      )}
      <div className="w-full">
        <input
          disabled={disabled}
          className={cn(
            "border-1 font-thin focus:outline-none sm:text-[12px] disabled:opacity-80 disabled:cursor-not-allowed w-full px-3 py-[9px]",
            inputStyle,
            meta.error && meta.touched ? "border-[red]" : "border-input"
          )}
          placeholder={placeholder}
          type={type}
          name={name}
          {...field}
        />
        {showError && meta.error && meta.touched && (
          <p className="text-[11px] text-[red]">{meta.error}</p>
        )}
      </div>
    </div>
  );
};

export const InputNoFormik = ({
  className = "",
  inputStyle = "",
  placeholder = "",
  withTitle = false,
  withAsterik = false,
  labelStyle = "",
  title = "",
  type = "text",
  handleChange = () => {},
  value,
  showError = false,
  error = "",
  touched = "",
  name = "",
  disabled = false,
  isLoading = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex flex-col w-full text-[14px]",
        disabled && " opacity-80",
        className
      )}
    >
      {withTitle && (
        <p className={cn("sm:text-[12px] ", labelStyle)}>
          {title}{" "}
          {withAsterik && <span className="font-bold text-[red]">*</span>}
        </p>
      )}
      <div
        className={cn(
          "border-1 focus:outline-none w-full border-input  sm:text-[12px] flex justify-between items-center px-3",
          `${error && touched && "border-[red]"}`,
          inputStyle
        )}
      >
        <input
          className={cn(
            "focus:outline-none w-full  disabled:opacity-80 disabled:cursor-not-allowed  py-[9px]"
          )}
          name={name}
          placeholder={placeholder}
          type={type}
          onChange={handleChange}
          value={value}
          disabled={disabled || isLoading}
          {...props}
        />
        {isLoading && <CircularProgress size={14} />}
      </div>
      {showError && error && touched && (
        <p className="text-[11px] text-[red]">{error}</p>
      )}
    </div>
  );
};

export default Input;
