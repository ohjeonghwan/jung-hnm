import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Hompage from './page/Hompage';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navebar from './component/Navebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Privitroute from './route/Privitroute';



function App() {

  const [judge, setJudge] = useState(false)

  useEffect(()=>{
    console.log('a', judge)
  },[judge])

  return (
    <div>
      <div className='nav-bar'><Navebar/></div>
      <Routes>
      <Route path="/" element={<Hompage />} />
      <Route path="/login" element={<Login setJudge={setJudge} />} />
      <Route path="/product/:id" element={<Privitroute judge={judge}/>} />
    </Routes>
    </div>
  );
}

export default App;
