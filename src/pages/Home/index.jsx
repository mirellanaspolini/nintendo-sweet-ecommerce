import CardProductPromotion from "componentes/CardProductPromotion";
import Category from "componentes/Category";
import Produtos from "componentes/Produtos";
import useAuth from "contexts/useAuth";
import products from "json/produtos.json";
import { useNavigate } from "react-router-dom";

const Home = () => {
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
            <article className="flex flex-col md:flex-row gap-2 sm:gap-5 mb-6">
                <aside className="w-full md:w-1/5">
                    <h3 className="mb-2 text-violeta-02 font-medium font-titulos">
                        Busque por categorias:
                    </h3>
                    <div className="flex gap-2 sm:flex-wrap pb-4 whitespace-nowrap overflow-x-scroll sm:overflow-hidden ">
                        {category.map((c) => (
                            <Category category={c} />
                        ))}
                    </div>
                </aside>
                <div className="flex-1">
                    <CardProductPromotion product={inPromotion} />
                </div>
            </article>
            <hr className="border-t-2 border-lilas mb-6" />
            <Produtos />
        </>
    );
};

export default Home;
