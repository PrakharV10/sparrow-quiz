import { Route, Routes } from 'react-router';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';
import Signup from './pages/Signup/Signup';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />
        <Route path="/quiz/:quizId/result" element={<Result />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
