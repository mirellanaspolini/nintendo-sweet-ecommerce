import CardProductPromotion from 'componentes/CardProductPromotion';
import Category from 'componentes/Category';
import Products from 'componentes/Products';
import products from 'json/produtos.json';

const Home = () => {
    const inPromotion = products.find((product) => {
        return product.inPromotion[0] === true;
    });
    if (!inPromotion) <></>;

    const category = [
        {
            id: 0,
            category: 'Armazenamento',
        },
        {
            id: 1,
            category: 'Thumb Grips',
        },
        {
            id: 2,
            category: 'Capa Protetora',
        },
        {
            id: 3,
            category: 'Transporte',
        },
        {
            id: 4,
            category: 'Nintendo Sports',
        },
    ];

    return (
        <>
            <article className="flex flex-col md:flex-row gap-2 sm:gap-5 mb-6">
                <aside className="w-full md:w-1/5">
                    <h3 className="mb-2 text-violeta-02 font-medium font-titulos">
                        Busque por categorias:
                    </h3>
                    <div className="flex gap-2 sm:flex-wrap pb-4 whitespace-nowrap overflow-x-scroll sm:overflow-hidden">
                        {category.map((item) => (
                            <Category key={item.id} category={item.category} />
                        ))}
                    </div>
                </aside>
                <div className="flex-1">
                    <CardProductPromotion product={inPromotion} />
                </div>
            </article>
            <hr className="border-t-2 border-lilas mb-6" />
            {/* filtros */}
            <Products />
        </>
    );
};

export default Home;
