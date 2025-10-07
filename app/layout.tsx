import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Visit www.pixelrocket.store to learn how to become a frontend web developer",
  description: "FaunaFlora - Green Energy Solutions",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-body text-body font-body">{children}</body>
    </html>
  );
}


