"use client";
import "../styles/globals.css";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import createEmotionCache from "../utility/createEmotionCache";
import icebergTheme from "../styles/theme/icebergTheme";
import "../styles/globals.css";

const emotionCache = createEmotionCache();

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={icebergTheme}>
          <CssBaseline />
          <body>{children}</body>
        </ThemeProvider>
      </CacheProvider>
    </html>
  );
}

export const metadata = {
  title: "Raffaele Cataldo - Web Developer",
  description: "Fullstack Web Developer",
};
