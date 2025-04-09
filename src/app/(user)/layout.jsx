import vazirFont from "@/constants/localFonts";
import "../globals.css";
import Providers from "../Providers";
import { Toaster } from "react-hot-toast";
import Header from "../Header";

export const metadata = {
  title: "نکست شاپ",
  description: "نکست شاپ پنل مدیریت ادمین",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirFont.variable} font-sans bg-secondary-0 text-secondary-700`}
      >
        <Providers>
          <Toaster />
          <Header />
          <div className="container xl:max-w-screen-xl">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
