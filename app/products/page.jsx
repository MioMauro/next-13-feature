import { use } from "react"




//https://product-app-101-server.vercel.app/api/products
async function getProducts() {
    // getStaticProps
    const res = await fetch("https://product-app-101-server.vercel.app/api/products")
    return res.json()
}

export default function ProductsPage() {
    const products = use(getProducts())

return (
    <div className="page">
    <h1>Hi there Products Page</h1>
    <div>
    { products.map(product =>
        <div key={product.name}>
        {product.name}
        </div>
        )}
        </div>
        </div>
)
}