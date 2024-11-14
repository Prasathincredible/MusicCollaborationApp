import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const ProtectedRoute = ({ children }) => {
    const { loggedInUser } = useContext(UserContext);


    return loggedInUser ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
