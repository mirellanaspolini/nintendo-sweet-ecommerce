import CardProduto from "componentes/CardProduct";
import ErrorModel from "componentes/ErrorModel";
import productList from "json/produtos.json";
import { Link, useLocation } from "react-router-dom";

const SearchResults = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");
    const category = searchParams.get("category");
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

    return (
        <section>
            {searchResults.length === 0 ? (
                <ErrorModel
                    title="Ops! Não encontramos nenhum resultado para a sua busca"
                    text="Experimente fazer uma nova busca com termos diferentes, ou explore nossas categorias para encontrar o que procura!"
                    img="bg-cat"
                />
            ) : (
                <>
                    <div className="flex items-center gap-4 mb-4">
                        <Link
                            className="bg-arrowLeft bg-center bg-no-repeat bg-contain rosa p-3 py-2 bg-branco rounded-xl hover:border-violeta-01"
                            to="/"
                            aria-label="Voltar para a página inicial"
                        />
                        <h1 className="text-violeta-01 text-lg font-bold font-titulos">
                            Resultados de busca para "{query}
                            {category}":
                        </h1>
                    </div>
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
