import AddCartButton from "componentes/AddCartButton";
import AddFavButton from "componentes/AddFavButton";
import Button from "componentes/Button";
import Input from "componentes/Input";
import Rating from "componentes/Rating";
import { useCartContext } from "contexts/Cart";
import { useFavoriteContext } from "contexts/Favorites";
import ReactImageGallery from "react-image-gallery";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ProductPageModel = ({ product }) => {
    const { cartItems, addProduct, removeProduct } = useCartContext();
    const { fav } = useFavoriteContext();
    const cartProducts = cartItems.find(
        (cartItem) => cartItem.id === product.id
    );

    const items = product.images.map((img) => {
        return {
            thumbnail: img,
            original: img,
            originalClass:
                "rounded-lg h-[280px] sm:h-[360px] object-cover lg:h-[360px]",
            thumbnailClass: "rounded-3xl max-w-[100px] w-1/3",
        };
    });

    return (
        <>
            <article className="flex flex-col md:flex-row gap-5 mb-9">
                <div className="w-full md:w-2/5 border-4 border-indigo-500/100 imageGalley-wrapper">
                    <ReactImageGallery
                        items={items}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showNav={false}
                    />
                </div>

                <div className="sm:w-3/5">
                    <h3 className="text-xl text-violeta-01 font-titulos mb-2">
                        {product.name}
                    </h3>
                    <Rating rating={product.rating} />
                    {product.inPromotion[0] ? (
                        <>
                            <p className="line-through text-lg text-rosa-02 font-titulos">
                                R$
                                {product.price.toFixed(2)}
                            </p>
                            <h2
                                className={
                                    "text-3xl text-rosa-01 mb-5 font-titulos"
                                }
                            >
                                R$
                                {(
                                    product.price -
                                    product.price * product.inPromotion[1]
                                ).toFixed(2)}
                            </h2>
                        </>
                    ) : (
                        <h2 className="text-3xl text-rosa-01 mb-4 font-titulos">
                            R$ {product.price.toFixed(2)}
                        </h2>
                    )}
                    <div className="flex items-center gap-2 mb-5">
                        <img src="/img/icons/Shipping_icon.svg" alt="" />
                        <p className="text-cinza-06 font-textos">
                            Calcular frete:
                        </p>
                        <Input size="sm" placeholder="Digite o CEP" />
                    </div>
                    <div className="flex items-center gap-16 mb-5">
                        <p className="text-cinza-06 font-textos">Quantidade:</p>
                        <span className="flex gap-2 items-center">
                            <Button
                                onclick={() => removeProduct(product.id)}
                                classBtn="secundary"
                                classe="btnRemoveQuantity"
                            />
                            {cartProducts?.quantity || 0}
                            <Button
                                onclick={() => addProduct(product)}
                                classe="btnAddQuantity"
                            />
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <AddCartButton onClick={() => addProduct(product)} />
                        <AddFavButton
                            onClick={() => fav(product)}
                            // isFavorite={isFavorite(product.id ? "remover dos favs" : "adicionar aos favs")}
                        />
                    </div>
                </div>
            </article>

            <hr className="border-t-2 border-rosa-01 mb-5" />

            <article>
                <h4 className="text-rosa-01 font-titulos text-xl mb-1">
                    Descrição
                </h4>
                <ReactMarkdown className="font-400 text-lg post-markdown-container font-textos text-cinza-06 ">
                    {product.description}
                </ReactMarkdown>
            </article>
        </>
    );
};

export default ProductPageModel;
