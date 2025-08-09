import type { ReactNode } from "react";

interface ButtonProps {
  inputClass?: string;
  children: ReactNode; // This allows string, JSX, component, etc.
}

const Button = ({ inputClass, children }: ButtonProps) => {
  const baseClass = "bg-[#3C6D59] text-white px-8 py-2 rounded";
  const className = [baseClass, inputClass].filter(Boolean).join(" ");
  return <button className={className}>{children}</button>;
};

export default Button;
