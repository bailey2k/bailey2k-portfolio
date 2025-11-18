import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";



const johnston = localFont({
  src: [
    { path: '../public/assets/fonts/LondonTube-MABx.ttf', weight: '400', style: 'normal' },
  ],
  variable: '--font-johnston',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Bailey Jones",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <body
            className={`${johnston.className} antialiased`}
          >
        {children}
      </body>
    </html>
  );
}
