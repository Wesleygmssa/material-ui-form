import React from 'react';
import {TextField, Grid} from '@material-ui/core';
import { 
  Conatiner , 
  Button, 
  Title,
  ContainerInt,
  BoxTitle,
  BoxForm,
  GroupButton
} from './styles';
import {FaCaretUp} from 'react-icons/fa';

function App() {
  return (
    <Conatiner>

          <Button>
              Busca Avançada
             <FaCaretUp size={20}/>
          </Button>

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
 
          
    </Conatiner>
  );
}

export default App;
