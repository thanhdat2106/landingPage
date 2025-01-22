import React from "react";
import { motion } from "motion/react";

type Props = {
  title: string;
  className?: string;
};

const Title = ({ title, className }: Props) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <motion.div
        className="h-[1px] bg-[#BBBBBB] transform translate-y-1/2 w-full md:block hidden"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.h1
        className="flex-grow-1 text-center text-3xl font-bold text-orange relative w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.div
        className="h-[1px] bg-[#BBBBBB] transform translate-y-1/2 w-full md:block hidden"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </div>
  );
};

export default Title;
