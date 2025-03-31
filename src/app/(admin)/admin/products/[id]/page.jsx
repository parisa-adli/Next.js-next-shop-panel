"use client";

import { useParams } from "next/navigation";

function ProductPage() {
  const params = useParams();
  console.log(params);
  return <div>ProductPage</div>;
}
export default ProductPage;
