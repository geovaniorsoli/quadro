import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/clientComponent";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";

export const metadata: Metadata = {
  title: "Quadro",
  description: "Seu sistema financeiro",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="pt-br">
      <Head> 
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Seu sistema financeiro" />
        <meta property="og:title" content="Quadro" />
        <meta property="og:description" content="Seu sistema financeiro" />
        <meta name="next-size-adjust" content="initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
