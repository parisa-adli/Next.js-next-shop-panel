import vazirFont from "@/constants/localFonts";
import "../globals.css";
import Providers from "../Providers";
import { Toaster } from "react-hot-toast";
import Header from "../Header";

export const metadata = {
  title: "next-shop",
  description: "next-shop panel admin next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans`}>
        <Providers>
          <Toaster />
          <Header />
          <div className="container xl:max-w-screen-xl">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
