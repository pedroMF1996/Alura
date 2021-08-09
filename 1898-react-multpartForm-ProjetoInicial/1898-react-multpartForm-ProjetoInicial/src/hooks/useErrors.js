import React, { useState } from "react";

function useError(validacoes) {
  const estadoInicial = criarEstadoInicial(validacoes);
  const [erros, setErros] = useState(estadoInicial);
  function validarCampos(event) {
    const { name, value } = event.target;
    const ehValido = validacoes[name](value);
    const novoEstado = { ...erros };
    novoEstado[name] = ehValido;
    setErros(novoEstado);
  }

  function possoEnviar() {
    let possoEnviar = true;
    for (let campo in erros) {
      possoEnviar = erros[campo].valido && possoEnviar;
    }
    return possoEnviar;
  }

  return [erros, validarCampos, possoEnviar];
}

function criarEstadoInicial(validacoes) {
  const estadoInicial = {};
  for (let name in validacoes) {
    estadoInicial[name] = { valido: true, texto: "" };
  }
  return estadoInicial;
}

export default useError;
