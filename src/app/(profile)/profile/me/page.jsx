"use client";

import TextField from "@/common/TextField";
import { useGetUser } from "@/hooks/useAuth";
import { includeObj } from "@/utils/objectUtils";
import { useEffect, useState } from "react";

function MePage() {
  const { isLoading, data } = useGetUser();
  const [formData, setFormData] = useState({});
  const { user } = data || {};
  const includeskey = ["name", "email", "phoneNumber", "biography"];

  useEffect(() => {
    if (user) setFormData(includeObj(user, includeskey));
  }, [user]);

  if (isLoading) return <p>Loading....</p>;

  return (
    <div className="max-w-sm">
      <h1 className="text-xl font-bold mb-4">اطلاعات کاربری</h1>
      <form action="">
        {Object.keys(includeObj(user, includeskey)).map((key) => {
          return (
            <TextField
              label={key}
              name={key}
              key={key}
              value={formData[key] || ""}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
          );
        })}
      </form>
    </div>
  );
}
export default MePage;
