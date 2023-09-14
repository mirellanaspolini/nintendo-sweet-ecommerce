import Button from "componentes/Button";
import { useCartContext } from "contexts/Cart";
import { Link } from "react-router-dom";

const CardProductCart = ({ product }) => {
    const { setCartItems, removeProduct, removeProductFromCart } =
        useCartContext();

    const addProduct = (newProduct) => {
        setCartItems((oldCart) =>
            oldCart.map((cartItem) => {
                if (cartItem.id === newProduct.id) cartItem.quantity += 1;
                return cartItem;
            })
        );
    };
    return (
        <li className="flex flex-col md:flex-row mb-4">
            <div className="rounded-3xl shadow-lg flex bg-branco-puro">
                <Link className="w-2/5 " to={"/produtos/" + product.slug}>
                    <img
                        className="h-full object-cover rounded-l-3xl"
                        src={product.images[0]}
                        alt=""
                    />
                </Link>

                <div className="p-5 w-full flex flex-col gap-4 justify-between">
                    <div className="flex justify-between">
                        <Link
                            className="w-5/6 cardProduct_name text-rosa-01 font-titulos"
                            to={"/produtos/" + product.slug}
                        >
                            <h3>{product.name}</h3>
                        </Link>
                        <button
                            className="pl-2 w-1/6 max-w-[26px]"
                            onClick={() => removeProductFromCart(product.id)}
                            aria-label="Excluir produto do carrinho"
                        >
                            <img
                                className="w-full"
                                src="/img/icons/Trash_icon.svg"
                                alt=""
                            />
                        </button>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="flex gap-2 items-center">
                            <Button
                                onclick={() => removeProduct(product.id)}
                                classes="btnRemoveQuantity secundary"
                                aria-label="Remover uma unidade do produto do carrinho"
                            />
                            <label className="sr-only" htmlFor="txtQuantity">
                                Quantidade:
                            </label>
                            <input
                                id="txtQuantity"
                                type="text"
                                value={product?.quantity}
                                className="w-[20px] text-center"
                                readOnly
                            />
                            <Button
                                onclick={() => addProduct(product)}
                                classes="btnAddQuantity secundary"
                            aria-label="Adicionar mais uma unidade do produto ao carrinho"/>
                        </span>
                        <h5 className="font-titulos text-violeta-01 text-lg">
                            R$
                            {(
                                product.price -
                                product.price * product.inPromotion[1]
                            ).toFixed(2)}
                        </h5>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CardProductCart;
