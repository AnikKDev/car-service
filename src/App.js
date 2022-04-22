import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceDetail from './Components/Home/Services/Service/ServiceDetail/ServiceDetail';
import Signup from './Components/Signup/Signup';
import RequireAuth from './Components/RequiredAuth/RequireAuth';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        {/* <Route path='/services' element={<Services></Services>}></Route> */}
        <Route path="/service/:id" element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/sign-up" element={<Signup></Signup>}></Route>
        <Route path="/booknow" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
