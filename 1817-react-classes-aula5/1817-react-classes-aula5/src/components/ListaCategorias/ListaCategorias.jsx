import React, { Component } from 'react';
import './style.css';

class ListaComponent extends Component {
  state = {categorias:[]}
  
  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
  }

  _novasCategorias(categorias){
    this.setState({categorias: categorias});
  }

  handlerEventoInput(event){
    if(event.key ==="Enter"){
      var valorCategria = event.target.value;
      this.props.adicionarCategoria(valorCategria)
    }
  }

  render() { 
    return (  
      <section className="grid">
        <ul className="list">
          {this.state.categorias.map((cat,index)=>{
            return <li key={index}>
              {cat}
            </li>
          })}
        </ul>
        <input type="text" className="lista-categorias_input" placeholder="Adicionar Categoria" onKeyUp={this.handlerEventoInput.bind(this)}/>
      </section>
    );
  }
}
 
export default ListaComponent;