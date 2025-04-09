"use client";
import DarkModeToggle from "@/common/DarkModeToggle";
import { useGetUser } from "@/hooks/useAuth";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  const { data, error, isLoading } = useGetUser();
  const { user, cart } = data || {};

  return (
    <header
      className={`shadow-md mb-10 sticky top-0 transition-all duration-200 bg-secondary-50
        ${
          isLoading
            ? "blur-sm opacity-70 pointer-events-none"
            : "blur-0 opacity-100"
        }
        `}
    >
      <nav>
        <ul className="flex items-center justify-between py-2 container xl:max-w-screen-xl">
          <li>
            <Link className="block py-2" href="/">
              خانه
            </Link>
          </li>
          <li>
            <Link className="block py-2" href="/products">
              محصولات
            </Link>
          </li>
          <li>
            <Link className="block py-2" href="/profile">
              پنل کاربر
            </Link>
          </li>
          <li>
            <Link className="block py-2" href="/admin">
              پنل ادمین
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-x-3" href="/cart">
              <span>سبد خرید</span>
              <span className="relative">
                <FaCartShopping className="w-5 h-5 text-primary-900" />
                <span className="absolute -bottom-1.5 -right-2 bg-rose-500 px-[3px] rounded-full text-white text-sm">
                  {cart ? cart.payDetail.productIds.length : 0}
                </span>
              </span>
            </Link>
          </li>
          {user ? (
            <div className="flex items-center gap-x-6">
              <span>{user.name}</span>
            </div>
          ) : (
            <li>
              <Link className="block py-2" href="/auth">
                ورود
              </Link>
            </li>
          )}
          <DarkModeToggle />
        </ul>
      </nav>
    </header>
  );
}
export default Header;
