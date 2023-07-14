import Botao from "componentes/Botao";
import Input from "componentes/Input";
import useAuth from "contexts/useAuth";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

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
        <div className="h-screen flex items-center justify-center">
            <form className="rounded-3xl shadow-lg p-14 flex flex-col gap-2 w-[480px] ">
                <img
                    className="w-[200px] self-center mb-5"
                    src="/img/NS-logo.svg"
                    alt=""
                />
                <h1 className="text-violeta-01 text-3xl text-center">
                    Fazer login
                </h1>
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
                <Link className="text-end font-serif underline text-pink-600" to="/cadastre-se">
                    Esqueci minha senha
                </Link>
                <p>{error}</p>
                <Botao onclick={handleLogin}>Entrar</Botao>
                <p className="text-center font-serif text-lavanda">
                    Não tem uma conta? &nbsp;
                    <Link className="text-pink-600 underline" to="/cadastre-se">Criar conta</Link>
                </p>
            </form>
        </div>
    );
};

export default SignIn;
