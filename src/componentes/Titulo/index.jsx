const Titulos = ({ corTexto, children }) => {
    const classes = corTexto === "rosa" ? "text-rosa-01" : "text-violeta-01";

    return (
        <h1 className={` ${classes} font-bold text-4xl text-center`}>
            {children}
        </h1>
    );
};

export default Titulos;
