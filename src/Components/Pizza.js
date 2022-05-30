import Ispis from "./Ispis";

function App() {
    const Mijesana = {
        sastojci: "pome, sir, šunka, gljive, origano"
      };
      const Margarita = {
        sastojci: "pome, sir, origano"
      };
      const Četiri_sira = {
        sastojci: "pome, gauda, edamer, mozzarella, gorgonzola, origano"
      };
      const Vegetarijanska = {
        sastojci: "pome, sir, gljive, artičoke, masline, origano"
      };
      const Mozzarella = {
        sastojci: "pome, sir, mozzarella, origano"
      };
      const S_ananasom = {
        sastojci: "pome, sir, ananas"
      };
      return (
        <div className="pizza">
          <Ispis
            Mijesana={Mijesana}
            Margarita={Margarita}
            Četiri_sira={Četiri_sira}
            Vegetarijanska={Vegetarijanska}
            Mozzarella={Mozzarella}
            S_ananasom={S_ananasom}
          />
        </div>
    );
  }
  
  export default App;