"use client";

import { useAddToCart, useDecrementFromCart } from "@/hooks/useCart";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { HiMinus, HiOutlineTrash, HiPlus } from "react-icons/hi2";

function CartItem({ cartItem }) {
  const queryClient = useQueryClient();

  const { isPending: isAdding, mutateAsync: addToCart } = useAddToCart();
  const { isPending: isDecrementing, mutateAsync: decrementFromCart } =
    useDecrementFromCart();

  const addToCartHandler = async () => {
    try {
      const { message } = await addToCart(cartItem._id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  const decrementHandler = async () => {
    try {
      const { message } = await decrementFromCart(cartItem._id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  return (
    <div className="border rounded-xl p-4 flex justify-between">
      <span className="flex-1 font-bold">{cartItem.title}</span>
      <div className="flex items-center justify-between gap-x-8">
        <div className="border-l-2 pl-4">
          <div>
            <span>قیمت: </span>
            <span
              className={`${
                cartItem.discount ? "line-through text-gray-500" : "font-bold"
              }`}
            >
              {cartItem.price}
            </span>
          </div>
          {!!cartItem.discount && (
            <div className="flex items-center gap-x-2 mt-2">
              <p className="font-bold">{cartItem.offPrice}</p>
              <div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm">
                {cartItem.discount} %
              </div>
            </div>
          )}
        </div>
        <span>تعداد: {cartItem.quantity}</span>
        <div className="flex gap-x-2">
          <button
            onClick={addToCartHandler}
            className="bg-primary-900 text-white rounded p-1"
          >
            <HiPlus className="w-4 h-4" />
          </button>
          <button onClick={decrementHandler} className="border rounded p-1">
            {cartItem.quantity > 1 ? (
              <HiMinus className="w-4 h-4" />
            ) : (
              <HiOutlineTrash className="w-6 h-6 text-rose-500" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
