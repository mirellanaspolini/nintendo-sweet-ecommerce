import { createContext, useContext, useState } from 'react';

export const FavoriteContext = createContext();
FavoriteContext.displayName = 'Favorites';

export const FavoriteProvider = ({ children }) => {
    const [favItems, setFavItems] = useState([]);

    return (
        <FavoriteContext.Provider value={{ favItems, setFavItems }}>
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavoriteContext = () => {
    const { favItems, setFavItems } = useContext(FavoriteContext);

    const addFavItem = (product) => {
        const hasOnFavs = favItems.some(
            (listItem) => listItem.id === product.id
        );
        if (!hasOnFavs) {
            product.isFavorite = true;
            return setFavItems((lastList) => [...lastList, product]);
        }
        setFavItems((lastList) =>
            lastList.filter((favItems) => {
                favItems.isFavorite = false;
                return favItems.id !== product.id;
            })
        );
    };

    const removeProductFromFavs = (product) => {
        setFavItems((favItem) => {
            return favItem.filter((favItem) => favItem.id !== product.id);
        });
    };

    return { favItems, setFavItems, addFavItem, removeProductFromFavs };
};
