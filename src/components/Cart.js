import { useCart } from "../context/Cart";

const Cart = () => {
    const cartContext = useCart();
    const products = cartContext.products;
    const totalBillAmount = products.reduce((sum, product) => sum + product.price, 0);

    return (
        <div>
            <ul>
                {products.map((product, index) => {
                    return <li key={index} >
                        <p>
                            {product.name} - ${product.price}
                        </p>
                    </li>
                })}
            </ul>
            <h3>Total Bill: $ {totalBillAmount}</h3>
        </div>
    )
}

export default Cart