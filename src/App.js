import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Aboute/Aboute';
import AppoinmentPage from './Pages/AppoinmentPage/AppoinmentPage';
import Home from './Pages/Home/Home/Home';
import Footer from './Shared/Footer/Footer';
import Navber from './Shared/Navber/Navber';

function App() {
  return (
    <div className='container mx-auto'>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appoinment" element={<AppoinmentPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
