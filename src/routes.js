import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Menu from "./componentes/Menu";
import NotFound from "componentes/NotFound";
import useAuth from "contexts/useAuth";
import { Fragment } from "react";
import PaginaInicial from "./componentes/PaginaInicial";
import SignIn from "./componentes/SignIn";
import SignUp from "./componentes/SignUp";

const Private = ({ Item }) => {
    const { logado } = useAuth();
    return logado > 0 ? <Item /> : <SignIn />;
};

function AppRoutes() {
    return (
        <BrowserRouter>
            <Fragment>
                {/* <Menu /> */}

                <Routes>
                    <Route
                        path="/"
                        element={<Private Item={PaginaInicial} />}
                    ></Route>
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
