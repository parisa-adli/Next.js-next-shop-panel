"use client";

import Link from "next/link";
import { IoHome, IoLayers } from "react-icons/io5";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { MdPayment, MdLogout } from "react-icons/md";
import { RiCoupon2Line } from "react-icons/ri";
import { FaBasketShopping } from "react-icons/fa6";
import { logout } from "@/services/authServices";

function AdminSideBar() {
  const logoutHandler = async () => {
    await logout();
    document.location.href = "/";
  };

  return (
    <div>
      <ul className="flex flex-col space-y-8 text-secondary-700">
        <li className="flex items-center gap-x-2">
          <span>
            <IoHome className="btnIcon" />
          </span>
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li className="flex items-center gap-x-2">
          <span>
            <HiMiniSquares2X2 className="btnIcon" />
          </span>
          <Link href="/admin">داشبورد</Link>
        </li>
        <li className="flex items-center gap-x-2">
          <span>
            <FaUsers className="btnIcon" />
          </span>
          <Link href="/admin/users">کاربران</Link>
        </li>
        <li className="flex items-center gap-x-2">
          <span>
            <FaBasketShopping className="btnIcon" />
          </span>
          <Link href="/admin/products">محصولات</Link>
        </li>

        <li className="flex items-center gap-x-2">
          <span>
            <IoLayers className="btnIcon" />
          </span>
          <Link href="/admin/categories">دسته بندی</Link>
        </li>
        <li className="flex items-center gap-x-2">
          <span>
            <RiCoupon2Line className="btnIcon" />
          </span>
          <Link href="/admin/coupons">کد تخفیف</Link>
        </li>
        <li className="flex items-center gap-x-2">
          <span>
            <MdPayment className="btnIcon" />
          </span>
          <Link href="/admin/payments">سفارشات</Link>
        </li>
        <li>
          <button onClick={logoutHandler} className="flex items-center gap-x-2">
            <span>
              <MdLogout className="btnIcon" />
            </span>
            <span>خروج</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
export default AdminSideBar;
