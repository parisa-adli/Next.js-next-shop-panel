import { data } from "autoprefixer";
import http from "./httpService";

export function getOtp(data) {
  return http.post("/user/get-otp", data);
}
