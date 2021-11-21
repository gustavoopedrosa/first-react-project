import ListaDeNotas from "./components/ListadeNotas"
import FormularioCadastro from "./components/FormularioCadastro"
import React, { Component } from 'react'
import "./assets/App.css"
import './assets/index.css'
class App extends Component {
  handleSubmit(titulo, texto){
    console.log(` ` + titulo + " " + texto)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro handleSubmit={this.handleSubmit}/>
        <ListaDeNotas />
      </section>
    )
  }

}


export default App;
