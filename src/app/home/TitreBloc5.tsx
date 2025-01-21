import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const TitreBloc5 = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="flex flex-col max-w-[1240px] w-full items-center justify-center p-4 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#9ce7e6]/30 to-[#ffffff]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-6xl grid grid-cols-1 md:grid-cols-2 text-center justify-center items-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-primary/80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t("bloc_5.text")}
        </motion.p>
        <motion.h1
          className="text-3xl font-bold text-primary mt-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {t("bloc_5.title")}
          <span className="text-red-500">#BASIC</span>
        </motion.h1>
      </motion.div>
      <motion.div
        className="max-w-6xl rounded-lg shadow-lg mt-8 p-12 w-full"
        style={{
          backgroundImage: "url(/background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="items-center justify-center bg-white rounded-lg p-2">
          <motion.img
            className="w-full "
            height="400"
            src="/background1.png"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="p-4 flex justify-between items-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-xl font-bold">La famille</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <p className="text-gray-900 text-right">24 Sep 2024</p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
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
        <MotionReview
          bgColor="bg-[#e8bdd0]"
          imgSrc="/vocano.png"
          altText="A pear on a pink background"
          author={t("bloc_5.reviews.0.author")}
        />
        <MotionReview
          bgColor="bg-[#B4E8DC]"
          imgSrc="/cherry.png"
          altText="Two cherries on a green background"
          author={t("bloc_5.reviews.1.author")}
        />
        <MotionReview
          bgColor="bg-[#64C6F5]"
          imgSrc="/orange.png"
          altText="An orange on a blue background"
          author={t("bloc_5.reviews.2.author")}
        />
        <MotionReview
          bgColor="bg-[#65C6F5]"
          imgSrc="/haft-orange.png"
          altText="An orange on a blue background"
          author={t("bloc_5.reviews.3.author")}
        />
      </motion.div>
      <motion.p
        className="text-center text-gray-600 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {t("bloc_5.footer")}
      </motion.p>
    </motion.div>
  );
};

const MotionReview = ({
  imgSrc,
  altText,
  author,
  bgColor,
}: {
  bgColor: string;
  imgSrc: string;
  altText: string;
  author: string;
}) => (
  <motion.div
    className={`${bgColor} rounded-lg relative p-4 flex flex-col items-center justify-center overflow-hidden`}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <motion.img
      alt={altText}
      className="w-full rounded-lg"
      height="100"
      src={imgSrc}
      width="100"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    />

    <motion.p
      className="text-center h-[50px] flex items-center justify-between px-4 mt-2 absolute bottom-0 bg-[#562C2C99] w-full text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.80195 -0.000488281H14.202C17.402 -0.000488281 20.002 2.59951 20.002 5.79951V14.1995C20.002 15.7378 19.3909 17.213 18.3032 18.3007C17.2155 19.3884 15.7402 19.9995 14.202 19.9995H5.80195C2.60195 19.9995 0.00195312 17.3995 0.00195312 14.1995V5.79951C0.00195313 4.26126 0.613023 2.786 1.70073 1.69829C2.78844 0.610581 4.2637 -0.000488281 5.80195 -0.000488281ZM5.60195 1.99951C4.64717 1.99951 3.7315 2.3788 3.05637 3.05393C2.38124 3.72906 2.00195 4.64473 2.00195 5.59951V14.3995C2.00195 16.3895 3.61195 17.9995 5.60195 17.9995H14.402C15.3567 17.9995 16.2724 17.6202 16.9475 16.9451C17.6227 16.27 18.002 15.3543 18.002 14.3995V5.59951C18.002 3.60951 16.392 1.99951 14.402 1.99951H5.60195ZM15.252 3.49951C15.5835 3.49951 15.9014 3.63121 16.1358 3.86563C16.3703 4.10005 16.502 4.41799 16.502 4.74951C16.502 5.08103 16.3703 5.39897 16.1358 5.63339C15.9014 5.86782 15.5835 5.99951 15.252 5.99951C14.9204 5.99951 14.6025 5.86782 14.3681 5.63339C14.1336 5.39897 14.002 5.08103 14.002 4.74951C14.002 4.41799 14.1336 4.10005 14.3681 3.86563C14.6025 3.63121 14.9204 3.49951 15.252 3.49951ZM10.002 4.99951C11.328 4.99951 12.5998 5.5263 13.5375 6.46398C14.4752 7.40166 15.002 8.67343 15.002 9.99951C15.002 11.3256 14.4752 12.5974 13.5375 13.535C12.5998 14.4727 11.328 14.9995 10.002 14.9995C8.67587 14.9995 7.4041 14.4727 6.46642 13.535C5.52874 12.5974 5.00195 11.3256 5.00195 9.99951C5.00195 8.67343 5.52874 7.40166 6.46642 6.46398C7.4041 5.5263 8.67587 4.99951 10.002 4.99951ZM10.002 6.99951C9.2063 6.99951 8.44324 7.31558 7.88063 7.87819C7.31802 8.4408 7.00195 9.20386 7.00195 9.99951C7.00195 10.7952 7.31802 11.5582 7.88063 12.1208C8.44324 12.6834 9.2063 12.9995 10.002 12.9995C10.7976 12.9995 11.5607 12.6834 12.1233 12.1208C12.6859 11.5582 13.002 10.7952 13.002 9.99951C13.002 9.20386 12.6859 8.4408 12.1233 7.87819C11.5607 7.31558 10.7976 6.99951 10.002 6.99951Z"
          fill="white"
        />
      </svg>

      {author}

      <svg
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.7504 1V10.75C13.7504 10.9489 13.6714 11.1397 13.5307 11.2803C13.3901 11.421 13.1993 11.5 13.0004 11.5C12.8015 11.5 12.6107 11.421 12.4701 11.2803C12.3294 11.1397 12.2504 10.9489 12.2504 10.75V2.81031L1.53104 13.5306C1.39031 13.6714 1.19944 13.7504 1.00042 13.7504C0.801394 13.7504 0.610523 13.6714 0.469792 13.5306C0.329062 13.3899 0.25 13.199 0.25 13C0.25 12.801 0.329062 12.6101 0.469792 12.4694L11.1901 1.75H3.25042C3.0515 1.75 2.86074 1.67098 2.72009 1.53033C2.57943 1.38968 2.50042 1.19891 2.50042 1C2.50042 0.801088 2.57943 0.610322 2.72009 0.46967C2.86074 0.329018 3.0515 0.25 3.25042 0.25H13.0004C13.1993 0.25 13.3901 0.329018 13.5307 0.46967C13.6714 0.610322 13.7504 0.801088 13.7504 1Z"
          fill="white"
        />
      </svg>
    </motion.p>
  </motion.div>
);

export default TitreBloc5;
