import vazirFont from "@/constants/localFonts";
import "./globals.css";

export const metadata = {
  title: "next-shop",
  description: "next-shop panel admin next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans`}>{children}</body>
    </html>
  );
}
