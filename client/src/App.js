import React from 'react';
import LandingPage from './components/pages/LandingPage';
import ExplorePage from './components/pages/ExplorePage';
import {
	BrowserRouter as Router,
	Route,
	Routes
} from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					exact
					element={<LandingPage />}
				/>
				<Route
					path='/explore'
					element={<ExplorePage />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
