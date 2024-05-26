import React, { createContext, useState, useContext } from 'react';
//import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const signIn = async (username, password) => {
        // try {
        //     const response = await axios.post('https://ffffffffff.com/api/login', {
        //         username,
        //         password,
        //     });

        //     if (response.data.success) {
        //         setUser(response.data.user);
        //         setIsAuthenticated(true);
        //     } else {
        //         alert('Неправильный логин или пароль');
        //     }
        // } catch (error) {
        //     console.error('Ошибка при входе', error);
        //     alert('Произошла ошибка. Пожалуйста, попробуйте позже.');
        // }
        if (username === 'A' && password === 'A') {
            setUser({ username: 'User' });
            setIsAuthenticated(true);
        } else {
            alert('Неправильный логин или пароль');
        }
    };

    const signOut = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, signOut, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
