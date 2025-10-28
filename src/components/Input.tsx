import React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
interface InputProps {
  type?: "text" | "password";
  name?: string;
  placeholder: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegisterReturn;
}

function Input(props: InputProps) {
  const {
    name,
    type = "text",
    placeholder,
    className = "",
    onChange,
    register,
  } = props;
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      {...register}
      className={` p-3 lg:p-5 bg-white rounded-full text-black outline-none w-full ${className} `}
    />
  );
}

export default Input;
