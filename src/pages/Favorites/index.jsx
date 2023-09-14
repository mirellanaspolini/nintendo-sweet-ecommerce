import CardProductFavs from "componentes/CardProductFavs";
import ErrorModel from "componentes/ErrorModel";
import { useFavoriteContext } from "contexts/Favorites";

const Favorites = () => {
    const { favItems } = useFavoriteContext();

    return (
        <>
            {favItems.length === 0 ? (
                <ErrorModel
                    title="Você ainda não favoritou nenhum produto!"
                    text="Facilite sua busca! Comece a favoritar nossos produtos e tenha todos os itens de seu interesse no mesmo lugar."
                    img="bg-catBox bg-amarelo-03"
                />
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
