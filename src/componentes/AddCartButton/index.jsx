import Tooltip from 'componentes/Tooltip';
import { useCartContext } from 'contexts/Cart';
import useAuth from 'contexts/useAuth';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const AddCartButton = ({ product, quantity }) => {
    const { signed } = useAuth();
    const { addProduct } = useCartContext();
    const isLoggedIn = () => (signed > 0 ? true : false);
    const [showTooltip, setShowTooltip] = useState(false);

    const navigate = useNavigate();

    const handleOnClick = () => {
        if (!isLoggedIn) {
            navigate('/');
        }
        addProduct(product, quantity);
        setShowTooltip(true);
        setTimeout(() => {
            setShowTooltip(false);
        }, 2000);
    };
    return (
        <div className="relative">
            {showTooltip && <Tooltip>Item adicionado ao carrinho!</Tooltip>}
            <button
                type="button"
                onClick={handleOnClick}
                className={`addCartButton w-full px-[.85rem] duration-100 px-3 py-3 duration-00 font-titulos rounded-full border-2 border-violeta-01 hover:bg-branco bg-violeta-01 text-sm sm:text-base hover:text-violeta-01 text-branco text-medium `}
            >
                Adicionar ao carrinho
            </button>
        </div>
    );
};

export default AddCartButton;
