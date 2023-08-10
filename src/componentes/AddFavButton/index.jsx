import React from "react";

const AddFavButton = ({isFavorite}) => {
    return (
        <div className="">
            <button
                className={`addFavButton w-full px-[.85rem] duration-100 px-3 py-3 duration-00 font-titulos bg-branco rounded-full border-2 border-violeta-01 hover:bg-violeta-01 text-sm sm:text-base text-violeta-01 hover:text-branco text-medium `}
            >
                {isFavorite}
            </button>
        </div>
    );
};

export default AddFavButton;
