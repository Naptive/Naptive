import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Nav from "../../components/Nav";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Welcome to Naptive",
  description: "best prices made by Naptive",
  content: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className="font-inter"} >
      
      <body>
        <Nav />
        {children}

        <Analytics />
      </body>
    </html>
  );
}
