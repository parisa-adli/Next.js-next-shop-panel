import http from "./httpService";

export function getProducts(qs, cookies) {
  return http
    .get(`/product/list?${qs}`, {
      headers: {
        Cookie: cookies,
      },
    })
    .then(({ data }) => data.data);
}

export function getAllProducts(options) {
  return http.get("/product/list", options).then(({ data }) => data.data);
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

export function getOneProductById(id) {
  return http.get(`/product/${id}`).then(({ data }) => data.data);
}

export function likeProduct(id) {
  return http.post(`/product/like/${id}`).then(({ data }) => data.data);
}

// admin relate function
export function addProduct(data) {
  return http.post(`/admin/product/add`, data).then(({ data }) => data.data);
}

export function removeProduct(id) {
  return http
    .delete(`/admin/product/remove/${id}`)
    .then(({ data }) => data.data);
}

export function updateProduct({ productId, data }) {
  return http
    .patch(`/admin/product/update/${productId}`, data)
    .then(({ data }) => data.data);
}
