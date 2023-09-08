import AddCartButton from 'componentes/AddCartButton';
import Rating from 'componentes/Rating';
import { Link } from 'react-router-dom';

const CardProduct = ({ product }) => {
    return (
        <div className="font-medium font-titulos rounded-3xl shadow-lg bg-branco-puro">
            <Link to={'/produtos/' + product.slug}>
                <img
                    className="w-full h-[200px] object-cover rounded-t-3xl"
                    src={product.images[0]}
                    alt={product.name}
                />
            </Link>

            <div className="p-4 h-min">
                <Rating rating={product.rating} />
                {product.inPromotion[0] ? (
                    <>
                        <h2
                            className={
                                'text-lg inline sm:text-2xl align-middle text-rosa-01 mr-2'
                            }
                        >
                            R$
                            {(
                                product.price -
                                product.price * product.inPromotion[1]
                            ).toFixed(2)}
                        </h2>
                        <p className="line-through inline align-middle text-base text-rosa-02 font-titulos">
                            R$
                            {product.price.toFixed(2)}
                        </p>
                    </>
                ) : (
                    <h2 className="text-lg sm:text-2xl text-rosa-01">
                        R$ {product.price.toFixed(2)}
                    </h2>
                )}

                <Link to={'/produtos/' + product.slug}>
                    <h3
                        className="mb-4 text-base sm:text-lg text-rosa-03 cardProduct_name"
                        title={product.name}
                    >
                        {product.name}
                    </h3>
                </Link>
            </div>
        </div>
    );
};

export default CardProduct;
