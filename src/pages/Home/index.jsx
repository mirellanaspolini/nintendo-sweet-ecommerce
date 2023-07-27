import Botao from "componentes/Botao";
import Category from "componentes/Category";
import Produtos from "componentes/Produtos";
import useAuth from "contexts/useAuth";
import { useNavigate } from "react-router-dom";
const PaginaInicial = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    const category = [ "Armazenamento", "Thumb Grips", "Capa Protetora", "Transporte", "Nintendo Sports"]

    return (
        <>
            <article>
                <h3 className="mb-2 text-violeta-02 font-medium font-titulos">Busque por categorias:</h3>
                <div className="flex gap-2 flex-wrap w-1/2 mb-6">
                    {category.map((c) => ( <Category category={c}/> ))}
                </div>
            </article>
            <Produtos />
        </>
    );
};

export default PaginaInicial;
