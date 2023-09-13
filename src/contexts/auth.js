import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [error, setError] = useState('');

    useEffect(() => {
        const userToken = localStorage.getItem('user_token');
        const usersStorage = localStorage.getItem('users_bd');

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.find(
                (user) => user.email === JSON.parse(userToken).email
            );

            if (hasUser) setUser(hasUser);
        }
    }, []);

    const signIn = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem('users_bd'));

        const hasUser = usersStorage?.find((user) => user.email === email);

        if (hasUser) {
            if (hasUser.password === password) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem(
                    'user_token',
                    JSON.stringify({ email, token })
                );
                setUser(hasUser);
                setError('');
                return true;
            } else {
                setError('Email ou senha incorretos');
            }
        } else {
            setError('Usuário não cadastrado');
        }
        return false;
    };

    const signUp = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem('users_bd'));

        const hasUser = usersStorage?.find((user) => user.email === email);

        if (hasUser) {
            setError('Email já cadastrado');
            return false;
        }

        const newUser = usersStorage
            ? [...usersStorage, { email, password }]
            : [{ email, password }];

        localStorage.setItem('users_bd', JSON.stringify(newUser));
        setUser({ email, password });
        setError('');
        return true;
    };

    const signOut = () => {
        setUser(null);
        localStorage.removeItem('user_token');
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                error,
                signed: !!user,
                signIn,
                signUp,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
