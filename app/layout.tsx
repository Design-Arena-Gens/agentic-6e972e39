import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Morries Wig Shop - Groovy Wigs Since the 70s",
  description: "The funkiest wig shop with a 1970s vibe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
