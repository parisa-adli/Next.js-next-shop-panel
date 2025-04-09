import "../../globals.css";
import vazirFont from "@/constants/localFonts";
import Providers from "@/pages/Providers";
import { Toaster } from "react-hot-toast";
import SideBar from "./SideBar";
import HeaderPanel from "@/common/HeaderPanel";

export const metadata = {
  title: "پروفایل کاربر",
  description: "پروفایل کاربر",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirFont.variable} font-sans bg-secondary-0 text-secondary-700`}
      >
        <Providers>
          <Toaster />
          <HeaderPanel>پنل کاربر</HeaderPanel>
          <div className="flex h-screen">
            <div className="w-[200px] overflow-y-auto p-4 bg-secondary-50">
              <SideBar />
            </div>
            <div className="flex-1 overflow-y-auto p-4">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
