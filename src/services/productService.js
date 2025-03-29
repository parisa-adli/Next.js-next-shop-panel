import http from "./httpService";

export function getProducts(qs) {
  return http.get(`/product/list?${qs}`).then(({ data }) => data.data);
}

// export function getProducts(qs) {
//   return fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/list?${qs}`, {
//     cache: "no-store",
//   })
//     .then((res) => res.json())
//     .then(({ data }) => data);
// }

export function getOneProductBySlug(slug) {
  return http.get(`/product/slug/${slug}`).then(({ data }) => data.data);
}
