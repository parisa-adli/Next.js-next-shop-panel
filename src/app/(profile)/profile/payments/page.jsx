"use client";

import Loading from "@/common/Loading";
import { userPaymentTHeads } from "@/constants/tableHeads";
import { useGetUser } from "@/hooks/useAuth";
import { toLocalDateString } from "@/utils/toLocalDate";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumber";

function page() {
  const { isLoading, data } = useGetUser();
  const { user, payments } = data || {};

  if (isLoading) return <Loading />;

  return (
    <div>
      <h1>سفارشات کاربر</h1>
      <div className="shadow-sm overflow-auto my-8">
        <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
          <thead>
            <tr>
              {userPaymentTHeads.map((item) => (
                <th className="whitespace-nowrap table__th" key={item.id}>
                  {item.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <td className="table__td">{index + 1}</td>
                <td className="table__td whitespace-nowrap truncate">
                  {payment.invoiceNumber}
                </td>
                <td className="table__td whitespace-nowrap max-w-[280px] truncate">
                  {payment.description}
                </td>
                <td className="table__td">
                  <div className="flex flex-col gap-y-2 items-start">
                    {payment.cart.productDetail.map((product) => (
                      <span
                        className="badge badge--secondary"
                        key={product._id}
                      >
                        {product.title}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="table__td font-bold">
                  {toPersianNumbersWithComma(payment.amount)}
                </td>
                <td className="table__td whitespace-nowrap">
                  {toLocalDateString(payment.createdAt)}
                </td>
                <td className="table__td">
                  {payment.status === "COMPLETED" ? (
                    <span className="badge badge--success">موفق</span>
                  ) : (
                    <span className="badge badge--error">ناموفق</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default page;
