"use client";
import { useGetUser } from "@/hooks/useAuth";
import { getUserProfile } from "@/services/authServices";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  const { data, error, isLoading } = useGetUser();
  const { user, cart } = data || {};

  return (
    <header
      className={`shadow-md mb-10 sticky top-0 transition-all duration-200 bg-white
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
          {user ? (
            <div className="flex items-center gap-x-6">
              <span>{user.name}</span>
              <Link className="relative" href="/cart">
                <FaCartShopping className="w-6 h-6 text-primary-900" />
                <span className="absolute -bottom-1.5 -right-2 bg-red-500 px-1 rounded-full text-white text-sm">
                  {cart ? cart.payDetail.productIds.length : 0}
                </span>
              </Link>
            </div>
          ) : (
            <li>
              <Link className="block py-2" href="/auth">
                ورود
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
