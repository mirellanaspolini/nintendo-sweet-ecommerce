const Header = ({ classes, children }) => {
    const corTexto = classes.includes("rosa")
        ? "text-rosa-01"
        : "text-violeta-01";

    return (
        <h1
            className={` ${corTexto} ${classes} font-titulos font-bold text-2xl text-center`}
        >
            {children}
        </h1>
    );
};

export default Header;
