import { Poppins } from "next/font/google";
import "./globals.css";
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});


export const metadata = {
  title: "Sabbir Ahmed | Front-End Developer",
  description: "Sabbir Ahmed is a front-end developer based in Dhaka, skilled in React, Tailwind, WordPress, and Excel tools. Explore his latest projects and work.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
