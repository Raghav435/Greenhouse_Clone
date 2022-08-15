import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <AllRoutes />
  );
}

export default App;
