import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState(prefersDark.matches ? "dark" : "light");
  const htmlElm = document.querySelector("html");

  useEffect(() => {
    if (theme === "dark") {
      htmlElm.classList.add("dark");
    } else {
      htmlElm.classList.remove("dark");
    }
  }, [theme, htmlElm]);

  prefersDark.addEventListener("change", (e) => {
    setTheme(e.matches ? "dark" : "light");
  });

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
