import { addNewCoupon, getAllCoupons, getOneCoupon } from "@/services/couponServices";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetCoupons = () =>
  useQuery({
    queryKey: ["get-coupons"],
    queryFn: getAllCoupons,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetOneCoupons = (id) =>
  useQuery({
    queryKey: ["get-coupon", id],
    queryFn: getOneCoupon,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useAddNewCoupon = () => useMutation({ mutationFn: addNewCoupon });
