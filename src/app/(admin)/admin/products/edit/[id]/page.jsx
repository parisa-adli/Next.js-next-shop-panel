"use client";

import Loading from "@/common/Loading";
import { useGetProductById } from "@/hooks/useProducts";
import { useParams } from "next/navigation";

function EditProduct() {
  const { id } = useParams();
  const { data, isLoading } = useGetProductById(id);
  const { product } = data || {};
  console.log(data);
  if (isLoading) return <Loading />;
  return <div>EditProduct</div>;
}
export default EditProduct;
