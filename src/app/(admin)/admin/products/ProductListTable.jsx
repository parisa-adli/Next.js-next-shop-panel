import { productListTHeads } from "@/constants/tableHeads";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumber";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi2";
import { FiEdit3 } from "react-icons/fi";
import { useRemoveProduct } from "@/hooks/useProducts";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

function ProductListTable({ products }) {
  const { mutateAsync } = useRemoveProduct();
  const queryClient = useQueryClient();

  const removeProductHandler = async (id) => {
    try {
      const { message } = await mutateAsync(id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-products"] });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="shadow-sm overflow-auto my-8">
      <table className="border-collapse table-auto w-full min-w-[800px] text-sm ">
        <thead>
          <tr>
            {productListTHeads.map((item) => (
              <th className="table__th" key={item.id}>
                {item.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td className="table__td">{index + 1}</td>
              <td className="table__td font-bold">{product.title}</td>
              <td className="table__td">{product.category.title}</td>
              <td className="table__td">
                {toPersianNumbersWithComma(product.price)}
              </td>
              <td className="table__td">
                {toPersianNumbers(product.discount)} %
              </td>
              <td className="table__td">
                {toPersianNumbersWithComma(product.offPrice)}
              </td>
              <td className="table__td">
                {toPersianNumbers(product.countInStock)} عدد
              </td>
              <td className="table__td">
                <div className="flex items-center gap-x-2">
                  <Link href={`/admin/products/${product._id}`}>
                    <FaEye className="w-5 h-5 text-primary-900" />
                  </Link>
                  <Link href={`/admin/products/edit/${product._id}`}>
                    <FiEdit3 className="w-5 h-5 text-secondary-600" />
                  </Link>
                  <button
                    onClick={() => removeProductHandler(product._id)}
                  >
                    <HiOutlineTrash className="w-5 h-5 text-rose-500" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ProductListTable;
