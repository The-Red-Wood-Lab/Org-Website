import "./globals.css";
import "../public/logo.ico";
import type { Metadata } from "next";
import {
  RetroBinaryBackground,
  RetroGrid,
  RetroCursor,
} from "@/components/retro-decorations";
import type React from "react";

export const metadata: Metadata = {
  title: "Red Wood Labs - Retro Open Source",
  description: "An open-source coding organization with a retro twist",
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <RetroBinaryBackground />
        <RetroGrid />
        <RetroCursor />
        {children}
      </body>
    </html>
  );
}
