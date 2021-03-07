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
import Content from './components/Content'


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

  return (
    <Conatiner>

          <Button onClick={handleTogle}>
              Busca Avançada
              {togleConteudos ? <FaCaretUp size={20}/> : <FaCaretDown size={20}/>}
          </Button>
               {togleConteudos ? <Content /> : ''}
    </Conatiner>
  );
}

export default App;
