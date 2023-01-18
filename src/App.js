import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';

function App() {
  return (
    <div >
      <BrowserRouter>
        <div className="App">
          <Link to='/home'>Home</Link><Link to='/login'>Login</Link>
          <Link to='/dashboard'>Dashboard</Link>
        </div>

        <div>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
