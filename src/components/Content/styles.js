import styled from 'styled-components';



export const ContainerInt = styled.div`
     height: 100%;
     /* background-color: #ddd; */
`;

export const BoxForm = styled.div`
margin-left:32px;
height: 100%;

//gri-item
    .MuiGrid-item{
        padding: 10px;
        label{
            /* Parágrafo/p 2 */
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 160%;
            letter-spacing: 0.25px;
            color: #424242;
        }
        .MuiTextField-root{
            margin-top: 4px;
            width: 100%;
        }
    }
`;


export const BoxTitle = styled.div`
    .TitleLine{
        margin-top: 8px;
        border-bottom: 1px solid #ccc;
    }
`;

export const Title = styled.h3`
 /* Títulos/H5 */

font-family: Rubik;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 160%;
/* identical to box height, or 29px */

letter-spacing: 0.15px;

/* Preto 700 */

color: #424242;
margin: 24px 0px 0px 34px;


`;

export const GroupButton = styled.div`
    
    button{
    

/* Branco */

background: #FFFFFF;
/* Primária/600 */

border: 2px solid #009C51;
box-sizing: border-box;
border-radius: 4px;


/* Botão/Botão 1 */

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 160%;
/* or 22px */

letter-spacing: 1.25px;

/* Primária/600 */

color: #009C51;

/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;
cursor: pointer;
    }
    
` 

