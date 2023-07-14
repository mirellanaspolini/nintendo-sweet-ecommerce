import "./index.css";

import React from "react";

const Input = ({ label, placeholder, onChange, tipo = "text", value }) => {
    return (
        <div>
            <label className="font-sans mb-2 text-xl text-violeta-01" htmlFor={`txt${label}`}>
                {label}
            </label>
            <input
                className=" w-full font-serif text-base border-2 rounded-2xl border-lavanda text-cinza-06 mb-2 py-3.5 px-4"
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
