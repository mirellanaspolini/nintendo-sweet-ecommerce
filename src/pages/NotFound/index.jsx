import ErrorModel from 'componentes/ErrorModel';
import React from 'react';

const NotFound = () => {

    return (
        <ErrorModel
            fullPage={true}
            title="Página não encontrada!"
            text="Eita... parece que houve algum erro ou página que você procurou não existe."
        />
    );
};

export default NotFound;
