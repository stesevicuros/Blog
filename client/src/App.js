import React from 'react';
import LandingPage from './components/pages/LandingPage';
import ExplorePage from './components/pages/ExplorePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import CreatePostPage from './components/pages/CreatePostPage';
import OpenPostPage from './components/pages/OpenPostPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<LandingPage />} />
                <Route path='/explore' element={<ExplorePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/new-post' element={<CreatePostPage />} />
                <Route path='/post:id' element={<OpenPostPage />} />
            </Routes>
        </Router>
    );
}

export default App;
