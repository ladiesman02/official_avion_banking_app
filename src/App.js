import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Login from './pages/Login/Login'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Login></Login>
    </div>
  );
}

export default App;
