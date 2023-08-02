import CardProductPromotion from "componentes/CardProductPromotion";
import Category from "componentes/Category";
import Produtos from "componentes/Produtos";
import useAuth from "contexts/useAuth";
import products from "json/produtos.json";
import { useNavigate } from "react-router-dom";

const PaginaInicial = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    const inPromotion = products.find((product) => {
        return product.inPromotion[0] === true;
    });
    if (!inPromotion) <></>;

    const category = [
        "Armazenamento",
        "Thumb Grips",
        "Capa Protetora",
        "Transporte",
        "Nintendo Sports",
    ];

    return (
        <>
            <article className="flex gap-5 mb-6">
                <aside className="w-1/5">
                    <h3 className="mb-2 text-violeta-02 font-medium font-titulos">
                        Busque por categorias:
                    </h3>
                    <div className="flex gap-2 flex-wrap mb-6">
                        {category.map((c) => (
                            <Category category={c} />
                        ))}
                    </div>
                </aside>
                <div className="flex-1">
                    <CardProductPromotion produto={inPromotion} />
                </div>
            </article>
            <hr className="border-t-2 border-lavanda mb-6" />
            <Produtos />
        </>
    );
};

export default PaginaInicial;
