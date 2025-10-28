interface ButtonProps {
  label: string;
  variant?: "blue" | "white";
  icon?: React.ReactNode;
  className?: string;
  type?: "submit" | "button";
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const {
    label,
    variant = "blue",
    icon,
    className = "",
    type = "button",
    onClick,
  } = props;
  return (
    <button
      type={type}
      className={`py-3 px-6 lg:px-8 lg:py-4 -${variant} ${className}`}
      onClick={onClick}
    >
      {icon && (
        <span>
          <div> icon </div>
        </span>
      )}
      <span>{label}</span>
    </button>
  );
}
