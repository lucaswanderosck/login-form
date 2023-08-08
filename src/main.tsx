import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

import themeLight from "./styles/themes/light.ts";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={themeLight}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
