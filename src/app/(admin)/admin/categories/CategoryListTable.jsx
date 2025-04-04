import { categoryListTHeads } from "@/constants/tableHeads";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi2";
import { FiEdit3 } from "react-icons/fi";
import { toLocalDateStringShort } from "@/utils/toLocalDate";

function CategoryListTable({ categories }) {
  return (
    <div className="shadow-sm overflow-auto my-8">
      <table className="border-collapse table-auto w-full min-w-[800px] text-sm ">
        <thead>
          <tr>
            {categoryListTHeads.map((item) => (
              <th className="table__th" key={item.id}>
                {item.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category._id}>
              <td className="table__td">{index + 1}</td>
              <td className="table__td font-bold">{category.title}</td>
              <td className="table__td">{category.englishTitle}</td>
              <td className="table__td whitespace-nowrap max-w-[180px] truncate">
                {category.description}
              </td>
              <td className="table__td">
                <span className="badge badge--secondary">
                  {category.type}
                </span>
              </td>

              <td className="table__td">
                {toLocalDateStringShort(category.createdAt)}
              </td>
              <td className="table__td">
                <div className="flex items-center gap-x-2">
                  <Link href={`/admin/categories/${category._id}`}>
                    <FaEye className="w-5 h-5 text-primary-900" />
                  </Link>
                  <Link href={`/admin/categories/edit/${category._id}`}>
                    <FiEdit3 className="w-5 h-5 text-secondary-600" />
                  </Link>
                  <button>
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
export default CategoryListTable;
