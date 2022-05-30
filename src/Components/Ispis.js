import Mix from "../Slike/mix.png";
import Marg from "../Slike/marg.webp";
import Sir from "../Slike/sir.jpg";
import Veg from "../Slike/veg.jpg";
import Mozz from "../Slike/mozz.webp";
import Ana from "../Slike/ana.webp";

function App({
    Mijesana,
    Margarita,
    Četiri_sira,
    Vegetarijanska,
    Mozzarella,
    S_ananasom
  }) {
    return (
        <center>
        <div className="ispis">
          <div className="prvi">
            <img src={Mix} width="500" height="500" />
            <br />
            <br />
            <p>MIJEŠANA - {Mijesana.sastojci}</p>
          </div>
  
          <div className="drugi">
            <img src={Marg} width="500" height="500" />
            <br />
            <br />
            <p>MARGARITA - {Margarita.sastojci}</p>
          </div>
          <br />
          <br />
          <div className="prvi">
            <img src={Sir} width="500" height="500" />
            <br />
            <br />
            <p>ČETIRI SIRA - {Četiri_sira.sastojci}</p>
          </div>
          <div className="drugi">
            <img src={Veg} width="500" height="500" />
            <br />
            <br />
            <p>VEGETERIJANSKA - {Vegetarijanska.sastojci}</p>
          </div>
          <br />
          <br />
          <div className="prvi">
            <img src={Mozz} width="500" height="500" />
            <br />
            <br />
            <p>MOZZARELLA - {Mozzarella.sastojci}</p>
          </div>
  
          <div className="drugi">
            <img src={Ana} width="500" height="500" />
            <br />
            <br />
            <p>S ANANASOM - {S_ananasom.sastojci}</p>
          </div>
          <br />
          <br />
        </div>
      </center>
    );
  }
  
  export default App;