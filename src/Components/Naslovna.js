import Slika from "../Slike/naslovna.jpg";
import Slika2 from "../Slike/pizza1.jpeg";
import { Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
        <div>
          <img src={Slika} className="naslovna_slika" alt="pizza" />
          <center>
            <div className="cdiv">
              Pizzeria Dea
              <br />
              <p id="p"> ~ najbolji u Splitu ~</p>
            </div>
          </center>
        </div>
        <div className="sadrzaj1">
          <img src={Slika2} className="prva_s" alt="pizza" />
  
          <div id="prvi_p">
            <h1>O NAMA</h1>
            <br />
            Ne postoji idealnije mjesto za ljubitelje pizza do pizzerie "Dea"!
            Pizzeria "Dea" je magični spoj okusa raznovrsnih pizza, ugodnog
            ambijenta i posebnog šarma dugogodišnjeg vrijednog osoblja. O
            kvaliteti pizza i vrhunskoj usluzi svjedoče brojni posjetitelji koji
            se ubrzo ubrajaju u stalne goste. Zato svi vi koji nas ne poznajete,
            posjetite nas i uvjerit ćete se da je kvaliteta naš temeljni adut.
          </div>
  
          <center>
            <div id="ceste_opcije">
              <h1>ČESTE OPCIJE</h1>
              <br />
              <br />
              <table>
                <tr>
                  <th>Miješana</th>
                  <th>Margarita</th>
                  <th>Četiri sira</th>
                </tr>
                <tr>
                  <td>pome, sir, šunka, gljive, origano</td>
                  <td>pome, sir, origano</td>
                  <td>pome, gauda, edamer, mozzarella, gorgonzola, origano</td>
                </tr>
              </table>
            </div>
  
            <Link to="/menu">
              <button className="button">Vidite više opcija</button>
            </Link>
          </center>
        </div>
      </div>
    );
  }
  
  export default App;