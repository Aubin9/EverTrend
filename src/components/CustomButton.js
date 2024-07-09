import React from "react";
import "../index.css";

const CustomButton = (props) => {
  const {
    text,
    onClick,
    variant = "primary",
    disabled = false,
    className = "",
    ...otherProps
  } = props;

  const buttonClasses = `btn btn-${variant} ${
    disabled ? "disabled" : ""
  } ${className}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...otherProps}
    >
      {text}
    </button>
  );
};

export default CustomButton;
