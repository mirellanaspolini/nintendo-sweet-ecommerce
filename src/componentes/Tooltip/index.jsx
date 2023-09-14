import React from 'react';

const Tooltip = ({ children }) => {
    return (
        <div
            style={{ transform: 'translateX(-50%)' }}
            className="absolute bottom-[130%] left-[50%] translate-x-1/2 bg-branco-puro p-2 rounded-2xl border-2 whitespace-nowrap border-rosa-01"
        >
            <p className="text-rosa-01 font-titulos">{children}</p>
        </div>
    );
};

export default Tooltip;
