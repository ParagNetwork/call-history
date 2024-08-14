import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormComponent from './component/form';
import Dashboard from './component/dashboard';
import Detail from './component/detail';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FormComponent />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/detail" element={<Detail />} />
            </Routes>
        </Router>
    );
};

export default App;
