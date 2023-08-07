import React from "react";

const AddCartButton = ({ onClick }) => {
    return (
        <div>
            <button
                type="button"
                onClick={onClick}
                className={`addCartButton w-full px-[.85rem] duration-100 px-3 py-3 duration-00 font-titulos rounded-full border-2 border-violeta-01 hover:bg-branco bg-violeta-01 text-sm sm:text-base hover:text-violeta-01 text-branco text-medium `}
            >
                Adicionar ao carrinho
            </button>
        </div>
    );
};

export default AddCartButton;
