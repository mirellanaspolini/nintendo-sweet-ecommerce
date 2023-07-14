import Botao from "componentes/Botao";
import Input from "componentes/Input";
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
        <form>
            <h1>Crie sua conta</h1>
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
            <p className="erro">{error}</p>
            <Botao onclick={handleSignup}>Criar conta</Botao>
            <p>Já tem uma conta? <Link to="/entrar">Entrar</Link></p>
        </form>
    );
};

export default SignUp;
