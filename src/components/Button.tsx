import Arrow from "../icons/Arrow";

interface ButtonProps {
  label: string;
  variant?: "blue" | "white";
  icon?: React.ReactNode;
  className?: string;
  type?: "submit" | "button";
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { label, className = "", type = "button", onClick } = props;
  return (
    <button
      type={type}
      className={`py-3 px-6 pr-4 flex items-center gap-3 bg-primary w-fit rounded-full cursor-pointer ${className}`}
      onClick={onClick}
    >
      <span className="font-semibold text-white">{label}</span>
      <Arrow className="w-10 lg:w-[70px] h-auto  " />
    </button>
  );
}
