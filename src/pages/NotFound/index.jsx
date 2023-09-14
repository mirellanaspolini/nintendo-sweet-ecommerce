import Button from 'componentes/Button';
import ErrorModel from 'componentes/ErrorModel';
import Header from 'componentes/Header';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    };
    return (
        <ErrorModel
            title="Página não encontrada!"
            text="Eita... parece que houve algum erro ou página que você procurou não existe."
        />
    );
};

export default NotFound;
