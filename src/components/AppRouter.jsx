import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext)
    console.log(isAuth);
    if (isLoading) {
        return <Loader />
    }
    return (
        <Routes>
            {
                isAuth
                    ?
                    privateRoutes.map(route =>
                        <Route key={route.path} Component={route.component} path={route.path} />
                    )

                    :
                    publicRoutes.map(route =>
                        <Route key={route.path} Component={route.component} path={route.path} />
                    )

            }
            <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
    );
};

export default AppRouter;