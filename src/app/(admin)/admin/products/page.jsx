"use client";

import Loading from "@/common/Loading";
import { useGetProducts } from "@/hooks/useProducts";
import ProductsTable from "./ProductListTable";

 function ProductsPage() {
  const { data, isLoading } = useGetProducts();
  const { products } = data || {};

  if (isLoading) return <Loading />;

  return (
    <div className="border rounded-xl p-4 mt-8">
      <h1 className="font-bold">محصولات</h1>
      <ProductsTable products={products} />
    </div>
  );
}
export default ProductsPage;
