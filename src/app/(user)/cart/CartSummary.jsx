import Button from "@/common/Button";

function CartSummary({ payDetail }) {
  const { totalOffAmount, totalPrice, totalGrossPrice } = payDetail;

  return (
    <div className="border p-2 pb-4 rounded-xl space-y-4">
      <p className="font-bold p-2 text-secondary-700 text-center border-b">
        اطلاعات پرداخت
      </p>
      <div className="space-y-4 pb-4 border-b border-dashed">
        <div className="flex items-center justify-between">
          <span>جمع کل</span>
          <span>{totalGrossPrice}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>تخفیف</span>
          <span>{totalOffAmount} -</span>
        </div>
        <div className="flex items-center justify-between font-bold">
          <span>مبلغ قابل پرداخت</span>
          <span>{totalPrice}</span>
        </div>
      </div>
      <Button>ثبت سفارش</Button>
    </div>
  );
}
export default CartSummary;
