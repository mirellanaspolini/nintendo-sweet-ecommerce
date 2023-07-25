import Botao from "componentes/Botao";
import Produtos from "componentes/Produtos";
import useAuth from "contexts/useAuth";
import { useNavigate } from "react-router-dom";
const PaginaInicial = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <>
            <Botao onclick={() => [signout(), navigate("/entrar")]}>Sair</Botao>
            <div>pagina inicial</div>
            <Produtos/>
        </>
    );
};

export default PaginaInicial;
