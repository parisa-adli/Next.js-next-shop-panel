import { getOneProductBySlug, getProducts } from "@/services/productService";

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
    <div>
      <h1 className="font-bold text-2xl mb-6">{product.title}</h1>
      <p className="mb-6">{product.description}</p>
      <p className="mb-6">
        <span>قیمت محصول: </span>
        <span className={`${product.discount ? "line-through" : "font-bold"}`}>
          {product.price}
        </span>
      </p>
      {!!product.discount && (
        <div className="flex items-center gap-x-2 mb-6">
          <p className="text-xl font-bold">قیمت با تخفیف: {product.offPrice}</p>
          <div
            className="
                  bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm"
          >
            {product.discount} %
          </div>
        </div>
      )}
      <div>
        <button className="btn btn--primary">اضافه کردن به سبد خرید</button>
      </div>
    </div>
  );
}
export default SlugPage;
