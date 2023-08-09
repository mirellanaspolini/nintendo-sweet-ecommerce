const Input = ({
    label,
    classe = "",
    placeholder,
    onChange,
    tipo = "text",
    value,
    size = "lg",
}) => {
    const sizeClass =
        size === "lg"
            ? "py-3 px-4 rounded-2xl w-full"
            : size === "sm"
            ? "px-2 py-1 rounded-xl w-[120px]"
            : "";

    return (
        <div>
            <label
                className="font-titulos font-medium mb-2 text-lg text-violeta-01"
                htmlFor={`txt${label}`}
            >
                {label}
            </label>
            <input
                className={`${classe} ${sizeClass} font-textos text-base border-2 border-violeta-01 text-cinza-06 `}
                type={tipo}
                id={`txt${label}`}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default Input;
