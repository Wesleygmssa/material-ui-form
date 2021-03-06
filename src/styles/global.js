import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        width: 100%;
        background: #fff;
        -webkit-font-smoothing: antialiased;
    }
`;