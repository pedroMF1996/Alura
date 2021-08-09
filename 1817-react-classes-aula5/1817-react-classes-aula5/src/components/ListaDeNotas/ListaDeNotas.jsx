import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {
 
  constructor(params) {
    super()
    this.state = {notas:[]}
    this.novasNotasReferencia = this._novasNotas.bind(this);
  }

  componentDidMount() {
    this.props.notas.inscrever(this.novasNotasReferencia)
  }

  componentWillUnmount(){
    this.props.notas.desinscrever(this.novasNotasReferencia)
  }

  _novasNotas(novasNotas){
    this.setState({notas:novasNotas});
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota apagarNota={this.props.apagarNota} categoria={nota.categoria} index={index} titulo={nota.titulo} texto={nota.texto}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
