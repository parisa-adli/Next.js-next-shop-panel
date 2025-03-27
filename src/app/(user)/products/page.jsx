import { getCategories } from "@/services/categoryService";
import { getProducts } from "@/services/productService";

async function ProductsPage() {
  const { products } = await getProducts();
  const { categories } = await getCategories();

  return (
    <div>
      <h1 className="text-xl font-bold mb-6">صفحه محصولات</h1>
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <p className="font-bold mb-4">دسته بندی ها</p>
          <ul className="space-y-4">
            {categories.map((category) => (
              <li key={category._id}>{category.title}</li>
            ))}
          </ul>
        </div>
        <div className="col-span-3 grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              className="col-span-1 border rounded-xl shadow-md p-4"
              key={product._id}
            >
              <h2 className="font-bold">{product.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProductsPage;
