import './App.css'
import Homepage from './components/Homepage/Homepage'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom";
import IndividualPage from './components/IndividualPage/IndividualPage';
import NewReleasesContainer from './components/NewReleases/NewReleasesContainer';
import WindowsGamesContainer from './components/Platforms/WindowsGamesContainer';
import BrowserGamesContainer from './components/Platforms/BrowserGamesContainer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/:gameId" element={<IndividualPage />} />
        <Route path="/new-releases" element={<NewReleasesContainer/>} />
        <Route path="/platform/windows" element={<WindowsGamesContainer/>} />
        <Route path="/platform/browser" element={<BrowserGamesContainer />} />
      </Routes>
    </div>
  );
}

export default App;
