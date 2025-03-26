"use client";

import { useGetUser } from "@/hooks/useAuth";
import toLocalDateStringShort from "@/utils/toLocalDate";

function Profile() {
  const { isLoading, data } = useGetUser();
  const { user } = data || {};
  if (isLoading) return <p>Loading....</p>;
  return (
    <div>
      <h1>{user.name} خوش آمدید</h1>
      <p>
        <span>تاریخ پیوستن : </span>
        <span>{toLocalDateStringShort(user.createdAt)}</span>
      </p>
    </div>
  );
}
export default Profile;
