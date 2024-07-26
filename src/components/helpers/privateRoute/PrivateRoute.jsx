import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { isAuthSelector } from '@store/auth/authSelectors';

const PrivateRoute = ({ children }) => {
    const isAuth = useSelector(isAuthSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate('/auth');
        }
    }, [isAuth, navigate]);

    return isAuth ? children : null;
};

export default PrivateRoute;
