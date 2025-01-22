"use client";
import Header from "./home/Header";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const TitreBloc1 = dynamic(() => import("./home/TitreBloc1"), { ssr: false });
const TitreBloc2 = dynamic(() => import("./home/TitreBloc2"), { ssr: false });
const TitreBloc3 = dynamic(() => import("./home/TitreBloc3"), { ssr: false });
const TitreBloc4 = dynamic(() => import("./home/TitreBloc4"), { ssr: false });
const TitreBloc5 = dynamic(() => import("./home/TitreBloc5"), { ssr: false });
const TitreBloc6 = dynamic(() => import("./home/TitreBloc6"), { ssr: false });
const Footer = dynamic(() => import("./home/Footer"), { ssr: false });
const Actitvity = dynamic(() => import("./home/Actitvity"), { ssr: false });
import "@/i18n";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const middleOfPage = window.innerHeight / 2;
      setShowButton(window.scrollY >= middleOfPage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <TitreBloc1 />
        <TitreBloc2 />
        <Actitvity />
        <TitreBloc3 />
        <TitreBloc4 />
        <TitreBloc5 />
        <TitreBloc6 />
      </div>
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 h-10 w-10 bg-orange text-white rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ↑
        </motion.button>
      )}
      <Footer />
    </div>
  );
}
