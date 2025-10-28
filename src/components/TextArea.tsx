import React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
interface TextAreaProps {
  name?: string;
  placeholder: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  register?: UseFormRegisterReturn;
}

function TextArea(props: TextAreaProps) {
  const { name, placeholder, className, onChange, register } = props;
  return (
    <textarea
      className={`p-3 lg:p-5 min-h-[200px] bg-white rounded-3xl text-black outline-none w-full ${className} `}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      {...register}
    />
  );
}

export default TextArea;
