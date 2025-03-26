import { NextResponse } from "next/server";

export async function middleware(req) {
  const url = req.url; // -> http://localhost:3000/admin
  const pathname = req.nextUrl.pathname; // -> /admin
  //   console.log(url, pathname);
  if (pathname.startsWith("/profile")) {
    // console.log(req.cookies.get("accessToken")); -> {name,value}
    let strCookie = "";
    req.cookies.getAll().forEach((item) => {
      strCookie += `${item?.name}=${item.value}; `;
    });

    const { data } = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          Cookie: strCookie,
        },
      }
    ).then((res) => res.json());
    const { user } = data || {};
      if (!user) NextResponse.redirect(new URL("/auth", url));
      console.log(user);
  }

  if (pathname.startsWith("/admin")) {
    console.log("this is admin req!");
  }
}

export const config = {
  matcher: ["/admin", "/profile"],
};
