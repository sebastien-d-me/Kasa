import './App.css';
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";
import APropos from "./pages/A-propos/APropos";
import Erreur404 from "./pages/404/404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
    </div>
  );
}

export default App;
