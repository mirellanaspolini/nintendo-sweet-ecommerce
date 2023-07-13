import Botao from "componentes/Botao";
import Input from "componentes/Input";
import useAuth from "contexts/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const { signin } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email | !senha) {
            setError("Preencha todos os campos");
            return;
        }

        const res = signin(email, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate("/home");
    };

    return (
        <form>
            <h1>Fazer login</h1>
            <Input
                placeholder="email@exemplo.com"
                label="Email"
                tipo="email"
                value={email}
                onChange={(e) => {
                    return setEmail(e.target.value), setError("");
                }}
            />
            <Input
                placeholder="No mínimo 8 dígitos"
                label="Senha"
                tipo="password"
                value={senha}
                onChange={(e) => {
                    return [setSenha(e.target.value), setError("")];
                }}
            />
            <p>{error}</p>
            <Botao onclick={handleLogin}>Entrar</Botao>
        </form>
    );
};

export default SignIn;
