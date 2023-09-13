import Button from "componentes/Button";
import CardProductCart from "componentes/CardProductCart";
import Header from "componentes/Header";
import { useCartContext } from "contexts/Cart";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cartItems, calculateCartTotal } = useCartContext();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    };
    return (
        <>
            {cartItems.length == 0 ? (
                <section className="gap-6 flex items-center pt-4 flex flex-col items-center m-auto">
                    <Header corTexto="rosa">Seu carrinho está vazio!</Header>
                    <p className="text-center text-lg text-cinza-06">
                        Poxa, parece que você ainda não adicionou nenhum produto
                        no seu carrinho. Continue navegando e descubra tudo que
                        temos a oferecer!
                    </p>
                    <div className="rounded-t-lg w-full ">
                        <img
                            className="rounded-b-lg m-auto h-[250px] bg-amarelo-03"
                            src="../img/ilustracoes/gatos_caixa.svg"
                            alt="Gato branco brincando com um novelo de lã amarelo"
                        />
                    </div>
                    <Button classBtn="rosa" onclick={handleClick}>
                        Voltar para a página principal
                    </Button>
                </section>
            ) : (
                <>
                    <h3 className="mb-4 text-base sm:text-lg font-titulos text-rosa-01">
                        Meu carrinho
                    </h3>
                    <section className="flex flex-col md:flex-row gap-5 w-full">
                        <ul className="w-full md:w-1/2">
                            {cartItems.map((product) => (
                                <CardProductCart
                                    key={product.id}
                                    product={{ ...product }}
                                />
                            ))}
                        </ul>

                        <div className="relative w-full md:w-1/2 bg-branco-puro shadow-lg p-5 rounded-3xl h-fit grid auto-rows-min grid-cols-2 gap-4 font-titulos text-rosa-03">
                            <p>Valor:</p>
                            <p className="text-right">
                                R$ {calculateCartTotal().toFixed(2)}
                            </p>
                            <p>Frete:</p>
                            <p className="text-right">R$ 00.00</p>
                            <hr className="border-t-2 border-amarelo-01 col-span-full" />
                            <p className="text-rosa-01 text-xl">Valor total:</p>
                            <p className="text-right text-rosa-01 text-xl">
                                R$ {calculateCartTotal().toFixed(2)}
                            </p>
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default Cart;
