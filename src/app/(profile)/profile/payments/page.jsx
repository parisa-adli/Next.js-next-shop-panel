"use client";

import Loading from "@/common/Loading";
import { useGetUser } from "@/hooks/useAuth";
import PaymentTable from "./PaymentTable";

function page() {
  const { isLoading, data } = useGetUser();
  const { user, payments } = data || {};

  if (isLoading) return <Loading />;

  return (
      <div>
      <h1 className="font-bold text-lg">سفارشات کاربر</h1>
      <PaymentTable payments={payments} />
    </div>
  );
}
export default page;
