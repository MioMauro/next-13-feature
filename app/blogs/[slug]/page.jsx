
async function getProducts() {
    // getStaticProps
    const res = await fetch("https://product-app-101-server.vercel.app/api/products")
    return res.json()
}


// getStaticPaths in old Next JS
export async function generateStaticParams() {
const products = await getProducts()

return products.map(product => ({
    slug: product.name.replace(/\s+/g, "-").toLowerCase()
}))
}


export default function BlogDetailPage({params}) {
    return (
        <div className="page">
            <h2>Here Blog detail page: {params.slug}</h2>
        </div>
    )
}