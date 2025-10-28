import React from "react";
interface TextAreaProps {
  name: string;
  placeholder: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextArea(props: TextAreaProps) {
  const { name, placeholder, className, onChange } = props;
  return (
    <textarea
      className={`p-3 lg:p-5 min-h-[200px] ${className} `}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default TextArea;
