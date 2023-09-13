import Button from "componentes/Button";
import CardProductFavs from "componentes/CardProductFavs";
import Header from "componentes/Header";
import { useFavoriteContext } from "contexts/Favorites";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
    const { favItems, isFavorite } = useFavoriteContext();
    const navigate = useNavigate();
    const handleClick = () => navigate("/");

    return (
        <>
            {favItems.length == 0 ? (
                <section className="gap-6 flex items-center pt-4 flex flex-col items-center m-auto">
                    <Header corTexto="rosa">
                        Você ainda não favoritou nenhum produto!
                    </Header>
                    <p className="text-center text-lg text-cinza-06">
                        Facilite sua busca! Comece a favoritar nossos produtos e
                        tenha todos os itens de seu interesse no mesmo lugar.
                    </p>
                    <div className="rounded-t-lg w-full ">
                        <img
                            className="rounded-b-lg m-auto h-[250px] bg-amarelo-03"
                            src="../img/ilustracoes/gatos_caixa.svg"
                            alt="Gato branco brincando com um novelo de lã amarelo"
                        />
                    </div>
                    <Button classBtn="rosa" onclick={handleClick}>
                        Explorar produtos
                    </Button>
                </section>
            ) : (
                <>
                    <h3 className="mb-4 text-base sm:text-lg font-titulos text-rosa-01">
                        Meus favoritos
                    </h3>
                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {favItems.map((product) => (
                            <CardProductFavs
                                key={product.id}
                                product={{ ...product }}
                            />
                        ))}
                    </section>
                </>
            )}
        </>
    );
};

export default Favorites;
