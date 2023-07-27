import DefaultPage from "componentes/DefaultPage";
import useAuth from "contexts/useAuth";
import NotFound from "pages/NotFound";
import SearchResults from "pages/SearchResults";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProductPage from "pages/ProductPage";

const Private = ({ Item }) => {
    const { signed } = useAuth();
    return signed > 0 ? <Item /> : <></>;
};

function AppRoutes() {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<DefaultPage />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="search" element={<SearchResults />} />
                    </Route>

                    <Route path="/entrar" element={<SignIn />}></Route>
                    <Route path="/cadastre-se" element={<SignUp />}></Route>

                    <Route path="/produtos/:slug" element={<ProductPage />} /> {/* curso ola mundo - alura */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default AppRoutes;
