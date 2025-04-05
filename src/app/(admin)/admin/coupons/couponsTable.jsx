import { couponListTHeads } from "@/constants/tableHeads";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi2";
import { FiEdit3 } from "react-icons/fi";
import { toLocalDateStringShort } from "@/utils/toLocalDate";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useGetPayments } from "@/hooks/usePayments";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumber";

function CouponsTable({ coupons }) {
  //   const { mutateAsync } = useGetPayments();
  //   const queryClient = useQueryClient();

  //   const removeCategoryHandler = async (id) => {
  //     try {
  //       const { message } = await mutateAsync(id);
  //       toast.success(message);
  //       queryClient.invalidateQueries({ queryKey: ["get-categories"] });
  //     } catch (error) {
  //       toast.error(error?.response?.data?.message);
  //     }
  //   };

  return (
    <div className="shadow-sm overflow-auto my-8">
      <table className="border-collapse table-auto w-full min-w-[800px] text-sm ">
        <thead>
          <tr>
            {couponListTHeads.map((item) => (
              <th className="table__th" key={item.id}>
                {item.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon, index) => (
            <tr key={coupon._id}>
              <td className="table__td">{index + 1}</td>
              <td className="table__td">{coupon.code}</td>
              <td className="table__td">
                <span className="badge badge--primary">{coupon.type}</span>
              </td>
              <td className="table__td">
                {toPersianNumbersWithComma(coupon.amount)}
              </td>
              <td className="table__td">
                <div className="flex flex-col gap-y-2 items-start">
                  {coupon.productIds.map((product) => (
                    <span className="badge badge--secondary" key={product._id}>
                      {product.title}
                    </span>
                  ))}
                </div>
              </td>
              <td className="table__td">
                {toPersianNumbers(coupon.usageCount)}
              </td>
              <td className="table__td">
                {toPersianNumbers(coupon.usageLimit)}
              </td>
              <td className="table__td">
                {toLocalDateStringShort(coupon.createdAt)}
              </td>
              <td className="table__td">
                <div className="flex items-center gap-x-2">
                  <Link href={`/admin/coupons/${coupon._id}`}>
                    <FaEye className="w-5 h-5 text-primary-900" />
                  </Link>
                  <Link href={`/admin/coupons/edit/${coupon._id}`}>
                    <FiEdit3 className="w-5 h-5 text-secondary-600" />
                  </Link>
                  <button
                  //   onClick={() => removecouponHandler(coupon._id)}
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
export default CouponsTable;
