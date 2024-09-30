import React from "react";
import classNames from "classnames";

const Button = ({
  title,
  size = "sm || md",
  variant = "primary",
  ...props
}) => (
  <button
    className={classNames(
      "inline-flex items-center justify-center w-auto font-medium  shadow focus:outline-none disabled:opacity-50",
      {
        "py-2 px-10 text-sm font-normal ": size === "sm",
        "py-3 px-20 md:px-24  text-lg lg:text-xl font-medium": size === "md",
        " bg-[#1A362B] hover:text-[#1A362B] lg:text-[#FCE600] rounded-full hover:bg-[#FCE600]":
          variant === "primary",
      }
    )}
    {...props}
  >
    {title}
  </button>
);

export default Button;
