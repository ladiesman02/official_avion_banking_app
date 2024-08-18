import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import bankUsers from './assets/data/bankUsers.json'

import Login from './pages/Login/Login'
import Home from "./pages/Home/Home"
import Transactions from "./pages/Transactions/Transactions"
import Budget from "./pages/Budget/Budget"
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        {useLocation.pathname !== "/" && <NavBar />}
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="budget" element={<Budget></Budget>}></Route>
          <Route path="transactions" element={<Transactions></Transactions>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
