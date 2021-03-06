import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.titulo ="";
    this.texto ="";
    this.categoria = "Sem Categoria";
    this.state = {categorias:[]}
    this.novasCategoriasReferencia = this._novasCategorias.bind(this);
  }

  componentWillMount(){
    this.props.categorias.inscrever(this.novasCategoriasReferencia);
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this.novasCategoriasReferencia)
  }

  
  _novasCategorias(categorias){
    this.setState({categorias: categorias});
  }

  _handleMudancaTitulo(evento){
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento){
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }
  setCategoria(event){
    this.categoria = event.target.value;
  }
  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <select className="form-cadastro_input" onChange={this.setCategoria.bind(this)}>
          <option>Sem Categoria</option>
          {this.state.categorias.map((cat, index)=>{
            return <option key={index} value={cat}>{cat}</option>
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
