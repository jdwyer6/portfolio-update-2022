import HomePage from './pages/HomePage';
import PawPrintsPage from './pages/PawPrintsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NBar from './components/Navbar';

function App() {
  return (
    <Router>
      	<div className="App">
		  <NBar />
			<Routes>
        		<Route path='/' element={<HomePage />}/>
				<Route path='PawPrintsPage' element={<PawPrintsPage />}/>
			</Routes>

      	</div>
    </Router>

  );
}

export default App;
