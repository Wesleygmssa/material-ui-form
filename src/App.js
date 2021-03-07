import React, { useState } from 'react';
import {TextField, Grid} from '@material-ui/core';
import styled from 'styled-components';
import { 
  Conatiner , 
  Button, 
  Title,
  ContainerInt,
  BoxTitle,
  BoxForm,
} from './styles';
import {FaCaretUp, FaCaretDown} from 'react-icons/fa';
import { keyframes } from 'styled-components';


//animação
const apperFromCenter = keyframes`
 from{
   opacity: 0;
   transform: translatey(0px);
 }
 to{
   opacity: 1;
   transform: translatey(0px);
 }
`;

export const AnimationContainer = styled.div`
  display: flex;  
  justify-content: center;
  flex-direction: column;
  padding: 10px 20px;
  animation: ${apperFromCenter} 1s; //executando animação

 

;
`;


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
      <AnimationContainer>
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
        
      </AnimationContainer>
 
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
