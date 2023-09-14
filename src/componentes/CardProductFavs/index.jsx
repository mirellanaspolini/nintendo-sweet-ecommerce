import { useFavoriteContext } from 'contexts/Favorites';
import { Link } from 'react-router-dom';

const CardProductFavs = ({ product }) => {
    const { removeProductFromFavs } = useFavoriteContext();
    return (
        <li className="list-none">
            <div className="rounded-3xl shadow-lg flex bg-branco-puro">
                <Link className="w-2/5 " to={'/produtos/' + product.slug}>
                    <img
                        className="h-[120px] w-full object-cover rounded-l-3xl"
                        src={product.images[0]}
                        alt={product.name}
                    />
                </Link>

                <div className="p-5 w-full flex flex-col gap-4 justify-between">
                    <div className="flex justify-between">
                        <Link
                            className="w-5/6 cardProduct_name text-rosa-01 font-titulos"
                            to={'/produtos/' + product.slug}
                        >
                            <h3>{product.name}</h3>
                        </Link>
                        <button
                            className="pl-2 w-1/6 max-w-[26px]"
                            onClick={() => removeProductFromFavs(product)}
                        >
                            <img
                                className="w-full"
                                src="/img/icons/Trash_icon.svg"
                                alt={`Excluir produto dos favoritos`}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default CardProductFavs;
