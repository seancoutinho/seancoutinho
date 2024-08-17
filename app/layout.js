import PreLoader from "@/layouts/PreLoader";
import "@css/custom.css";
import "@css/dark.css";
import "@css/main.css";
import "@css/modalboxes.css";
import "@css/plugins.css";
import { DM_Sans, Inter, Kaushan_Script, Oswald } from "next/font/google";
import "./globals.css";
import State from "/context/context";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});
const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-dm",
  display: "swap",
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});
const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-kaushan",
  display: "swap",
});

const fontFamily = `${inter.variable} ${dm.variable} ${oswald.variable} ${kaushan.variable} `;

export const metadata = {
  title: "Sean Coutinho | Home",
  description: "Welcome to my portfolio! I am Sean Coutinho, a Next.js developer specializing in creating modern and responsive web applications.",
  keywords: "Sean Coutinho, portfolio, Next.js, developer, web applications, responsive",
  author: "Sean Coutinho",
  ogTitle: "Sean Coutinho | Home",
  ogDescription: "Welcome to my portfolio! I am Sean Coutinho, a Next.js developer specializing in creating modern and responsive web applications.",
  ogImage: "/path/to/og-image.jpg",
  twitterTitle: "Sean Coutinho | Home",
  twitterDescription: "Welcome to my portfolio! I am Sean Coutinho, a Next.js developer specializing in creating modern and responsive web applications.",
  twitterImage: "/path/to/twitter-image.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontFamily}>
        <PreLoader />
        <State>{children}</State>
      </body>
    </html>
  );
}
