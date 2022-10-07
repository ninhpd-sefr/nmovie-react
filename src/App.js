import './App.css';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import FrimDetailPage from './pages/FirmDetailPage/FrimDetailPage';
import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="detail" element={<FrimDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
