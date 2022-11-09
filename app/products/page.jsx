
import ProductList from "./ProductList";
import { Suspense } from "react";

export default function ProductsPage() {
return (
    <div className="page">
        <h1>Hi there Products Page</h1>
        <Suspense fallback={<p>Loading Products</p>}>      
        <ProductList />
        </Suspense>
    </div>
)
}