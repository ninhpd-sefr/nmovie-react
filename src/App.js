import './App.css';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import FirmDetailPage from './pages/FirmDetailPage/FirmDetailPage';
import FirmListDetailPage from './pages/FimListDetailPage/FirmListDetailPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PageDeveloping from './pages/PageDeveloping/PageDeveloping';
import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="search/:slug" element={<SearchPage />} />
        <Route path="login/" element={<LoginPage />} />
        <Route path="detail/:slug" element={<FirmDetailPage />} />
        <Route path="listDetail/:slug" element={<FirmListDetailPage />} />
        <Route path="developing/" element={<PageDeveloping />} />
      </Routes>
    </div>
  );
}

export default App;
