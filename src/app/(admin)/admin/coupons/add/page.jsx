"use client";

import RadioInput from "@/common/RadioInput";
import TextField from "@/common/TextField";
import { useGetProducts } from "@/hooks/useProducts";
import { useState } from "react";
import Select from "react-select";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Button from "@/common/Button";
import { useAddNewCoupon } from "@/hooks/useCoupons";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loading from "@/common/Loading";

function AddCouponPage() {
  const { data } = useGetProducts();
  const { products } = data || {};
  const [formData, setFormData] = useState({
    code: "",
    amount: "",
    usageLimit: "",
  });
  const [type, setType] = useState("");
  const [productIds, setProductIds] = useState([]);
  const [expireDate, setExpireDate] = useState(new Date());
  const { isLoading, mutateAsync } = useAddNewCoupon();
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        ...formData,
        type,
        expireDate: new Date(expireDate).toISOString(),
        productIds: productIds.map((p) => p._id),
      });
      toast.success(message);
      router.push("/admin/coupons");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="mb-10">
      <h1 className="mb-8 font-bold text-xl">اضافه کردن کد تخفیف</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-sm">
        <TextField
          label="کد"
          name="code"
          value={formData.code}
          onChange={handleChange}
        />
        <TextField
          label="مقدار"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
        <TextField
          label="ظرفیت"
          name="usageLimit"
          value={formData.usageLimit}
          onChange={handleChange}
        />
        <div>
          <span>نوع کد تخفیف</span>
          <div className="border rounded-lg py-2 px-8 mt-2 flex items-center justify-between">
            <RadioInput
              checked={type === "percent"}
              id="percent-type"
              name="type"
              label="درصد"
              value="percent"
              onChange={(e) => setType(e.target.value)}
            />
            <RadioInput
              checked={type === "fixedProduct"}
              id="fixedProduct-type"
              name="type"
              label="قیمت ثابت"
              value="fixedProduct"
              onChange={(e) => setType(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="products" className="mb-2 block">
            شامل محصولات
          </label>
          <Select
            isMulti
            instanceId="products"
            onChange={setProductIds}
            options={products}
            getOptionLabel={(option) => option.title}
            getOptionValue={(option) => option._id}
          />
        </div>
        <div>
          <span className="block mb-2">تاریخ انقضا</span>
          <DatePicker
            inputClass="textField__input w-full"
            className="w-full"
            value={expireDate}
            onChange={(date) => setExpireDate(date)}
            format="YYYY/MM/DD"
            calendar={persian}
            locale={persian_fa}
          />
        </div>
        <div>
          {isLoading ? (
            <Loading width="45" height="15" />
          ) : (
            <Button>تایید</Button>
          )}
        </div>
      </form>
    </div>
  );
}
export default AddCouponPage;
