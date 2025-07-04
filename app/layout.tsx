import type { Metadata } from "next";
import localFont from "next/font/local";

import Header from "@/components/common/Header";
import { verifySession } from "@/api/session";
import { UserProvider } from "@/providers/UserContext";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const aspekta = localFont({
  src: [
    {
      path: "../assets/fonts/Aspekta-400.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Aspekta-500.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Aspekta-600.ttf",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await verifySession();

  return (
    <html lang="en">
      <body className={`${aspekta.className} antialiased`}>
        <UserProvider user={user}>
          <Header />
          {children}
          <Toaster />
        </UserProvider>
      </body>
    </html>
  );
}
