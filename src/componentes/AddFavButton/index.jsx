import { useFavoriteContext } from 'contexts/Favorites';
import useAuth from 'contexts/useAuth';
import { useNavigate } from 'react-router-dom';

const AddFavButton = ({ isFavorite, product }) => {
    const { signed } = useAuth();
    const isLoggedIn = () => (signed > 0 ? true : false);
    const { addFavItem } = useFavoriteContext();
    const navigate = useNavigate();
    
    const handleOnClick = () => {
        if (!isLoggedIn()) {
            navigate("/entrar");
        }
        addFavItem(product);
    };

    return (
        <div>
            <button
                onClick={handleOnClick}
                className={`addFavButton w-full px-[.85rem] duration-100 px-3 py-3 duration-00 font-titulos bg-branco rounded-full border-2 border-violeta-01 hover:bg-violeta-01 text-sm sm:text-base text-violeta-01 hover:text-branco text-medium `}
            >
                {isFavorite}
            </button>
        </div>
    );
};

export default AddFavButton;
