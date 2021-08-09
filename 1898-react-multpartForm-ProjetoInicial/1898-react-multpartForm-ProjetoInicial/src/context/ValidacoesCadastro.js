import React from "react";
import { validarCPF, validarSenha } from "../models/Cadastro";
const ValidacoesCadastro = React.createContext({
  cpf: validarCPF,
  senha: validarSenha,
});

export default ValidacoesCadastro;
