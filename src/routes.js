import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Menu from "./componentes/Menu";
import PaginaPadrao from "componentes/PaginaPadrao";
import useAuth from "contexts/useAuth";
import NotFound from "páginas/NotFound";
import { Fragment } from "react";
import PaginaInicial from "./páginas/PaginaInicial";
import SignIn from "./páginas/SignIn";
import SignUp from "./páginas/SignUp";

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
                    </Route>

                    <Route path="/entrar" element={<SignIn />}></Route>
                    <Route path="/cadastre-se" element={<SignUp />}></Route>

                    {/* <Route path="produtos/:slug" element={<PaginaProduto />} /> */}
                    <Route path="*" element={<NotFound />} />
                </Routes>

                {/* <Rodape /> */}
            </Fragment>
        </BrowserRouter>
    );
}

export default AppRoutes;
