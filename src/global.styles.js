import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Noto Sans', sans-serif;

   }

   :root {
       /* --black-shade-primary:  #1a1a1a;
       --black-shade-secondary:  #292929;
       --white-shade-primary:  #ffffff;
       --white-shade-secondary:  #F4F5F6;
       --gray-shade-primary:  #e3e3e3;
       --gray-shade-secondary:  #535353;
       --blue-shade-primary:  #5665eb;
       --blue-shade-secondary:  #3c4478;
       --red-shade-primary:  #f16363;
       --green-shade-primary:  #31c879;
       --green-shade-secondary:  #307e54;
       --opal:  #C2D6CF; */
       --border-1 : 1px solid #ccc;
       
       
       --black-shade-primary: #000000;
       --black-shade-secondary: #35383F;


       --gray-shade-primary:  #A3A8B0;
       --gray-shade-secondary:  #EDF3FA;


       --blue-shade-primary:  #0E7CF2;
    }
   
    a {
        color: #000;
        text-decoration: none;
    }

    ul li {
        list-style-type: none;
    }
    
`;

export default GlobalStyle;
