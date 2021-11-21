import ListaDeNotas from "./components/ListadeNotas"
import FormularioCadastro from "./components/FormularioCadastro"
import React, { Component } from 'react'
import "./assets/App.css"
import './assets/index.css'
class App extends Component {
  constructor() {
    super()
    this.state = {
      notas: []
    }
  }

  handleSubmit(titulo, texto) {
    const novaNota = { titulo, texto }
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro handleSubmit={this.handleSubmit.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    )
  }

}

export default App;
