import DefaultPage from "componentes/DefaultPage";
import ProductPage from "componentes/ProductPage";
import { CarrinhoProvider } from "contexts/Cart";
import useAuth from "contexts/useAuth";
import NotFound from "pages/NotFound";
import SearchResults from "pages/SearchResults";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Cart from "pages/Cart";

const Private = ({ Item }) => {
    const { signed } = useAuth();
    return signed > 0 ? <Item /> : <></>;
};

function AppRoutes() {
    return (
        <CarrinhoProvider>
            <BrowserRouter>
                <Fragment>
                    <Routes>
                        <Route path="/" element={<DefaultPage />}>
                            <Route path="/" element={<HomePage />} />
                            <Route path="search" element={<SearchResults />} />
                            <Route path="/carrinho" element={<Cart />} />
                        </Route>
                        <Route path="/entrar" element={<SignIn />}></Route>
                        <Route path="/cadastre-se" element={<SignUp />}></Route>
                        <Route
                            path="/produtos/:slug/*"
                            element={<ProductPage />}
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Fragment>
            </BrowserRouter>
        </CarrinhoProvider>
    );
}

export default AppRoutes;
