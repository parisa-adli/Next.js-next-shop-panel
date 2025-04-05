"use client";

import RadioInput from "@/common/RadioInput";
import TextField from "@/common/TextField";
import { useGetProducts } from "@/hooks/useProducts";
import { useState } from "react";
import Select from "react-select";

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

  console.log(productIds);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="mb-10">
      <h1 className="mb-4 font-bold text-xl">اضافه کردن کد تخفیف</h1>
      <form className="space-y-4 max-w-sm">
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
          <label htmlFor="products">شامل محصولات</label>
          <Select
            isMulti
            instanceId="products"
            onChange={setProductIds}
            options={products}
            getOptionLabel={(option) => option.title}
            getOptionValue={(option) => option._id}
          />
        </div>
      </form>
    </div>
  );
}
export default AddCouponPage;
