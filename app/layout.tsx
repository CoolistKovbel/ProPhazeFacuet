import type { Metadata } from "next";

import "./globals.css";
import { inter } from "./components/ui/fonts";
import MainHeader from "./components/main-header";
import MainFooter from "./components/mainFooter";
import { ModalProvider } from "./(site)/providers/model-provider";

export const metadata: Metadata = {
  title: "ProPhazeFacuet",
  description:
    "Welcome and Boommark a page that will allow you to earn tokens. A ProPhazeFacuet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        {children}
        <MainFooter />
        <ModalProvider />
      </body>
    </html>
  );
}
