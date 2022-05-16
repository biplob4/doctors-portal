import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './Pages/Aboute/Aboute';
import AppoinmentPage from './Pages/AppoinmentPage/AppoinmentPage';
import Dashbord from './Pages/Dashboard/Dashbord';
import History from './Pages/Dashboard/History';
import MyAppoinment from './Pages/Dashboard/MyAppoinment';
import MyReview from './Pages/Dashboard/MyReview';
import Home from './Pages/Home/Home/Home';
import Users from './Pages/Users/Users';
import Footer from './Shared/Footer/Footer';
import Login from './Shared/Navber/Login/Login';
import RequireAdmin from './Shared/Navber/Login/RequireAdmin';
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

        <Route path="dashboard" element={<RequireAuth><Dashbord /></RequireAuth>} >
          <Route index element={<MyAppoinment />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="history" element={<History />}></Route>
          <Route path="users" element={<RequireAdmin><Users /></RequireAdmin>}></Route>
        </Route>


        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
