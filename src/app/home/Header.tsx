// Start of Selection
"use client";
import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import { motion } from "motion/react";
import FranceFlag from "@/components/svgs/franceFlag";
import EnglishFlag from "@/components/svgs/englishFlag";
import Mountain from "@/components/svgs/mountain";
import Crosshair from "@/components/svgs/crosshair";
import Fishing from "@/components/svgs/fishing";
import Connect from "@/components/svgs/connect";

const Header = () => {
  const { t, i18n } = useTranslation("common");
  const [language, setLanguage] = useState("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "fr" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage); // Update i18n language
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle mobile menu
  };

  const menuItemVariants = {
    hover: {
      backgroundColor: "#FF9800",
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <header className="bg-[#562C2C] bg-opacity-70 bg-backdrop-invert-0 text-white z-50 fixed top-0 left-0 w-full">
        <div className="relative mx-auto flex md:flex-row justify-between items-center py-4 px-6 max-w-[1240px]">
          <div className="text-sm font-bold mb-2 md:mb-0">LOGO SAMPLE</div>
          <button onClick={toggleMenu} className="md:hidden flex">
            <i
              className={`fas fa-${isMenuOpen ? "times" : "bars"} text-xl`}
            ></i>{" "}
            {/* Mobile menu icon */}
          </button>
          <nav className={`space-x-4 mb-2 md:mb-0 hidden md:flex`}>
            <motion.a
              className="text-sm px-2 py-1 rounded"
              href="#"
              variants={menuItemVariants}
              whileHover="hover"
            >
              {t("head_menu.0")}
            </motion.a>
            <motion.a
              className="text-sm px-2 py-1 rounded"
              href="#"
              variants={menuItemVariants}
              whileHover="hover"
            >
              {t("head_menu.1")}
            </motion.a>
            <motion.a
              className="text-sm px-2 py-1 rounded"
              href="#"
              variants={menuItemVariants}
              whileHover="hover"
            >
              {t("head_menu.2")}
            </motion.a>
            <motion.a
              className="text-sm px-2 py-1 rounded"
              href="#"
              variants={menuItemVariants}
              whileHover="hover"
            >
              {t("head_menu.3")}
            </motion.a>
          </nav>
          <div className={`items-center space-x-4 hidden md:flex`}>
            <Mountain />
            <Fishing />
            <Crosshair />
            {/* <button className="flex items-center gap-2 bg-orange text-white text-sm px-4 py-2 rounded">
            {t("head_menu.4")}
              <ArrowRight width={16} height={16} />
            </button> */}
            <button className="group/button relative inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-orange font-medium text-white transition-all duration-300 hover:w-32">
              <p className="inline-flex whitespace-nowrap text-sm opacity-0 transition-all duration-200 group-hover/button:-translate-x-2.5 group-hover/button:opacity-100">
                {t("head_menu.4")}
              </p>
              <div className="absolute right-1.5">
                <svg
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 fill-white"
                >
                  <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"></path>
                </svg>
              </div>
            </button>
            <button onClick={toggleLanguage} className="text-sm">
              {language === "en" ? (
                <>
                  <span
                    role="img"
                    aria-label="French flag"
                    className="flex items-center gap-1"
                  >
                    <FranceFlag />
                    FR
                  </span>
                </>
              ) : (
                <>
                  <span
                    role="img"
                    aria-label="English flag"
                    className="flex items-center gap-1"
                  >
                    <EnglishFlag />
                    EN
                  </span>
                </>
              )}
            </button>
          </div>
          {isMenuOpen && (
            <motion.div
              className="absolute top-full left-0 bg-gray-800 text-white w-full py-2 z-20 backdrop-blur-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-start justify-start px-4 gap-2">
                <motion.a
                  className="text-sm px-2 py-1 rounded w-full"
                  href="#"
                  variants={menuItemVariants}
                  whileHover="hover"
                >
                  {t("head_menu.0")}
                </motion.a>
                <motion.a
                  className="text-sm px-2 py-1 rounded w-full"
                  href="#"
                  variants={menuItemVariants}
                  whileHover="hover"
                >
                  {t("head_menu.1")}
                </motion.a>
                <motion.a
                  className="text-sm px-2 py-1 rounded w-full"
                  href="#"
                  variants={menuItemVariants}
                  whileHover="hover"
                >
                  {t("head_menu.2")}
                </motion.a>
                <motion.a
                  className="text-sm px-2 py-1 rounded w-full"
                  href="#"
                  variants={menuItemVariants}
                  whileHover="hover"
                >
                  {t("head_menu.3")}
                </motion.a>
                <Mountain />
                <Fishing />
                <Crosshair />
                <button
                  onClick={toggleLanguage}
                  className="text-sm flex items-center text-orange"
                >
                  {language === "en" ? (
                    <>
                      <span
                        role="img"
                        aria-label="French flag"
                        className="flex items-center gap-1"
                      >
                        <FranceFlag />
                        FR
                      </span>
                    </>
                  ) : (
                    <>
                      <span
                        role="img"
                        aria-label="English flag"
                        className="flex items-center gap-1"
                      >
                        <EnglishFlag />
                        EN
                      </span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </header>
      <main className="relative -mt-[70px]">
        {/* // Start of Selection */}
        <Image
          alt="A table with blueberries, raspberries in a white bowl, and a bowl of yogurt with mango chunks"
          className="w-full object-cover h-[600px]"
          src="/background2.png"
          width={1920}
          height={1080}
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-12 flex flex-col justify-end">
          <div className="container mx-auto flex justify-around py-8">
            <div className="text-center text-white flex flex-col items-center">
              <Mountain width={36} height={36} />
            </div>
            <div className="text-center text-white flex flex-col items-center">
              <Fishing width={36} height={36} />
            </div>
            <div className="text-center text-white flex flex-col items-center">
              <Crosshair width={36} height={36} />
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4">
          {/* <button className="">
            <Connect width={56} height={56} />
          </button> */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Connect width={56} height={56} />
          </motion.button>
        </div>
      </main>
    </>
  );
};

export default Header;
