import Button from "componentes/Button";
import Header from "componentes/Header";
import Field from "componentes/Field";
import { ErrorMessage, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import Input from "componentes/Input";

const SignUp = () => {
    const validation = yup.object({
        name: yup.string().required("Preencha este campo"),
        lastName: yup.string().required("Preencha este campo"),

        email: yup
            .string()
            .email("Digite um endereço de email válido")
            .required("Preencha este campo"),
        password: yup
            .string()
            .min(8, "A senha deve conter 8 caracteres")
            .required("Preencha este campo"),
    });

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/entrar");
    };

    return (
        <section className=" flex items-center justify-center">
            <Formik
                initialValues={{
                    name: "",
                    lastName: "",
                    email: "",
                    password: "",
                }}
                validationSchema={validation}
                onSubmit={handleSubmit}
            >
                <Form className="rounded-3xl shadow-2xl bg-branco-puro p-14 flex flex-col gap-2 w-[480px]">
                    <img
                        className="h-[50px] self-center mb-5"
                        src="./img/SS-logo.svg"
                        alt="Logo da Switch 'n Sweet"
                    />
                    <Header>Crie sua conta</Header>

                    <div>
                        <Field
                            className=""
                            type="text"
                            name="name"
                            placeholder="Digite seu nome"
                        />
                        <ErrorMessage
                            className="font-textos text-pink-600"
                            component="div"
                            name="name"
                        />
                    </div>

                    <div>
                        <Field
                            className=""
                            type="text"
                            name="lastName"
                            placeholder="Digite seu sobrenome"
                        />
                        <ErrorMessage
                            className="font-textos text-pink-600"
                            component="div"
                            name="lastName"
                        />
                    </div>

                    <div>
                        <Input
                            type="email"
                            name="email"
                            label="Email"
                            placeholder="Digite seu email"
                        />
                        <ErrorMessage
                            className="font-textos text-pink-600"
                            component="div"
                            name="email"
                        />
                    </div>
                    <div>
                        <Field
                            className="text-amarelo-01"
                            type="password"
                            name="password"
                            placeholder="No mínimo 8 digitos"
                        />
                        <ErrorMessage
                            className="font-textos text-pink-600"
                            component="div"
                            name="password"
                        />
                    </div>
                    <Button tipo="submit">Criar conta</Button>
                    <p className="text-center font-textos text-lilas">
                        Já tem uma conta?&nbsp;
                        <Link className="text-pink-600 underline" to="/entrar">
                            Entrar
                        </Link>
                    </p>
                </Form>
            </Formik>
        </section>
    );
};

export default SignUp;
