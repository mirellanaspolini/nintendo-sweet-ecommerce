import Botao from "componentes/Botao";
import CardProduto from "componentes/CardProduto";
import Titulos from "componentes/Titulo";
import productList from "json/produtos.json";
import { useLocation, useNavigate } from "react-router-dom";

const SearchResults = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");
    const navigate = useNavigate();

    const searchProducts = (query) => {
        return productList.filter((product) => {
            product.name.toLowerCase().includes(query.toLowerCase());
        });
    };

    const searchResults = searchProducts(query);
    console.log(searchResults);

    const handleClick = () => {
        navigate("/home");
    };

    return (
        <div>
            <ul>
                {searchResults > 0 ? (
                    searchResults.map((product) => (
                        <>
                            Resultados de busca para: "{query}"
                            <CardProduto
                                key={product.id}
                                produto={{ ...product }}
                            />
                            <p>{product.name}</p>
                        </>
                    ))
                ) : (
                    <section className="h-screen gap-6 flex items-center justify-center flex flex-col items-center m-auto">
                        <Titulos corTexto="rosa">
                            Ops! Não encontramos nenhum resultado para a sua
                            busca.
                        </Titulos>
                        <p className="text-center text-lg text-cinza-06">
                            Experimente fazer uma nova busca com termos
                            diferentes, ou explore nossas categorias para
                            encontrar o que procura
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
                )}
            </ul>
        </div>
    );
};

export default SearchResults;
