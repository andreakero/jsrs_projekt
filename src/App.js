import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Naslovna from "./Components/Naslovna";
import Menu from "./Components/Menu";
import Narudzba from "./Components/Narudzba";
import Kontakt from "./Components/Kontakt";

function App() {
  return (
    <div className="App">
     <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Naslovna />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/narudzba" element={<Narudzba />}></Route>
          <Route path="/kontakt" element={<Kontakt />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
