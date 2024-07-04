import React, { useState, useEffect } from "react";
import lightButton from "../../assets/images/light-mode-button.png";
import darkButton from "../../assets/images/dark-mode-button.png";

const DarkMode: React.FC = () => {
  const [theme, setTheme] = useState<boolean>(false);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div
      className="relative"
      onClick={toggleTheme}>
      <img
        src={theme ? darkButton : lightButton}
        alt="Theme Toggle Button"
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
