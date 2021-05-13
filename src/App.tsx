import { Route, Routes } from 'react-router';
import Login from './pages/Login/Login';
import Quiz from './pages/Quiz/Quiz';
import Signup from './pages/Signup/Signup';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
