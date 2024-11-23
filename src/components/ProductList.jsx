import products from "../data";
import ProductCard from "./ProductCard";

const ProductList = ({handleAddtoCart}) => {
    return (
        <>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onHandleCart={handleAddtoCart} />
                ))}
            </div>
        </>
    )
}

export default ProductList;
