import CardProduto from "componentes/CardProduto";
import { useCartContext } from "contexts/Cart";
import React from "react";

const Cart = () => {
    const { cart, addProduct, removeProduct } = useCartContext();
    return (
        <>
            {cart.map((product) => (
                <CardProduto key={product.id} product={{ ...product }} />
            ))}
        </>
    );
};

export default Cart;
