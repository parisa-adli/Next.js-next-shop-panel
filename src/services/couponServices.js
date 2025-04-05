import http from "./httpService";

export function getAllCoupons() {
  return http.get("/admin/coupon/list").then(({ data }) => data.data);
}

export function getOneCoupon(id) {
  return http.get(`/admin/coupon/${id}`).then(({ data }) => data.data);
}

export function addNewCoupon(data) {
  return http.post("/admin/coupon/add", data).then(({ data }) => data.data);
}
