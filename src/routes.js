import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";

function AppRoutes() {
    return (
        <BrowserRouter>
            {/* <Menu /> */}

            <Routes>
                <Route path="/" element={<PaginaInicial />}></Route>

                {/* <Route path="produtos/:slug" element={<PaginaProduto />} /> */}
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>

            {/* <Rodape /> */}
        </BrowserRouter>
    );
}

export default AppRoutes;
