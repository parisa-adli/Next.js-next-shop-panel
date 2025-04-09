import "../../globals.css";
import vazirFont from "@/constants/localFonts";
import Providers from "@/pages/Providers";
import { Toaster } from "react-hot-toast";
import AdminSideBar from "./AdminSideBar";
import DarkModeToggle from "@/common/DarkModeToggle";

export const metadata = {
  title: "پروفایل ادمین",
  description: "پروفایل ادمین",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans bg-secondary-0`}>
        <Providers>
          <Toaster />
          <div className="flex h-screen">
            <div className="fixed top-0 left-4 m-4">
              <DarkModeToggle />
            </div>
            <div className="w-[200px] overflow-y-auto p-4 bg-secondary-50">
              <AdminSideBar />
            </div>
            <div className="flex-1 overflow-y-auto p-4 text-secondary-700">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
