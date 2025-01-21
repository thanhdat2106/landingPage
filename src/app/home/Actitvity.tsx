"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { getDaysInMonth, cn } from "@/lib/utils";
import Button from "@/components/ui/button";

const initialSelectedDates = ["28", "29", "4"];

// Thêm interface và mảng cấu hình cho các nút công cụ
interface ToolbarButton {
  icon: string;
  action?: () => void;
}

const toolbarButtons: ToolbarButton[] = [
  { icon: "fa-heading" },
  { icon: "fa-bold" },
  { icon: "fa-italic" },
  { icon: "fa-underline" },
  { icon: "fa-list-ul" },
  { icon: "fa-list-ol" },
  { icon: "fa-align-left" },
  { icon: "fa-align-center" },
  { icon: "fa-align-right" },
  { icon: "fa-link" },
  { icon: "fa-image" },
  { icon: "fa-paperclip" },
];

// Component cho nút công cụ
const ToolbarButton = ({ icon, action }: ToolbarButton) => (
  <motion.button
    className="text-gray-500 hover:text-gray-700 p-1 md:p-2"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={action}
  >
    <i className={`fas ${icon} text-xs md:text-base`}></i>
  </motion.button>
);

const ItemDate = ({
  day,
  status,
  onClick,
}: {
  day: number;
  status: boolean;
  onClick: (value: string) => void;
}) => {
  const { t, i18n } = useTranslation();

  return (
    <motion.div
      className={cn(
        "py-2 cursor-pointer border rounded-lg",
        status
          ? "text-red-500 border-red-500 bg-[#FFF4F1]"
          : "text-gray-400 border-gray-300"
      )}
      onClick={() => onClick(day.toString())}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {day}
      <br />
      <span className="text-sm hidden md:block">
        {status
          ? t(`${i18n.language}.status.busy`)
          : t(`${i18n.language}.status.free`)}
      </span>
    </motion.div>
  );
};
const Actitvity = () => {
  const { t, i18n } = useTranslation();
  const [selectedDates, setSelectedDates] =
    useState<string[]>(initialSelectedDates);
  const [currentMonth, setCurrentMonth] = useState<number>(1); // Default to January
  const [currentYear, setCurrentYear] = useState<number>(2025); // Default to 2025
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

  // Thêm state cho form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  // Hàm validate email
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Hàm xử lý thay đổi input
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Xóa lỗi khi người dùng bắt đầu gõ
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Hàm xử lý clear form
  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setErrors({
      name: "",
      email: "",
    });
  };

  // Hàm xử lý submit form
  const handleSubmit = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = t(`${i18n.language}.validation.nameRequired`);
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = t(`${i18n.language}.validation.emailRequired`);
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t(`${i18n.language}.validation.emailInvalid`);
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      // Xử lý gửi form ở đây
      console.log("Form submitted:", formData);
      handleClear();
    }
  };

  // Function to save selected dates
  const saveSelectedDates = (value: string) => {
    if (selectedDates.includes(value)) {
      setSelectedDates((preselectedDates) =>
        preselectedDates?.filter((date) => date !== value)
      );
    } else {
      setSelectedDates((preselectedDates) => [...preselectedDates, value]);
    }
  };

  // Function to change month
  const changeMonth = (increment: number) => {
    const newDate = new Date(currentYear, currentMonth - 1 + increment);
    setCurrentMonth(newDate.getMonth() + 1);
    setCurrentYear(newDate.getFullYear());
  };

  return (
    <motion.div
      className="max-w-[1240px] w-full px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex justify-center items-center mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-[1px] bg-orange-600 transform translate-y-1/2 w-full"></div>
        <h1 className="flex-grow-1 text-center text-3xl font-bold text-orange-600 relative w-full">
          {t("bloc_2_2.title")}
        </h1>
        <div className="h-[1px] bg-orange-600 transform translate-y-1/2 w-full"></div>
      </motion.div>

      <motion.div
        className="bg-white p-6 rounded-lg border border-gray-300 card-container"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex justify-center gap-x-3 items-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button
            className="text-red-500"
            onClick={() => changeMonth(-1)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <i className="fas fa-chevron-left"></i>
          </motion.button>
          <motion.span
            className="text-lg text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {`${t(
              `${i18n.language}.month.${new Date(
                currentYear,
                currentMonth - 1
              ).toLocaleString("default", {
                month: "long",
              })}`
            )} ${currentYear}`}
          </motion.span>
          <motion.button
            className="text-red-500"
            onClick={() => changeMonth(1)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <i className="fas fa-chevron-right"></i>
          </motion.button>
        </motion.div>
        <div className="grid grid-cols-7 gap-2 text-center text-sm">
          {weekDays.map((day) => (
            <div key={day} className="py-2 font-semibold text-primary">
              {t(`${i18n.language}.weekDays.${day.toLowerCase()}`)}
            </div>
          ))}
          {Array.from({ length: daysInMonth }, (_, index) => (
            <ItemDate
              key={index + 1}
              day={index + 1}
              status={selectedDates.includes((index + 1).toString())}
              onClick={(value) => saveSelectedDates(value)}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="bg-white rounded-lg"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="mt-6 flex items-center gap-x-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <label className="block text-gray-700 flex-shrink-0 min-w-[17%]">
            {t("bloc_2_2.btn_1.0")}:
          </label>
          <div className="w-full">
            <motion.input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              type="text"
              className={cn(
                "w-full p-2 border-[1px] card-container rounded-full mt-1 outline-none",
                errors.name && "border-red-500"
              )}
              style={{
                borderColor: errors.name
                  ? "rgb(239 68 68)"
                  : "rgba(86, 44, 44, 0.3)",
              }}
              placeholder={t("bloc_2_2.btn_1.1")}
              whileFocus={{ scale: 1.02 }}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
        </motion.div>

        <motion.div
          className="mt-4 flex items-center gap-x-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <label className="block text-gray-700 flex-shrink-0 min-w-[17%]">
            {t("bloc_2_2.btn_2.0")}:
          </label>
          <div className="w-full">
            <motion.input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              className={cn(
                "w-full p-2 border-[1px] card-container rounded-full mt-1 outline-none",
                errors.email && "border-red-500"
              )}
              style={{
                borderColor: errors.email
                  ? "rgb(239 68 68)"
                  : "rgba(86, 44, 44, 0.3)",
              }}
              placeholder={t("bloc_2_2.btn_2.1")}
              whileFocus={{ scale: 1.02 }}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </motion.div>

        <motion.div
          className="mt-4 flex gap-x-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <label className="block text-gray-700 mb-2 md:mb-0 md:flex-shrink-0 md:min-w-[17%]">
            {t("bloc_2_2.btn_3")}:
          </label>
          <motion.div
            style={{
              borderColor: "rgba(86, 44, 44, 0.3)",
            }}
            className="border w-full rounded-lg mt-1 border-primary card-container focus:border-primary outline-none"
            whileHover={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-1 md:p-2 bg-gray-50 border-b border-gray-300 flex flex-wrap gap-1 md:gap-4 justify-center md:justify-start">
              {toolbarButtons.map((button, index) => (
                <ToolbarButton key={index} {...button} />
              ))}
            </div>
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-2 min-h-[120px] md:min-h-[100px] text-sm md:text-base resize-none outline-none text-primary"
              placeholder="Type your message here..."
              whileFocus={{ borderColor: "#F2542D" }}
            ></motion.textarea>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center mt-4 px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <label className="block text-gray-700">
            {t("bloc_2_2.btn_4.0")}:
          </label>
          <div className="flex items-center ml-2">
            <i className="fas fa-paperclip text-blue-500"></i>
            <a href="#" className="text-blue-500 ml-2">
              {t("bloc_2_2.btn_4.1")}
            </a>
            <span className="text-gray-500 ml-2">{t("bloc_2_2.btn_4.2")}</span>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-end items-center gap-x-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            label={t("bloc_2_2.btn_5")}
            variant="outline"
            onClick={handleClear}
          />
          <Button
            label={t("bloc_2_2.btn_6")}
            variant="primary"
            onClick={handleSubmit}
            icon={
              <svg
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.90018 6.32003L16.3902 3.49003C20.2002 2.22003 22.2702 4.30003 21.0102 8.11003L18.1802 16.6C16.2802 22.31 13.1602 22.31 11.2602 16.6L10.4202 14.08L7.90018 13.24C2.19018 11.34 2.19018 8.23003 7.90018 6.32003Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.6099 13.6501L14.1899 10.0601"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Actitvity;
