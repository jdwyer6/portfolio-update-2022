import HomePage from './pages/HomePage';
import PawPrintsPage from './pages/PawPrintsPage';
import FarahPage from './pages/FarahPage';
import ResumePage from './pages/ResumePage';
import ClockedInPage from './pages/ClockedInPage';
import ContactPage from './pages/ContactPage';
import SuccessPage from './pages/SuccessPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NBar from './components/Navbar';

function App() {
  return (
    <Router>
      	<div className="App">
		  {/* <NBar /> */}
			<Routes>
        		<Route path='/' element={<HomePage />}/>
				<Route path='PawPrintsPage' element={<PawPrintsPage />}/>
				<Route path='FarahPage' element={<FarahPage />}/>
				<Route path='resume' element={<ResumePage />}/>
				<Route path='clockedin' element={<ClockedInPage />}/>
				<Route path='contact' element={<ContactPage />} />
				<Route path='/success' element={<SuccessPage />} />
			</Routes>

      	</div>
    </Router>

  );
}

export default App;
