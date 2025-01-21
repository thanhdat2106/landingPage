"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/components/ui/carousel";
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const Item = ({
  title,
  subtitle,
  image,
  description,
}: {
  title: string;
  subtitle: string;
  image: string;
  description: string;
}) => {
  return (
    <motion.div
      className="bg-white  rounded-lg overflow-hidden " // Fixed width of 300px
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.img
        alt="A table with various colorful drinks and fruits"
        className="w-full h-80 object-cover"
        height={400}
        width={600}
        src={image}
        initial={{ scale: 1.05, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="p-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-orange font-medium text-lg"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <motion.h3
          className="text-[#222222] font-bold truncate text-xl"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.h3>
        <motion.p
          className="text-brown/80 mt-2 h-20 border-l-[1px] border-[#BBBBBB] pl-4 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const Titrebloc_3 = () => {
  const { t } = useTranslation("common");

  return (
    <motion.div
      className="max-w-[1240px] w-full p-4 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex justify-between items-center mb-8"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-3xl font-bold text-orange "
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t("bloc_3.title")}
        </motion.h1>
        <motion.a
          className="text-gray-500 flex items-center"
          href="#"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t("bloc_3.more_info")}
          <i className="fas fa-arrow-right ml-2"></i>
        </motion.a>
      </motion.div>
      <motion.div
        className="relative px-4 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Carousel>
          <CarouselContent className="-ml-2">
            <CarouselItem className="sm:w-full md:w-1/3 pl-2">
              <Item
                title={t("bloc_3.cases.0.category")}
                subtitle={t("bloc_3.cases.0.tagline")}
                image="/slide1.png"
                description={t("bloc_3.cases.0.description")}
              />
            </CarouselItem>
            <CarouselItem className="sm:w-full md:w-1/3 pl-2">
              <Item
                title={t("bloc_3.cases.1.category")}
                subtitle={t("bloc_3.cases.1.tagline")}
                image="/slide2.png"
                description={t("bloc_3.cases.1.description")}
              />
            </CarouselItem>
            <CarouselItem className="sm:w-full md:w-1/3 pl-2">
              <Item
                title={t("bloc_3.cases.2.category")}
                subtitle={t("bloc_3.cases.2.tagline")}
                image="/slide3.png"
                description={t("bloc_3.cases.2.description")}
              />
            </CarouselItem>
            <CarouselItem className="sm:w-full md:w-1/3 pl-2">
              <Item
                title={t("bloc_3.cases.3.category")}
                subtitle={t("bloc_3.cases.3.tagline")}
                image="/slide4.png"
                description={t("bloc_3.cases.3.description")}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselNavigation alwaysShow />
        </Carousel>
      </motion.div>
    </motion.div>
  );
};

export default Titrebloc_3;
