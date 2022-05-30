import { Link } from "react-router-dom";

function App() {
    return (
        <div className="header">
        <ul>
          <li className="naslovna">
            <Link to="/">Naslovna</Link>
            <div className="naslovna_sadrzaj">
              <a href="#prvi_p">O nama</a>
              <a href="#ceste_opcije">Česte opcije</a>
            </div>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/narudzba">Narudžba</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
          <li style={{ float: "right" }}>Andrea Kero g2p</li>
        </ul>
      </div>
    );
  }
  
  export default App;