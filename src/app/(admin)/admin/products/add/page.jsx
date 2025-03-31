"use client";

import Button from "@/common/Button";
import TextField from "@/common/TextField";
import { useState } from "react";

const productsFormData = [
  {
    id: 1,
    label: "عنوان",
    name: "title",
  },
  {
    id: 2,
    label: "توضیخات",
    name: "description",
  },
  {
    id: 3,
    label: "اسلاگ",
    name: "slug",
  },
  {
    id: 4,
    label: "بررند",
    name: "brand",
  },
  {
    id: 5,
    label: "قیمت",
    name: "price",
  },
  {
    id: 6,
    label: "تخفیف",
    name: "discount",
  },
  {
    id: 7,
    label: "تخفیف روی قیمت",
    name: "offPrice",
  },
  {
    id: 8,
    label: "موجودی",
    name: "countInStock",
  },
  {
    id: 9,
    label: "لینک عکس محصول",
    name: "imageLink",
  },
];

function AddProductPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    slug: "",
    brand: "",
    price: "",
    discount: "",
    offPrice: "",
    countInStock: "",
    imageLink: "",
  });
  const [tags, setTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const handChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-sm">
      <h1 className="mb-4 font-bold text-xl">افزودن محصول</h1>
      <form className="space-y-8">
        {productsFormData.map((item) => (
          <TextField
            key={item.id}
            label={item.label}
            name={item.name}
            value={formData[item.name]}
            onChange={handChange}
          />
        ))}
        <Button>اضافه کردن محصول</Button>
      </form>
    </div>
  );
}
export default AddProductPage;
