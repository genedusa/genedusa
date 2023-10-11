import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import "~/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <NextUIProvider>
      <ThemeProvider defaultTheme="light">
        <Component
          className="bg-background text-foreground dark"
          {...pageProps}
        />
      </ThemeProvider>
    </NextUIProvider>
  );
}
