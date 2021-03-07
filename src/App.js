import React, { useState } from 'react';
import { 
  Conatiner , 
  Button, 
} from './styles';
import {FaCaretUp, FaCaretDown} from 'react-icons/fa';
import Content from './components/Content';
import {AnimationContainer} from './components/Amination';

function App() {

  const [togleConteudos, setTogleConteudos] = useState(false);

  const handleTogle = () => {
      setTogleConteudos(!togleConteudos);
  }

  return (
    <Conatiner>

          <Button onClick={handleTogle}>
              Busca Avançada
              {togleConteudos ? <FaCaretUp size={20}/> : <FaCaretDown size={20}/>}
          </Button>
               {
               togleConteudos ? <AnimationContainer> 
                     <Content /> 
                 </AnimationContainer>: 
                         ''
                 }
    </Conatiner>
  );
}

export default App;
