import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Pages';
import PostIdPage from './../pages/PostIdPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="about" element={<About />} />
            <Route path="posts" element={<Posts />} />
            <Route path="posts/:id" element={<PostIdPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    );
};

export default AppRouter;