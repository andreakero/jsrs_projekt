import React, { Component } from "react";

export class Narudzba extends Component {
    state = {
      ime: "",
      prezime: "",
      adresa: "",
      pizza: "",
      kolicina: ""
    };
    onSubmit = (e) => {
      e.preventDefault();
      alert(
        "Narudžba je poslana. Naručili ste " +
          this.state.kolicina +
          " " +
          this.state.pizza +
          " na adresu " +
          this.state.adresa +
          "."
      );
    };
    render() {
      return (
        <div class="narudzba">
          <h1>
            Narudžba od {this.state.ime} {this.state.prezime}
          </h1>
          <form onSubmit>
            <input
              placeholder="Ime"
              value={this.state.ime}
              onChange={(e) => this.setState({ ime: e.target.value })}
            />
            &nbsp;
            <input
              placeholder="Prezime"
              value={this.state.prezime}
              onChange={(e) => this.setState({ prezime: e.target.value })}
            />
            <br />
            <input
              placeholder="Adresa"
              value={this.state.adresa}
              onChange={(e) => this.setState({ adresa: e.target.value })}
            />
            <br />
            <input
              placeholder="Pizza"
              value={this.state.pizza}
              onChange={(e) => this.setState({ pizza: e.target.value })}
            />
            &nbsp;
            <input
              placeholder="Količina"
              value={this.state.kolicina}
              onChange={(e) => this.setState({ kolicina: e.target.value })}
            />
            <br />
            <button onClick={(e) => this.onSubmit(e)}>Pošalji</button>
          </form>
        </div>
      );
    }
  }
  
  export default Narudzba;