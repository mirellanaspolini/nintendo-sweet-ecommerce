import CardProduto from "componentes/CardProduto";
import listaProdutos from "json/produtos.json";
import { useState } from "react";

const Produtos = () => {
    // const [searchTerm, setSearchTerm] = useState("");
    // const [selectedCategory, setSelectedCategory] = useState("");

    // const handleSearchChange = (event) => {
    //     setSearchTerm(event.target.value);
    // };

    // const handleCategoryChange = (event) => {
    //     setSelectedCategory(event.target.value);
    // };

    // const filteredProducts = listaProdutos.filter((product) => {
    //     const nameMatch = product.name
    //         .toLowerCase()
    //         .includes(searchTerm.toLowerCase());
    //     const categoryMatch =
    //         selectedCategory === "" || product.category === selectedCategory;
    //     return nameMatch && categoryMatch;
    // });

    return (
        <div>
            {/* <div>
                <input
                    type="text"
                    placeholder="Pesquisar por nome"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    <option value="">Todas as categorias</option>
                    <option value="armazenamento">Armazenamento</option>
                    <option value="categoria2">Categoria 2</option>
                </select>
            </div> */}
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-4">
                {listaProdutos.map((product) => (
                    <CardProduto key={product.id} produto={{ ...product }} />
                ))}
            </ul>
        </div>
    );
};

export default Produtos;
