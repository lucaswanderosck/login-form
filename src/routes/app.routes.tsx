import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global.ts";

import themeLight from "../styles/themes/light.ts";
import themeDark from "../styles/themes/dark.ts";

export const AppRoutes = () => {
  const [theme, setTheme] = useState(themeLight);

  const toggleTheme = () => {
    setTheme(theme === themeLight ? themeDark : themeLight);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SignIn toggleTheme={toggleTheme} />} />
        <Route
          path="/register"
          element={<SignUp toggleTheme={toggleTheme} />}
        />
      </Routes>
    </ThemeProvider>
  );
};
