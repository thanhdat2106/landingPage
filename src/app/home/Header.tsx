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
import { ArrowRight } from "lucide-react";

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
      <header className="bg-[#562C2C] opacity-70 backdrop-invert-0 text-white relative z-10">
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
            <button className="flex items-center gap-2 bg-orange text-white text-sm px-4 py-2 rounded">
              {t("head_menu.4")}
              <ArrowRight width={16} height={16} />
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
          <button className="">
            <Connect width={56} height={56} />
          </button>
        </div>
      </main>
    </>
  );
};

export default Header;
