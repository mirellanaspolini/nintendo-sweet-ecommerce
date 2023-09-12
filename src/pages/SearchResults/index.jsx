import Button from "componentes/Button";
import CardProduto from "componentes/CardProduct";
import Header from "componentes/Header";
import productList from "json/produtos.json";
import { useLocation, useNavigate } from "react-router-dom";

const SearchResults = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");
    const category = searchParams.get("category");
    const navigate = useNavigate();

    const searchProducts = (query) => {
        return productList.filter((product) => {
            return product.name.toLowerCase().includes(query.toLowerCase());
        });
    };

    const searchProductByCategory = (category) => {
        return productList.filter((product) => {
            return product.category
                .toLowerCase()
                .includes(category.toLowerCase());
        });
    };

    let searchResults = [];

    if (query !== null) {
        searchResults = searchProducts(query);
    } else if (category !== null) {
        searchResults = searchProductByCategory(category);
    }

    const handleClick = () => {
        navigate("/");
    };

    return (
        <section>
            {searchResults.length == 0 ? (
                <div className="gap-6 flex items-center pt-4 flex flex-col items-center m-auto">
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
                    <Button classBtn="rosa" onclick={handleClick}>
                        Voltar para a página principal
                    </Button>
                </div>
            ) : (
                <>
                    <div className="flex items-center gap-4 mb-4">
                        <button  className="rosa p-3 py-2 bg-branco rounded-xl border-2 hover:border-violeta-01" onclick={()=> navigate("/")}>
                            <img src="/img/icons/arrow-left_icon.svg" width="20px" alt="" />
                        </button>
                        <h2 className="text-violeta-01 font-bold font-titulos">
                            Resultados de busca para "{query}
                            {category}":
                        </h2>
                    </div>
                    {/* filtros */}
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
        </section>
    );
};

export default SearchResults;
