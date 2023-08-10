import { createContext, useContext, useState } from "react";

export const CartContext = createContext();
CartContext.displayName = "Cart";

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    const { cartItems, setCartItems } = useContext(CartContext);

    const addProduct = (newProduct) => {
        const hasOnCart = cartItems.some(
            (cartItem) => cartItem.id === newProduct.id
        );
        if (!hasOnCart) {
            newProduct.quantity = 1;
            return setCartItems((oldCart) => [...oldCart, newProduct]);
        }
        setCartItems((oldCart) =>
            oldCart.map((cartItem) => {
                if (cartItem.id === newProduct.id) cartItem.quantity += 1;
                return cartItem;
            })
        );
    };

    const removeProduct = (id) => {
        const product = cartItems.find((cartItem) => cartItem.id === id);
        const lastProduct = product.quantity === 1;
        if (lastProduct) {
            return setCartItems((cartItem) =>
                cartItem.filter((cartItem) => cartItem.id !== id)
            );
        }
        setCartItems((cartItem) =>
            cartItem.map((cartItem) => {
                if (cartItem.id === id) cartItem.quantity -= 1;
                return cartItem;
            })
        );
    };

    const calculateCartTotal = () => {
        const total = cartItems.reduce((accumulator, cartItem) => {
            return accumulator + cartItem.price * cartItem.quantity;
        }, 0);
        return total;
    };

    return {
        cartItems,
        setCartItems,
        addProduct,
        removeProduct,
        calculateCartTotal,
    };
};
