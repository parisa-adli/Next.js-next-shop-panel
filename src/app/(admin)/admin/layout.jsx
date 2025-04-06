import "../../globals.css";
import vazirFont from "@/constants/localFonts";
import Providers from "@/pages/Providers";
import { Toaster } from "react-hot-toast";
import AdminSideBar from "./AdminSideBar";

export const metadata = {
  title: "پروفایل ادمین",
  description: "پروفایل ادمین",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans`}>
        <Providers>
          <Toaster />
          <div className="flex bg-white h-screen">
            <div className="w-[180px] bg-gray-100 overflow-y-auto p-4">
              <AdminSideBar />
            </div>
            <div className="flex-1 overflow-y-auto p-4">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
