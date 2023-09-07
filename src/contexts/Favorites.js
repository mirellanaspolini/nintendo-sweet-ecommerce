import { createContext, useContext, useState } from "react";

export const FavoriteContext = createContext();
FavoriteContext.displayName = "Favorites";

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

    const addItemFav = (product) => {
        console.log("teste");
        const hasOnFavs = favItems.some((listItem) => listItem.id === product.id)
        if (!hasOnFavs) {
            product.isFavorite = true ;
            return setFavItems((lastList) => [...lastList, product]);
        }
    }

    return { favItems, setFavItems, addItemFav };
};
