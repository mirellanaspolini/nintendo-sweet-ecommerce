import DefaultPage from "componentes/DefaultPage";
import ProductPageModel from "componentes/ProductPageModel";
import products from "json/produtos.json";
import NotFound from "pages/NotFound";
import { Route, Routes, useParams } from "react-router-dom";

const ProductPage = () => {
    const params = useParams();
    const product = products.find((product) => {
        return product.slug === params.slug;
    });
    if (!product) <NotFound />;

    return (
        <Routes>
            <Route path="*" element={<DefaultPage />}>
                <Route
                    index
                    element={
                        <ProductPageModel
                            product={{ ...product }}
                        ></ProductPageModel>
                    }
                ></Route>
            </Route>
        </Routes>
    );
};

export default ProductPage;
