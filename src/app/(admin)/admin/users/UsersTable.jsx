import { userListTHeads } from "@/constants/tableHeads";
import { toLocalDateStringShort } from "@/utils/toLocalDate";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

function UsersTable({ users }) {
  return (
    <div className="shadow-sm overflow-auto my-8">
      <table className="border-collapse table-auto w-full min-w-[800px] text-sm ">
        <thead>
          <tr>
            {userListTHeads.map((item) => (
              <th className="whitespace-nowrap table__th" key={item.id}>
                {item.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td className="table__td">{index + 1}</td>
              <td className="table__td whitespace-nowrap">{user.name}</td>
              <td className="table__td">{user.email}</td>
              <td className="table__td">
                <div className="flex whitespace-nowrap gap-x-1">
                  {user.phoneNumber}
                  {user.isVerifiedPhoneNumber && (
                    <FaCheckCircle className="w-4 h-4 text-green-600" />
                  )}
                </div>
              </td>
              <td className="table__td">
                <div className="flex flex-col gap-y-2 items-start">
                  {user.Products.map((product, index) => (
                    <span className="badge badge--secondary" key={index}>
                      {product.title}
                    </span>
                  ))}
                </div>
              </td>
              <td className="table__td">
                {toLocalDateStringShort(user.createdAt)}
              </td>
              <td className="table__td text-sm text-secondary-700 whitespace-nowrap">
                <Link href={`/admin/users/${user._id}`}>مشاهده جزئیات</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default UsersTable;
