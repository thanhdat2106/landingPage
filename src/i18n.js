import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import STATUS_EN from "../public/locales/en/common.json";
import STATUS_FR from "../public/locales/fr/common.json";

const resources = {
  en: STATUS_EN,
  fr: STATUS_FR,
};

i18n
  .use(HttpBackend) // Sử dụng backend để tải dữ liệu từ API
  .use(LanguageDetector) // Tự động phát hiện ngôn ngữ
  .use(initReactI18next) // Kết nối với React
  .init({
    fallbackLng: "en", // Ngôn ngữ mặc định nếu không tìm thấy
    supportedLngs: ["en", "fr"], // Các ngôn ngữ được hỗ trợ
    backend: {
      // URL của API để tải file dịch
      loadPath: "https://api.test.soa-dev.net/api/v1/pages?lang={{lng}}",
      parse: (data) => {
        // Parse dữ liệu trả về từ API
        const jsonData = JSON.parse(data);
        console.log(jsonData); // Removed console.log for jsonData
        return {
          //   head_menu: { items: jsonData[0].head_menu }, // Gán namespace 'common' thành đối tượng
          ...jsonData[0], // Gán namespace 'common'
          ...resources,
        };
      },
    },
    ns: ["common"],
    interpolation: {
      escapeValue: false, // React đã xử lý XSS
    },
    react: {
      useSuspense: false, // Tắt Suspense (phòng tránh lỗi khi render server-side)
    },
  });

export default i18n;
