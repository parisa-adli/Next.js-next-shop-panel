import Button from "@/common/Button";
import Loading from "@/common/Loading";
import { createPayment } from "@/services/paymentService";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumber";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

function CartSummary({ payDetail }) {
  const queryClient = useQueryClient();
  const { totalOffAmount, totalPrice, totalGrossPrice } = payDetail;
  const { isPending, mutateAsync } = useMutation({ mutationFn: createPayment });

  const createPaymentHandler = async () => {
    try {
      const { message } = await mutateAsync();
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error?.response?.data?.message);
      }
    }
  };
  return (
    <div className="border p-2 pb-4 rounded-xl space-y-4">
      <p className="font-bold p-2 text-secondary-700 text-center border-b">
        اطلاعات پرداخت
      </p>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span>جمع کل</span>
          <span>{toPersianNumbersWithComma(totalGrossPrice)}</span>
        </div>
        <div className="flex items-center justify-between border-b border-dashed pb-4">
          <span>تخفیف</span>
          <span>{toPersianNumbersWithComma(totalOffAmount)} -</span>
        </div>
        <div className="flex items-center justify-between font-bold">
          <span>مبلغ قابل پرداخت</span>
          <span>{toPersianNumbersWithComma(totalPrice)}</span>
        </div>
      </div>
      {isPending ? (
        <div className="flex justify-center">
          <Loading width="45" height="15" />
        </div>
      ) : (
        <Button onClick={createPaymentHandler}>ثبت سفارش</Button>
      )}
    </div>
  );
}
export default CartSummary;
