import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <motion.footer
      className="bg-[#4A1E1E] text-white py-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-[1240px] w-full px-4 mx-auto">
        <motion.div
          className="flex flex-wrap justify-between text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-full md:w-1/4 mb-4 md:mb-0"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p>{t("footer.address.name")}</p>
            <p>{t("footer.address.phone")}</p>
            <p>{t("footer.address.location")}</p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/4 mb-4 md:mb-0"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>{t("footer.links.0.name")}</p>
            <p>{t("footer.links.1.name")}</p>
            <p>{t("footer.links.2.name")}</p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/4 mb-4 md:mb-0"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>{t("footer.links.3.name")}</p>
            <p>{t("footer.links.4.name")}</p>
            <p>{t("footer.links.5.name")}</p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/4 mb-4 md:mb-0"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p>{t("footer.links.6.name")}</p>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full h-[1px] bg-white my-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="flex justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p>© BASC 2024</p>
          <div className="flex space-x-4">
            <motion.a
              href="#"
              className="text-white bg-red-500 rounded-full w-10 h-10 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-facebook-f"></i>
            </motion.a>
            <motion.a
              href="#"
              className="text-white bg-red-500 rounded-full w-10 h-10 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-twitter"></i>
            </motion.a>
            <motion.a
              href="#"
              className="text-white bg-red-500 rounded-full w-10 h-10 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-youtube"></i>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
