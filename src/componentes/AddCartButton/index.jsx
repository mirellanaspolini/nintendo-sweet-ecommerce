import React from "react";

const AddCartButton = () => {
    return (
        <div className="self-stretch w-full w-full">
            <button
                className={`addCartButton w-fullpx-[.85rem] duration-100 sm:px-5 sm:py-3 duration-00 font-titulos bg-branco rounded-full border-2 border-violeta-01 hover:bg-violeta-01 text-base text-violeta-01 hover:text-branco text-medium `}
            >
                Adicionar ao carrinho
            </button>
        </div>
    );
};

export default AddCartButton;
