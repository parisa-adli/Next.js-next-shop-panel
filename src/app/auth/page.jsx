"use client";
import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import http from "@/services/httpService";

function AuthPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  const sendOTPHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await http.post("/user/get-otp", { phoneNumber });
      console.log(data.data);
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">
        <SendOTPForm
          phoneNumber={phoneNumber}
          onChange={phoneNumberHandler}
          onSubmit={sendOTPHandler}
        />
      </div>
    </div>
  );
}
export default AuthPage;
