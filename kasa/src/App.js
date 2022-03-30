import './App.css';
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";
import APropos from "./pages/A-propos/APropos";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/a-propos" element={<APropos />} />
      </Routes>
    </div>
  );
}

export default App;
