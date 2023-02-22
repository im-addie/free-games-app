import './App.css'
import Homepage from './components/Homepage/Homepage'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom";
import IndividualPage from './components/IndividualPage/IndividualPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/:gameId" element={<IndividualPage />} />
      </Routes>
    </div>
  );
}

export default App;
