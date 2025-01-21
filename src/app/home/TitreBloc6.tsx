// Start of Selection
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const TitreBloc6 = () => {
  const { t } = useTranslation("common");
  return (
    <motion.div
      className="flex flex-col max-w-[1240px] w-full items-center justify-center text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative w-full"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-x-0 top-0 flex flex-col items-center justify-center pt-20"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl font-bold text-brown"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t("bloc_6.title")}
          </motion.h1>
          <motion.h2
            className="text-2xl text-brown/80 mt-2"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {t("bloc_6.subtitle")}
          </motion.h2>
          <motion.p
            className="text-primary mt-4 max-w-md mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t("bloc_6.text")}
          </motion.p>
          <button className="m-9 animate-buttonheartbeat rounded-md bg-orange px-4 py-1 text-sm font-semibold text-white">
            {t("bloc_6.button")}
          </button>
        </motion.div>
        <motion.img
          alt="A colorful assortment of fruits and vegetables, including strawberries, oranges, and rhubarb, arranged artistically"
          className="w-full h-[400px]"
          style={{ objectFit: "cover" }}
          src="\Maskgroup.png"
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </motion.div>
  );
};

export default TitreBloc6;
