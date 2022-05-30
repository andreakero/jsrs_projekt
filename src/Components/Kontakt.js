import Instagram from "../Slike/ig.jpg";
import Facebook from "../Slike/fb.png";

function App() {
    return (
        <div className="kontakt">
        <h1>Gdje se nalazimo?</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.590071475956!2d16.461408714875134!3d43.51088646964066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355e180a10e86b%3A0xfda719f3586e1b4b!2s%C5%A0kola%20za%20dizajn%2C%20grafiku%20i%20odr%C5%BEivu%20gradnju%20Split!5e0!3m2!1shr!2shr!4v1653769640820!5m2!1shr!2shr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="telefon">
          <h1>Naše društvene mreže...</h1>
          <a href="https://instagram.com">
            <img id="ig" src={Instagram} width="50" height="50" alt="ig" />
          </a>
          <a href="https://facebook.com">
            <img src={Facebook} width="50" height="50" alt="fb" />
          </a>
          <p>☏ +001 12 233 4455</p>
        </div>
      </div>
    );
  }
  
  export default App;