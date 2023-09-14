import Button from 'componentes/Button';
import Header from 'componentes/Header';
import InputFormik from 'componentes/InputFormik';
import useAuth from 'contexts/useAuth';
import { ErrorMessage, Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

const SignUp = () => {
    const validation = yup.object({
        firstName: yup.string().required('Preencha este campo'),
        lastName: yup.string().required('Preencha este campo'),
        email: yup
            .string()
            .email('Digite um email com "@"')
            .required('Preencha este campo'),
        password: yup
            .string()
            .min(8, 'A senha deve conter 8 caracteres')
            .required('Preencha este campo'),
    });

    const navigate = useNavigate();
    const { signUp, error } = useAuth();

    const handleSubmit = async (values) => {
        const { email, password } = values;
        const authenticated = await signUp(email, password);

        if (authenticated) {
            navigate('/');
        }
    };

    return (
        <section className=" flex items-center justify-center">
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
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
                        <InputFormik
                            type="text"
                            name="firstName"
                            label="Nome"
                            placeholder="Digite seu nome"
                        />
                        <ErrorMessage
                            className="font-textos text-pink-600"
                            component="div"
                            name="firstName"
                        />
                    </div>

                    <div>
                        <InputFormik
                            type="text"
                            name="lastName"
                            label="Sobrenome"
                            placeholder="Digite seu sobrenome"
                        />
                        <ErrorMessage
                            className="font-textos text-pink-600"
                            component="div"
                            name="lastName"
                        />
                    </div>

                    <div>
                        <InputFormik
                            type="email"
                            name="email"
                            label="Email"
                            placeholder="email@exemplo.com"
                        />
                        <p className="font-textos text-pink-600">{error}</p>
                        <ErrorMessage
                            className="font-textos text-pink-600"
                            component="div"
                            name="email"
                        />
                    </div>
                    <div>
                        <InputFormik
                            type="password"
                            name="password"
                            label="Senha"
                            placeholder="No mínimo 8 digitos"
                        />
                        <ErrorMessage
                            className="font-textos text-pink-600"
                            component="div"
                            name="password"
                        />
                    </div>

                    <Button classe="mt-4" tipo="submit">
                        Criar conta
                    </Button>
                    <p className="text-center font-textos text-gray-600">
                        Já tem uma conta?&nbsp;
                        <Link className="text-amber-600 underline" to="/entrar">
                            Entrar
                        </Link>
                    </p>
                </Form>
            </Formik>
        </section>
    );
};

export default SignUp;
