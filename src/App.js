import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      	<div className="App">
			<Routes>
        		<Route path='/' element={<HomePage />}/>
			</Routes>

      	</div>
    </Router>

  );
}

export default App;
