"use client";

import Loading from "@/common/Loading";
import { useGetUser } from "@/hooks/useAuth";
import { useAddToCart } from "@/hooks/useCart";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function AddToCart({ product }) {
  const queryClient = useQueryClient();

  const router = useRouter();
  const { isPending, mutateAsync } = useAddToCart();
  const { data } = useGetUser();
  const { user } = data || {};
  const addToCartHandler = async () => {
    if (!user) {
      toast("لطفا ابتدا لاگین کنید", {
        icon: "⚠",
      });
      router.push("/auth");
      return;
    }
    try {
      const { message } = await mutateAsync(product._id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  return (
    <div>
      {isPending ? (
        <div className="px-10">
          <Loading justifyContent="flex-start" width="45" height="15" />
        </div>
      ) : (
        <button onClick={addToCartHandler} className="btn btn--primary">
          اضافه کردن به سبد خرید
        </button>
      )}
    </div>
  );
}
export default AddToCart;
