import "./index.css";

import React from "react";

const Input = ({ label, placeholder, onChange, tipo = "text", value }) => {
    return (
        <>
            {/* onchange dos inputs com ''setemail(e.target.value), seterror */}

            <label htmlFor={`txt${label}`}>{label}</label>
            <input
                type={tipo}
                id={`txt${label}`}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </>
    );
};

export default Input;
