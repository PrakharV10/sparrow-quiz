import { Route, Routes } from 'react-router';
import './App.css';
import Login from './pages/Login/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Login />} />
      </Routes>
    </div>
  );
}

export default App;
