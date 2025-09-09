import { useCart } from "../context/Cart";

const Product = ({ name, price }) => {
    const cartContext = useCart();
    console.log('cartContext', cartContext);

    function onAddToCart() {
        cartContext.setProducts((products) => { return [...products, { name, price }] });
    }
    return (
        <div style={{ padding: "20px", margin: "10px" }}>
            <h2> {name} </h2>
            <p>${price}</p>
            <button onClick={onAddToCart} >Add to Cart</button>
        </div>
    )
}

export default Product