import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iphone Landing Page",
  description: "Iphone Landing Page created by DevVoy Team",
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
export default RootLayout;
