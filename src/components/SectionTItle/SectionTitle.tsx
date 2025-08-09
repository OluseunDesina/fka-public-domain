import React, { type ReactNode } from "react";
interface SectionProps {
  inputClass?: string;
  children: ReactNode;
}

const SectionTitle = ({ children, inputClass }: SectionProps) => {
  const baseClass = "text-[48px] font-semibold text-[#3C6D59] text-center";
  const className = [baseClass, inputClass].filter(Boolean).join(" ");
  return <h2 className={className}>{children}</h2>;
};

export default SectionTitle;
