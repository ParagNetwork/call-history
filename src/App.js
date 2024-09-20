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
import List from './component/list';
import PopularGames from './component/games/populargames';
import NewGamess from './component/games/newGames';
import MostPlay from './component/games/mostPlayedGames';
import CricketGame from './component/games/cricketGames';
import CasinoGame from './component/games/casinoGames';



const App = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<FormComponent />} /> */}
                <Route path="/" element={<List />} />

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

                

                {/* Games Screen */}

                <Route path="/populargames" element={<PopularGames />} />
                <Route path="/newGames" element={<NewGamess />} />
                <Route path="/MostPlayedd" element={<MostPlay />} />
                <Route path="/CricketGamess" element={<CricketGame />} />
                <Route path="/CasinoGamess" element={<CasinoGame />} />

                
                CasinoGame
            </Routes>
        </Router>
    );
};

export default App;
