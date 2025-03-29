import { getCategories } from "@/services/categoryService";
import { getProducts } from "@/services/productService";
import CategorySidebar from "./CategorySidebar";
import queryString from "query-string";
import { toLocalDateStringShort } from "@/utils/toLocalDate";
import Link from "next/link";
import AddToCart from "./[slug]/AddToCart";

export const dynamic = "force-dynamic"; // eq to { cache: 'no-store'} or SSR in page

async function ProductsPage({ searchParams }) {
  // const { products } = await getProducts(
  //   await queryString.stringify(searchParams)
  // );
  // const { categories } = await getCategories();
  const productPromise = getProducts(queryString.stringify(await searchParams));
  const categoryPromise = getCategories();
  const [{ products }, { categories }] = await Promise.all([
    productPromise,
    categoryPromise,
  ]);

  return (
    <div>
      <h1 className="text-xl font-bold mb-6">صفحه محصولات</h1>
      <div className="grid grid-cols-4">
        <CategorySidebar categories={categories} />
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                className="col-span-1 border rounded-xl shadow-md p-4 space-y-4"
                key={product._id}
              >
                <h2 className="font-bold text-xl ">{product.title}</h2>
                <div className="">
                  <span>تاریخ ساختن: </span>
                  <span className="font-bold">
                    {toLocalDateStringShort(product.createdAt)}
                  </span>
                </div>
                <Link
                  className="block text-primary-900 font-bold"
                  href={`/products/${product.slug}`}
                >
                  مشاهده محصول
                </Link>
                <AddToCart product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductsPage;
