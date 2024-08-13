import { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider } from "@/providers/theme-provider"

export default function Document() {
  return (
    <>
      <Html lang="en">
        <Head />
        <body>
          <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          >
            <Main />
          </ThemeProvider>
          <NextScript />
        </body>
      </Html>
    </>
  );
}
