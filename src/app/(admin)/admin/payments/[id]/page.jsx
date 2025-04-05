"use client";

import Loading from "@/common/Loading";
import { useGetPaymentById } from "@/hooks/usePayments";
import { useParams } from "next/navigation";

function PaymentPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetPaymentById(id);
  const { payment } = data || {};
  console.log(payment);

  if (isLoading) return <Loading />;
  if (!payment) return <p>اطلاعات موجود نیست</p>;

  return (
    <div className="space-y-6">
      <h1 className="font-bold text-2xl ">{payment[0].description}</h1>
      <p>{payment[0].amount}</p>
      <p>{payment[0].status}</p>
      <p>{payment[0].user.name}</p>
    </div>
  );
}
export default PaymentPage;
