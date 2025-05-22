import logo from "./logo.svg";
import "./App.css";
import "./Styling/Main.css";
import MainPage from "./Screens/MainPage";
import DiningPhilospher from "./Screens/DiningPhilospher";
import DiningSavages from "./Screens/DiningSavages";
import SantaClause from "./Screens/SantaClause";
import FIFOBarberShop from "./Screens/BarberShop";
import RiverCrossing from "./Screens/RiverCrossing";
import CigaretteSmokers from "./Screens/CigaretteSmokers";
import ProducerConsumer from "./Screens/ProducerConsumer";
import ReaderWriter from "./Screens/ReaderWriter";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/DP" element={<DiningPhilospher />} />
          <Route path="/DS" element={<DiningSavages />} />
          <Route path="/SC" element={<SantaClause />} />
          <Route path="/BS" element={<FIFOBarberShop />} />
          <Route path="/CS" element={<CigaretteSmokers />} />
          <Route path="/PC" element={<ProducerConsumer />} />
          <Route path="/rC" element={<RiverCrossing />} />
          <Route path="/RW" element={<ReaderWriter />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
