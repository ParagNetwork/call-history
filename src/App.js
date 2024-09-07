import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormComponent from './component/form';
import Dashboard from './component/dashboard';
import Detail from './component/detail';
import Day from './component/day';
import EchallanHome from './component/echallanhome'

import HistoryScreen from './component/history';
import ChallanList from './component/challanlist';
import ExamPageScreen from './component/exampages';

import InsuranceList from './component/insurance';
import BluePagesScreen from './component/bluelastpage';
import Adstxt from './component/ads';



const App = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<FormComponent />} /> */}
                <Route path="/" element={<EchallanHome />} />

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/Day" element={<Day />} />
                <Route path="/HistoryScreen" element={<HistoryScreen />} />

                {/* Echallan APp */}
                <Route path="/EchallanHome" element={<EchallanHome />} />
                <Route path="/ChallanList" element={<ChallanList />} />
                <Route path="/ExamPageScreen" element={<ExamPageScreen />} />
                <Route path="/InsuranceList" element={<InsuranceList />} />
                <Route path="/BluePagesScreen" element={<BluePagesScreen />} />

                
                
            </Routes>
        </Router>
    );
};

export default App;
