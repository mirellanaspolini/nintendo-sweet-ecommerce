import React, { useState } from "react";
import listaProdutos from "json/produtos.json";
import Botao from "componentes/Botao";
import CardProduto from "componentes/CardProduto";

const Produtos = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredProducts = listaProdutos.filter((product) => {
        const nameMatch = product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const categoryMatch =
            selectedCategory === "" || product.category === selectedCategory;
        return nameMatch && categoryMatch;
    });

    return (
        <div>
            <h2>Lista de Produtos</h2>
            <div>
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
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                    <CardProduto produto={{ ...product }} />
                ))}
            </ul>
        </div>
    );
};

export default Produtos;
