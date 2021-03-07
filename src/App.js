import React, { useState } from 'react';
import {TextField, Grid} from '@material-ui/core';
import { 
  Conatiner , 
  Button, 
  Title,
  ContainerInt,
  BoxTitle,
  BoxForm,
} from './styles';
import {FaCaretUp, FaCaretDown} from 'react-icons/fa';



function App() {

  const [togleConteudos, setTogleConteudos] = useState(false);

  const handleTogle = () => {
      // setTogleConteudos(prev => !prev);
      setTogleConteudos(!togleConteudos);
  }

  const ConteudoUm = () => {
    return <div></div>
  }
  const ConteudoDois = () => {
    return (
      <ContainerInt>
  
      <BoxTitle>
          <Title>Registro</Title>
            <div className="TitleLine"></div>  
      </BoxTitle>
  
      <BoxForm>
  
          <Grid container>
            <Grid item lg={3} xs={12}>
                <label>Status</label>
                 <TextField
                   id="outlined-helperText"
                   variant="outlined"
               />
            </Grid>
           </Grid>
  
           <Grid container>
            <Grid item lg={3} xs={12}>
                <label>Eixo temático</label>
                 <TextField
                   id="outlined-helperText"
                   variant="outlined"
               />
            </Grid>
            <Grid item lg={3} xs={12}>
                <label>Início período da ocorrência</label>
                 <TextField
                    type="date"
                   id="outlined-helperText"
                   variant="outlined"
               />
            </Grid>
            <Grid item lg={3} xs={12}>
                <label>Fim período da ocorrência </label>
                 <TextField
                 type="date"
                   id="outlined-helperText"
                   variant="outlined"
               />
            </Grid>
           </Grid>
  
            <Grid container>
                <Grid item lg={3} xs={12}>
                <label>Denunciante</label>
                 <TextField
                   id="outlined-helperText"
                   variant="outlined"
               />
            </Grid>
  
            <Grid item lg={3} xs={12}>
                <label>CPF/CNPJ do denunciante</label>
                 <TextField
                   id="outlined-helperText"
                   variant="outlined"
               />
            </Grid>
           </Grid>
  
           <Grid container>
                <Grid item lg={3} xs={12}>
                <label>Comunicante</label>
                 <TextField
                   id="outlined-helperText"
                   variant="outlined"
               />
            </Grid>
  
            <Grid item lg={3} xs={12}>
                <label>CPF/CNPJ do comunicante</label>
                 <TextField
                   id="outlined-helperText"
                   variant="outlined"
               />
            </Grid>
           </Grid>
      </BoxForm>
    
  </ContainerInt>  
    )
  }
  
  return (
    <Conatiner>

          <Button onClick={handleTogle}>
              Busca Avançada
              {togleConteudos ? <FaCaretUp size={20}/> : <FaCaretDown size={20}/>}
          </Button>

          {togleConteudos ? <ConteudoDois /> : <ConteudoUm />}
  
    </Conatiner>
  );
}

export default App;
