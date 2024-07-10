import React from "react";
import "../index.css";
import { FaShoppingCart } from "react-icons/fa";

const CustomButton = (props) => {
  const {
    text,
    onClick,
    variant = "primary",
    disabled = false,
    className = "",
    icon,
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
      {icon ? <FaShoppingCart /> : ""}
      {icon}
    </button>
  );
};

export default CustomButton;
