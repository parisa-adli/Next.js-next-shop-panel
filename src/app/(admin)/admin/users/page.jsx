"use client";

import Loading from "@/common/Loading";
import { useGetAllUsers } from "@/hooks/useAuth";

function UsersPage() {
  const { isLoading, data } = useGetAllUsers();
  const { users } = data || {};

  if (isLoading) return <Loading />;

  return (
    <div>
      <h1>اطلاعات کاربران</h1>
      <p>{users.length}</p>
    </div>
  );
}
export default UsersPage;
