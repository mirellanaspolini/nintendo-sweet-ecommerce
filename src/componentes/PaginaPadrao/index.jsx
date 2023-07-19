import Menu from "componentes/Menu";
import { Outlet } from "react-router-dom";

const PaginaPadrao = () => {
    return (
        <main>
            <Menu />

            <Outlet />
        </main>
    );
}

export default PaginaPadrao;