import vazirFont from "@/constants/localFonts";
import "./globals.css";
import Header from "./Header";
import { Toaster } from "react-hot-toast";
import Providers from "./Providers";

export const metadata = {
  title: "next-shop",
  description: "next-shop panel admin next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans`}>
        <Toaster />
        <Header />
        <div className="container xl:max-w-screen-xl">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
