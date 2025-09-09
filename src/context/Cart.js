import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export const useCart = () => {
    const cartContext = useContext(CartContext);
    return cartContext;
}

export const CartProvider = (props) => {
    const [products, setProducts] = useState([]);
    return (
        <CartContext.Provider value={{ products, setProducts }} >
            {props.children}
        </CartContext.Provider>
    )
}