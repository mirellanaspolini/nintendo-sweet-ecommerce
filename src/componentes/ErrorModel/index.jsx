import Button from "componentes/Button";
import Header from "componentes/Header";
import { useNavigate } from "react-router";

const ErrorModel = ({ title, text, img = "bg-cat", fullPage = false }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    };

    const classFullPage = () => {
        if (fullPage) {
            return "h-screen";
        }
    };

    return (
        <section
            className={`${classFullPage()} gap-6 flex items-center justify-center flex flex-col items-center m-auto`}
        >
            <Header classes="rosa">{title}</Header>
            <p className="text-center text-lg text-cinza-06">{text}</p>
            <div
                className={`rounded-xl md:w-1/2 w-4/5 h-[280px] bg-cover bg-no-repeat bg-center ${img}`}
            ></div>
            <Button classBtn="rosa" onclick={handleClick}>
                Voltar
            </Button>
        </section>
    );
};

export default ErrorModel;
