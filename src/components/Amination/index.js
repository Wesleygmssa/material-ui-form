import styled, { keyframes } from 'styled-components';


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
  animation: ${apperFromCenter} 1s; //executando animação
;
`;