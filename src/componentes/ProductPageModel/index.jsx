import Botao from "componentes/Botao";
import ReactImageGallery from "react-image-gallery";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ProductPageModel = ({ product }) => {
    const fullStars = Math.floor(product.rating);
    const emptyStars = 5 - fullStars;

    const renderFullStars = () => {
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<img src="/img/icons/star-filled_icon.svg" alt />);
        }
        return stars;
    };
    const renderEmptyStars = () => {
        const stars = [];
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<img src="/img/icons/star_icon.svg" alt />);
        }
        return stars;
    };

    console.log(product.inPromotion);

    const items = product.images.map((img) => {
        console.log(img);
        return {
            thumbnail: img,
            original: img,
            originalClass: "rounded-lg  h-[280px] sm:h-[360px] object-cover lg:h-[360px]",
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

                <div className="w-3/5">
                    <h3 className="text-xl text-violeta-01 font-titulos mb-2">
                        {product.name}
                    </h3>
                    <div className="flex gap-1 mb-4">
                        {renderFullStars()}
                        {renderEmptyStars()}
                    </div>

                    {product.inPromotion[0] ? (
                        <>
                            <p className="line-through text-lg text-rosa-02 font-titulos">
                                R$
                                {product.price.toFixed(2)}
                            </p>
                            <h2
                                className={
                                    "text-3xl text-rosa-01 mb-4 font-titulos"
                                }
                            >
                                R$
                                {(
                                    product.price -
                                    product.price * product.inPromotion[1]
                                ).toFixed(2)}
                            </h2>
                        </>
                    ) : (<h2 className="text-3xl text-rosa-01 mb-4 font-titulos">
                        R$ {product.price.toFixed(2)}
                    </h2>)}
                    

                    {/* ------------------------------------ */}
                    <div className="flex items-center gap-16">
                        <p>Quantidade:</p>
                        <span className="flex gap-2 items-center">
                            <Botao
                                classeBtn="secundario"
                                classe="py-0 px-0 sm:py-0"
                            >
                                <svg
                                    className="hover:fill-branco fill-violeta-01"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0 5.75C0 5.55109 0.0790175 5.36032 0.21967 5.21967C0.360322 5.07902 0.551088 5 0.75 5H11.25C11.4489 5 11.6397 5.07902 11.7803 5.21967C11.921 5.36032 12 5.55109 12 5.75C12 5.94891 11.921 6.13968 11.7803 6.28033C11.6397 6.42098 11.4489 6.5 11.25 6.5H0.75C0.551088 6.5 0.360322 6.42098 0.21967 6.28033C0.0790175 6.13968 0 5.94891 0 5.75Z"
                                    />
                                </svg>
                            </Botao>
                            {product.quantity}
                            <Botao classe="py-0 px-0 sm:py-0">
                                <svg
                                    className=" hover:fill-violeta-01 fill-branco"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                >
                                    <path
                                        d="M6.75 0.75C6.75 0.551088 6.67098 0.360322 6.53033 0.21967C6.38968 0.0790175 6.19891 0 6 0C5.80109 0 5.61032 0.0790175 5.46967 0.21967C5.32902 0.360322 5.25 0.551088 5.25 0.75V5.25H0.75C0.551088 5.25 0.360322 5.32902 0.21967 5.46967C0.0790175 5.61032 0 5.80109 0 6C0 6.19891 0.0790175 6.38968 0.21967 6.53033C0.360322 6.67098 0.551088 6.75 0.75 6.75H5.25V11.25C5.25 11.4489 5.32902 11.6397 5.46967 11.7803C5.61032 11.921 5.80109 12 6 12C6.19891 12 6.38968 11.921 6.53033 11.7803C6.67098 11.6397 6.75 11.4489 6.75 11.25V6.75H11.25C11.4489 6.75 11.6397 6.67098 11.7803 6.53033C11.921 6.38968 12 6.19891 12 6C12 5.80109 11.921 5.61032 11.7803 5.46967C11.6397 5.32902 11.4489 5.25 11.25 5.25H6.75V0.75Z"
                                        fill=""
                                    />
                                </svg>
                            </Botao>
                        </span>
                    </div>
                </div>
            </article>

            <hr className="border-t-2 border-amarelo-02 mb-5" />

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
