const Header = ({ corTexto, children }) => {
    const classes = corTexto === "rosa" ? "text-rosa-01" : "text-violeta-01";

    return (
        <h1 className={` ${classes} font-titulos font-bold text-2xl text-center`}>
            {children}
        </h1>
    );
};

export default Header;
