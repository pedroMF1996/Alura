import React, { useEffect, useState } from "react";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuarios";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({aoEnviar}) {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDadosColetados] = useState({})
  useEffect(() => {
    if(etapaAtual === (formularios.length-1))
      aoEnviar(dadosColetados)
  })
  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados}  />, 
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant='h5'>Obrigado Pelo Cadastro</Typography>
  ]
  
  function coletarDados(dados) {
    setDadosColetados({...dadosColetados,...dados})
    proximo()
  }

  function proximo(){
    setEtapaAtual(etapaAtual+1)
  }
  
  return (
    <>
    <Stepper activeStep={etapaAtual}>
      <Step><StepLabel>Login</StepLabel> </Step>
      <Step><StepLabel>Pessoal</StepLabel> </Step>
      <Step><StepLabel>Esntrega</StepLabel> </Step>
      <Step><StepLabel>Finalização</StepLabel> </Step>
    </Stepper>
    {formularios[etapaAtual]}
    </>
  );
}


export default FormularioCadastro;
