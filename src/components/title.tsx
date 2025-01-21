import React from "react";

type Props = {
  title: string;
  className?: string;
};

const Title = ({ title, className }: Props) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className=" h-[1px] bg-[#BBBBBB] transform translate-y-1/2 w-full md:block hidden  "></div>
      <h1 className="flex-grow-1 text-center text-3xl font-bold text-orange relative  w-full">
        {title}
      </h1>
      <div className="h-[1px] bg-[#BBBBBB] transform translate-y-1/2 w-full md:block hidden "></div>
    </div>
  );
};

export default Title;
