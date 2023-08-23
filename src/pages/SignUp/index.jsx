import Button from "componentes/Button";
import Input from "componentes/Input";
import Header from "componentes/Header";
import useAuth from "contexts/useAuth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConf, setSenhaConf] = useState(""); // confirmação da senha
    const [error, setError] = useState("");

    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        if (!nome | !sobrenome | !email | !senhaConf | !senha) {
            setError("Preencha todos os campos");
            return;
        } else if (senha !== senhaConf) {
            setError("As senhas precisam ser iguais");
            return;
        }

        const res = signup(email, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate("/entrar");
    };

    return (
        <section className=" flex items-center justify-center">
            <form className="rounded-3xl shadow-2xl bg-branco-puro p-14 flex flex-col gap-2 w-[480px]">
                <img
                    className="h-[40px] self-center mb-5"
                    src="./img/NS-logo.svg"
                    alt="Logo da Nintendo Sweet"
                />
                <Header>Crie sua conta</Header>
                <Input
                    placeholder="Digite seu nome"
                    label="Nome"
                    value={nome}
                    onChange={(e) => {
                        return setNome(e.target.value), setError("");
                    }}
                />
                <Input
                    placeholder="Digite seu sobrenome"
                    label="Sobrenome"
                    value={sobrenome}
                    onChange={(e) => {
                        return setSobrenome(e.target.value), setError("");
                    }}
                />
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
                <Input
                    placeholder="Confirme sua senha"
                    label=""
                    tipo="password"
                    value={senhaConf}
                    onChange={(e) => {
                        return [setSenhaConf(e.target.value), setError("")];
                    }}
                />
                <p className="font-textos text-pink-600">{error}</p>
                <Button onclick={handleSignup}>Criar conta</Button>
                <p className="text-center font-textos text-lilas">
                    Já tem uma conta?&nbsp;
                    <Link className="text-pink-600 underline" to="/entrar">
                        Entrar
                    </Link>
                </p>
            </form>
        </section>
    );
};

export default SignUp;
