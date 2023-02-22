import './App.css'
import Homepage from './components/Homepage/Homepage'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
    </div>
  );
}

export default App;
