import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DTC Technology Stack Report 2025",
  description: "Platform Performance & Integration Insights",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#284341] text-[#f7f7f7]">{children}</body>
    </html>
  );
}
