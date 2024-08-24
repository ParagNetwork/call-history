import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormComponent from './component/form';
import Dashboard from './component/dashboard';
import Detail from './component/detail';
import Day from './component/day';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FormComponent />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/Day" element={<Day />} />

            </Routes>
        </Router>
    );
};

export default App;
