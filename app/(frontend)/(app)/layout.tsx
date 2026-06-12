import type { Metadata } from "next";
import { Cal_Sans, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "./styles.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CookiesConsent from "@/components/CookiesConsent";
import ScheduleMeetingModal from "@/components/ScheduleMeetingModal";

import { GoogleTagManager } from "@next/third-parties/google";

const calSans = Cal_Sans({
  variable: "--font-cal-sans",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const apercuBlack = localFont({
  src: "../../../public/fonts/Apercu-Pro-Black.ttf",
  variable: "--font-apercu-black",
  display: "swap",
});

const apercuBold = localFont({
  src: "../../../public/fonts/apercu_bold_pro.otf",
  variable: "--font-apercu-bold",
  display: "swap",
});

const apercuRegular = localFont({
  src: "../../../public/fonts/apercu_regular_pro.otf",
  variable: "--font-apercu-regular",
  display: "swap",
});

export const metadata: Metadata = {
  title: "xVS Creations | Designing unforgettable branding experiences",
  description:
    "Design agency crafting unforgettable branding, UI/UX, motion graphics & web experiences that help startups, brands and businesses engage global audiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${calSans.variable} ${apercuBlack.variable} ${apercuBold.variable} ${apercuRegular.variable} ${poppins.variable} h-full antialiased`}
    >
      <GoogleTagManager gtmId="GTM-WGTCSF6" />
      <body className="min-h-full flex flex-col">
        <Navbar />
        <SmoothScroll>
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <ScheduleMeetingModal />
        <CookiesConsent />
      </body>
    </html>
  );
}
