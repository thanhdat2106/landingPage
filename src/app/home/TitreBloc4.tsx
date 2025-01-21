// Start of Selection
import Ball from "@/components/svgs/ball";
import Check from "@/components/svgs/check";
import Hand from "@/components/svgs/hand";
import Person from "@/components/svgs/person";
import Smile from "@/components/svgs/smile";
import Tree from "@/components/svgs/tree";
import { motion } from "motion/react";
import React from "react";
import { useTranslation } from "react-i18next";

const TitreBloc4 = () => {
  const { t } = useTranslation("common");
  return (
    <motion.div
      className="max-w-[1240px] w-full px-4 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative flex flex-col md:flex-row"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="md:w-1/2 z-10 p-6  bg-image-mobile"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 md:p-0 backdrop-blur-sm bg-opacity-60 rounded-md items-start">
            <Tree />
            <h1 className="text-red-500 text-3xl font-bold">
              {t("bloc_4.title")}{" "}
              <span className="text-red-500/80 text-3xl font-bold">
                {t("bloc_4.subtitle")}
              </span>
            </h1>

            <div className="flex items-start gap-2 md:gap-12 mt-4">
              <div className="w-[2px] h-6 bg-[#BBBBBB]  md:w-[100px] md:h-[2px] md:mt-3 "></div>
              <div>
                <h3 className="text-brown text-xl font-bold ">
                  {t("bloc_4.text_title")}
                </h3>
                <p className="text-brown/80 mt-2">{t("bloc_4.text")}</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 md:pl-8 relative"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.img
            alt="Hand holding an ice cream cone with pink ice cream"
            className="rounded-lg w-full md:block hidden"
            src="/cream.png"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-wrap justify-center mt-6"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        viewport={{ once: true }}
      >
        <Item
          title={t("bloc_4.pictos.0.title")}
          description={t("bloc_4.pictos.0.description")}
          icon={<Check />}
        />
        <Item
          title={t("bloc_4.pictos.1.title")}
          description={t("bloc_4.pictos.1.description")}
          icon={<Hand />}
        />
        <Item
          title={t("bloc_4.pictos.2.title")}
          description={t("bloc_4.pictos.2.description")}
          icon={<Ball />}
        />
        <Item
          title={t("bloc_4.pictos.3.title")}
          description={t("bloc_4.pictos.3.description")}
          icon={<Person />}
        />
        <Item
          title={t("bloc_4.pictos.4.title")}
          description={t("bloc_4.pictos.4.description")}
          icon={<Smile />}
        />
      </motion.div>
    </motion.div>
  );
};

const Item = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <motion.div
      className="w-1/2 md:w-1/5 text-center p-4 flex flex-col items-center"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="rounded-full bg-[#0E9594] w-12 h-12 flex items-center justify-center">
        {icon}
      </div>
      <h4 className="text-primary text-lg font-bold mt-2">{title}</h4>
      <p className="text-primary/80">{description}</p>
    </motion.div>
  );
};

export default TitreBloc4;
