"use client";

import Loading from "@/common/Loading";
import { useGetOneCoupons } from "@/hooks/useCoupons";

function CouponUpdatePage() {
  const { isLoading, data } = useGetOneCoupons();
  const { coupon } = data || {};

    if (isLoading) return <Loading />;
    
  return <div>CouponUpdatePage</div>;
}
export default CouponUpdatePage;
