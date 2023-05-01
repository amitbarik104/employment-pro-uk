import React from 'react';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from '../components/Home';
import Login from '../components/Login';

const AppRoutes = () => {
    return <Router>
        <Routes>            
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </Router>
}

export default AppRoutes;