import { createContext, useContext, useState } from "react";
import listaprodutos from "json/produtos.json";

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

    return { favItems, setFavItems };
};
