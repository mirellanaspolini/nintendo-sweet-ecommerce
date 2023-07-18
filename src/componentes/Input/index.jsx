import React from "react";

const Input = ({
    label,
    classe,
    placeholder,
    onChange,
    tipo = "text",
    value,
}) => {
    return (
        <div>
            <label
                className="font-titulo font-medium mb-2 text-xl text-violeta-01"
                htmlFor={`txt${label}`}
            >
                {label}
            </label>
            <input
                className={`${classe} w-full font-textos text-base border-2 rounded-2xl border-violeta-01 text-cinza-06 mb-2 py-3.5 px-4`}
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
