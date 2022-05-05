import React from 'react';
import LandingPage from './components/pages/LandingPage';
import ExplorePage from './components/pages/ExplorePage';
import LoginPage from './components/pages/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<LandingPage />} />
                <Route path='/explore' element={<ExplorePage />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default App;
