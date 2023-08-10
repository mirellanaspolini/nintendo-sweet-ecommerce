import Button from "componentes/Button";
import Input from "componentes/Input";
import Header from "componentes/Header";
import useAuth from "contexts/useAuth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
        } else if (senha.length < 8) {
            setError("A senha precisa ter pelo menos 8 caracteres");
            return;
        }

        const res = signin(email, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate("/");
    };

    return (
        <section className="h-screen flex items-center justify-center">
            <form className="rounded-3xl shadow-2xl  p-14 flex flex-col gap-2 w-[480px]">
                <img
                    className="h-[40px] inline self-center mb-5"
                    src="./img/NS-logo.svg"
                    alt="Logo da Nintendo Sweet"
                />
                <Header>Fazer login</Header>
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
                <Link
                    className="text-end font-textos underline text-pink-600"
                    to="#"
                >
                    Esqueci minha senha
                </Link>
                <p className="font-textos text-pink-600">{error}</p>
                <Button onclick={handleLogin}>Entrar</Button>
                <p className="text-center font-textos text-lilas">
                    Não tem uma conta? &nbsp;
                    <Link className="text-pink-600 underline" to="/cadastre-se">
                        Criar conta
                    </Link>
                </p>
            </form>
        </section>
    );
};

export default SignIn;
