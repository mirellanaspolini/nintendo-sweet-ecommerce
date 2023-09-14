import Button from 'componentes/Button';
import Header from 'componentes/Header';
import InputFormik from 'componentes/InputFormik';
import useAuth from 'contexts/useAuth';
import { ErrorMessage, Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

const SignIn = () => {
    const { signIn, error } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (values, { setSubmitting }) => {
        const { email, password } = values;
        const authenticated = await signIn(email, password);

        if (authenticated) {
            navigate('/');
        }
    };

    const validation = yup.object({
        email: yup
            .string()
            .email('Digite um email com "@"')
            .required('Preencha este campo'),
        password: yup
            .string()
            .min(8, 'A senha deve conter 8 caracteres')
            .required('Preencha este campo'),
    });

    return (
        <section className="h-screen flex items-center justify-center">
            <Formik
                onSubmit={handleSubmit}
                validationSchema={validation}
                initialValues={{ email: '', password: '' }}
            >
                <Form className="rounded-3xl shadow-2xl bg-branco-puro p-14 flex flex-col gap-2 w-[480px]">
                    <img
                        className="h-[50px] inline self-center mb-5"
                        src="./img/SS-logo.svg"
                        alt="Logo da Switch 'n Sweet"
                    />
                    <Header>Fazer login</Header>
                    <InputFormik
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
                    <InputFormik
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
                    <span className="flex justify-end ">
                        <Link
                            className="font-textos underline text-amber-600"
                            to="#"
                        >
                            Esqueci minha senha
                        </Link>
                    </span>
                    <p className="font-textos text-pink-600">{error}</p>
                    <Button tipo="submit">Entrar</Button>
                    <p className="text-center font-textos text-gray-600">
                        Não tem uma conta? &nbsp;
                        <Link
                            className="text-amber-600 underline"
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
