import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from '../../context/ValidacoesCadastro';
import useError from '../../hooks/useErrors';

function DadosUsuario({aoEnviar}){
  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useError(validacoes);
  
  return(
    <form onSubmit={event=>{
      event.preventDefault();
      if(possoEnviar())
        aoEnviar({email, senha});
    }}>
      <TextField id="email" label="Email" type="email" variant="outlined" margin="normal" fullWidth required value={email} onChange={event => {
        setEmail(event.target.value);
      }}/>
      <TextField id="password" name="senha" label="Senha" type="password" variant="outlined" margin="normal" fullWidth required value={senha} onChange={event => {
        setSenha(event.target.value);
      }} onBlur={validarCampos} error={!erros.senha.valido} helperText={erros.senha.texto}/>
      <Button type="submit" variant="contained" color="primary">Próximo</Button>
    </form>
  )
}

export default DadosUsuario;