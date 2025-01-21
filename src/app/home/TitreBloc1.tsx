// Start of Selection
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import Title from "@/components/title";

const TitreBloc1 = () => {
  const { t } = useTranslation("common");
  return (
    <div className="max-w-[1240px] w-full  py-8 ">
      <Title title={t("bloc_1.title")} />
      <h2 className="text-center text-xl text-brown mt-2">
        {t("bloc_1.subtitle")}
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap mt-16 gap-6 justify-center items-center ">
        <motion.div
          className="max-w-xs mb-8"
          initial={{ opacity: 0, x: -20 }} // Changed y to x for left entrance
          animate={{ opacity: 1, x: 0 }} // Changed y to x for left entrance
          transition={{ duration: 0.5 }}
        >
          <TitleItem
            img="/title1.png"
            category={t("bloc_1.cases.0.category")}
            title={t("bloc_1.cases.0.tagline")}
            description={t("bloc_1.cases.0.description")}
            cta={t("bloc_1.cases.0.cta")}
          />
        </motion.div>
        <motion.div
          className="max-w-xs mb-8 mt-0 lg:-mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TitleItem
            img="/title2.png"
            category={t("bloc_1.cases.1.category")}
            title={t("bloc_1.cases.1.tagline")}
            description={t("bloc_1.cases.1.description")}
            cta={t("bloc_1.cases.1.cta")}
          />
        </motion.div>
        <motion.div
          className="max-w-xs mb-8"
          initial={{ opacity: 0, x: 20 }} // Changed y to x for left entrance
          animate={{ opacity: 1, x: 0 }} // Changed y to x for left entrance
          transition={{ duration: 0.5 }}
        >
          <TitleItem
            img="/title3.png"
            category={t("bloc_1.cases.2.category")}
            title={t("bloc_1.cases.2.tagline")}
            description={t("bloc_1.cases.2.description")}
            cta={t("bloc_1.cases.2.cta")}
          />
        </motion.div>
      </div>
    </div>
  );
};
const TitleItem = ({
  img,
  category,
  title,
  description,
  cta,
}: {
  img: string;
  category: string;
  title: string;
  description: string;
  cta: string;
}) => {
  return (
    <>
      {/* // Start of Selection */}
      <Image
        alt="A row of fresh lemons on a white background"
        className="w-full rounded-lg shadow-md"
        height={397}
        src={img}
        width={397}
      />
      <div className="mt-4 flex flex-col gap-4">
        <h3 className="text-orange font-medium text-[20px]">{category}</h3>
        <h4 className="text-xl font-semibold text-brown ">{title}</h4>
        <p className="text-brown/80 text-[18px] ">{description}</p>
        {/* // Start of Selection // Start of Selection */}
        <div className="flex items-center">
          <button className="mt-2 group/button relative overflow-hidden rounded-md border border-red-500/20 bg-white px-4 py-2 text-xs font-medium text-red-500 transition-all duration-150 hover:border-red-500 active:scale-95">
            <span className="absolute bottom-0 left-0 z-0 h-0 w-full bg-gradient-to-t from-red-600 to-red-500 transition-all duration-500 group-hover/button:h-full" />
            <span className="relative z-10 transition-all duration-500 group-hover/button:text-white">
              {cta}
              <i className="fas fa-arrow-right ml-2"></i>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default TitreBloc1;
