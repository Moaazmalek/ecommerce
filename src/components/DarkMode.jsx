/* eslint-disable no-unused-vars */
import  { useEffect, useState } from "react";
import sun from "/imgs/sun.png";
import moon from "/imgs/moon.png";

function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement; //html element
  useEffect(() => {
    if (theme == "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative min-w-10 flex  right-3 ">
      <img
        className={`w-6 absolute right-0  cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]  z-10 -top-2  ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }transition-all duration-200 `}
        src={sun}
        alt="Light mode"
        onClick={() => setTheme((theme) => (theme = "light"))}
      />
      <img
        className={`w-7 absolute -right-[1px] -top-[10px]  z-10 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        } transition-all duration-200`}
        src={moon}
        alt="Dark Mode"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  );
}

export default DarkMode;
