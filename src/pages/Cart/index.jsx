import Botao from "componentes/Botao";
import CardProductCart from "componentes/CardProductCart";
import CardProduto from "componentes/CardProduto";
import Header from "componentes/Header";
import { useCartContext } from "contexts/Cart";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart, addProduct, removeProduct } = useCartContext();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    };
    return (
        <>
            {cart.length == 0 && (<section className="h-screen gap-6 flex items-center pt-4 flex flex-col items-center m-auto">
                    <Header corTexto="rosa">
                        Seu carrinho está vazio!
                    </Header>
                    <p className="text-center text-lg text-cinza-06">
                    Poxa, parece que você ainda não adicionou nenhum produto no seu carrinho. Continue navegando e descubra tudo que temos a oferecer!
                    </p>
                    <div className="rounded-t-lg w-full ">
                        <img
                            className="rounded-b-lg m-auto h-[250px] bg-amarelo-02"
                            src="../img/ilustracoes/gatos_caixa.svg"
                            alt="Gato branco brincando com um novelo de lã amarelo"
                        />
                    </div>
                    <Botao classeBtn="rosa" onclick={handleClick}>
                        Voltar para a página principal
                    </Botao>
                </section>)
            }

            <section className="flex flex-col md:flex-row gap-5 w-full">
                <ul className="w-full md:w-1/2">
                    {cart.map((product) => (
                        <CardProductCart key={product.id} product={{ ...product }} />
                    ))}
                </ul>
            
                <div className="w-full md:w-1/2 bg-lilas">asdasdasd</div>

            </section>

        </>
    );
};

export default Cart;
