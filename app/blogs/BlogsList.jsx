
"use client"
import useSWR from "swr"
import Link from "next/link"

//async function getProducts() {
        // getStaticProps
  //  const res = await fetch("https://product-app-101-server.vercel.app/api/products")
    //return res.json()
//}
const fetcher = (path) => fetch(`https://product-app-101-server.vercel.app/${path}`).then(res => res.json())
export default function BlogList() {
    const blogs = useSWR("api/products", fetcher)

return (    
    <div>
    { blogs.data?.map(blog =>
    <div key={blog.name}>
        <Link href={`/blogs/${blog.name.replace(/\s+/g, "-").toLowerCase()}`}>
        {blog.name}
        </Link>
    </div>
        )}
    </div>
)
}