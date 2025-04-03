"use client";

import Button from "@/common/Button";
import TextField from "@/common/TextField";
import { useGetCategories } from "@/hooks/useCategories";
import { useAddProduct } from "@/hooks/useProducts";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Select from "react-select";
import { TagsInput } from "react-tag-input-component";

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
 const router= useRouter()
  const { isLoading, mutateAsync } = useAddProduct();
  const { data } = useGetCategories();
  const { categories } = data || {};
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        ...formData,
        tags,
        category: selectedCategory._id,
      });
      toast.success(message);
      router.push("/admin/products")
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="max-w-sm">
      <h1 className="mb-4 font-bold text-xl">افزودن محصول</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {productsFormData.map((item) => (
          <TextField
            key={item.id}
            label={item.label}
            name={item.name}
            value={formData[item.name]}
            onChange={handChange}
          />
        ))}
        <div>
          <label htmlFor="tags" className="mb-2">
            تگ محصولات
          </label>
          <TagsInput
            id="tags"
            // placeHolder="تگ"
            value={tags}
            onChange={setTags}
            name="tags"
          />
        </div>
        <div>
          <label htmlFor="category" className="mb-2">
            دسته بندی
          </label>
          <Select
            instanceId="category"
            onChange={setSelectedCategory}
            options={categories}
            getOptionLabel={(option) => option.title}
            getOptionValue={(option) => option._id}
          />
        </div>
        <div>
          {
            isLoading ? <Loading/> : <Button>اضافه کردن محصول</Button>
          }
        </div>
      </form>
    </div>
  );
}
export default AddProductPage;
