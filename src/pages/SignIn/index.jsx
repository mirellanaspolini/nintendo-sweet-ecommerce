import Button from "componentes/Button";
import Header from "componentes/Header";
import Input from "componentes/Input";
import useAuth from "contexts/useAuth";
import { ErrorMessage, Form, Formik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
    const { signIn, error, verifyEmail } = useAuth();
    const navigate = useNavigate();

    const onSubmit = (values, { setSubmitting }) => {
        // nao consigo fazer :C
        // console.log(verifyEmail(values.email));
        // if (verifyEmail(values.email)) {
        //     signIn(values.email, values.password);
        //     navigate("/");
        }
    };

    const validation = yup.object({
        email: yup
            .string()
            .email("Digite um endereço de email válido")
            .required("Preencha este campo"),
        password: yup
            .string()
            .min(8, "A senha deve conter 8 caracteres")
            .required("Preencha este campo"),
    });

    return (
        <section className="h-screen flex items-center justify-center">
            <Formik
                onSubmit={onSubmit}
                validationSchema={validation}
                initialValues={{ email: "", password: "" }}
            >
                <Form className="rounded-3xl shadow-2xl bg-branco-puro p-14 flex flex-col gap-2 w-[480px]">
                    <img
                        className="h-[50px] inline self-center mb-5"
                        src="./img/SS-logo.svg"
                        alt="Logo da Switch 'n Sweet"
                    />
                    <Header>Fazer login</Header>
                    <Input
                        placeholder="email@exemplo.com"
                        label="Email"
                        type="email"
                        name="email"
                    />
                    <ErrorMessage
                        className="font-textos text-pink-600"
                        component="div"
                        name="email"
                    />
                    <Input
                        placeholder="No mínimo 8 dígitos"
                        label="Senha"
                        type="password"
                        name="password"
                    />
                    <ErrorMessage
                        className="font-textos text-pink-600"
                        component="div"
                        name="password"
                    />
                    <Link
                        className="text-end font-textos underline text-pink-600"
                        to="#"
                    >
                        Esqueci minha senha
                    </Link>
                    <p className="font-textos text-pink-600">{error}</p>
                    <Button tipo="submit">Entrar</Button>
                    <p className="text-center font-textos text-lilas">
                        Não tem uma conta? &nbsp;
                        <Link
                            className="text-pink-600 underline"
                            to="/cadastre-se"
                        >
                            Criar conta
                        </Link>
                    </p>
                </Form>
            </Formik>
        </section>
    );
};

export default SignIn;
