import { getCategories } from "@/services/categoryService";
import { getProducts } from "@/services/productService";
import CategorySidebar from "./CategorySidebar";
import queryString from "query-string";
import { toLocalDateStringShort } from "@/utils/toLocalDate";
import Link from "next/link";
import AddToCart from "./[slug]/AddToCart";
import LikeProduct from "./LikeProduct";
import { cookies } from "next/headers";
import { toStringCookies } from "@/utils/toStringCookies";

export const dynamic = "force-dynamic"; // eq to { cache: 'no-store'} or SSR in page

async function ProductsPage({ searchParams }) {
  // const { products } = await getProducts(
  //   await queryString.stringify(searchParams)
  // );
  // const { categories } = await getCategories();

  const cookieStore = await cookies();
  const strCookies = await toStringCookies(cookieStore);
  const productPromise = getProducts(
    queryString.stringify(await searchParams),
    strCookies
  );
  const categoryPromise = getCategories();
  const [{ products }, { categories }] = await Promise.all([
    productPromise,
    categoryPromise,
  ]);

  return (
    <div className="px-4">
      <h1 className="text-xl font-bold mb-6">صفحه محصولات</h1>
      <div className="flex flex-col sm:flex-row gap-y-8 sm:gap-0">
        <CategorySidebar categories={categories} />
        <div className="flex-1">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                className="border rounded-xl shadow-md p-4 space-y-4"
                key={product._id}
              >
                <h2 className="font-bold text-xl ">{product.title}</h2>
                <div className="">
                  <span>تاریخ ساختن: </span>
                  <span className="font-bold">
                    {toLocalDateStringShort(product.createdAt)}
                  </span>
                </div>
                <div className="flex items-center gap-x-2">
                  <LikeProduct product={product} />
                  <Link
                    className="block text-primary-900 font-bold border-r pr-2"
                    href={`/products/${product.slug}`}
                  >
                    مشاهده محصول
                  </Link>
                </div>
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
