import Menu from "componentes/Menu";
import { Outlet } from "react-router-dom";

const PaginaPadrao = () => {
    return (
        <div>
            <Menu />

            <main className="m-4 md:m-6">
                <Outlet />
            </main>
        </div>
    );
};

export default PaginaPadrao;
