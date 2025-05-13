import React, { type ReactNode } from "react";
interface SectionProps {
  inputClass?: string;
  children: ReactNode;
}

const SectionTitle = ({ children }: SectionProps) => {
  return (
    <h2 className="text-[48px] font-semibold text-[#3C6D59] text-center">
      {children}
    </h2>
  );
};

export default SectionTitle;
