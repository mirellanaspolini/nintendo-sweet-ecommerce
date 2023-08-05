import Botao from "componentes/Botao";
import CardProduto from "componentes/CardProduto";
import Header from "componentes/Header";
import productList from "json/produtos.json";
import { useLocation, useNavigate } from "react-router-dom";

const SearchResults = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");
    const navigate = useNavigate();

    const searchProducts = (query) => {
        return productList.filter((product) => {
            return product.name.toLowerCase().includes(query.toLowerCase());
        });
    };

    const searchResults = searchProducts(query);

    const handleClick = () => {
        navigate("/");
    };

    return (
        <div>
            {searchResults.length == 0 ? (
                <section className="h-screen gap-6 flex items-center pt-4 flex flex-col items-center m-auto">
                    <Header corTexto="rosa">
                        Ops! Não encontramos nenhum resultado para a sua busca.
                    </Header>
                    <p className="text-center text-lg text-cinza-06">
                        Experimente fazer uma nova busca com termos diferentes,
                        ou explore nossas categorias para encontrar o que
                        procura
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
                </section>
            ) : (
                <>
                    <h2 className="text-violeta-01 font-bold font-titulos mb-2">
                        Resultados de busca para "{query}":
                    </h2>
                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-3 sm:gap-4">
                        {searchResults.map((product) => (
                            <CardProduto
                                key={product.id}
                                product={{ ...product }}
                            />
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default SearchResults;
