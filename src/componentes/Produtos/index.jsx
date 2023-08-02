import CardProduto from "componentes/CardProduto";
import listaProdutos from "json/produtos.json";
import { useState } from "react";

const Produtos = () => {
    // const [selectedCategory, setSelectedCategory] = useState("");

    // const handleCategoryChange = (event) => {
    //     setSelectedCategory(event.target.value);
    // };

    // const filteredProducts = listaProdutos.filter((product) => {
    //     const categoryMatch =
    //         selectedCategory === "" || product.category === selectedCategory;
    //     return categoryMatch;
    // });

    return (
        <div>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-4">
                {listaProdutos.map((product) => (
                    <ul key={product.id}>
                        <CardProduto produto={{ ...product }} />
                    </ul>
                ))}
            </ul>
        </div>
    );
};

export default Produtos;
