import { createContext, useContext, useState } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Cart";

export const CarrinhoProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    return (
        <CarrinhoContext.Provider value={{ cart, setCart }}>
            {children}
        </CarrinhoContext.Provider>
    );
};

export const useCartContext = () => {
    const { cart, setCart } = useContext(CarrinhoContext);

    const addProduct = (newProduct) => {
        const hasOnCart = cart.some(
            (cartItem) => cartItem.id === newProduct.id
        );
        if (!hasOnCart) {
            newProduct.quantity = 1;
            return setCart((oldCart) => [...oldCart, newProduct]);
        }
        setCart((oldCart) =>
            oldCart.map((cartItem) => {
                if (cartItem.id === newProduct.id) newProduct.quantity += 1;
                return cartItem;
            })
        );
    };

    const removeProduct = (id) => {
        const product = cart.find((cartItem) => cartItem.id === id);
        const lastProduct = product.quantity === 1;
        if (lastProduct) {
            return setCart((cartItem) =>
                cartItem.filter((cartItem) => cartItem.id !== id)
            );
        }
        setCart((cartItem) =>
            cartItem.map((cartItem) => {
                if (cartItem.id === id) {
                    cartItem.quantity -= 1;
                }
                return cartItem;
            })
        );
    };
    return { cart, setCart, addProduct, removeProduct };
};
