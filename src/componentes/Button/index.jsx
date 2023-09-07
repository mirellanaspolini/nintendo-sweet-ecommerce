const Button = ({ onclick, children, classBtn = 'default', classe }) => {
    const classes =
        classBtn === 'default'
            ? 'bg-violeta-01 text-branco-puro border-violeta-01 hover:bg-branco hover:text-violeta-01'
            : classBtn === 'secundary'
            ? 'bg-branco-puro text-violeta-01 border-violeta-01 hover:bg-violeta-01 hover:text-branco-puro'
            : classBtn === 'rosa'
            ? 'bg-rosa-01 text-branco-puro border-rosa-01 hover:bg-branco-puro hover:text-rosa-01'
            : '';

    return (
        <>
            <button
                className={`${classe} font-titulos font-medium text-lg sm:text-xl rounded-full border-2 px-3 py-2 sm:py-3 duration-200 ${classes}`}
                onClick={onclick}
            >
                {children}
            </button>
        </>
    );
};

export default Button;
