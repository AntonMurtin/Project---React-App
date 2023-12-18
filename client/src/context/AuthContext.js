import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { authServiceFactoty } from '../services/authService';
import { useNotification } from './NotificationContext';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const admin = 'antonmurtin@gmail.com'

    const [auth, setAuth] = useLocalStorage('auth', {});


    const navigate = useNavigate();

    const authService = authServiceFactoty(auth.accessToken)
    const dispatch=useNotification()

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);

            setAuth(result);

            navigate('/shop');
        } catch (error) {
            dispatch({
                type:'ERROR',
                message:error.message,
            })
           
        }
    };

    const onRegisterSubmit = async (values) => {

        try {
            const result = await authService.register(values);
          


            setAuth(result);

            navigate('/shop');
        } catch (error) {
            dispatch({
                type:'ERROR',
                message:error.message,
            })
        }  
    };

    const onLogout = async () => {
        //  authService.logout();

        setAuth({});
        navigate('/');
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        username: auth.username,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
        isAdmin: admin === auth.email,
    };


    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};