import React from "react";
interface InputProps {
  type?: "text" | "password";
  name: string;
  placeholder: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: InputProps) {
  const { name, type = "text", placeholder, className = "", onChange } = props;
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={` p-3 lg:p-5 ${className} `}
    />
  );
}

export default Input;
