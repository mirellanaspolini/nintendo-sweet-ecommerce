import { useNavigate } from 'react-router-dom';

const IconButton = ({ children, icon, arialabel, rota, classe }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(rota);
    };
    return (
        <button
            className={`${icon} ${classe} py-2 px-[.85rem] duration-100 sm:px-5 sm:py-3 duration-00 font-titulos bg-branco rounded-full border-2 border-violeta-01 hover:bg-roxo-hover text-violeta-01 text-medium before:content-[''] before:w-6 before:inline-block before:h-full before:bg-center before:bg-no-repeat before:bg-contain`}
            aria-label={arialabel}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default IconButton;
