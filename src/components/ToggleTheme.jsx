import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function MyAwesomeThemeComponent() {
  const [theme, setTheme] = React.useState("night");
  const toggleTheme = () => {
    setTheme(theme === "retro" ? "night" : "retro");
  };
  React.useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <label className="swap swap-rotate">
      <input onClick={toggleTheme} type="checkbox" />
      <div className="swap-on">
        <MdOutlineDarkMode />
      </div>
      <div className="swap-off">
        <MdDarkMode />
      </div>
    </label>
  );
}

export default MyAwesomeThemeComponent;
