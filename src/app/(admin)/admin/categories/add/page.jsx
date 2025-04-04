"use client";

import Button from "@/common/Button";
import TextField from "@/common/TextField";
import { useAddCategory } from "@/hooks/useCategories";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Select from "react-select";

const categoryTypes = [
  {
    id: 1,
    label: "محصول",
    value: "product",
  },
  {
    id: 2,
    label: "پست",
    value: "post",
  },
  {
    id: 3,
    label: "تیکت",
    value: "ticket",
  },
  {
    id: 4,
    label: "نظرات",
    value: "comment",
  },
];

function AddCategoryPage() {
  const router = useRouter();
  const [category, setCategory] = useState({
    title: "",
    description: "",
    englishTitle: "",
  });
  const [selectedType, setSelectedType] = useState("");
  const { isPending, mutateAsync } = useAddCategory();

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        ...category,
        type: selectedType.value,
      });
      toast.success(message);
      router.push("/admin/categories");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="mb-10">
      <h1 className="mb-4 font-bold text-xl">افزودن دسته بندی جدید</h1>
      <div className="max-w-sm mb-10">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <TextField
            name="title"
            label="عنوان"
            value={category.title}
            onChange={handleChange}
          />
          <TextField
            name="englishTitle"
            label="عنوان انگلیسی"
            value={category.englishTitle}
            onChange={handleChange}
          />
          <TextField
            name="description"
            label="توضیحات"
            value={category.description}
            onChange={handleChange}
          />
          <div>
            <label htmlFor="type" className="mb-2 block">
              نوع
            </label>
            <Select
              instanceId="type"
              onChange={setSelectedType}
              options={categoryTypes}
              defaultValue={selectedType}
            />
          </div>
          <Button>تایید</Button>
        </form>
      </div>
    </div>
  );
}
export default AddCategoryPage;
