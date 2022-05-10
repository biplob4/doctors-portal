import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Aboute/Aboute';
import Home from './Pages/Home/Home/Home';
import Navber from './Shared/Navber/Navber';

function App() {
  return (
    <div>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
