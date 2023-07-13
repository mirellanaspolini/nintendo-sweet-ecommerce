import "./index.css";

import React from "react";

const Botao = ({ onclick, children, estilo = "padrao" }) => {
    return <button className={`btn-${estilo} btn`} onClick={onclick}>{children}</button>;
};

export default Botao;
