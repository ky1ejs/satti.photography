import React from "react";
import { FormContextProvider } from "@/contexts/FormContext";
import "./globals.css";
import { Inter } from "next/font/google";
import { Page } from "@/components/Page";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FormContextProvider>
          <Page>{children}</Page>
        </FormContextProvider>
      </body>
      <Analytics />
    </html>
  );
}
