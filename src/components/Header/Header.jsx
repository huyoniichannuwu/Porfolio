import { useState } from "react";
import "./Header.css";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// Header nhận theme + onToggleTheme từ App để chỉ có MỘT nguồn state
// duy nhất cho toàn trang (tránh mỗi component tự giữ theme riêng).
const Header = ({ theme, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header__inner container">
        <a href="#home" className="header__logo" onClick={closeMenu}>
          <span className="header__logoBracket">{"<"}</span>
          Gia Huy
          <span className="header__logoBracket">{"/>"}</span>
        </a>

        <nav className={`header__nav ${isMenuOpen ? "is-open" : ""}`}>
          {NAV_LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className="header__link" onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="themeToggle"
            onClick={onToggleTheme}
            aria-label="Chuyển đổi chế độ sáng / tối"
          >
            <span className={`themeToggle__track ${theme === "dark" ? "is-dark" : ""}`}>
              <span className="themeToggle__thumb">{theme === "dark" ? "🌙" : "☀️"}</span>
            </span>
          </button>

          <button
            type="button"
            className={`header__burger ${isMenuOpen ? "is-open" : ""}`}
            onClick={() => setIsMenuOpen((prevOpen) => !prevOpen)}
            aria-label="Mở menu điều hướng"
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
