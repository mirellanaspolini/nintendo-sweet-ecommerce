import CardProduto from "componentes/CardProduct";
import productsList from "json/produtos.json";

const Products = () => {
    return (
        <div>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-3 sm:gap-4">
                {productsList.map((product) => (
                    <ul key={product.id}>
                        <CardProduto product={{ ...product }} />
                    </ul>
                ))}
            </ul>
        </div>
    );
};

export default Products;
