import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "componentes/PaginaPadrao";
import useAuth from "contexts/useAuth";
import NotFound from "páginas/NotFound";
import { Fragment } from "react";
import PaginaInicial from "./páginas/PaginaInicial";
import SignIn from "./páginas/SignIn";
import SignUp from "./páginas/SignUp";
import SearchResults from "páginas/SearchResults";

const Private = ({ Item }) => {
    const { signed } = useAuth();
    return signed > 0 ? <Item /> : <></>;
};

function AppRoutes() {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<PaginaPadrao />}>
                        <Route path="home" element={<PaginaInicial />} />
                        <Route path="search" element={<SearchResults />} />
                    </Route>

                    <Route path="/entrar" element={<SignIn />}></Route>
                    <Route path="/cadastre-se" element={<SignUp />}></Route>

                    {/* <Route path="produtos/:slug" element={<PaginaProduto />} /> */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default AppRoutes;
