import BreadCrumbs from "@/common/BreadCrumbs";
import { getOneProductBySlug, getProducts } from "@/services/productService";
import AddToCart from "./AddToCart";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumber";

export const dynamic = "force-static"; // SSG or {cache: "force-cache"}
export const dynamicParams = false;
export async function generateStaticParams() {
  const { products } = await getProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}

async function SlugPage({ params }) {
  const { slug } = await params;
  const { product } = await getOneProductBySlug(slug);

  return (
    <>
      <BreadCrumbs
        breadcrumbs={[
          {
            label: "محصولات",
            href: "/products",
          },
          {
            label: `${product.title}`,
            href: `/products/${product.slug}`,
            active: true,
          },
        ]}
      />
      <div className="space-y-6">
        <h1 className="font-bold text-2xl ">{product.title}</h1>
        <p>{product.description}</p>
        <p>
          <span>قیمت محصول: </span>
          <span
            className={`${product.discount ? "line-through" : "font-bold"}`}
          >
            {toPersianNumbersWithComma(product.price)}
          </span>
        </p>
        {!!product.discount && (
          <div className="flex items-center gap-x-2">
            <p className="text-xl font-bold">
              قیمت با تخفیف: {toPersianNumbersWithComma(product.offPrice)}
            </p>
            <div
              className="
                  bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm"
            >
              {toPersianNumbers(product.discount)} %
            </div>
          </div>
        )}
        <AddToCart product={product} />
      </div>
    </>
  );
}
export default SlugPage;
