import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Aboute/Aboute';
import AppoinmentPage from './Pages/AppoinmentPage/AppoinmentPage';
import Home from './Pages/Home/Home/Home';
import Footer from './Shared/Footer/Footer';
import Login from './Shared/Navber/Login/Login';
import RequireAuth from './Shared/Navber/Login/RequireAuth';
import SignUp from './Shared/Navber/Login/Signup';
import Navber from './Shared/Navber/Navber';

function App() {
  return (
    <div className='container mx-auto'>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appoinment" element={<RequireAuth><AppoinmentPage /></RequireAuth>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
