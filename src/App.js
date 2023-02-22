import './App.css'
import Homepage from './components/Homepage/Homepage'
import { Routes, Route } from "react-router-dom";
import IndividualPage from './components/IndividualPage/IndividualPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/:gameId" element={<IndividualPage />} />
      </Routes>
    </div>
  );
}

export default App;
