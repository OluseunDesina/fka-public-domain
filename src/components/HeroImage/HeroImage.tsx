import React, { type ReactNode } from "react";

interface HeroImageProps {
  title?: string;
  imageLink: string;
  children?: ReactNode;
}
const HeroImage = ({ title, children, imageLink }: HeroImageProps) => {
  const style = {
    background: `url("${imageLink}")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "450px",
    width: "100%",
  };
  return (
    <>
      <div style={style} className="relative rounded overflow-hidden">
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-[40px] font-medium drop-shadow-lg">{title}</p>
          {children}
        </div>
      </div>
    </>
  );
};

export default HeroImage;
