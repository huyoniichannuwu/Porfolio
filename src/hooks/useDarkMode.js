import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

/**
 * Hook quản lý chế độ Sáng/Tối.
 * - useState: khởi tạo theme từ localStorage (nếu có) hoặc theo
 *   cấu hình hệ điều hành của người dùng.
 * - useEffect: mỗi khi theme đổi, gán data-theme lên <html> để CSS
 *   áp dụng đúng bảng màu, đồng thời lưu lại vào localStorage để
 *   giữ nguyên lựa chọn khi người dùng tải lại trang.
 */
export const useDarkMode = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};
